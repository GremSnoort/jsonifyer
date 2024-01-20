window.BENCHMARK_DATA = {
  "lastUpdate": 1705775478637,
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
      }
    ]
  }
}