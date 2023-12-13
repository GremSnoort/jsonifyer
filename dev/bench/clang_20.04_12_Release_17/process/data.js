window.BENCHMARK_DATA = {
  "lastUpdate": 1702490365511,
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
      }
    ]
  }
}