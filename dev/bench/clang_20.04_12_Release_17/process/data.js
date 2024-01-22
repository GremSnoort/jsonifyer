window.BENCHMARK_DATA = {
  "lastUpdate": 1705962099453,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 20.04 Release c++-17": [
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
        "date": 1702490362949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1367.7574451557555,
            "unit": "ns/iter",
            "extra": "iterations: 507209\ncpu: 1367.7056203655693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15958.648931835422,
            "unit": "ns/iter",
            "extra": "iterations: 51537\ncpu: 15958.212546325938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33271.461742178326,
            "unit": "ns/iter",
            "extra": "iterations: 24544\ncpu: 33270.95827900914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49614.30954341766,
            "unit": "ns/iter",
            "extra": "iterations: 16996\ncpu: 49613.07954812897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54630.79290000223,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54629.42000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69203.9885946444,
            "unit": "ns/iter",
            "extra": "iterations: 12801\ncpu: 69202.0076556519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82612.20737194833,
            "unit": "ns/iter",
            "extra": "iterations: 10445\ncpu: 82611.66108185741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96005.20125578027,
            "unit": "ns/iter",
            "extra": "iterations: 9078\ncpu: 96000.28640669756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113763.66148750606,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 113760.17575140092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1140.7128942954503,
            "unit": "ns/iter",
            "extra": "iterations: 614070\ncpu: 1140.6541599491916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 933.9785532213733,
            "unit": "ns/iter",
            "extra": "iterations: 750882\ncpu: 933.9242384289412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 950.1090500805803,
            "unit": "ns/iter",
            "extra": "iterations: 738789\ncpu: 950.0240258043907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 929.7452927920325,
            "unit": "ns/iter",
            "extra": "iterations: 753897\ncpu: 929.7036597837651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1829.232842957333,
            "unit": "ns/iter",
            "extra": "iterations: 381884\ncpu: 1829.1923725529225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5229.5849065492885,
            "unit": "ns/iter",
            "extra": "iterations: 148634\ncpu: 5229.439428394583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23703.260833739943,
            "unit": "ns/iter",
            "extra": "iterations: 32768\ncpu: 23701.696777343772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19028.881314837246,
            "unit": "ns/iter",
            "extra": "iterations: 42895\ncpu: 19028.31565450519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19021.867159973215,
            "unit": "ns/iter",
            "extra": "iterations: 42570\ncpu: 19021.20977214001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19226.014766081924,
            "unit": "ns/iter",
            "extra": "iterations: 41040\ncpu: 19225.521442495134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54039.03669999863,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54038.04999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 549460.6150000436,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549449.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563396.0219213158,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 563388.5235332046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553763.2790996815,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 553744.1157556255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553128.8532819051,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 553103.6036036055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327997.43419574795,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 327979.19010123686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 571190.2658959372,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 571171.5478484265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2388356.4229691555,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2388256.8627450983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095890.232696864,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1095853.3412887836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3329587.992805651,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3329470.1438848893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7589.362461302214,
            "unit": "ns/iter",
            "extra": "iterations: 112412\ncpu: 7589.213785005155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40585.43549177272,
            "unit": "ns/iter",
            "extra": "iterations: 20416\ncpu: 40582.44514106585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31756.54259132217,
            "unit": "ns/iter",
            "extra": "iterations: 26226\ncpu: 31755.769084114978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32092.533351421436,
            "unit": "ns/iter",
            "extra": "iterations: 25801\ncpu: 32091.597224913676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32051.161228632227,
            "unit": "ns/iter",
            "extra": "iterations: 25622\ncpu: 32050.366872219354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66878.70331934419,
            "unit": "ns/iter",
            "extra": "iterations: 13105\ncpu: 66876.00152613505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590969.2730000415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590946.2999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592140.6755464296,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 592136.5437158482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589494.091094438,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 589475.7987763435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583156.4858681151,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 583142.1938088798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346170.3160190123,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 346161.85567010555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575844.4611811449,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 575831.7850033179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2530257.8586957757,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2530145.9239130383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1100122.640624936,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1100081.25 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5270.482937911488,
            "unit": "ns/iter",
            "extra": "iterations: 150978\ncpu: 5270.410920796407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23661.764000562394,
            "unit": "ns/iter",
            "extra": "iterations: 35445\ncpu: 23661.041049513296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19294.953701317,
            "unit": "ns/iter",
            "extra": "iterations: 42701\ncpu: 19294.384206458864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18744.369775928193,
            "unit": "ns/iter",
            "extra": "iterations: 41371\ncpu: 18743.6005897851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18729.737389653706,
            "unit": "ns/iter",
            "extra": "iterations: 43159\ncpu: 18728.999745128534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52335.37499999557,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52333.67000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 558397.623000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558388.2999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 564524.3011509351,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 564507.9923273671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 562350.5893657954,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 562331.5182575284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 558897.464285726,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 558859.1198979612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335568.02296213264,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 335564.0642939149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 555842.6892834218,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555819.8478123014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.5168000296889,
            "unit": "ns/iter",
            "extra": "iterations: 1349075\ncpu: 521.4974704890348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2996.7915725789535,
            "unit": "ns/iter",
            "extra": "iterations: 234710\ncpu: 2996.6643943590047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2485.136514778744,
            "unit": "ns/iter",
            "extra": "iterations: 282094\ncpu: 2485.072351769257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2500.140229170331,
            "unit": "ns/iter",
            "extra": "iterations: 279792\ncpu: 2499.9767684565545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1956.28808810938,
            "unit": "ns/iter",
            "extra": "iterations: 368724\ncpu: 1956.273255877022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16269.672334918223,
            "unit": "ns/iter",
            "extra": "iterations: 43282\ncpu: 16269.444572801533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29887.322973665054,
            "unit": "ns/iter",
            "extra": "iterations: 23392\ncpu: 29887.341826265332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7201.840983488492,
            "unit": "ns/iter",
            "extra": "iterations: 96839\ncpu: 7201.8432656263785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7181.756830123444,
            "unit": "ns/iter",
            "extra": "iterations: 97253\ncpu: 7181.759945708643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7226.321634833857,
            "unit": "ns/iter",
            "extra": "iterations: 96964\ncpu: 7226.133410337873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14579.210675267615,
            "unit": "ns/iter",
            "extra": "iterations: 48055\ncpu: 14579.178025179355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13670.054768519973,
            "unit": "ns/iter",
            "extra": "iterations: 51106\ncpu: 13670.105271396702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5245.1145301449515,
            "unit": "ns/iter",
            "extra": "iterations: 133371\ncpu: 5245.133499786372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26232.104805131636,
            "unit": "ns/iter",
            "extra": "iterations: 26659\ncpu: 26231.929179639435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20897.36986301337,
            "unit": "ns/iter",
            "extra": "iterations: 33434\ncpu: 20896.69498115684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20913.089232796636,
            "unit": "ns/iter",
            "extra": "iterations: 33407\ncpu: 20913.099051096877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21365.60252539135,
            "unit": "ns/iter",
            "extra": "iterations: 32787\ncpu: 21365.61442034962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51430.28847933375,
            "unit": "ns/iter",
            "extra": "iterations: 14053\ncpu: 51429.6876111865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154187.73300862935,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 154180.71729023845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129775.46171045362,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 129775.59157816187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128766.07777164111,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128766.20702334923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130674.22430083169,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 130672.3167044584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83282.92726189157,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83281.6428571431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131123.58778339915,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131122.14727375016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5225.787500275544,
            "unit": "ns/iter",
            "extra": "iterations: 135859\ncpu: 5225.796597943417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26357.765704324425,
            "unit": "ns/iter",
            "extra": "iterations: 26394\ncpu: 26357.30469045987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21893.871267252365,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 21893.895859473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22199.786406221756,
            "unit": "ns/iter",
            "extra": "iterations: 31382\ncpu: 22199.39774392979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21205.06118388991,
            "unit": "ns/iter",
            "extra": "iterations: 32672\ncpu: 21205.07162095977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48213.72903448123,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 48213.37241379367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154178.83050098582,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 154178.9891856121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128364.72454212913,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 128361.06227106314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126065.47086501028,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126065.65327542569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126340.9545126435,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 126341.08303248919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82914.98735374436,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82915.0809596971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129050.70346478719,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129049.44710652284 ns\nthreads: 1"
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
        "date": 1702492941948,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1343.5467465786705,
            "unit": "ns/iter",
            "extra": "iterations: 523910\ncpu: 1343.4878127922736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16198.763510066154,
            "unit": "ns/iter",
            "extra": "iterations: 50962\ncpu: 16198.039715866724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33226.586939050714,
            "unit": "ns/iter",
            "extra": "iterations: 23643\ncpu: 33225.90195829634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50582.59800071383,
            "unit": "ns/iter",
            "extra": "iterations: 16806\ncpu: 50581.54230631916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56015.506399990045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56014.51000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70605.87267755232,
            "unit": "ns/iter",
            "extra": "iterations: 12433\ncpu: 70603.65961553929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83805.12972133429,
            "unit": "ns/iter",
            "extra": "iterations: 10299\ncpu: 83804.34993688703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96981.54020549546,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 96977.59660486931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113482.37885171411,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 113479.25994205954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1144.7950697936408,
            "unit": "ns/iter",
            "extra": "iterations: 611374\ncpu: 1144.7318662553528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 937.984321535874,
            "unit": "ns/iter",
            "extra": "iterations: 742611\ncpu: 937.9679266803216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 945.6450421406097,
            "unit": "ns/iter",
            "extra": "iterations: 740733\ncpu: 945.6306118398925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.6858945489189,
            "unit": "ns/iter",
            "extra": "iterations: 759366\ncpu: 923.6634244883244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1842.8564343122491,
            "unit": "ns/iter",
            "extra": "iterations: 379248\ncpu: 1842.8371408682465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5268.907620818323,
            "unit": "ns/iter",
            "extra": "iterations: 150640\ncpu: 5268.714152947427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24069.530514232687,
            "unit": "ns/iter",
            "extra": "iterations: 34148\ncpu: 24069.096286751803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20038.94158382164,
            "unit": "ns/iter",
            "extra": "iterations: 41444\ncpu: 20038.425345043936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19610.875092760652,
            "unit": "ns/iter",
            "extra": "iterations: 41775\ncpu: 19610.582884500316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19509.28848406735,
            "unit": "ns/iter",
            "extra": "iterations: 41829\ncpu: 19508.788161323533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54577.45779999641,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54575.53000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562036.9319999554,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562014.7000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557443.6120077042,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 557438.6055519708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558575.9769082502,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 558558.0500320728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559618.2184278034,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559602.706185568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335344.50286150066,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 335338.80198397575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 596368.1490045341,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 596340.2697495179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2374775.301790208,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2374737.3401534553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1069895.338691253,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1069861.3088404115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3324200.9999999176,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324126.523297486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7844.779063536194,
            "unit": "ns/iter",
            "extra": "iterations: 110095\ncpu: 7844.515191425597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40877.16945720421,
            "unit": "ns/iter",
            "extra": "iterations: 20247\ncpu: 40876.15449202337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33023.98228676141,
            "unit": "ns/iter",
            "extra": "iterations: 25066\ncpu: 33023.182797414884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32683.527809663632,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 32682.77977910605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32916.178395356044,
            "unit": "ns/iter",
            "extra": "iterations: 25152\ncpu: 32915.56933842252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66970.73865284049,
            "unit": "ns/iter",
            "extra": "iterations: 13109\ncpu: 66968.85345945579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 591752.0309999419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591734.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588356.5280748582,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 588337.9679144385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589034.9428379934,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 589013.0464021538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580289.6531561199,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580273.754152823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344857.9915966336,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 344846.45858343376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573029.2610124879,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 573014.9243918486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2521552.741847969,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2521429.8913043565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1122504.0750605275,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1122471.0653753018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5228.308529587448,
            "unit": "ns/iter",
            "extra": "iterations: 152141\ncpu: 5228.025975903947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24269.4569572575,
            "unit": "ns/iter",
            "extra": "iterations: 34791\ncpu: 24269.086832801768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20664.15900836176,
            "unit": "ns/iter",
            "extra": "iterations: 41023\ncpu: 20663.405894254473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20367.390013624852,
            "unit": "ns/iter",
            "extra": "iterations: 41837\ncpu: 20366.880990510836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20684.47689612263,
            "unit": "ns/iter",
            "extra": "iterations: 41097\ncpu: 20684.237292259786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52385.27879999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52384.130000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 558071.0140000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558047.9000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 565527.7845953451,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 565523.5639686655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566991.1262819993,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 566981.3461538481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565465.8566837879,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 565450.9640102829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331593.807024201,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 331585.08308157197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 556289.2563613431,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 556276.3994910922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.7510943935491,
            "unit": "ns/iter",
            "extra": "iterations: 1296837\ncpu: 539.7437765887315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2938.5258884573377,
            "unit": "ns/iter",
            "extra": "iterations: 237828\ncpu: 2938.5253208201007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2368.903231362728,
            "unit": "ns/iter",
            "extra": "iterations: 296098\ncpu: 2368.9038764192815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2328.047948540679,
            "unit": "ns/iter",
            "extra": "iterations: 301907\ncpu: 2328.0288300701814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1909.57864854012,
            "unit": "ns/iter",
            "extra": "iterations: 366167\ncpu: 1909.5775971073429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16192.991758553535,
            "unit": "ns/iter",
            "extra": "iterations: 44167\ncpu: 16192.279303552566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29846.830335399947,
            "unit": "ns/iter",
            "extra": "iterations: 23405\ncpu: 29846.037171544805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7200.431195305483,
            "unit": "ns/iter",
            "extra": "iterations: 97130\ncpu: 7200.148254916093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7227.176205714782,
            "unit": "ns/iter",
            "extra": "iterations: 97494\ncpu: 7226.783186657587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7197.727600321173,
            "unit": "ns/iter",
            "extra": "iterations: 96017\ncpu: 7197.530645614813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14679.129329334719,
            "unit": "ns/iter",
            "extra": "iterations: 47669\ncpu: 14678.881453355487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12450.773532452688,
            "unit": "ns/iter",
            "extra": "iterations: 56114\ncpu: 12450.026731297012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.611177126261,
            "unit": "ns/iter",
            "extra": "iterations: 135491\ncpu: 5165.327586334179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26295.795041320518,
            "unit": "ns/iter",
            "extra": "iterations: 26620\ncpu: 26295.015026295878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20796.96276865289,
            "unit": "ns/iter",
            "extra": "iterations: 33547\ncpu: 20795.531642173613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20679.901385924488,
            "unit": "ns/iter",
            "extra": "iterations: 33768\ncpu: 20679.14001421449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21078.811478868614,
            "unit": "ns/iter",
            "extra": "iterations: 33174\ncpu: 21078.076204256384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49896.13229322389,
            "unit": "ns/iter",
            "extra": "iterations: 14037\ncpu: 49893.695234023784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154836.77161174626,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 154828.12292725974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130260.96786249074,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130252.13004484348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129845.16682128365,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129839.59918352225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129442.70221812098,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129441.5711645103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83149.18951468913,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 83145.04664068847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130041.71574262319,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 130038.67977007254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5303.674691930561,
            "unit": "ns/iter",
            "extra": "iterations: 131626\ncpu: 5303.597313600668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25764.154845856916,
            "unit": "ns/iter",
            "extra": "iterations: 27085\ncpu: 25763.234262507318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21961.28064010107,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 21961.10762472539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20856.222854405245,
            "unit": "ns/iter",
            "extra": "iterations: 33394\ncpu: 20855.41714080393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22176.376644737597,
            "unit": "ns/iter",
            "extra": "iterations: 31616\ncpu: 22175.879301619494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49266.13488372466,
            "unit": "ns/iter",
            "extra": "iterations: 14190\ncpu: 49264.411557434665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150641.79716371375,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 150635.238504512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127795.41118421996,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 127785.38011695787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128360.62986424543,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 128359.42081447969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128149.92109118757,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128146.79604540474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83931.89785910532,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83928.82430331374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129490.8165374801,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129485.95422665283 ns\nthreads: 1"
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
        "date": 1702503990714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1444.862886623699,
            "unit": "ns/iter",
            "extra": "iterations: 522181\ncpu: 1444.8047707595642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15924.39633569521,
            "unit": "ns/iter",
            "extra": "iterations: 51797\ncpu: 15923.756202096647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33650.040910564414,
            "unit": "ns/iter",
            "extra": "iterations: 24688\ncpu: 33648.57825664289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49498.72299723134,
            "unit": "ns/iter",
            "extra": "iterations: 16989\ncpu: 49495.20866442994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55555.64900000718,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55553.74999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69644.3421010901,
            "unit": "ns/iter",
            "extra": "iterations: 12622\ncpu: 69640.18380605296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82646.66466776376,
            "unit": "ns/iter",
            "extra": "iterations: 10339\ncpu: 82642.53796305245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98437.11308579928,
            "unit": "ns/iter",
            "extra": "iterations: 8834\ncpu: 98432.99750962199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111890.15169712399,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 111886.74934725837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1125.6773843668977,
            "unit": "ns/iter",
            "extra": "iterations: 622335\ncpu: 1125.6659194806646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 942.4422536397216,
            "unit": "ns/iter",
            "extra": "iterations: 736817\ncpu: 942.4154165824078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 949.6629436709616,
            "unit": "ns/iter",
            "extra": "iterations: 737399\ncpu: 949.6519523351665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 940.385202230671,
            "unit": "ns/iter",
            "extra": "iterations: 748329\ncpu: 940.3472269549892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1811.7146387538382,
            "unit": "ns/iter",
            "extra": "iterations: 386440\ncpu: 1811.6375116447546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5245.640096475253,
            "unit": "ns/iter",
            "extra": "iterations: 152163\ncpu: 5245.497262803708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24367.474396564772,
            "unit": "ns/iter",
            "extra": "iterations: 33765\ncpu: 24367.229379534972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19378.010881933384,
            "unit": "ns/iter",
            "extra": "iterations: 42180\ncpu: 19377.425320056922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19467.33630458406,
            "unit": "ns/iter",
            "extra": "iterations: 42182\ncpu: 19466.988288843513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20060.476274377812,
            "unit": "ns/iter",
            "extra": "iterations: 41432\ncpu: 20059.972967754424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55146.527900001274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55145.16 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 549573.118000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549559.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559357.3036176126,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 559340.9560723508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560272.6627907219,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 560262.596899224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557654.1029792421,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 557640.2202072531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329443.142419624,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 329430.7427258806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557196.6425368828,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 557181.6143497769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2364735.202046058,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2364668.797953962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1087229.1882353292,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1087177.2941176475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3330073.253571543,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3329996.071428568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7570.507116292606,
            "unit": "ns/iter",
            "extra": "iterations: 111856\ncpu: 7570.2555070805565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41129.23730493022,
            "unit": "ns/iter",
            "extra": "iterations: 20185\ncpu: 41128.223928659936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32580.16795937875,
            "unit": "ns/iter",
            "extra": "iterations: 25012\ncpu: 32578.978090516637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32456.9309085182,
            "unit": "ns/iter",
            "extra": "iterations: 25459\ncpu: 32455.112141089558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32618.364586619722,
            "unit": "ns/iter",
            "extra": "iterations: 25352\ncpu: 32616.15257178924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68921.31811011373,
            "unit": "ns/iter",
            "extra": "iterations: 12678\ncpu: 68917.0689383185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 585623.446999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585573.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598353.5381991625,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 598305.6616643943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587699.6064119564,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 587657.9126875834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585866.2830956969,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 585834.3516632741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344028.074813938,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 344015.5503329413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571750.3052076608,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 571718.0619644031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2534070.572207014,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2533949.8637602087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1145570.2709360265,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1145533.497536953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5243.6743530449085,
            "unit": "ns/iter",
            "extra": "iterations: 153952\ncpu: 5243.493426522524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23469.095033511734,
            "unit": "ns/iter",
            "extra": "iterations: 34914\ncpu: 23468.250558515152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18921.068406237187,
            "unit": "ns/iter",
            "extra": "iterations: 43344\ncpu: 18920.291159099368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18496.134445958898,
            "unit": "ns/iter",
            "extra": "iterations: 44040\ncpu: 18496.092188919167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18603.904282881227,
            "unit": "ns/iter",
            "extra": "iterations: 42845\ncpu: 18603.344614307513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52963.37440000798,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52962.589999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 564408.7839999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564387.7999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567559.9902406927,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 567550.4879635685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566998.1620400203,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 566982.7630729529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 561367.3305573186,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 561347.7898782818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330058.300303703,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 330048.9369779824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 556238.7509554025,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 556222.2292993626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 525.5405555187599,
            "unit": "ns/iter",
            "extra": "iterations: 1342493\ncpu: 525.5343603281368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3019.017432366674,
            "unit": "ns/iter",
            "extra": "iterations: 232097\ncpu: 3018.886930895269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2517.809536695696,
            "unit": "ns/iter",
            "extra": "iterations: 280852\ncpu: 2517.7855240482495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2382.351747270833,
            "unit": "ns/iter",
            "extra": "iterations: 293057\ncpu: 2382.000429950484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1914.513361328175,
            "unit": "ns/iter",
            "extra": "iterations: 365308\ncpu: 1914.4343950857876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16110.383818621634,
            "unit": "ns/iter",
            "extra": "iterations: 43445\ncpu: 16109.807802969186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29928.009645345275,
            "unit": "ns/iter",
            "extra": "iterations: 23431\ncpu: 29926.819171183524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7530.090140204238,
            "unit": "ns/iter",
            "extra": "iterations: 96716\ncpu: 7529.810993010585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7188.061273272282,
            "unit": "ns/iter",
            "extra": "iterations: 97057\ncpu: 7187.794800993202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7153.273010967865,
            "unit": "ns/iter",
            "extra": "iterations: 97736\ncpu: 7153.164647622085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14475.76585345633,
            "unit": "ns/iter",
            "extra": "iterations: 48286\ncpu: 14475.203992875782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13694.018939096277,
            "unit": "ns/iter",
            "extra": "iterations: 50900\ncpu: 13693.640471512736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5142.911359288936,
            "unit": "ns/iter",
            "extra": "iterations: 136461\ncpu: 5142.895039608406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26007.712735921046,
            "unit": "ns/iter",
            "extra": "iterations: 26916\ncpu: 26006.754346856564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20937.290125291976,
            "unit": "ns/iter",
            "extra": "iterations: 33682\ncpu: 20936.57740039176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20357.477162122977,
            "unit": "ns/iter",
            "extra": "iterations: 34110\ncpu: 20356.505423629664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20877.04705283438,
            "unit": "ns/iter",
            "extra": "iterations: 33388\ncpu: 20876.497544027727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48973.88089242668,
            "unit": "ns/iter",
            "extra": "iterations: 14298\ncpu: 48970.9050216815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 151901.91444660816,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151892.78752436707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 127710.12356479326,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127705.79551667624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128647.36862313568,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 128641.70780764308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128333.1533552207,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 128322.30123996921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82890.23739048737,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82884.43049964507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130314.1544035665,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130312.54180602102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5128.453085674598,
            "unit": "ns/iter",
            "extra": "iterations: 135886\ncpu: 5128.245735395787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26546.51920816084,
            "unit": "ns/iter",
            "extra": "iterations: 26369\ncpu: 26546.47502749413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21981.33682691016,
            "unit": "ns/iter",
            "extra": "iterations: 31868\ncpu: 21980.271745952043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21504.085976188166,
            "unit": "ns/iter",
            "extra": "iterations: 32509\ncpu: 21503.81740441085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22033.4418046274,
            "unit": "ns/iter",
            "extra": "iterations: 31652\ncpu: 22032.655124478573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47618.68297509228,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47618.63527806169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 149848.05525806994,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149841.14371385612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126818.9744750147,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126815.22447501635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127936.51795153371,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127930.52669947072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126586.19337318363,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126583.93988774113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82455.93414719486,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 82455.94553351418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 136157.23323560832,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 136152.34518138363 ns\nthreads: 1"
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
        "date": 1705575669995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1358.1451825341076,
            "unit": "ns/iter",
            "extra": "iterations: 510206\ncpu: 1358.0024539107733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15879.546296653563,
            "unit": "ns/iter",
            "extra": "iterations: 51926\ncpu: 15878.413511535644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33736.09127242719,
            "unit": "ns/iter",
            "extra": "iterations: 24520\ncpu: 33734.50244698205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49390.53164036994,
            "unit": "ns/iter",
            "extra": "iterations: 17051\ncpu: 49388.31740073894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55087.91990000645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55083.15000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69242.99058991658,
            "unit": "ns/iter",
            "extra": "iterations: 12646\ncpu: 69238.76324529493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82676.15085227112,
            "unit": "ns/iter",
            "extra": "iterations: 10560\ncpu: 82669.28030303032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 94763.3049298059,
            "unit": "ns/iter",
            "extra": "iterations: 9189\ncpu: 94762.47687452387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111117.302349603,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 111116.86031500116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1126.3426992912046,
            "unit": "ns/iter",
            "extra": "iterations: 620474\ncpu: 1126.341796755384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.9308788517031,
            "unit": "ns/iter",
            "extra": "iterations: 744244\ncpu: 941.9125985563861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 951.6413738441173,
            "unit": "ns/iter",
            "extra": "iterations: 736823\ncpu: 951.6491749036071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 938.7042296019636,
            "unit": "ns/iter",
            "extra": "iterations: 748983\ncpu: 938.6588213617655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1805.1510201026472,
            "unit": "ns/iter",
            "extra": "iterations: 387657\ncpu: 1805.1475918144124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5257.982029473276,
            "unit": "ns/iter",
            "extra": "iterations: 152138\ncpu: 5257.871143304109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23489.301706464877,
            "unit": "ns/iter",
            "extra": "iterations: 34633\ncpu: 23489.50711748906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19340.709673618443,
            "unit": "ns/iter",
            "extra": "iterations: 42435\ncpu: 19340.040061270167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19018.594895589405,
            "unit": "ns/iter",
            "extra": "iterations: 43100\ncpu: 19017.584686775008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19294.57139867622,
            "unit": "ns/iter",
            "extra": "iterations: 43005\ncpu: 19293.57051505643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55465.18979999746,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55461.49999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 582069.5069999147,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581883.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555410.8987905686,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 555389.1788669628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556647.477170428,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 556596.9131832802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559067.6916612746,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 559050.6140917892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333095.20673989324,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 333075.1230594473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552906.5937300386,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 552860.0127959044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2364348.7392406845,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2364206.8354430413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1088534.5420118126,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1088486.745562131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3363434.4568342464,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3363410.7913669115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7728.516552690789,
            "unit": "ns/iter",
            "extra": "iterations: 108502\ncpu: 7728.384730235375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41565.57861540779,
            "unit": "ns/iter",
            "extra": "iterations: 19977\ncpu: 41565.530359913886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32878.75706327854,
            "unit": "ns/iter",
            "extra": "iterations: 24953\ncpu: 32878.23508195417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33398.071498877805,
            "unit": "ns/iter",
            "extra": "iterations: 25399\ncpu: 33398.3345801017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32539.68311240085,
            "unit": "ns/iter",
            "extra": "iterations: 25498\ncpu: 32539.936465605086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66876.08197738203,
            "unit": "ns/iter",
            "extra": "iterations: 12906\ncpu: 66874.91089415777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588113.8740001007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588089.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588381.425675656,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 588350.1351351334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581162.6984657128,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 581130.4202801851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583897.8395722259,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 583868.9171123004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344226.83392503735,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 344212.07100591704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571641.2518033215,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 571610.6229508186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2531548.891008121,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531434.332425071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1121820.8209501938,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1121757.8562728327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5293.865810525058,
            "unit": "ns/iter",
            "extra": "iterations: 150131\ncpu: 5293.568949783865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24565.718029200245,
            "unit": "ns/iter",
            "extra": "iterations: 34727\ncpu: 24564.347625766703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19863.251800828642,
            "unit": "ns/iter",
            "extra": "iterations: 41231\ncpu: 19861.97278746567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18582.584165412976,
            "unit": "ns/iter",
            "extra": "iterations: 43866\ncpu: 18581.78087812884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18989.2634055673,
            "unit": "ns/iter",
            "extra": "iterations: 42501\ncpu: 18988.2073362979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52447.39400000071,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52447.15999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 564983.7979999575,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564939.6000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570291.7976729124,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 570259.9870717509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570997.9200515957,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 570967.9561573194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567137.8215660722,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 567099.4223363285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337987.0164814143,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 337966.385588347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560051.4430298822,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 560022.5970719244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.2059263218302,
            "unit": "ns/iter",
            "extra": "iterations: 1335837\ncpu: 523.1824691186127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3118.4253195941706,
            "unit": "ns/iter",
            "extra": "iterations: 224269\ncpu: 3118.3730252509135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2473.343951022399,
            "unit": "ns/iter",
            "extra": "iterations: 283395\ncpu: 2473.3153372501292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2289.793538749513,
            "unit": "ns/iter",
            "extra": "iterations: 304585\ncpu: 2289.6705353185507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1869.1811834776406,
            "unit": "ns/iter",
            "extra": "iterations: 374405\ncpu: 1869.0727955022035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16500.941150245846,
            "unit": "ns/iter",
            "extra": "iterations: 42617\ncpu: 16499.44153741467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29983.887395247333,
            "unit": "ns/iter",
            "extra": "iterations: 23507\ncpu: 29982.12021950935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7339.205700706926,
            "unit": "ns/iter",
            "extra": "iterations: 95532\ncpu: 7338.84143533057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7309.311725333355,
            "unit": "ns/iter",
            "extra": "iterations: 95767\ncpu: 7308.805747282442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7321.359075252607,
            "unit": "ns/iter",
            "extra": "iterations: 95810\ncpu: 7321.263959920726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14066.47922454527,
            "unit": "ns/iter",
            "extra": "iterations: 49674\ncpu: 14066.135201513755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13835.656140907979,
            "unit": "ns/iter",
            "extra": "iterations: 50416\ncpu: 13834.790542684885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5245.302370934472,
            "unit": "ns/iter",
            "extra": "iterations: 133323\ncpu: 5245.098745152721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26791.320216993303,
            "unit": "ns/iter",
            "extra": "iterations: 26176\ncpu: 26789.761613692004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21373.9234731182,
            "unit": "ns/iter",
            "extra": "iterations: 32812\ncpu: 21372.869681823817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21169.242554091306,
            "unit": "ns/iter",
            "extra": "iterations: 33139\ncpu: 21168.20966233126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21786.172679068637,
            "unit": "ns/iter",
            "extra": "iterations: 32627\ncpu: 21785.101296472047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49565.07100759804,
            "unit": "ns/iter",
            "extra": "iterations: 14083\ncpu: 49562.87012710361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154931.03217930853,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 154923.14691522368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128510.7549055854,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 128501.79563124706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128036.05031215612,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128033.93316195247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128427.33064664055,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128421.67063564589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82464.07557387544,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82458.84638022352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129350.10826735693,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129338.70373780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5450.215325366072,
            "unit": "ns/iter",
            "extra": "iterations: 128271\ncpu: 5449.972324219841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25375.90944185677,
            "unit": "ns/iter",
            "extra": "iterations: 27717\ncpu: 25374.448894180397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21800.82071251905,
            "unit": "ns/iter",
            "extra": "iterations: 31971\ncpu: 21799.784179412833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21386.231567986095,
            "unit": "ns/iter",
            "extra": "iterations: 32647\ncpu: 21384.98483781029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22126.02420868651,
            "unit": "ns/iter",
            "extra": "iterations: 31435\ncpu: 22125.353904883013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48037.04661221061,
            "unit": "ns/iter",
            "extra": "iterations: 14567\ncpu: 48037.46138532371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150879.80896937725,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150842.8848641638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127615.94156080275,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127615.40834845742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128037.56360650313,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 128035.0428910385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128770.00128604798,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128771.17398493487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82367.08134196278,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82365.92113007612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128978.11127432832,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128979.21410209304 ns\nthreads: 1"
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
        "date": 1705773488361,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1329.1660106196878,
            "unit": "ns/iter",
            "extra": "iterations: 525623\ncpu: 1329.1617756452822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16122.077784290841,
            "unit": "ns/iter",
            "extra": "iterations: 51180\ncpu: 16122.05549042595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33453.524992866645,
            "unit": "ns/iter",
            "extra": "iterations: 24547\ncpu: 33453.41589603618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49733.155668959,
            "unit": "ns/iter",
            "extra": "iterations: 17049\ncpu: 49730.55311161946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55170.8566000002,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55169.889999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69073.85994753332,
            "unit": "ns/iter",
            "extra": "iterations: 12581\ncpu: 69071.3297830061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82247.8578077443,
            "unit": "ns/iter",
            "extra": "iterations: 10528\ncpu: 82245.09878419456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95837.53465126838,
            "unit": "ns/iter",
            "extra": "iterations: 9004\ncpu: 95834.24033762781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112373.60891654815,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 112368.8047758161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1143.1043374382643,
            "unit": "ns/iter",
            "extra": "iterations: 611928\ncpu: 1143.027284255664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 943.9023729899874,
            "unit": "ns/iter",
            "extra": "iterations: 742776\ncpu: 943.8347496418828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 947.8897178589331,
            "unit": "ns/iter",
            "extra": "iterations: 740410\ncpu: 947.8565929687597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 936.218169670544,
            "unit": "ns/iter",
            "extra": "iterations: 745374\ncpu: 936.2034361273652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1828.7548629108967,
            "unit": "ns/iter",
            "extra": "iterations: 383875\ncpu: 1828.7116900032574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5293.9832260174,
            "unit": "ns/iter",
            "extra": "iterations: 152975\ncpu: 5293.763033175352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24236.46528082337,
            "unit": "ns/iter",
            "extra": "iterations: 34203\ncpu: 24235.22205654476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19237.739493412984,
            "unit": "ns/iter",
            "extra": "iterations: 42283\ncpu: 19236.927370338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19012.126180884432,
            "unit": "ns/iter",
            "extra": "iterations: 42447\ncpu: 19011.16451103727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19280.07075562168,
            "unit": "ns/iter",
            "extra": "iterations: 41820\ncpu: 19279.34002869441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 53869.65730000384,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53869.94999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 547774.8929999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547734.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554880.3834296743,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 554862.9415542718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548930.6207559538,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 548919.1543882116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554236.8853298504,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 554212.7482383095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329662.9441277031,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 329645.64804257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556103.7777070057,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 556082.2292993626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2364292.6751270047,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364194.923857861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1079385.0069929603,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1079375.7575757615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3297894.3129495643,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3297750.3597122305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7636.350414297781,
            "unit": "ns/iter",
            "extra": "iterations: 110669\ncpu: 7636.062492658278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41160.753666533026,
            "unit": "ns/iter",
            "extra": "iterations: 20728\ncpu: 41158.86723272871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33275.5244782509,
            "unit": "ns/iter",
            "extra": "iterations: 25635\ncpu: 33274.28125609505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33206.987546072996,
            "unit": "ns/iter",
            "extra": "iterations: 25775\ncpu: 33204.779825412166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32720.801012912238,
            "unit": "ns/iter",
            "extra": "iterations: 25866\ncpu: 32719.419314930972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 65874.36853204285,
            "unit": "ns/iter",
            "extra": "iterations: 13277\ncpu: 65872.2678315886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 579724.562000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579683.6000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 580391.2548624655,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580373.3735747822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581689.3429529967,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 581682.8859060382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579308.7284856586,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 579293.9959973324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342981.0391928315,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 342980.90803259535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574474.8994778112,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 574478.1331592673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2533152.172602731,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2533078.9041095823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1130571.722424341,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1130569.4545454471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5203.634595861483,
            "unit": "ns/iter",
            "extra": "iterations: 152683\ncpu: 5203.538049422679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28996.363462783098,
            "unit": "ns/iter",
            "extra": "iterations: 34042\ncpu: 28996.057810939445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18920.762312488525,
            "unit": "ns/iter",
            "extra": "iterations: 43797\ncpu: 18920.266228280467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18437.243751684677,
            "unit": "ns/iter",
            "extra": "iterations: 44492\ncpu: 18437.226917198503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18580.9670304622,
            "unit": "ns/iter",
            "extra": "iterations: 43889\ncpu: 18580.261568958085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52026.379999995246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52022.41 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566861.2309999616,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566853.799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569366.231836201,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 569344.187582563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569281.3184796285,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 569252.9488859749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567730.1307742835,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 567710.2147039708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330704.5466867858,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 330690.28614457685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 575266.2694533411,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 575240.7073954982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.488678589828,
            "unit": "ns/iter",
            "extra": "iterations: 1347182\ncpu: 521.4642119624516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2918.4846019779006,
            "unit": "ns/iter",
            "extra": "iterations: 239836\ncpu: 2918.36129688621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2481.4930270511513,
            "unit": "ns/iter",
            "extra": "iterations: 281875\ncpu: 2481.3637250554366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2446.6944487965607,
            "unit": "ns/iter",
            "extra": "iterations: 287235\ncpu: 2446.562918864353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1938.7879951773994,
            "unit": "ns/iter",
            "extra": "iterations: 361638\ncpu: 1938.713851973506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16127.350311250033,
            "unit": "ns/iter",
            "extra": "iterations: 43213\ncpu: 16126.95022331241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29808.58385119321,
            "unit": "ns/iter",
            "extra": "iterations: 23494\ncpu: 29808.104196815868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7222.346825340008,
            "unit": "ns/iter",
            "extra": "iterations: 96971\ncpu: 7222.09526559497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7162.724357988101,
            "unit": "ns/iter",
            "extra": "iterations: 97467\ncpu: 7162.293904603729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7145.9588610834435,
            "unit": "ns/iter",
            "extra": "iterations: 97426\ncpu: 7145.329788762786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14451.17710426478,
            "unit": "ns/iter",
            "extra": "iterations: 48271\ncpu: 14450.07561475819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13591.645515073476,
            "unit": "ns/iter",
            "extra": "iterations: 51517\ncpu: 13590.657452879623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5212.957582420955,
            "unit": "ns/iter",
            "extra": "iterations: 134614\ncpu: 5212.821103302782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26367.360162476605,
            "unit": "ns/iter",
            "extra": "iterations: 26588\ncpu: 26366.639085301267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20666.788136852585,
            "unit": "ns/iter",
            "extra": "iterations: 33701\ncpu: 20666.597430343605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20737.443252533747,
            "unit": "ns/iter",
            "extra": "iterations: 33746\ncpu: 20736.025010371857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21347.776252263968,
            "unit": "ns/iter",
            "extra": "iterations: 33140\ncpu: 21347.631261315946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50135.03458171929,
            "unit": "ns/iter",
            "extra": "iterations: 13938\ncpu: 50133.362031854864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153553.76167506338,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153552.0061390049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129458.32335995832,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 129455.91897417008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128399.23762192868,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128400.25768451908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128451.1410895564,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 128448.6426592806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82364.65213292568,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 82361.15955691802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129067.08000739153,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129065.98300073748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5319.207178492483,
            "unit": "ns/iter",
            "extra": "iterations: 132089\ncpu: 5318.997796939859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26689.93432494437,
            "unit": "ns/iter",
            "extra": "iterations: 26220\ncpu: 26689.420289855036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21536.670003399548,
            "unit": "ns/iter",
            "extra": "iterations: 32367\ncpu: 21534.853400068183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21791.42056279689,
            "unit": "ns/iter",
            "extra": "iterations: 31912\ncpu: 21789.505515166766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21947.572646089837,
            "unit": "ns/iter",
            "extra": "iterations: 31915\ncpu: 21947.50117499584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49516.430744203615,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 49512.853706848495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152393.97006119112,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 152382.67045454527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126006.38439254937,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126002.33568712678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125885.59201295869,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 125883.07249505198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127833.20727273596,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127821.19999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81447.24994101247,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 81438.19297004164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128016.63508323835,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128001.6096579483 ns\nthreads: 1"
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
        "date": 1705775475876,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1351.7540835234872,
            "unit": "ns/iter",
            "extra": "iterations: 514874\ncpu: 1351.6771093510258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15980.292919963287,
            "unit": "ns/iter",
            "extra": "iterations: 51963\ncpu: 15979.772145565114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34832.7330563622,
            "unit": "ns/iter",
            "extra": "iterations: 23829\ncpu: 34831.612740778044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52940.87190666495,
            "unit": "ns/iter",
            "extra": "iterations: 16285\ncpu: 52940.50353085661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58574.3162999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58572.66000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74681.9771482281,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 74679.270797672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92164.1708136458,
            "unit": "ns/iter",
            "extra": "iterations: 9525\ncpu: 92162.08923884518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104494.76489657185,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 104490.64526088306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 121656.91915543951,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 121653.97971940546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1119.92531122978,
            "unit": "ns/iter",
            "extra": "iterations: 625181\ncpu: 1119.900316868233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 928.7082024897711,
            "unit": "ns/iter",
            "extra": "iterations: 750260\ncpu: 928.6932530056243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 937.3786867417631,
            "unit": "ns/iter",
            "extra": "iterations: 742017\ncpu: 937.3591171091767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 919.8392998410991,
            "unit": "ns/iter",
            "extra": "iterations: 762227\ncpu: 919.8085347278418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1810.7591479347038,
            "unit": "ns/iter",
            "extra": "iterations: 386590\ncpu: 1810.6841873819837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5210.9781022376865,
            "unit": "ns/iter",
            "extra": "iterations: 152664\ncpu: 5210.866347010419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23716.815669662767,
            "unit": "ns/iter",
            "extra": "iterations: 34704\ncpu: 23716.658022130014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19349.850533301753,
            "unit": "ns/iter",
            "extra": "iterations: 42190\ncpu: 19347.81227779095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18908.258974124845,
            "unit": "ns/iter",
            "extra": "iterations: 43514\ncpu: 18907.1402307303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19143.396208981787,
            "unit": "ns/iter",
            "extra": "iterations: 42205\ncpu: 19142.047150811555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54326.91650000833,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54324.98000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 545859.2210000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545832.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555954.5397727819,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 555906.8813131319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 550495.4601149341,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 550455.7753669418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 572036.7229235782,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 572016.810631229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329706.8515860985,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 329683.6858006045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 554523.2017823056,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 554494.5894334812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2392338.176470423,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2392170.5882352917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085992.1826698345,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1085940.7494145194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3343479.924731217,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3343229.7491039443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7462.457518576191,
            "unit": "ns/iter",
            "extra": "iterations: 113991\ncpu: 7461.868919476119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40477.422789113436,
            "unit": "ns/iter",
            "extra": "iterations: 20580\ncpu: 40475.57337220598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32582.437991010633,
            "unit": "ns/iter",
            "extra": "iterations: 25585\ncpu: 32580.19151846791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32404.545819526997,
            "unit": "ns/iter",
            "extra": "iterations: 25655\ncpu: 32402.744104462883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32019.818956872783,
            "unit": "ns/iter",
            "extra": "iterations: 25922\ncpu: 32018.644394722593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66003.13900302441,
            "unit": "ns/iter",
            "extra": "iterations: 12899\ncpu: 66002.06992790144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 582016.7750000564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581984.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 582816.7994598158,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 582793.990546927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 578121.2413333681,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 578095.1999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579442.5156145856,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 579400.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344241.08415256866,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 344210.65670468216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572820.7668631154,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 572784.8068107393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2545298.863013732,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2541784.109589049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1098448.8178614217,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1098378.0258519417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5330.105942438394,
            "unit": "ns/iter",
            "extra": "iterations: 151941\ncpu: 5329.8010411936475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23004.16106485514,
            "unit": "ns/iter",
            "extra": "iterations: 35911\ncpu: 23002.879340591986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19099.069472803385,
            "unit": "ns/iter",
            "extra": "iterations: 43096\ncpu: 19097.765453870496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19057.863805104393,
            "unit": "ns/iter",
            "extra": "iterations: 43100\ncpu: 19056.39211136879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19079.999142168486,
            "unit": "ns/iter",
            "extra": "iterations: 43132\ncpu: 19079.7250301401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53062.7369000058,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53062.53999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 561099.7940000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561071.499999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568760.7100323938,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 568741.2944983819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565389.563788641,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565380.2835051531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564081.1247575994,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564066.8390433075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327930.7533783747,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 327912.57507507555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559507.4293893059,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 559476.0178117045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 515.7543457105465,
            "unit": "ns/iter",
            "extra": "iterations: 1358466\ncpu: 515.7242801807341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3036.613803721377,
            "unit": "ns/iter",
            "extra": "iterations: 236429\ncpu: 3036.4020488180486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2499.873221881151,
            "unit": "ns/iter",
            "extra": "iterations: 256732\ncpu: 2499.648660860338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2407.0330842163694,
            "unit": "ns/iter",
            "extra": "iterations: 290894\ncpu: 2406.8237914841634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1946.3489983820173,
            "unit": "ns/iter",
            "extra": "iterations: 359718\ncpu: 1946.2203726252278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16359.876154500726,
            "unit": "ns/iter",
            "extra": "iterations: 43417\ncpu: 16358.654444111742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30039.647802526495,
            "unit": "ns/iter",
            "extra": "iterations: 23254\ncpu: 30036.307732003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7198.660853210819,
            "unit": "ns/iter",
            "extra": "iterations: 97303\ncpu: 7198.388538893902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7147.296417302848,
            "unit": "ns/iter",
            "extra": "iterations: 97943\ncpu: 7146.8997273924615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7183.909211242307,
            "unit": "ns/iter",
            "extra": "iterations: 97457\ncpu: 7183.653303508172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14625.89418762553,
            "unit": "ns/iter",
            "extra": "iterations: 47915\ncpu: 14624.919127621955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14089.153333466213,
            "unit": "ns/iter",
            "extra": "iterations: 49963\ncpu: 14087.58080979914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5177.015361836624,
            "unit": "ns/iter",
            "extra": "iterations: 135075\ncpu: 5176.849898204715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25951.36787026495,
            "unit": "ns/iter",
            "extra": "iterations: 26947\ncpu: 25950.079786247334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20504.537422310437,
            "unit": "ns/iter",
            "extra": "iterations: 34271\ncpu: 20503.845817163434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20494.526439414745,
            "unit": "ns/iter",
            "extra": "iterations: 34059\ncpu: 20493.567045421027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20974.80515046236,
            "unit": "ns/iter",
            "extra": "iterations: 31337\ncpu: 20973.446724319332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49645.74422231634,
            "unit": "ns/iter",
            "extra": "iterations: 14106\ncpu: 49643.27236636851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 152497.07737448558,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 152491.54531623598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128579.54981618204,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 128579.08088235432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 127768.14649330969,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 127763.68796923566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128719.26486682113,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 128714.66618022782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82148.89712273348,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82148.49089841527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128725.84744498268,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 128720.9063782172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5386.4950543363475,
            "unit": "ns/iter",
            "extra": "iterations: 129103\ncpu: 5386.393809593904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26840.99865565467,
            "unit": "ns/iter",
            "extra": "iterations: 26035\ncpu: 26840.338006529502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21630.500293563528,
            "unit": "ns/iter",
            "extra": "iterations: 32361\ncpu: 21630.400791076074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22099.61753454172,
            "unit": "ns/iter",
            "extra": "iterations: 31629\ncpu: 22099.490973473872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21578.905133003762,
            "unit": "ns/iter",
            "extra": "iterations: 32593\ncpu: 21578.501518731046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47713.038382873136,
            "unit": "ns/iter",
            "extra": "iterations: 14668\ncpu: 47712.1011726207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154265.9462505333,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 154265.1495448629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127044.10217785498,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127041.68784029155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126243.16231781417,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 126239.89562713598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125693.36089687452,
            "unit": "ns/iter",
            "extra": "iterations: 5575\ncpu: 125687.62331838394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81695.36285882042,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 81693.49736379624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129062.93560887102,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 129059.83394833966 ns\nthreads: 1"
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
        "date": 1705778454793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1360.1902536427888,
            "unit": "ns/iter",
            "extra": "iterations: 508826\ncpu: 1360.1545518507312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15990.873441350108,
            "unit": "ns/iter",
            "extra": "iterations: 51968\ncpu: 15990.684652093594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33600.2465569775,
            "unit": "ns/iter",
            "extra": "iterations: 24615\ncpu: 33599.82124720699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49567.79288579711,
            "unit": "ns/iter",
            "extra": "iterations: 16952\ncpu: 49567.1661160925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54696.344500007406,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54694.69 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69192.25848893377,
            "unit": "ns/iter",
            "extra": "iterations: 12693\ncpu: 69190.74292917355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82106.84838679219,
            "unit": "ns/iter",
            "extra": "iterations: 10507\ncpu: 82105.5581992957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95454.95279160222,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 95455.37866224434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111310.65954998822,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 111309.9590897468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1139.6596629679168,
            "unit": "ns/iter",
            "extra": "iterations: 617864\ncpu: 1139.6428663913084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 932.5319234870473,
            "unit": "ns/iter",
            "extra": "iterations: 750200\ncpu: 932.4997334044243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 954.6484032655025,
            "unit": "ns/iter",
            "extra": "iterations: 732996\ncpu: 954.6238997211433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 921.6082849806616,
            "unit": "ns/iter",
            "extra": "iterations: 756767\ncpu: 921.5880185050358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1841.5383801704095,
            "unit": "ns/iter",
            "extra": "iterations: 380040\ncpu: 1841.4887906536158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5197.3844974204085,
            "unit": "ns/iter",
            "extra": "iterations: 151936\ncpu: 5197.225147430497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24213.231171884683,
            "unit": "ns/iter",
            "extra": "iterations: 34005\ncpu: 24212.853992059943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19650.002190217474,
            "unit": "ns/iter",
            "extra": "iterations: 42005\ncpu: 19649.820259492913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19191.594296439576,
            "unit": "ns/iter",
            "extra": "iterations: 43692\ncpu: 19191.080747047523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19772.86151285864,
            "unit": "ns/iter",
            "extra": "iterations: 40863\ncpu: 19772.49100653405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54565.18820000156,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54563.16000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 550789.6720000645,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550777.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553127.5173065413,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 553129.7042164871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 554715.0333333443,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 554701.3461538451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551498.9686700493,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 551472.1867007683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325422.6993635737,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 325417.78360164847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559050.3889967694,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 559043.6893203871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2386840.3682864364,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2386773.6572890077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1121014.483675865,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1121002.6602176563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3351901.382671837,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3351742.960288807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7526.520279907337,
            "unit": "ns/iter",
            "extra": "iterations: 112180\ncpu: 7526.355856658935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41022.495510606575,
            "unit": "ns/iter",
            "extra": "iterations: 20270\ncpu: 41021.554020720316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32189.94601980055,
            "unit": "ns/iter",
            "extra": "iterations: 25250\ncpu: 32189.481188118883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31871.24376170242,
            "unit": "ns/iter",
            "extra": "iterations: 26169\ncpu: 31869.891856777027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32045.347333464182,
            "unit": "ns/iter",
            "extra": "iterations: 25595\ncpu: 32044.33287751524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66167.31863007911,
            "unit": "ns/iter",
            "extra": "iterations: 13081\ncpu: 66165.20143719907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 587099.2310000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587101.0000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592557.9443312797,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 592548.8798370673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584983.695040166,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 584951.0723860568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588273.2912751763,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 588249.5973154347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343863.51853360987,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 343852.6680244385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575231.7491770639,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 575206.3199473295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2532827.4180328487,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2532753.825136613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1100618.703440123,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1100583.392645316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5236.825735056634,
            "unit": "ns/iter",
            "extra": "iterations: 151723\ncpu: 5236.699775248297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23659.480946915515,
            "unit": "ns/iter",
            "extra": "iterations: 34850\ncpu: 23658.57388809186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19050.20489451155,
            "unit": "ns/iter",
            "extra": "iterations: 43559\ncpu: 19049.982781973853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18653.99610815738,
            "unit": "ns/iter",
            "extra": "iterations: 44195\ncpu: 18653.34540106335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18768.63518408188,
            "unit": "ns/iter",
            "extra": "iterations: 43622\ncpu: 18768.33707762128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52396.08220000491,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52392.76000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 562225.5719999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562227.8000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 572565.485677116,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 572553.5156249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568818.0090791598,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 568805.8365758779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566968.9514248294,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 566949.5466321275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334108.7355564267,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 334102.21015897626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560261.4500322869,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 560252.417794972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 543.7644667898564,
            "unit": "ns/iter",
            "extra": "iterations: 1240721\ncpu: 543.7406153357589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2993.7177140706963,
            "unit": "ns/iter",
            "extra": "iterations: 233848\ncpu: 2993.695905032335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2366.5925034179472,
            "unit": "ns/iter",
            "extra": "iterations: 284503\ncpu: 2366.53075714492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2411.9107213620223,
            "unit": "ns/iter",
            "extra": "iterations: 290215\ncpu: 2411.8832589631666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1936.0520177068208,
            "unit": "ns/iter",
            "extra": "iterations: 361896\ncpu: 1936.0266485399018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15925.31588332221,
            "unit": "ns/iter",
            "extra": "iterations: 43744\ncpu: 15924.723390636393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29785.287196498397,
            "unit": "ns/iter",
            "extra": "iterations: 23517\ncpu: 29784.81524003933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7253.104994142456,
            "unit": "ns/iter",
            "extra": "iterations: 96453\ncpu: 7252.910744092901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7226.571521780103,
            "unit": "ns/iter",
            "extra": "iterations: 96558\ncpu: 7226.3758569978345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7232.627245118535,
            "unit": "ns/iter",
            "extra": "iterations: 95819\ncpu: 7232.269174172084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14578.89409011291,
            "unit": "ns/iter",
            "extra": "iterations: 47852\ncpu: 14578.423054417968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13710.859655979706,
            "unit": "ns/iter",
            "extra": "iterations: 51160\ncpu: 13710.478889757644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5161.443370768194,
            "unit": "ns/iter",
            "extra": "iterations: 135257\ncpu: 5161.228624026846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26127.362672639836,
            "unit": "ns/iter",
            "extra": "iterations: 26790\ncpu: 26127.200447928168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20519.73740350221,
            "unit": "ns/iter",
            "extra": "iterations: 33938\ncpu: 20519.10837409385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20682.96022979578,
            "unit": "ns/iter",
            "extra": "iterations: 33769\ncpu: 20683.061387663256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20880.05620022315,
            "unit": "ns/iter",
            "extra": "iterations: 33523\ncpu: 20878.990543806034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50002.21555475717,
            "unit": "ns/iter",
            "extra": "iterations: 14015\ncpu: 50001.862290403056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154188.22821760504,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 154182.86156568018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129762.29090908551,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129761.02040816085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129363.27712418653,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 129356.48926237278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130282.05879058236,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130279.24598730948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81857.1412429374,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 81854.22551788995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130072.41212457589,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 130069.16944753368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5353.814331575711,
            "unit": "ns/iter",
            "extra": "iterations: 130830\ncpu: 5353.837804784854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25240.211116720864,
            "unit": "ns/iter",
            "extra": "iterations: 27724\ncpu: 25239.005915452337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21639.102658538428,
            "unit": "ns/iter",
            "extra": "iterations: 32311\ncpu: 21638.58128810617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21492.50651185626,
            "unit": "ns/iter",
            "extra": "iterations: 32556\ncpu: 21491.411721341883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22738.180380264323,
            "unit": "ns/iter",
            "extra": "iterations: 30663\ncpu: 22738.075204643632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48242.40024757772,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 48241.31077642548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151497.72941691696,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 151489.03690762148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126535.42619091283,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 126527.62180764409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127049.81423069866,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 127044.7093343105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126280.62612450443,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 126274.27132061905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81780.14794905401,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81779.66577071464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128011.14178831625,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 128004.81751824837 ns\nthreads: 1"
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
        "date": 1705953595825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1344.691897417456,
            "unit": "ns/iter",
            "extra": "iterations: 521414\ncpu: 1344.6136850947619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16132.204305756124,
            "unit": "ns/iter",
            "extra": "iterations: 50537\ncpu: 16131.764845558702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33208.688898835506,
            "unit": "ns/iter",
            "extra": "iterations: 24574\ncpu: 33208.47643851225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49255.46699853615,
            "unit": "ns/iter",
            "extra": "iterations: 17075\ncpu: 49255.0980966325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54994.14980000665,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54994.48999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69418.23355290003,
            "unit": "ns/iter",
            "extra": "iterations: 12601\ncpu: 69414.95913022777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82346.39866539864,
            "unit": "ns/iter",
            "extra": "iterations: 10490\ncpu: 82341.47759771209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95809.29579028771,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 95806.8643785405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111732.67471410062,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 111728.97077509516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1169.658267231015,
            "unit": "ns/iter",
            "extra": "iterations: 600080\ncpu: 1169.650879882684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.5264330906423,
            "unit": "ns/iter",
            "extra": "iterations: 743027\ncpu: 958.4539996527693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 944.7051051503793,
            "unit": "ns/iter",
            "extra": "iterations: 742936\ncpu: 944.6636049403988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 928.3402622508042,
            "unit": "ns/iter",
            "extra": "iterations: 756299\ncpu: 928.311686251073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1818.280321867282,
            "unit": "ns/iter",
            "extra": "iterations: 384879\ncpu: 1818.2327432777583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5192.02594287519,
            "unit": "ns/iter",
            "extra": "iterations: 153838\ncpu: 5191.794615114603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24027.593286886822,
            "unit": "ns/iter",
            "extra": "iterations: 33874\ncpu: 24027.248036842448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19667.701798248065,
            "unit": "ns/iter",
            "extra": "iterations: 41596\ncpu: 19667.068948937336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19224.072588506107,
            "unit": "ns/iter",
            "extra": "iterations: 42059\ncpu: 19223.136546280228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19888.710836004244,
            "unit": "ns/iter",
            "extra": "iterations: 40873\ncpu: 19887.39999510676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54439.00939999367,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54436.85000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 558314.0040000671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558257.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556910.0824807712,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 556878.1329923285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559905.3225191294,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 559875.0636132321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561078.486696973,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 561062.7514600914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332670.36091952986,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 332664.29118774005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559843.9582262008,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 559810.2185089961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2370685.8209718815,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2370628.3887467994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1084437.524590148,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1084405.5035128817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3318278.7285710447,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3318198.9285714203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7662.236917082947,
            "unit": "ns/iter",
            "extra": "iterations: 109857\ncpu: 7661.761198649173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40936.5242517045,
            "unit": "ns/iter",
            "extra": "iterations: 20246\ncpu: 40935.61691198275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32411.376809332927,
            "unit": "ns/iter",
            "extra": "iterations: 25631\ncpu: 32411.228590378974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32170.350172259783,
            "unit": "ns/iter",
            "extra": "iterations: 25833\ncpu: 32170.15445360566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32187.287876999933,
            "unit": "ns/iter",
            "extra": "iterations: 25365\ncpu: 32186.24876798742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67845.98573014684,
            "unit": "ns/iter",
            "extra": "iterations: 12614\ncpu: 67844.0621531635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588632.0509999904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588620.199999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590470.1302293527,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 590449.7300944645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582929.5282638523,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 582917.2947510128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584198.5573440176,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 584181.5560026851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344903.69692184,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 344901.1444356765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576816.1351706181,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 576804.5275590555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2513342.7500000987,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2513248.0978260967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1098394.840801871,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1098368.7499999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5254.303215073522,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 5254.19059906866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23459.542922036344,
            "unit": "ns/iter",
            "extra": "iterations: 34784\ncpu: 23459.222631094668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18913.834683048994,
            "unit": "ns/iter",
            "extra": "iterations: 42972\ncpu: 18913.757795773974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18485.350111399137,
            "unit": "ns/iter",
            "extra": "iterations: 43986\ncpu: 18485.465830036926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19003.06808569536,
            "unit": "ns/iter",
            "extra": "iterations: 43269\ncpu: 19002.72943677925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52816.359600001306,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52814.269999999655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 561273.2099999676,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561252.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574342.2837662654,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 574331.4935064929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566011.8492268118,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565987.6288659837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566972.0593607293,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 566953.0984996727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334254.5072298086,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 334242.38964992337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 556940.9556962507,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 556913.1645569593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.4400725010561,
            "unit": "ns/iter",
            "extra": "iterations: 1340670\ncpu: 523.4277637300729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3005.5763877836516,
            "unit": "ns/iter",
            "extra": "iterations: 232439\ncpu: 3005.4749848347233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2280.576382404991,
            "unit": "ns/iter",
            "extra": "iterations: 306314\ncpu: 2280.521621603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2364.850980882275,
            "unit": "ns/iter",
            "extra": "iterations: 296009\ncpu: 2364.7270860007716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1935.2770951599618,
            "unit": "ns/iter",
            "extra": "iterations: 362168\ncpu: 1935.2888714629698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16326.771139705526,
            "unit": "ns/iter",
            "extra": "iterations: 43520\ncpu: 16326.596966911691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29852.463656578693,
            "unit": "ns/iter",
            "extra": "iterations: 23388\ncpu: 29852.441422952164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7231.283222916541,
            "unit": "ns/iter",
            "extra": "iterations: 96906\ncpu: 7231.219945101409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7247.515214219051,
            "unit": "ns/iter",
            "extra": "iterations: 96653\ncpu: 7247.313585713766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7168.638839871732,
            "unit": "ns/iter",
            "extra": "iterations: 97472\ncpu: 7168.614576493821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14682.60968708749,
            "unit": "ns/iter",
            "extra": "iterations: 47713\ncpu: 14682.71330664574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13575.387053151715,
            "unit": "ns/iter",
            "extra": "iterations: 51024\ncpu: 13574.94512386311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5160.34951620523,
            "unit": "ns/iter",
            "extra": "iterations: 136008\ncpu: 5160.239103582163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25657.390278941242,
            "unit": "ns/iter",
            "extra": "iterations: 25059\ncpu: 25657.356638333273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20608.00002929005,
            "unit": "ns/iter",
            "extra": "iterations: 34138\ncpu: 20607.844630616946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20429.53718742594,
            "unit": "ns/iter",
            "extra": "iterations: 34232\ncpu: 20429.522084598895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20966.852146691046,
            "unit": "ns/iter",
            "extra": "iterations: 33540\ncpu: 20966.67262969586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49386.25701562041,
            "unit": "ns/iter",
            "extra": "iterations: 14147\ncpu: 49384.87311797478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 151747.972288366,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151745.8973803871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128807.76915992751,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 128808.6219602071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 127498.46842878239,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 127496.89794419875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128105.68628171916,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 128099.41154836348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81779.8787558755,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 81777.30046948444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128208.54723903972,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 128206.69601907876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5300.030165413001,
            "unit": "ns/iter",
            "extra": "iterations: 133000\ncpu: 5300.024060150406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25122.950005410647,
            "unit": "ns/iter",
            "extra": "iterations: 27723\ncpu: 25122.69234931265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21953.35745147125,
            "unit": "ns/iter",
            "extra": "iterations: 31940\ncpu: 21952.896055103476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21348.901041507244,
            "unit": "ns/iter",
            "extra": "iterations: 32933\ncpu: 21348.82336865786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21161.392038090697,
            "unit": "ns/iter",
            "extra": "iterations: 33183\ncpu: 21161.36877316696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48679.40715277383,
            "unit": "ns/iter",
            "extra": "iterations: 14400\ncpu: 48679.29861111126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 149679.56233878466,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 149641.50902837535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127332.45305675511,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127331.65938864603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125273.58578605717,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 125274.04881550542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124947.07916516704,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 124945.5379632949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81162.56140556416,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81161.63903805769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128926.62162659373,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128922.76482467314 ns\nthreads: 1"
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
        "date": 1705955627677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1314.1261647596662,
            "unit": "ns/iter",
            "extra": "iterations: 530045\ncpu: 1314.0378647096002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15706.585224575123,
            "unit": "ns/iter",
            "extra": "iterations: 52655\ncpu: 15705.877884341466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33606.42742722464,
            "unit": "ns/iter",
            "extra": "iterations: 24596\ncpu: 33603.88681086356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50426.6910176076,
            "unit": "ns/iter",
            "extra": "iterations: 16755\ncpu: 50424.94180841542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55221.951000004316,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55219.44999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70459.37461920734,
            "unit": "ns/iter",
            "extra": "iterations: 12474\ncpu: 70456.86227352895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83727.12251369105,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 83725.37714999523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96716.3497334557,
            "unit": "ns/iter",
            "extra": "iterations: 9004\ncpu: 96715.52643269658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112330.0273937877,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 112327.83766645526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.878340648213,
            "unit": "ns/iter",
            "extra": "iterations: 614963\ncpu: 1138.8348567312178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 947.8256529272985,
            "unit": "ns/iter",
            "extra": "iterations: 736376\ncpu: 947.8318141818853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 959.9759687247301,
            "unit": "ns/iter",
            "extra": "iterations: 727219\ncpu: 959.9633672937583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 934.9004653574578,
            "unit": "ns/iter",
            "extra": "iterations: 748242\ncpu: 934.8768179278896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1829.596408392234,
            "unit": "ns/iter",
            "extra": "iterations: 380164\ncpu: 1829.5148935722468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5203.35045621118,
            "unit": "ns/iter",
            "extra": "iterations: 153109\ncpu: 5203.341410367784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24744.35023222007,
            "unit": "ns/iter",
            "extra": "iterations: 33158\ncpu: 24743.147958260437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19749.174242792575,
            "unit": "ns/iter",
            "extra": "iterations: 41138\ncpu: 19748.432106568158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19399.361638289774,
            "unit": "ns/iter",
            "extra": "iterations: 41995\ncpu: 19398.399809501163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19788.964531806087,
            "unit": "ns/iter",
            "extra": "iterations: 41361\ncpu: 19788.70433500151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54307.79649999522,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54305.37999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 550098.0499999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550078.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559736.1695568719,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 559724.598587027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558470.8141934918,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 558462.9032258058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561615.9682642892,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 561590.997409328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329622.0418747653,
            "unit": "ns/iter",
            "extra": "iterations: 2603\ncpu: 329615.36688436463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555270.9050350755,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 555260.9305289993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2377843.5758354687,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2377731.362467872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095442.7105881383,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1095423.1764705887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3331537.3501804983,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3328385.920577619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7695.8274195606,
            "unit": "ns/iter",
            "extra": "iterations: 109462\ncpu: 7695.530869160068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40576.80342047484,
            "unit": "ns/iter",
            "extra": "iterations: 20465\ncpu: 40576.301001710155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32407.03579830648,
            "unit": "ns/iter",
            "extra": "iterations: 25504\ncpu: 32405.677540778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32501.787273227936,
            "unit": "ns/iter",
            "extra": "iterations: 25521\ncpu: 32500.80717840218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31974.594544184605,
            "unit": "ns/iter",
            "extra": "iterations: 25734\ncpu: 31973.630216833644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67224.56108770503,
            "unit": "ns/iter",
            "extra": "iterations: 13055\ncpu: 67221.37112217543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 586271.3520000398,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586275.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594515.9850238606,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 594509.5983662354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584928.7523426346,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 584906.7603748316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584504.2263017489,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 584472.6301735654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345321.58270530583,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 345309.6786989269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575933.483892162,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 575911.308349773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2529351.838356203,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2529204.109589033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1116987.6638554484,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1116958.4337349408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5285.095761443911,
            "unit": "ns/iter",
            "extra": "iterations: 150405\ncpu: 5284.892124596938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 22956.800573927005,
            "unit": "ns/iter",
            "extra": "iterations: 35893\ncpu: 22956.17808486334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18804.14006865021,
            "unit": "ns/iter",
            "extra": "iterations: 43700\ncpu: 18803.53089244843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18819.874861980126,
            "unit": "ns/iter",
            "extra": "iterations: 43472\ncpu: 18819.470003680537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18793.611603250185,
            "unit": "ns/iter",
            "extra": "iterations: 43574\ncpu: 18792.988938357634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53343.41899999799,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53341.139999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 564487.6129999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564471.8999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574212.0476500624,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 574193.8642297622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569867.6061198042,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 569865.299479171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569462.9622886962,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 569448.8946684011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332975.67770168005,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 332962.9756468795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559729.6738991948,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 559732.992980219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.8897703592979,
            "unit": "ns/iter",
            "extra": "iterations: 1321151\ncpu: 532.8602105285449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2997.742378524929,
            "unit": "ns/iter",
            "extra": "iterations: 233649\ncpu: 2997.7299282256586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2378.6735440525263,
            "unit": "ns/iter",
            "extra": "iterations: 294104\ncpu: 2378.6204879906354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2390.983735233396,
            "unit": "ns/iter",
            "extra": "iterations: 293149\ncpu: 2390.9755789717738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1935.4230380152535,
            "unit": "ns/iter",
            "extra": "iterations: 361802\ncpu: 1935.3555259506547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15791.578676419937,
            "unit": "ns/iter",
            "extra": "iterations: 44289\ncpu: 15791.08356476784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30098.69692791719,
            "unit": "ns/iter",
            "extra": "iterations: 23209\ncpu: 30097.798267912956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7217.572636250647,
            "unit": "ns/iter",
            "extra": "iterations: 96880\ncpu: 7217.3338150288155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7230.791561224318,
            "unit": "ns/iter",
            "extra": "iterations: 96815\ncpu: 7230.665702628731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7188.805661750084,
            "unit": "ns/iter",
            "extra": "iterations: 97567\ncpu: 7188.703147580663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14478.991045209266,
            "unit": "ns/iter",
            "extra": "iterations: 48354\ncpu: 14478.603631550683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13665.232656250302,
            "unit": "ns/iter",
            "extra": "iterations: 51200\ncpu: 13664.652343750027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5207.291524970516,
            "unit": "ns/iter",
            "extra": "iterations: 134678\ncpu: 5207.263250122447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26193.955886769752,
            "unit": "ns/iter",
            "extra": "iterations: 26636\ncpu: 26192.95314611813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20835.745574692053,
            "unit": "ns/iter",
            "extra": "iterations: 33444\ncpu: 20834.953952876524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20563.934482553446,
            "unit": "ns/iter",
            "extra": "iterations: 33762\ncpu: 20563.180498785467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20934.783490835747,
            "unit": "ns/iter",
            "extra": "iterations: 33121\ncpu: 20934.340750581017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52081.289599993856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52078.64999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153540.0328121595,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 153534.39770975529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129709.80944443354,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 129705.64814814623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129171.03236546312,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129153.85611244795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128424.16425215518,
            "unit": "ns/iter",
            "extra": "iterations: 5108\ncpu: 128424.99999999923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82967.79637527274,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 82968.38426913111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129728.22358176443,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129717.64923989627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5170.733257737236,
            "unit": "ns/iter",
            "extra": "iterations: 135809\ncpu: 5170.465874868369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25095.4325349933,
            "unit": "ns/iter",
            "extra": "iterations: 27933\ncpu: 25094.103748254438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21658.65041782908,
            "unit": "ns/iter",
            "extra": "iterations: 32310\ncpu: 21657.90776849255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21308.68062201059,
            "unit": "ns/iter",
            "extra": "iterations: 32604\ncpu: 21307.90393816716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21973.388365076695,
            "unit": "ns/iter",
            "extra": "iterations: 31818\ncpu: 21972.138412219236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48491.86026503543,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 48489.98126691152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153120.7005464388,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153114.42622950705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128477.31450719532,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 128472.31450719734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128427.53884297429,
            "unit": "ns/iter",
            "extra": "iterations: 5445\ncpu: 128426.96051423081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125848.44154904743,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 125848.11798769487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82276.97314792628,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 82273.91512826667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129008.54217536168,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 129004.31002589822 ns\nthreads: 1"
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
        "date": 1705957162398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1339.1068865681384,
            "unit": "ns/iter",
            "extra": "iterations: 524659\ncpu: 1339.060227690748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16220.062624625749,
            "unit": "ns/iter",
            "extra": "iterations: 50651\ncpu: 16219.478391344694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33858.64490765529,
            "unit": "ns/iter",
            "extra": "iterations: 24419\ncpu: 33856.558417625616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50123.40167388689,
            "unit": "ns/iter",
            "extra": "iterations: 16847\ncpu: 50120.47842345817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55829.313499998534,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55823.16 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70538.37823543733,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 70530.91593877709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83800.69039559187,
            "unit": "ns/iter",
            "extra": "iterations: 10339\ncpu: 83798.24934713224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96697.56007966738,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96693.36136313333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112650.32035581149,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 112646.71909243254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1132.8424761898173,
            "unit": "ns/iter",
            "extra": "iterations: 618224\ncpu: 1132.766602396543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 945.1588044381411,
            "unit": "ns/iter",
            "extra": "iterations: 741944\ncpu: 945.1145908586078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 962.3027670243727,
            "unit": "ns/iter",
            "extra": "iterations: 727424\ncpu: 962.2284939732539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.774211328585,
            "unit": "ns/iter",
            "extra": "iterations: 749298\ncpu: 933.7151573873155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1849.629658255944,
            "unit": "ns/iter",
            "extra": "iterations: 379085\ncpu: 1849.4952319400697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5220.613896425038,
            "unit": "ns/iter",
            "extra": "iterations: 152586\ncpu: 5220.262016174484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23962.980213715597,
            "unit": "ns/iter",
            "extra": "iterations: 34064\ncpu: 23961.31399718177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19540.324605828693,
            "unit": "ns/iter",
            "extra": "iterations: 41860\ncpu: 19538.970377448615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19318.211774208685,
            "unit": "ns/iter",
            "extra": "iterations: 42092\ncpu: 19315.850993062853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19614.268136449973,
            "unit": "ns/iter",
            "extra": "iterations: 40278\ncpu: 19613.18337553994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55194.38219999983,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55192.309999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564973.2629999563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564951.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560891.3324607259,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 560870.9424083778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562918.5284237703,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 562879.1989664086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562645.4047927756,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 562605.8290155435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333838.84248662484,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 333824.3325705573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563800.1833441042,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 563777.0174305985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2395302.576227555,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2395267.4418604677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1096957.2772512545,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1096923.4597156392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3365029.036496316,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3364747.080291972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7624.701494421024,
            "unit": "ns/iter",
            "extra": "iterations: 110946\ncpu: 7624.21538406074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41337.82912997826,
            "unit": "ns/iter",
            "extra": "iterations: 20103\ncpu: 41334.88036611454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32771.2374055401,
            "unit": "ns/iter",
            "extra": "iterations: 25408\ncpu: 32768.875944584404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32383.066219716282,
            "unit": "ns/iter",
            "extra": "iterations: 25506\ncpu: 32381.70234454643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32880.1550580424,
            "unit": "ns/iter",
            "extra": "iterations: 25326\ncpu: 32878.03443101966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66876.09170747436,
            "unit": "ns/iter",
            "extra": "iterations: 12867\ncpu: 66873.77010958285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596178.9780000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596171.5000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600167.7214236989,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 600108.8980150588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 580380.3476222147,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 580330.5425318148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582367.9440372944,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 582326.1159227178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343704.0465850821,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 343686.5377023303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571731.4642153338,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 571693.3026920535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2535258.557377148,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2535061.202185792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1094932.593749931,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1094795.3124999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5356.1502610013495,
            "unit": "ns/iter",
            "extra": "iterations: 152681\ncpu: 5355.788866984106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 22845.298614403782,
            "unit": "ns/iter",
            "extra": "iterations: 35869\ncpu: 22843.31595528168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18811.085570353567,
            "unit": "ns/iter",
            "extra": "iterations: 43473\ncpu: 18810.02231269976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18725.22274146786,
            "unit": "ns/iter",
            "extra": "iterations: 43867\ncpu: 18723.02642077187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18786.415664451575,
            "unit": "ns/iter",
            "extra": "iterations: 43487\ncpu: 18785.073700186305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53016.81189999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53011.62000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579479.2389999657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579453.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578436.3847682236,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 578392.9139072876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 572267.7170059201,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 572232.3046618506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568469.9407166037,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 568440.4560260613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333551.9520211865,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 333522.4404986783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562848.9846644945,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 562805.0479233249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 548.0916662620249,
            "unit": "ns/iter",
            "extra": "iterations: 1276762\ncpu: 548.0579779160101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2960.5657522771994,
            "unit": "ns/iter",
            "extra": "iterations: 235239\ncpu: 2960.34883671498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2376.597169650803,
            "unit": "ns/iter",
            "extra": "iterations: 294310\ncpu: 2376.373891474979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2519.31662523522,
            "unit": "ns/iter",
            "extra": "iterations: 277969\ncpu: 2519.173361058248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.262240330178,
            "unit": "ns/iter",
            "extra": "iterations: 358099\ncpu: 1951.1464706687307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16520.605773559066,
            "unit": "ns/iter",
            "extra": "iterations: 42227\ncpu: 16519.084945650764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30027.341768348073,
            "unit": "ns/iter",
            "extra": "iterations: 23276\ncpu: 30024.75940883264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7255.966848937317,
            "unit": "ns/iter",
            "extra": "iterations: 96377\ncpu: 7255.558898907427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7219.290719481716,
            "unit": "ns/iter",
            "extra": "iterations: 97042\ncpu: 7218.740339234505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7171.032883140543,
            "unit": "ns/iter",
            "extra": "iterations: 97588\ncpu: 7170.28118211255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14581.043085880714,
            "unit": "ns/iter",
            "extra": "iterations: 48090\ncpu: 14579.85859846125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13655.389407069555,
            "unit": "ns/iter",
            "extra": "iterations: 51355\ncpu: 13654.072631681303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5217.539612924236,
            "unit": "ns/iter",
            "extra": "iterations: 134754\ncpu: 5217.313771761881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26162.48532934428,
            "unit": "ns/iter",
            "extra": "iterations: 26720\ncpu: 26162.548652694302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20938.11458271084,
            "unit": "ns/iter",
            "extra": "iterations: 33382\ncpu: 20937.220657839876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20818.267258528307,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 20817.429258588505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21145.857818611978,
            "unit": "ns/iter",
            "extra": "iterations: 32979\ncpu: 21143.588344097883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50255.462684435464,
            "unit": "ns/iter",
            "extra": "iterations: 13962\ncpu: 50251.88368428669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153940.2409240987,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 153929.262926295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130295.50288479714,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130285.76214405382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128856.78552970779,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 128851.7718715388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129810.17541257733,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129801.74300018359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82330.73255951589,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 82322.29065498173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129159.20294929278,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129145.84331797215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5299.108986919253,
            "unit": "ns/iter",
            "extra": "iterations: 132181\ncpu: 5298.632935142022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24854.63061942551,
            "unit": "ns/iter",
            "extra": "iterations: 28139\ncpu: 24852.311738157183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21367.343196531117,
            "unit": "ns/iter",
            "extra": "iterations: 32748\ncpu: 21365.674239648266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21527.52965504726,
            "unit": "ns/iter",
            "extra": "iterations: 32642\ncpu: 21526.248391642428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22311.380125729705,
            "unit": "ns/iter",
            "extra": "iterations: 31337\ncpu: 22309.477614321975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48435.57955174057,
            "unit": "ns/iter",
            "extra": "iterations: 14456\ncpu: 48431.4263973439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152394.86607142803,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 152380.68379790755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126937.71288743327,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126935.54468007898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127062.59138025549,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 127053.26422986158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127210.20347349552,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 127202.28519195615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81938.9247311925,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 81926.4843384761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127688.65015479804,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127677.14441813716 ns\nthreads: 1"
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
        "date": 1705958664275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1343.910134619282,
            "unit": "ns/iter",
            "extra": "iterations: 519911\ncpu: 1343.850774459475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16007.463451030824,
            "unit": "ns/iter",
            "extra": "iterations: 51602\ncpu: 16007.274911825125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33333.15886415968,
            "unit": "ns/iter",
            "extra": "iterations: 24757\ncpu: 33331.881891990146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49481.82286151114,
            "unit": "ns/iter",
            "extra": "iterations: 16998\ncpu: 49480.06236027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55199.18659999804,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55196.03999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69491.16298798328,
            "unit": "ns/iter",
            "extra": "iterations: 12731\ncpu: 69486.48967088213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82765.0258481434,
            "unit": "ns/iter",
            "extra": "iterations: 10523\ncpu: 82760.92369096268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96793.2683333351,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 96787.16666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112375.40068674671,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 112371.56629688316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1129.617874630638,
            "unit": "ns/iter",
            "extra": "iterations: 620231\ncpu: 1129.5834938917908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.4943688211745,
            "unit": "ns/iter",
            "extra": "iterations: 745581\ncpu: 938.4614146551467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 943.3811048160427,
            "unit": "ns/iter",
            "extra": "iterations: 742549\ncpu: 943.333032567548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 925.6549696764152,
            "unit": "ns/iter",
            "extra": "iterations: 755351\ncpu: 925.5936644023776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1859.1114538220081,
            "unit": "ns/iter",
            "extra": "iterations: 375438\ncpu: 1859.0334489316438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5263.166874056337,
            "unit": "ns/iter",
            "extra": "iterations: 151084\ncpu: 5262.906727383437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24192.12397719449,
            "unit": "ns/iter",
            "extra": "iterations: 33853\ncpu: 24191.005228487888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19545.958815064125,
            "unit": "ns/iter",
            "extra": "iterations: 41690\ncpu: 19544.44710961864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19513.13539854628,
            "unit": "ns/iter",
            "extra": "iterations: 41965\ncpu: 19512.543786488677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19695.80681846027,
            "unit": "ns/iter",
            "extra": "iterations: 40977\ncpu: 19695.434023964688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54927.28020000186,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54926.89999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 549849.375000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549843.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562458.9354422531,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562451.387992255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557841.9381443284,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 557830.7345360834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559378.7438867678,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 559358.3655083653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331911.4925770617,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 331911.22953939764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560987.0198463912,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 560974.9679897552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2394708.9177377317,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2394647.8149100267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1112674.3988095692,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1112649.047619051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3359033.7065217113,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3358920.2898550704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7563.4404849306875,
            "unit": "ns/iter",
            "extra": "iterations: 111686\ncpu: 7563.304263739408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40965.87795391796,
            "unit": "ns/iter",
            "extra": "iterations: 20312\ncpu: 40965.015754233944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31758.07573318523,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 31757.826547838748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32279.02145551938,
            "unit": "ns/iter",
            "extra": "iterations: 25448\ncpu: 32278.497327884237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31914.727668845735,
            "unit": "ns/iter",
            "extra": "iterations: 25704\ncpu: 31914.873171490835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 65612.17460196507,
            "unit": "ns/iter",
            "extra": "iterations: 13127\ncpu: 65611.99817170738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 584160.0290000315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584162.7999999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592458.4962457888,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 592444.982935155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585869.7962085062,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 585860.528097495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584606.6271871316,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 584594.6837146714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345487.6003153213,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 345475.9952700038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576365.773622053,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 576362.7296587914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2554841.8794520725,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2554790.1369863017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1138334.771498785,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1138302.211302219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5272.830668394981,
            "unit": "ns/iter",
            "extra": "iterations: 152724\ncpu: 5272.696498258277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24357.630925894886,
            "unit": "ns/iter",
            "extra": "iterations: 35058\ncpu: 24357.1310399908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19134.336549296342,
            "unit": "ns/iter",
            "extra": "iterations: 42600\ncpu: 19133.990610328525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19032.897030485063,
            "unit": "ns/iter",
            "extra": "iterations: 43071\ncpu: 19032.14924194935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18467.87659325202,
            "unit": "ns/iter",
            "extra": "iterations: 42680\ncpu: 18467.778819118917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52765.11770000525,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52762.870000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569149.6499999857,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569143.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578344.2763419402,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 578327.8992710403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575340.5361366348,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 575336.5308804209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567472.8577075313,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 567462.0553359714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333478.4525714418,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 333467.19999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560542.9110115145,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 560538.7323943684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 531.4254938005664,
            "unit": "ns/iter",
            "extra": "iterations: 1321333\ncpu: 531.4151693782007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3013.052534835073,
            "unit": "ns/iter",
            "extra": "iterations: 229581\ncpu: 3013.021547950368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2400.40016775383,
            "unit": "ns/iter",
            "extra": "iterations: 292095\ncpu: 2400.330714322395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2397.5267138881527,
            "unit": "ns/iter",
            "extra": "iterations: 291253\ncpu: 2397.5110985981346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1937.323154303541,
            "unit": "ns/iter",
            "extra": "iterations: 359661\ncpu: 1937.3101337092462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16397.05311648138,
            "unit": "ns/iter",
            "extra": "iterations: 42548\ncpu: 16395.99511140373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29740.831858408816,
            "unit": "ns/iter",
            "extra": "iterations: 23504\ncpu: 29739.176310414834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7195.456128851925,
            "unit": "ns/iter",
            "extra": "iterations: 96111\ncpu: 7194.944387218912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7127.377546047152,
            "unit": "ns/iter",
            "extra": "iterations: 98486\ncpu: 7127.263773531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7154.730427608062,
            "unit": "ns/iter",
            "extra": "iterations: 98174\ncpu: 7154.150793489112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14474.111632910703,
            "unit": "ns/iter",
            "extra": "iterations: 48337\ncpu: 14473.31650702362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13558.012844854853,
            "unit": "ns/iter",
            "extra": "iterations: 51616\ncpu: 13557.338809671604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5143.139336004203,
            "unit": "ns/iter",
            "extra": "iterations: 135995\ncpu: 5142.786131843104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25983.089259205277,
            "unit": "ns/iter",
            "extra": "iterations: 26944\ncpu: 25982.25207838496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20814.251192463693,
            "unit": "ns/iter",
            "extra": "iterations: 33544\ncpu: 20813.316837586524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20779.48068567493,
            "unit": "ns/iter",
            "extra": "iterations: 33602\ncpu: 20779.084578299102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21283.324498284976,
            "unit": "ns/iter",
            "extra": "iterations: 32937\ncpu: 21282.38758842658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50054.39289999458,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50052.360000000815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 152519.7162790626,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 152517.78516057652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129804.60190367821,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 129801.10115714833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129659.04462135573,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129659.76670986762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129663.74080950991,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 129656.1084292613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82794.01611184387,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 82790.38028669593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130684.36216926538,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 130681.06586601427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5394.892160510552,
            "unit": "ns/iter",
            "extra": "iterations: 128988\ncpu: 5394.721214376591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26079.039024025587,
            "unit": "ns/iter",
            "extra": "iterations: 26804\ncpu: 26078.61140128312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21943.16952302796,
            "unit": "ns/iter",
            "extra": "iterations: 31742\ncpu: 21942.817087770523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21724.618146622597,
            "unit": "ns/iter",
            "extra": "iterations: 32028\ncpu: 21724.740851754443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22230.168585655607,
            "unit": "ns/iter",
            "extra": "iterations: 31527\ncpu: 22229.955276429766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49051.66809466646,
            "unit": "ns/iter",
            "extra": "iterations: 14239\ncpu: 49051.1974155492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151112.3876404442,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 151110.9334485727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129269.59974139804,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 129270.41004802441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127952.3168316635,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 127944.04107077545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127012.25277728353,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127008.61409579095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82888.09837621287,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82886.13251155546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130732.59792668077,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 130727.26767863726 ns\nthreads: 1"
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
        "date": 1705960430886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1344.9409148615284,
            "unit": "ns/iter",
            "extra": "iterations: 516712\ncpu: 1344.9000603817988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16239.256173566677,
            "unit": "ns/iter",
            "extra": "iterations: 51024\ncpu: 16238.242787707746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33815.85176422741,
            "unit": "ns/iter",
            "extra": "iterations: 24515\ncpu: 33815.688354068945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50073.85890190801,
            "unit": "ns/iter",
            "extra": "iterations: 16811\ncpu: 50074.25495211467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55658.441000002764,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55658.22000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69533.19832067062,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 69533.04278288687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83616.82205103103,
            "unit": "ns/iter",
            "extra": "iterations: 10385\ncpu: 83616.53346172362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96686.10857523265,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 96683.56968756928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113223.14030978098,
            "unit": "ns/iter",
            "extra": "iterations: 7683\ncpu: 113223.0899388259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.845130571564,
            "unit": "ns/iter",
            "extra": "iterations: 613265\ncpu: 1138.8316633103132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 954.3203848398987,
            "unit": "ns/iter",
            "extra": "iterations: 738593\ncpu: 954.297969246933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.3507874514498,
            "unit": "ns/iter",
            "extra": "iterations: 726648\ncpu: 963.3488291442362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 928.4202346523608,
            "unit": "ns/iter",
            "extra": "iterations: 745869\ncpu: 928.3890334629806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1833.4935784529644,
            "unit": "ns/iter",
            "extra": "iterations: 381528\ncpu: 1833.4093434820013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5226.569088900974,
            "unit": "ns/iter",
            "extra": "iterations: 153013\ncpu: 5226.416056152091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24001.27614374496,
            "unit": "ns/iter",
            "extra": "iterations: 34033\ncpu: 24000.45837863252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19656.94826756695,
            "unit": "ns/iter",
            "extra": "iterations: 41560\ncpu: 19656.75649663134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19475.612024602684,
            "unit": "ns/iter",
            "extra": "iterations: 41781\ncpu: 19474.648763792196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18975.839960307934,
            "unit": "ns/iter",
            "extra": "iterations: 42327\ncpu: 18975.5191721596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 53447.713100001696,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53448.12999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 545346.411999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545310.1000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562079.9942122245,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 562074.2765273302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 547764.9993585754,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 547740.9878127018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560488.3224567969,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560456.1100447857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330184.48621080857,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 330167.13260294683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558008.4421593837,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 557959.9614395897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2382179.071246841,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2382031.297709923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1088101.8108108565,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1088087.1915393663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3327611.764285621,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3327423.9285714254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7754.927400103138,
            "unit": "ns/iter",
            "extra": "iterations: 108912\ncpu: 7754.761642426909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40895.96380386996,
            "unit": "ns/iter",
            "extra": "iterations: 19864\ncpu: 40893.80285944437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32363.44295907311,
            "unit": "ns/iter",
            "extra": "iterations: 25508\ncpu: 32361.839422926107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32389.825727433672,
            "unit": "ns/iter",
            "extra": "iterations: 25638\ncpu: 32388.099695764067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32006.6256011712,
            "unit": "ns/iter",
            "extra": "iterations: 25991\ncpu: 32005.28644530783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66478.80771585536,
            "unit": "ns/iter",
            "extra": "iterations: 13064\ncpu: 66475.1760563382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 584499.4469999848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584448.700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589372.9993229742,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 589338.1178063627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584443.7644294818,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 584431.1409395988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579792.4743504486,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 579766.1558960658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343173.56862745737,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 343147.29411764734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572578.69155209,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 572554.7478716441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2545909.675824255,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2545807.41758241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1119666.5861650417,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1119655.8252427138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5284.131989519767,
            "unit": "ns/iter",
            "extra": "iterations: 151906\ncpu: 5284.169815543844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23546.44330614852,
            "unit": "ns/iter",
            "extra": "iterations: 34457\ncpu: 23546.09223089647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18652.207456473938,
            "unit": "ns/iter",
            "extra": "iterations: 43479\ncpu: 18652.00211596408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18408.1047864001,
            "unit": "ns/iter",
            "extra": "iterations: 43937\ncpu: 18408.041058788724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18299.54484111046,
            "unit": "ns/iter",
            "extra": "iterations: 42829\ncpu: 18299.334563029697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53508.010400003055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53508.43000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 567658.0519999561,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567653.5000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573713.3202615042,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 573705.7516339889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574241.1012328975,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 574235.5613238126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566134.5268260783,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 566127.0846800279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332227.8930581256,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 332218.7617260781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562617.3446726474,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562616.4955070601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.2599908322882,
            "unit": "ns/iter",
            "extra": "iterations: 1335124\ncpu: 523.2643559699289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3040.8897568304606,
            "unit": "ns/iter",
            "extra": "iterations: 235679\ncpu: 3040.9115788848358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2505.000579434308,
            "unit": "ns/iter",
            "extra": "iterations: 279583\ncpu: 2504.996369593269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2551.731718260825,
            "unit": "ns/iter",
            "extra": "iterations: 287500\ncpu: 2551.7186086956717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1956.2106725415524,
            "unit": "ns/iter",
            "extra": "iterations: 358134\ncpu: 1956.1820435926134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16119.670120144388,
            "unit": "ns/iter",
            "extra": "iterations: 43531\ncpu: 16119.563069996175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30061.63455178237,
            "unit": "ns/iter",
            "extra": "iterations: 23281\ncpu: 30061.56522486165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7255.117193818876,
            "unit": "ns/iter",
            "extra": "iterations: 96430\ncpu: 7255.097998548206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7203.74551516319,
            "unit": "ns/iter",
            "extra": "iterations: 96882\ncpu: 7203.410334220938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7213.140831144603,
            "unit": "ns/iter",
            "extra": "iterations: 97095\ncpu: 7212.6731551573685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14677.877826724542,
            "unit": "ns/iter",
            "extra": "iterations: 47670\ncpu: 14677.826725403795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13879.344461187067,
            "unit": "ns/iter",
            "extra": "iterations: 51103\ncpu: 13879.279102988237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5099.6921011877885,
            "unit": "ns/iter",
            "extra": "iterations: 135590\ncpu: 5099.495538018975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25757.828216507234,
            "unit": "ns/iter",
            "extra": "iterations: 26807\ncpu: 25757.059723206323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20840.078207147984,
            "unit": "ns/iter",
            "extra": "iterations: 33667\ncpu: 20839.703567291373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21408.05796886215,
            "unit": "ns/iter",
            "extra": "iterations: 33656\ncpu: 21407.998573805704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21220.571233953542,
            "unit": "ns/iter",
            "extra": "iterations: 33032\ncpu: 21220.041172196885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49709.129759621006,
            "unit": "ns/iter",
            "extra": "iterations: 14103\ncpu: 49708.955541374045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 150835.15709694114,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 150832.84336242403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129468.78437209265,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 129466.36279069788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129323.799226367,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 129321.67986737823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128959.80982273091,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 128957.57016248046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82968.11689229304,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82966.35668039983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129627.45509977668,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129625.1847745753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5172.298202452706,
            "unit": "ns/iter",
            "extra": "iterations: 136575\ncpu: 5172.2899505766245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26598.302594535555,
            "unit": "ns/iter",
            "extra": "iterations: 26286\ncpu: 26597.998934794363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21918.110526977303,
            "unit": "ns/iter",
            "extra": "iterations: 31766\ncpu: 21918.267959453784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22215.850924403952,
            "unit": "ns/iter",
            "extra": "iterations: 31588\ncpu: 22215.575535013148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21676.54007195751,
            "unit": "ns/iter",
            "extra": "iterations: 32242\ncpu: 21676.710501829708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49066.01015690248,
            "unit": "ns/iter",
            "extra": "iterations: 14276\ncpu: 49063.75735500166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150472.5261684302,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 150457.97975446764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129737.47369390077,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 129733.03899926426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128531.49394273614,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128532.54405286453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126733.26114534409,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 126733.14606741616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82177.14774859148,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82176.13742964354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129298.97076779824,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129298.70490286725 ns\nthreads: 1"
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
        "date": 1705962091317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1336.435207151952,
            "unit": "ns/iter",
            "extra": "iterations: 512981\ncpu: 1336.3680136301346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15855.975957549808,
            "unit": "ns/iter",
            "extra": "iterations: 51825\ncpu: 15855.424987940185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33253.77735132712,
            "unit": "ns/iter",
            "extra": "iterations: 24752\ncpu: 33252.08468002586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49485.50472390241,
            "unit": "ns/iter",
            "extra": "iterations: 17041\ncpu: 49483.35778416759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55291.839000005886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55288.70000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69087.77472657501,
            "unit": "ns/iter",
            "extra": "iterations: 12709\ncpu: 69084.50704225348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82055.27574751427,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 82052.91884195544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95320.15138827359,
            "unit": "ns/iter",
            "extra": "iterations: 9076\ncpu: 95317.981489643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111646.67186114097,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 111643.76029393144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.322475793149,
            "unit": "ns/iter",
            "extra": "iterations: 612846\ncpu: 1138.2964072540228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 924.0272025318874,
            "unit": "ns/iter",
            "extra": "iterations: 755812\ncpu: 923.9889020020853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 939.1188396550411,
            "unit": "ns/iter",
            "extra": "iterations: 746123\ncpu: 939.0753267222697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 928.6108468379151,
            "unit": "ns/iter",
            "extra": "iterations: 751537\ncpu: 928.5560125449585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1809.0955115200097,
            "unit": "ns/iter",
            "extra": "iterations: 386456\ncpu: 1808.9821350942934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5185.267922611438,
            "unit": "ns/iter",
            "extra": "iterations: 153563\ncpu: 5185.011363414362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24213.231166149395,
            "unit": "ns/iter",
            "extra": "iterations: 33915\ncpu: 24212.18929677138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19509.18388904647,
            "unit": "ns/iter",
            "extra": "iterations: 41748\ncpu: 19508.10577752232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19115.915228806585,
            "unit": "ns/iter",
            "extra": "iterations: 42656\ncpu: 19115.24052888225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19064.086632663602,
            "unit": "ns/iter",
            "extra": "iterations: 42155\ncpu: 19062.789704661387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54956.68180000166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54955.55000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 582388.3210000532,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582189.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560852.1105398589,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560838.3033419033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558762.7334191882,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558732.4533161614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553850.1341852942,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 553832.5878594257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326658.0484664819,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 326649.0723210904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 577705.3292525725,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 577683.3118556703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2366546.7117346996,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2366494.3877551015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073886.9081395415,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1073849.8837209304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3364070.6832742337,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3363980.4270462655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7715.053766204887,
            "unit": "ns/iter",
            "extra": "iterations: 108916\ncpu: 7714.7875426934415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41252.529008886755,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 41251.73457739836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32310.482972375314,
            "unit": "ns/iter",
            "extra": "iterations: 25811\ncpu: 32309.658672659036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32543.122721507658,
            "unit": "ns/iter",
            "extra": "iterations: 25236\ncpu: 32542.534474560158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32840.71143091791,
            "unit": "ns/iter",
            "extra": "iterations: 25571\ncpu: 32840.42469985527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66055.27949687117,
            "unit": "ns/iter",
            "extra": "iterations: 12959\ncpu: 66053.37603210109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 593470.1579999456,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593454.7999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591969.5682128472,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 591954.2291950907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 577782.5023474384,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 577767.2032193167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580887.5950797246,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 580872.1409574449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339160.1899224494,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 339151.5503875971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574070.8731196775,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 574061.4126880325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2532983.4223433696,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2532831.880108986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1083064.4345794905,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1083033.0607476672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5231.281345982795,
            "unit": "ns/iter",
            "extra": "iterations: 153999\ncpu: 5231.180072597874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23732.367618327193,
            "unit": "ns/iter",
            "extra": "iterations: 34291\ncpu: 23731.22685252703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18966.413143781014,
            "unit": "ns/iter",
            "extra": "iterations: 42697\ncpu: 18965.910953931325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18795.15466308019,
            "unit": "ns/iter",
            "extra": "iterations: 43126\ncpu: 18794.472012243303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19431.407080917594,
            "unit": "ns/iter",
            "extra": "iterations: 41746\ncpu: 19430.994586307756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53097.151099996154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53096.12000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 563057.898000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563034.2000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569258.871093714,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 569245.3124999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568105.2514506808,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 568093.5525467442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568139.1435035864,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 568107.8215901747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329017.97784451634,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 329001.990236576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562492.7352941489,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 562462.4680306889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.3835889101973,
            "unit": "ns/iter",
            "extra": "iterations: 1319303\ncpu: 532.3420017994388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3004.7868699466076,
            "unit": "ns/iter",
            "extra": "iterations: 232520\ncpu: 3004.6150868742566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2413.1274449290877,
            "unit": "ns/iter",
            "extra": "iterations: 291624\ncpu: 2413.021219104059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2379.337172889218,
            "unit": "ns/iter",
            "extra": "iterations: 292829\ncpu: 2379.210050917107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1922.8492897954184,
            "unit": "ns/iter",
            "extra": "iterations: 363698\ncpu: 1922.7650413254887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16245.616523953346,
            "unit": "ns/iter",
            "extra": "iterations: 43210\ncpu: 16244.704929414438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30294.188950748132,
            "unit": "ns/iter",
            "extra": "iterations: 23350\ncpu: 30292.543897216372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7213.042255116749,
            "unit": "ns/iter",
            "extra": "iterations: 97077\ncpu: 7212.915520669219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7164.90455894559,
            "unit": "ns/iter",
            "extra": "iterations: 97369\ncpu: 7164.784479659856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7108.597333198442,
            "unit": "ns/iter",
            "extra": "iterations: 98620\ncpu: 7108.254917866599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14521.332138417303,
            "unit": "ns/iter",
            "extra": "iterations: 48260\ncpu: 14520.627849150198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13499.690641515557,
            "unit": "ns/iter",
            "extra": "iterations: 51846\ncpu: 13498.869729583781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5156.152277612764,
            "unit": "ns/iter",
            "extra": "iterations: 135844\ncpu: 5156.026765996313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27059.04159091687,
            "unit": "ns/iter",
            "extra": "iterations: 26953\ncpu: 27058.79493933888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20827.521824805386,
            "unit": "ns/iter",
            "extra": "iterations: 33494\ncpu: 20826.909297187456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20634.917188465955,
            "unit": "ns/iter",
            "extra": "iterations: 34017\ncpu: 20634.573889525727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20920.376435316255,
            "unit": "ns/iter",
            "extra": "iterations: 33355\ncpu: 20920.017988307827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49612.67725430984,
            "unit": "ns/iter",
            "extra": "iterations: 14073\ncpu: 49610.033397285326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153915.24387577013,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153909.23009623995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130175.48301605553,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130171.81784247843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133744.45238093715,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 133735.97268364698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129543.60538034273,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129533.59925788514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82828.60770598313,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 82824.58802608318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130265.05111940792,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130255.24253731148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5183.479681138657,
            "unit": "ns/iter",
            "extra": "iterations: 134604\ncpu: 5183.386080651395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25118.81422059403,
            "unit": "ns/iter",
            "extra": "iterations: 27861\ncpu: 25118.2692652811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21195.323396432213,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 21194.96925488297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21435.50644302364,
            "unit": "ns/iter",
            "extra": "iterations: 32671\ncpu: 21435.14125677231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21707.629956772613,
            "unit": "ns/iter",
            "extra": "iterations: 32153\ncpu: 21706.39442664756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47343.62022320242,
            "unit": "ns/iter",
            "extra": "iterations: 14785\ncpu: 47342.26580994301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151749.34606988658,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 151503.55895196254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128043.3794300436,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 128034.76434052088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126635.71312364565,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126621.81851048383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128398.99021055875,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 128356.87107499235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83081.59465875072,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 83075.8456973285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129330.96285343624,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 129328.86712252819 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}