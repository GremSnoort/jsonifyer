window.BENCHMARK_DATA = {
  "lastUpdate": 1702492944129,
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
      }
    ]
  }
}