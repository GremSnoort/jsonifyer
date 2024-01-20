window.BENCHMARK_DATA = {
  "lastUpdate": 1705775493412,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 20.04 Release c++-17": [
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
        "date": 1702490377450,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 683.8180282561129,
            "unit": "ns/iter",
            "extra": "iterations: 1021796\ncpu: 683.7655461559842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10669.42048500045,
            "unit": "ns/iter",
            "extra": "iterations: 77608\ncpu: 10668.630811256573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23717.099879870577,
            "unit": "ns/iter",
            "extra": "iterations: 34962\ncpu: 23715.985927578513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37409.57850904695,
            "unit": "ns/iter",
            "extra": "iterations: 22214\ncpu: 37406.581435131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47800.314236009006,
            "unit": "ns/iter",
            "extra": "iterations: 16669\ncpu: 47795.98656188129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57941.26032859562,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 57938.61964666254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58215.12920000486,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58210.87 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67717.03403527243,
            "unit": "ns/iter",
            "extra": "iterations: 12869\ncpu: 67715.78211205221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77637.19433844925,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 77635.01641671846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 560.2258150706597,
            "unit": "ns/iter",
            "extra": "iterations: 1250045\ncpu: 560.2062325756265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.2911000344489,
            "unit": "ns/iter",
            "extra": "iterations: 1484208\ncpu: 472.2822542392976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 473.7555685289909,
            "unit": "ns/iter",
            "extra": "iterations: 1474806\ncpu: 473.72054358335873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.98394706027995,
            "unit": "ns/iter",
            "extra": "iterations: 1472316\ncpu: 475.9531241934476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 956.9965969635971,
            "unit": "ns/iter",
            "extra": "iterations: 718476\ncpu: 956.9440036967153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4311.713914776622,
            "unit": "ns/iter",
            "extra": "iterations: 185630\ncpu: 4311.338145773852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19009.540209426246,
            "unit": "ns/iter",
            "extra": "iterations: 43261\ncpu: 19007.82691107461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15237.652278177186,
            "unit": "ns/iter",
            "extra": "iterations: 53793\ncpu: 15236.64974996746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14738.600581540948,
            "unit": "ns/iter",
            "extra": "iterations: 56402\ncpu: 14738.120988617391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14577.63575711099,
            "unit": "ns/iter",
            "extra": "iterations: 56207\ncpu: 14576.714644083515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46835.06239138563,
            "unit": "ns/iter",
            "extra": "iterations: 17839\ncpu: 46831.57127641692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 459426.3894179878,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 458412.53968253906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372358.94102453947,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372347.43865690794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373231.37179488444,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373208.8888888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377600.7071895301,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 377573.72549019736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227667.94809687635,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 227661.0061219054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373167.23435479385,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373144.9287872256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1902781.6926230108,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902617.0081967255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 773176.4039571297,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 773124.2374278643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2576918.1033519465,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2576778.4916201127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4228.626806443141,
            "unit": "ns/iter",
            "extra": "iterations: 188492\ncpu: 4228.468582220998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19063.349208179046,
            "unit": "ns/iter",
            "extra": "iterations: 43381\ncpu: 19062.762499711815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15343.67029640876,
            "unit": "ns/iter",
            "extra": "iterations: 54182\ncpu: 15343.20992211439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14632.597185576144,
            "unit": "ns/iter",
            "extra": "iterations: 56850\ncpu: 14632.276165347408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15000.703080623005,
            "unit": "ns/iter",
            "extra": "iterations: 55281\ncpu: 14999.962012264641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46856.353841853226,
            "unit": "ns/iter",
            "extra": "iterations: 17895\ncpu: 46854.17155630069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 473147.931842928,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473128.68047982355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389337.6220263949,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 389320.0440528621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380568.63676147716,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380541.4879649911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381206.6138316059,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 381195.83333333407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227057.27256081434,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 227058.67120062927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381929.07893593615,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 381928.5651984318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1917841.5852631684,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1917826.9473684246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758783.9304206972,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 758749.3527508077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4303.893741011635,
            "unit": "ns/iter",
            "extra": "iterations: 186356\ncpu: 4303.696688059426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19167.519759787752,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 19167.023905762875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15330.979177502259,
            "unit": "ns/iter",
            "extra": "iterations: 53836\ncpu: 15330.312430344025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14606.799569423136,
            "unit": "ns/iter",
            "extra": "iterations: 56668\ncpu: 14606.531022799423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14640.516038605647,
            "unit": "ns/iter",
            "extra": "iterations: 56364\ncpu: 14639.519906323158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46969.75007012452,
            "unit": "ns/iter",
            "extra": "iterations: 17825\ncpu: 46966.69845722332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465430.8180839244,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 465412.21743810514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381328.97569596703,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 381308.17498895316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375280.5339763315,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 375247.4353353779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375594.8614718474,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375576.796536798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229347.28883620558,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 229340.7582938386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375104.33016008843,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 375106.6637819104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.8887254110656,
            "unit": "ns/iter",
            "extra": "iterations: 2309521\ncpu: 302.887698358231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1693.6480469913142,
            "unit": "ns/iter",
            "extra": "iterations: 413183\ncpu: 1693.6609202217755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1277.9559323209867,
            "unit": "ns/iter",
            "extra": "iterations: 547703\ncpu: 1277.9665256535118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1277.2042185460737,
            "unit": "ns/iter",
            "extra": "iterations: 549431\ncpu: 1277.2155193281787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1054.6922307385744,
            "unit": "ns/iter",
            "extra": "iterations: 664735\ncpu: 1054.6760739241934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8056.534235229077,
            "unit": "ns/iter",
            "extra": "iterations: 86928\ncpu: 8056.4892784833055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19246.209354059458,
            "unit": "ns/iter",
            "extra": "iterations: 36412\ncpu: 19246.08370866768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4516.539984118761,
            "unit": "ns/iter",
            "extra": "iterations: 154899\ncpu: 4516.574671237421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4483.440931887173,
            "unit": "ns/iter",
            "extra": "iterations: 155126\ncpu: 4483.299382437474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4466.479974620237,
            "unit": "ns/iter",
            "extra": "iterations: 156027\ncpu: 4466.515410794331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9733.43696494787,
            "unit": "ns/iter",
            "extra": "iterations: 71722\ncpu: 9733.519701068097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8652.298121369578,
            "unit": "ns/iter",
            "extra": "iterations: 80910\ncpu: 8652.359411692094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3135.0441687367074,
            "unit": "ns/iter",
            "extra": "iterations: 222216\ncpu: 3135.0028800806144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15638.213145498778,
            "unit": "ns/iter",
            "extra": "iterations: 44791\ncpu: 15638.342524167805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12443.436490754588,
            "unit": "ns/iter",
            "extra": "iterations: 56354\ncpu: 12443.52840969586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12408.98079745403,
            "unit": "ns/iter",
            "extra": "iterations: 56555\ncpu: 12409.077888780988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12957.126933946667,
            "unit": "ns/iter",
            "extra": "iterations: 53776\ncpu: 12957.22813150829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28430.532668429612,
            "unit": "ns/iter",
            "extra": "iterations: 24565\ncpu: 28430.07123956871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98816.34716927647,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98817.1113934788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85553.46664218549,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85554.1926796412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84262.26473069533,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84262.94734305353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84018.79896472713,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84018.14132659139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54951.55856712819,
            "unit": "ns/iter",
            "extra": "iterations: 12618\ncpu: 54950.4517356156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85008.31750849605,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 85009.04565323025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3094.797823194159,
            "unit": "ns/iter",
            "extra": "iterations: 226203\ncpu: 3094.8227919169985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15416.498888277116,
            "unit": "ns/iter",
            "extra": "iterations: 45425\ncpu: 15416.616400660349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12313.265874202352,
            "unit": "ns/iter",
            "extra": "iterations: 56869\ncpu: 12313.082698833929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12126.362096173461,
            "unit": "ns/iter",
            "extra": "iterations: 57667\ncpu: 12126.304472228576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12784.008859076172,
            "unit": "ns/iter",
            "extra": "iterations: 54859\ncpu: 12783.924242148227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27450.311110237253,
            "unit": "ns/iter",
            "extra": "iterations: 25499\ncpu: 27450.531393387817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98174.93861247992,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98174.16958654604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83798.84688248858,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83794.24460431583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83315.36842731191,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83314.19224363475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82762.11363636267,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 82761.29224179045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55495.30202035935,
            "unit": "ns/iter",
            "extra": "iterations: 12572\ncpu: 55495.76041998014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84172.90920095604,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84171.888619855 ns\nthreads: 1"
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
        "date": 1702490377450,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 683.8180282561129,
            "unit": "ns/iter",
            "extra": "iterations: 1021796\ncpu: 683.7655461559842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10669.42048500045,
            "unit": "ns/iter",
            "extra": "iterations: 77608\ncpu: 10668.630811256573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23717.099879870577,
            "unit": "ns/iter",
            "extra": "iterations: 34962\ncpu: 23715.985927578513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37409.57850904695,
            "unit": "ns/iter",
            "extra": "iterations: 22214\ncpu: 37406.581435131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47800.314236009006,
            "unit": "ns/iter",
            "extra": "iterations: 16669\ncpu: 47795.98656188129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57941.26032859562,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 57938.61964666254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58215.12920000486,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58210.87 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67717.03403527243,
            "unit": "ns/iter",
            "extra": "iterations: 12869\ncpu: 67715.78211205221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77637.19433844925,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 77635.01641671846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 560.2258150706597,
            "unit": "ns/iter",
            "extra": "iterations: 1250045\ncpu: 560.2062325756265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.2911000344489,
            "unit": "ns/iter",
            "extra": "iterations: 1484208\ncpu: 472.2822542392976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 473.7555685289909,
            "unit": "ns/iter",
            "extra": "iterations: 1474806\ncpu: 473.72054358335873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.98394706027995,
            "unit": "ns/iter",
            "extra": "iterations: 1472316\ncpu: 475.9531241934476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 956.9965969635971,
            "unit": "ns/iter",
            "extra": "iterations: 718476\ncpu: 956.9440036967153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4311.713914776622,
            "unit": "ns/iter",
            "extra": "iterations: 185630\ncpu: 4311.338145773852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19009.540209426246,
            "unit": "ns/iter",
            "extra": "iterations: 43261\ncpu: 19007.82691107461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15237.652278177186,
            "unit": "ns/iter",
            "extra": "iterations: 53793\ncpu: 15236.64974996746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14738.600581540948,
            "unit": "ns/iter",
            "extra": "iterations: 56402\ncpu: 14738.120988617391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14577.63575711099,
            "unit": "ns/iter",
            "extra": "iterations: 56207\ncpu: 14576.714644083515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46835.06239138563,
            "unit": "ns/iter",
            "extra": "iterations: 17839\ncpu: 46831.57127641692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 459426.3894179878,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 458412.53968253906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372358.94102453947,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372347.43865690794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373231.37179488444,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373208.8888888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377600.7071895301,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 377573.72549019736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227667.94809687635,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 227661.0061219054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373167.23435479385,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373144.9287872256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1902781.6926230108,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902617.0081967255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 773176.4039571297,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 773124.2374278643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2576918.1033519465,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2576778.4916201127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4228.626806443141,
            "unit": "ns/iter",
            "extra": "iterations: 188492\ncpu: 4228.468582220998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19063.349208179046,
            "unit": "ns/iter",
            "extra": "iterations: 43381\ncpu: 19062.762499711815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15343.67029640876,
            "unit": "ns/iter",
            "extra": "iterations: 54182\ncpu: 15343.20992211439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14632.597185576144,
            "unit": "ns/iter",
            "extra": "iterations: 56850\ncpu: 14632.276165347408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15000.703080623005,
            "unit": "ns/iter",
            "extra": "iterations: 55281\ncpu: 14999.962012264641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46856.353841853226,
            "unit": "ns/iter",
            "extra": "iterations: 17895\ncpu: 46854.17155630069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 473147.931842928,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473128.68047982355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389337.6220263949,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 389320.0440528621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380568.63676147716,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380541.4879649911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381206.6138316059,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 381195.83333333407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227057.27256081434,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 227058.67120062927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381929.07893593615,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 381928.5651984318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1917841.5852631684,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1917826.9473684246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758783.9304206972,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 758749.3527508077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4303.893741011635,
            "unit": "ns/iter",
            "extra": "iterations: 186356\ncpu: 4303.696688059426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19167.519759787752,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 19167.023905762875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15330.979177502259,
            "unit": "ns/iter",
            "extra": "iterations: 53836\ncpu: 15330.312430344025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14606.799569423136,
            "unit": "ns/iter",
            "extra": "iterations: 56668\ncpu: 14606.531022799423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14640.516038605647,
            "unit": "ns/iter",
            "extra": "iterations: 56364\ncpu: 14639.519906323158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46969.75007012452,
            "unit": "ns/iter",
            "extra": "iterations: 17825\ncpu: 46966.69845722332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465430.8180839244,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 465412.21743810514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381328.97569596703,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 381308.17498895316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375280.5339763315,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 375247.4353353779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375594.8614718474,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375576.796536798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229347.28883620558,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 229340.7582938386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375104.33016008843,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 375106.6637819104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.8887254110656,
            "unit": "ns/iter",
            "extra": "iterations: 2309521\ncpu: 302.887698358231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1693.6480469913142,
            "unit": "ns/iter",
            "extra": "iterations: 413183\ncpu: 1693.6609202217755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1277.9559323209867,
            "unit": "ns/iter",
            "extra": "iterations: 547703\ncpu: 1277.9665256535118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1277.2042185460737,
            "unit": "ns/iter",
            "extra": "iterations: 549431\ncpu: 1277.2155193281787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1054.6922307385744,
            "unit": "ns/iter",
            "extra": "iterations: 664735\ncpu: 1054.6760739241934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8056.534235229077,
            "unit": "ns/iter",
            "extra": "iterations: 86928\ncpu: 8056.4892784833055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19246.209354059458,
            "unit": "ns/iter",
            "extra": "iterations: 36412\ncpu: 19246.08370866768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4516.539984118761,
            "unit": "ns/iter",
            "extra": "iterations: 154899\ncpu: 4516.574671237421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4483.440931887173,
            "unit": "ns/iter",
            "extra": "iterations: 155126\ncpu: 4483.299382437474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4466.479974620237,
            "unit": "ns/iter",
            "extra": "iterations: 156027\ncpu: 4466.515410794331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9733.43696494787,
            "unit": "ns/iter",
            "extra": "iterations: 71722\ncpu: 9733.519701068097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8652.298121369578,
            "unit": "ns/iter",
            "extra": "iterations: 80910\ncpu: 8652.359411692094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3135.0441687367074,
            "unit": "ns/iter",
            "extra": "iterations: 222216\ncpu: 3135.0028800806144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15638.213145498778,
            "unit": "ns/iter",
            "extra": "iterations: 44791\ncpu: 15638.342524167805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12443.436490754588,
            "unit": "ns/iter",
            "extra": "iterations: 56354\ncpu: 12443.52840969586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12408.98079745403,
            "unit": "ns/iter",
            "extra": "iterations: 56555\ncpu: 12409.077888780988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12957.126933946667,
            "unit": "ns/iter",
            "extra": "iterations: 53776\ncpu: 12957.22813150829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28430.532668429612,
            "unit": "ns/iter",
            "extra": "iterations: 24565\ncpu: 28430.07123956871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98816.34716927647,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98817.1113934788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85553.46664218549,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85554.1926796412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84262.26473069533,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84262.94734305353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84018.79896472713,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84018.14132659139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54951.55856712819,
            "unit": "ns/iter",
            "extra": "iterations: 12618\ncpu: 54950.4517356156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85008.31750849605,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 85009.04565323025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3094.797823194159,
            "unit": "ns/iter",
            "extra": "iterations: 226203\ncpu: 3094.8227919169985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15416.498888277116,
            "unit": "ns/iter",
            "extra": "iterations: 45425\ncpu: 15416.616400660349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12313.265874202352,
            "unit": "ns/iter",
            "extra": "iterations: 56869\ncpu: 12313.082698833929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12126.362096173461,
            "unit": "ns/iter",
            "extra": "iterations: 57667\ncpu: 12126.304472228576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12784.008859076172,
            "unit": "ns/iter",
            "extra": "iterations: 54859\ncpu: 12783.924242148227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27450.311110237253,
            "unit": "ns/iter",
            "extra": "iterations: 25499\ncpu: 27450.531393387817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98174.93861247992,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98174.16958654604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83798.84688248858,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83794.24460431583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83315.36842731191,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83314.19224363475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82762.11363636267,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 82761.29224179045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55495.30202035935,
            "unit": "ns/iter",
            "extra": "iterations: 12572\ncpu: 55495.76041998014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84172.90920095604,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84171.888619855 ns\nthreads: 1"
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
        "date": 1702493014572,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 682.2400253423925,
            "unit": "ns/iter",
            "extra": "iterations: 1022792\ncpu: 682.2092859545246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10888.366754132965,
            "unit": "ns/iter",
            "extra": "iterations: 76220\ncpu: 10888.169771713463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24247.84959373186,
            "unit": "ns/iter",
            "extra": "iterations: 34460\ncpu: 24246.758560650025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37973.2184428293,
            "unit": "ns/iter",
            "extra": "iterations: 21873\ncpu: 37972.79294106892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47798.054992759346,
            "unit": "ns/iter",
            "extra": "iterations: 16584\ncpu: 47795.996140858675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59405.60166150792,
            "unit": "ns/iter",
            "extra": "iterations: 14204\ncpu: 59403.484933821455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59280.867300003585,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59279.509999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68338.28487091206,
            "unit": "ns/iter",
            "extra": "iterations: 12704\ncpu: 68337.67317380355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77972.56615329697,
            "unit": "ns/iter",
            "extra": "iterations: 11103\ncpu: 77970.2152571377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 559.2327658750547,
            "unit": "ns/iter",
            "extra": "iterations: 1250136\ncpu: 559.2034786615214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.59293190086555,
            "unit": "ns/iter",
            "extra": "iterations: 1479917\ncpu: 473.5826401075195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 473.4725009483934,
            "unit": "ns/iter",
            "extra": "iterations: 1476160\ncpu: 473.4501002601341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.1955491409746,
            "unit": "ns/iter",
            "extra": "iterations: 1479265\ncpu: 474.16338519467473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.6832780648696,
            "unit": "ns/iter",
            "extra": "iterations: 723439\ncpu: 969.645125573822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4315.1176704730005,
            "unit": "ns/iter",
            "extra": "iterations: 185909\ncpu: 4314.857268878864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19264.313640842247,
            "unit": "ns/iter",
            "extra": "iterations: 42622\ncpu: 19263.110600159554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15515.036032474092,
            "unit": "ns/iter",
            "extra": "iterations: 53091\ncpu: 15514.1229210224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14800.667159336286,
            "unit": "ns/iter",
            "extra": "iterations: 55480\ncpu: 14800.174837779343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15276.835507870015,
            "unit": "ns/iter",
            "extra": "iterations: 53498\ncpu: 15276.068264234145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47109.348110914965,
            "unit": "ns/iter",
            "extra": "iterations: 17707\ncpu: 47106.528491557045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457570.4421333285,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 457544.37333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375274.1271551842,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 375266.1637931026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373954.3498706029,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 373937.187230372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375776.2494558021,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 375755.1589029159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231883.59134615978,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 231872.3023504282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378807.3098225946,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 378778.9701427957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1922190.0248447137,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1922040.9937888249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 739422.8885423976,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 739375.7599376476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2598339.1562498715,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2598164.7727272697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4227.468941387074,
            "unit": "ns/iter",
            "extra": "iterations: 186631\ncpu: 4227.265566813661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19073.904741109774,
            "unit": "ns/iter",
            "extra": "iterations: 43513\ncpu: 19073.29074069813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15295.581667226477,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 15295.467068766446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14565.147261357386,
            "unit": "ns/iter",
            "extra": "iterations: 56926\ncpu: 14564.842075677256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14988.889055852382,
            "unit": "ns/iter",
            "extra": "iterations: 55235\ncpu: 14988.666606318497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47459.318449014456,
            "unit": "ns/iter",
            "extra": "iterations: 17692\ncpu: 47456.5962016731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475167.4310722128,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 475140.1531728668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386500.7441137511,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 386489.24922256696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380573.13217391114,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 380565.869565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380386.65580184385,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 380380.5302042602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226858.12716911928,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 226850.45325045363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378865.9221453313,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378859.64532872237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1924362.2854120666,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1924323.6786469321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758373.607258026,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 758345.8870967771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4181.840840237201,
            "unit": "ns/iter",
            "extra": "iterations: 189137\ncpu: 4181.658268873902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19442.494727382473,
            "unit": "ns/iter",
            "extra": "iterations: 42294\ncpu: 19441.715136898853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15535.771045847328,
            "unit": "ns/iter",
            "extra": "iterations: 53526\ncpu: 15534.925083137116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14847.162476648857,
            "unit": "ns/iter",
            "extra": "iterations: 56205\ncpu: 14846.175607152327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15271.956896234493,
            "unit": "ns/iter",
            "extra": "iterations: 54334\ncpu: 15271.443295174256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47274.4251814629,
            "unit": "ns/iter",
            "extra": "iterations: 17910\ncpu: 47271.060859854806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 461569.53846151585,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 461565.9188034194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377194.2838427777,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 377195.3275109181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377772.2905198971,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 377763.39012669143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374059.17736338766,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 374053.8594969668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231838.5552333417,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 231834.0100184558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372587.1123595137,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372574.41659464105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.76830904109136,
            "unit": "ns/iter",
            "extra": "iterations: 2325982\ncpu: 302.7577169556767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1656.32046479975,
            "unit": "ns/iter",
            "extra": "iterations: 422892\ncpu: 1656.3025547894074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1217.7567523346622,
            "unit": "ns/iter",
            "extra": "iterations: 574505\ncpu: 1217.7269127335633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1301.6529248450993,
            "unit": "ns/iter",
            "extra": "iterations: 586749\ncpu: 1301.6410765080152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1067.2095313319203,
            "unit": "ns/iter",
            "extra": "iterations: 655816\ncpu: 1067.1906449369858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8041.156092567619,
            "unit": "ns/iter",
            "extra": "iterations: 86942\ncpu: 8041.1676750016595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18165.64213553152,
            "unit": "ns/iter",
            "extra": "iterations: 38604\ncpu: 18165.653818256997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4525.648687264596,
            "unit": "ns/iter",
            "extra": "iterations: 154677\ncpu: 4525.652811988858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4531.403186330072,
            "unit": "ns/iter",
            "extra": "iterations: 154033\ncpu: 4531.3127706400355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4516.545473880526,
            "unit": "ns/iter",
            "extra": "iterations: 155155\ncpu: 4516.448068060975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9514.581964871804,
            "unit": "ns/iter",
            "extra": "iterations: 73501\ncpu: 9514.348104107361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8580.680224127476,
            "unit": "ns/iter",
            "extra": "iterations: 81382\ncpu: 8580.592760069794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3125.2841175550807,
            "unit": "ns/iter",
            "extra": "iterations: 223045\ncpu: 3125.221367885382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15623.976127912505,
            "unit": "ns/iter",
            "extra": "iterations: 44906\ncpu: 15623.860953992667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12405.37239574147,
            "unit": "ns/iter",
            "extra": "iterations: 56542\ncpu: 12405.258038272399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12337.54623845208,
            "unit": "ns/iter",
            "extra": "iterations: 56825\ncpu: 12337.231852177867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12921.329084311405,
            "unit": "ns/iter",
            "extra": "iterations: 54287\ncpu: 12921.03081769107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28450.040528453177,
            "unit": "ns/iter",
            "extra": "iterations: 24600\ncpu: 28449.345528455604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100849.30346611964,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 100847.14511721548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86445.40627315281,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 86444.18374907342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86012.84959349739,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86012.08425720516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86135.39668304722,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 86134.5577395565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56320.98730005271,
            "unit": "ns/iter",
            "extra": "iterations: 12441\ncpu: 56320.279720279585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86211.2976205179,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86209.02478116205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.8987674723753,
            "unit": "ns/iter",
            "extra": "iterations: 225066\ncpu: 3125.812872668465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15548.516484976837,
            "unit": "ns/iter",
            "extra": "iterations: 45132\ncpu: 15548.209696002868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12394.050471672705,
            "unit": "ns/iter",
            "extra": "iterations: 56289\ncpu: 12393.819396329518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12202.91123267693,
            "unit": "ns/iter",
            "extra": "iterations: 57217\ncpu: 12202.618103011266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12800.139198770185,
            "unit": "ns/iter",
            "extra": "iterations: 54591\ncpu: 12800.020149841512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27815.365034575236,
            "unit": "ns/iter",
            "extra": "iterations: 25162\ncpu: 27814.700739209737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97869.42460557254,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 97866.86893203997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84237.2697170471,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84233.3293196879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83772.98589191418,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83772.15447154456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84134.57601738708,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84134.57311918958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56258.22501405292,
            "unit": "ns/iter",
            "extra": "iterations: 12457\ncpu: 56256.59468571834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85312.87626849858,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85310.45360068536 ns\nthreads: 1"
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
        "date": 1702504026112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 687.3896967350391,
            "unit": "ns/iter",
            "extra": "iterations: 1020065\ncpu: 687.3811962963144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10527.395614091542,
            "unit": "ns/iter",
            "extra": "iterations: 77065\ncpu: 10526.73457470966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23428.07828601835,
            "unit": "ns/iter",
            "extra": "iterations: 35613\ncpu: 23427.043495352824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38627.104905017055,
            "unit": "ns/iter",
            "extra": "iterations: 21162\ncpu: 38625.86712030999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46706.466639302525,
            "unit": "ns/iter",
            "extra": "iterations: 17056\ncpu: 46704.5262664165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58487.333010853865,
            "unit": "ns/iter",
            "extra": "iterations: 14471\ncpu: 58483.64314836572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58710.435099999355,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58707.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67396.761096399,
            "unit": "ns/iter",
            "extra": "iterations: 12842\ncpu: 67393.66142345425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77745.61064550868,
            "unit": "ns/iter",
            "extra": "iterations: 11216\ncpu: 77743.63409415116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 568.3066770312722,
            "unit": "ns/iter",
            "extra": "iterations: 1227252\ncpu: 568.2546045962846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.9042366344982,
            "unit": "ns/iter",
            "extra": "iterations: 1478060\ncpu: 473.89206121537705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.6125470603671,
            "unit": "ns/iter",
            "extra": "iterations: 1472313\ncpu: 474.5772128616669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 477.92739767525757,
            "unit": "ns/iter",
            "extra": "iterations: 1465628\ncpu: 477.8909109269199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 956.0657234581508,
            "unit": "ns/iter",
            "extra": "iterations: 733878\ncpu: 956.0116259105725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4345.253128769496,
            "unit": "ns/iter",
            "extra": "iterations: 185696\ncpu: 4345.107595209365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19448.240755107345,
            "unit": "ns/iter",
            "extra": "iterations: 42537\ncpu: 19447.257681547868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15671.347914318423,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15670.353250657621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14626.366568966378,
            "unit": "ns/iter",
            "extra": "iterations: 56295\ncpu: 14625.424993338656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14686.33880064296,
            "unit": "ns/iter",
            "extra": "iterations: 56030\ncpu: 14685.807603069778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46979.6023934686,
            "unit": "ns/iter",
            "extra": "iterations: 17882\ncpu: 46977.133430264934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 467319.3508492157,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 467286.57112526515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369125.5136382738,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 369119.4712547201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366743.3330512108,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 366743.50402031245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368817.38907705265,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 368813.71718882385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229120.4140026249,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 229117.19947159785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371958.8666383059,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371952.2368981677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1908836.9937628685,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1908798.3367983368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 757041.3055332549,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 757024.8596631906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2581146.994366079,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2581080.281690137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3885.40586853776,
            "unit": "ns/iter",
            "extra": "iterations: 202674\ncpu: 3885.110571656935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18086.750617931746,
            "unit": "ns/iter",
            "extra": "iterations: 45717\ncpu: 18085.913336395686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14414.186153495724,
            "unit": "ns/iter",
            "extra": "iterations: 56953\ncpu: 14413.560304110388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13681.549389401098,
            "unit": "ns/iter",
            "extra": "iterations: 60023\ncpu: 13681.42878563221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13756.455319929157,
            "unit": "ns/iter",
            "extra": "iterations: 59982\ncpu: 13755.818412190363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46997.045554491815,
            "unit": "ns/iter",
            "extra": "iterations: 17737\ncpu: 46994.655240457716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471333.0378174439,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471305.7266342491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382029.62560281414,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 382005.0854888234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377613.2049956671,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 377598.5357450466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378656.6709566728,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 378651.8232518233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227358.6328753017,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 227356.20948924051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379907.9831606335,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 379908.1174438686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1925258.7902542953,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1925141.3135593173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 753118.3622366796,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 753068.9627228553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4189.250477283306,
            "unit": "ns/iter",
            "extra": "iterations: 191710\ncpu: 4189.008398101285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19027.731414868285,
            "unit": "ns/iter",
            "extra": "iterations: 43368\ncpu: 19026.88848920854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15295.033149986633,
            "unit": "ns/iter",
            "extra": "iterations: 54178\ncpu: 15293.58595739976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14569.247474939879,
            "unit": "ns/iter",
            "extra": "iterations: 52672\ncpu: 14568.38737849327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14666.965806520238,
            "unit": "ns/iter",
            "extra": "iterations: 56502\ncpu: 14666.510919967388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47168.194458467784,
            "unit": "ns/iter",
            "extra": "iterations: 17829\ncpu: 47165.26445678401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 463035.87406217854,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 463015.0589496239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 378564.70397897996,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 378551.2898994332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374907.25465565873,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 374879.90472065925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376445.4774305549,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 376417.3177083342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232221.6506342711,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 232208.9323467232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375738.23768365703,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 375712.7917026789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.88715899446106,
            "unit": "ns/iter",
            "extra": "iterations: 2340541\ncpu: 299.8782760054196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1661.137803485094,
            "unit": "ns/iter",
            "extra": "iterations: 422014\ncpu: 1661.0756989104536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1273.4314407654774,
            "unit": "ns/iter",
            "extra": "iterations: 550152\ncpu: 1273.3533641611782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1211.9094775107626,
            "unit": "ns/iter",
            "extra": "iterations: 576586\ncpu: 1211.8599827259022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1032.7500277365261,
            "unit": "ns/iter",
            "extra": "iterations: 676003\ncpu: 1032.6871330452555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8044.472920618007,
            "unit": "ns/iter",
            "extra": "iterations: 86985\ncpu: 8044.084612289325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19159.42205613541,
            "unit": "ns/iter",
            "extra": "iterations: 36661\ncpu: 19158.99729958264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4501.426146753888,
            "unit": "ns/iter",
            "extra": "iterations: 155308\ncpu: 4501.166070002883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4525.494861849167,
            "unit": "ns/iter",
            "extra": "iterations: 154433\ncpu: 4525.223235966352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4491.368670237361,
            "unit": "ns/iter",
            "extra": "iterations: 156088\ncpu: 4491.047998564909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9703.5125863541,
            "unit": "ns/iter",
            "extra": "iterations: 71943\ncpu: 9702.935657395432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7797.132557622203,
            "unit": "ns/iter",
            "extra": "iterations: 89810\ncpu: 7796.812159002376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3134.3702143826617,
            "unit": "ns/iter",
            "extra": "iterations: 223665\ncpu: 3134.1658283593238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15595.613690954417,
            "unit": "ns/iter",
            "extra": "iterations: 44964\ncpu: 15594.800284672432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12401.702409961812,
            "unit": "ns/iter",
            "extra": "iterations: 56225\ncpu: 12401.342819030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12306.863717062673,
            "unit": "ns/iter",
            "extra": "iterations: 56889\ncpu: 12306.669127599243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13000.635728615855,
            "unit": "ns/iter",
            "extra": "iterations: 53828\ncpu: 12999.990711154103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28598.63144382341,
            "unit": "ns/iter",
            "extra": "iterations: 24539\ncpu: 28597.08627083463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100530.11219792104,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100522.84234752593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85305.65296915133,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 85300.35361541217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85412.31176255806,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85408.00389246935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84521.97078705726,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84520.25591501613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55387.23724529931,
            "unit": "ns/iter",
            "extra": "iterations: 12662\ncpu: 55384.18891170471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85620.10221674634,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 85613.52216748771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3085.2321943658876,
            "unit": "ns/iter",
            "extra": "iterations: 227077\ncpu: 3085.0350321697156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15456.882437165896,
            "unit": "ns/iter",
            "extra": "iterations: 45397\ncpu: 15455.660065642891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12400.32576585389,
            "unit": "ns/iter",
            "extra": "iterations: 56734\ncpu: 12399.515281841472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12188.09602510599,
            "unit": "ns/iter",
            "extra": "iterations: 57360\ncpu: 12187.897489539573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12699.233491379546,
            "unit": "ns/iter",
            "extra": "iterations: 55047\ncpu: 12698.719276254726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27439.057677227564,
            "unit": "ns/iter",
            "extra": "iterations: 25504\ncpu: 27438.605708908388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97445.82375051732,
            "unit": "ns/iter",
            "extra": "iterations: 7183\ncpu: 97440.76291243204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83882.41473380395,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 83877.94736209606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82644.34983930584,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 82639.1143911452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83492.07142000545,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83490.01797483591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55500.44641444078,
            "unit": "ns/iter",
            "extra": "iterations: 12634\ncpu: 55499.51717587552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84824.42350090994,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84820.61780738928 ns\nthreads: 1"
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
        "date": 1705575708233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 686.9065690910653,
            "unit": "ns/iter",
            "extra": "iterations: 1019791\ncpu: 686.8837830496642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10762.633949715055,
            "unit": "ns/iter",
            "extra": "iterations: 77279\ncpu: 10761.587235859675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23930.391451361967,
            "unit": "ns/iter",
            "extra": "iterations: 34602\ncpu: 23928.631292988845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37532.520959144815,
            "unit": "ns/iter",
            "extra": "iterations: 22520\ncpu: 37531.76287744227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47259.30917501981,
            "unit": "ns/iter",
            "extra": "iterations: 16861\ncpu: 47256.45572623214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58953.588202642386,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 58947.59195003464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59103.54760000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59097.859999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68881.11889097674,
            "unit": "ns/iter",
            "extra": "iterations: 12768\ncpu: 68876.33928571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77980.79041218014,
            "unit": "ns/iter",
            "extra": "iterations: 11160\ncpu: 77976.84587813611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.992671194233,
            "unit": "ns/iter",
            "extra": "iterations: 1227758\ncpu: 594.9765344636327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 511.89862808120324,
            "unit": "ns/iter",
            "extra": "iterations: 1364658\ncpu: 511.88752053628184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 508.45911310322623,
            "unit": "ns/iter",
            "extra": "iterations: 1383047\ncpu: 508.4446154035267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 506.8673015113173,
            "unit": "ns/iter",
            "extra": "iterations: 1370204\ncpu: 506.8532860800287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 968.2284824451668,
            "unit": "ns/iter",
            "extra": "iterations: 722445\ncpu: 968.1989632428746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4346.9904323805395,
            "unit": "ns/iter",
            "extra": "iterations: 174129\ncpu: 4346.830223569877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19263.96444118481,
            "unit": "ns/iter",
            "extra": "iterations: 42268\ncpu: 19263.5090375698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15514.014501345046,
            "unit": "ns/iter",
            "extra": "iterations: 50616\ncpu: 15513.628101786013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14779.882961193205,
            "unit": "ns/iter",
            "extra": "iterations: 55221\ncpu: 14779.458901504908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15025.613507988752,
            "unit": "ns/iter",
            "extra": "iterations: 53820\ncpu: 15025.033444816063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47394.88645350678,
            "unit": "ns/iter",
            "extra": "iterations: 17702\ncpu: 47391.842729635006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470582.14293302916,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 470534.8565355993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380331.6636442513,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 380323.7478411057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 381078.90138405765,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 381063.10553633206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374542.29555177357,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 374530.1539777588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232019.24913401014,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 232014.62829736233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375818.64680481376,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 375797.0207253887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1936159.5711297714,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1936116.9456066955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741737.0875394825,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 741706.2302839138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2615314.5128205,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2615255.5555555536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4182.249518628485,
            "unit": "ns/iter",
            "extra": "iterations: 190082\ncpu: 4181.915699540184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19529.80880479447,
            "unit": "ns/iter",
            "extra": "iterations: 42386\ncpu: 19528.985985938747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15624.884593529969,
            "unit": "ns/iter",
            "extra": "iterations: 52796\ncpu: 15624.321918327178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14900.837703345916,
            "unit": "ns/iter",
            "extra": "iterations: 55263\ncpu: 14900.504858585255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15906.300415782707,
            "unit": "ns/iter",
            "extra": "iterations: 55077\ncpu: 15905.586724040928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47306.4754702014,
            "unit": "ns/iter",
            "extra": "iterations: 17652\ncpu: 47305.99932019033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478265.2826912474,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 478253.06565382704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387082.0957022162,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 387057.68719539116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381596.8290336511,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 381588.19414079713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384378.93525805144,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 384365.135608047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228359.26044930637,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 228354.5977011492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381367.6197985438,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381357.68725361547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1928660.245243149,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1928513.5306553799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758357.8402607832,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 758311.3284433564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4199.220319159931,
            "unit": "ns/iter",
            "extra": "iterations: 192380\ncpu: 4198.8881380601115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19038.44719214529,
            "unit": "ns/iter",
            "extra": "iterations: 43592\ncpu: 19037.532115984446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15332.272560941563,
            "unit": "ns/iter",
            "extra": "iterations: 54109\ncpu: 15331.536343307069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14589.893953091147,
            "unit": "ns/iter",
            "extra": "iterations: 56409\ncpu: 14589.030119307216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14992.518408519507,
            "unit": "ns/iter",
            "extra": "iterations: 55219\ncpu: 14991.42505297095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47087.999268845255,
            "unit": "ns/iter",
            "extra": "iterations: 17780\ncpu: 47085.3374578178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465447.4397274731,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 465416.3522012557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381011.02526128496,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 380985.40940766706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373211.9223218035,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 373200.25608194526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376119.57910576713,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 376106.1908856403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234286.01227322707,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 234280.86979722578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 373233.72006888414,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373212.919896639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.5426506498913,
            "unit": "ns/iter",
            "extra": "iterations: 2344044\ncpu: 298.5396605183185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1643.5770841468889,
            "unit": "ns/iter",
            "extra": "iterations: 425042\ncpu: 1643.5011128312049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1266.8819536903095,
            "unit": "ns/iter",
            "extra": "iterations: 552800\ncpu: 1266.827243125895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1249.4692608778244,
            "unit": "ns/iter",
            "extra": "iterations: 561044\ncpu: 1249.363864509732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1048.287432168262,
            "unit": "ns/iter",
            "extra": "iterations: 663774\ncpu: 1048.263264303815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8110.352594802554,
            "unit": "ns/iter",
            "extra": "iterations: 86442\ncpu: 8110.199902825006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20472.063039886056,
            "unit": "ns/iter",
            "extra": "iterations: 36929\ncpu: 20471.496655745137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4523.026171661001,
            "unit": "ns/iter",
            "extra": "iterations: 155015\ncpu: 4522.871980130906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4547.377124217476,
            "unit": "ns/iter",
            "extra": "iterations: 153586\ncpu: 4547.267980154371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4523.785031898584,
            "unit": "ns/iter",
            "extra": "iterations: 155023\ncpu: 4523.589402862771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9699.927059571208,
            "unit": "ns/iter",
            "extra": "iterations: 72333\ncpu: 9699.629491380174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8629.73309674208,
            "unit": "ns/iter",
            "extra": "iterations: 81153\ncpu: 8629.430828188792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3225.8834344360625,
            "unit": "ns/iter",
            "extra": "iterations: 219413\ncpu: 3225.7673884410165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15998.738492100876,
            "unit": "ns/iter",
            "extra": "iterations: 43796\ncpu: 15998.57749566161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12779.31370291141,
            "unit": "ns/iter",
            "extra": "iterations: 54711\ncpu: 12779.006049971676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12710.606392261525,
            "unit": "ns/iter",
            "extra": "iterations: 55004\ncpu: 12710.081085011989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13335.829546969015,
            "unit": "ns/iter",
            "extra": "iterations: 52513\ncpu: 13334.987526898147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28848.288971975395,
            "unit": "ns/iter",
            "extra": "iterations: 24338\ncpu: 28847.567589776783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101858.25480489513,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 101854.13511939462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88204.98189362024,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 88202.86684270107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86816.44626422187,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 86814.29344883624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86530.71414453177,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86526.48548486696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56842.399270066824,
            "unit": "ns/iter",
            "extra": "iterations: 12330\ncpu: 56840.81103000797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87033.62400496952,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 87029.73880596962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3155.524088382666,
            "unit": "ns/iter",
            "extra": "iterations: 221310\ncpu: 3155.448917807592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15863.594796889707,
            "unit": "ns/iter",
            "extra": "iterations: 44089\ncpu: 15862.673229150008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12783.494287850486,
            "unit": "ns/iter",
            "extra": "iterations: 54883\ncpu: 12783.368256108548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12525.26809958903,
            "unit": "ns/iter",
            "extra": "iterations: 55830\ncpu: 12525.147770016196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13127.092810115342,
            "unit": "ns/iter",
            "extra": "iterations: 53464\ncpu: 13126.53748316627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28020.79799232257,
            "unit": "ns/iter",
            "extra": "iterations: 25004\ncpu: 28019.856822908387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99842.2696148346,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 99835.02139800286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85790.65290369594,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 85783.75398186636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84270.90583232128,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 84267.53341433768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84630.72295418511,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84625.84310407405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57032.95188610203,
            "unit": "ns/iter",
            "extra": "iterations: 12221\ncpu: 57031.18402749445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85895.82839582652,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 85888.83835279543 ns\nthreads: 1"
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
        "date": 1705773733213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 681.1210323815587,
            "unit": "ns/iter",
            "extra": "iterations: 1024040\ncpu: 681.096832154994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10536.755533674348,
            "unit": "ns/iter",
            "extra": "iterations: 78203\ncpu: 10536.392465762183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23626.238554353382,
            "unit": "ns/iter",
            "extra": "iterations: 35057\ncpu: 23625.469948940296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38920.19700101231,
            "unit": "ns/iter",
            "extra": "iterations: 20807\ncpu: 38917.412409285345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46115.059169891734,
            "unit": "ns/iter",
            "extra": "iterations: 17323\ncpu: 46115.02049298622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57820.033600872026,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 57818.24921779351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58214.74439999292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58214.240000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66799.33457220376,
            "unit": "ns/iter",
            "extra": "iterations: 12915\ncpu: 66797.6384049555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77023.44023606493,
            "unit": "ns/iter",
            "extra": "iterations: 11353\ncpu: 77021.9237206024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 559.4066405755574,
            "unit": "ns/iter",
            "extra": "iterations: 1248958\ncpu: 559.397433700734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.77057876165367,
            "unit": "ns/iter",
            "extra": "iterations: 1480264\ncpu: 472.77033015732286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.1646383278309,
            "unit": "ns/iter",
            "extra": "iterations: 1468443\ncpu: 477.1423882302546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.214454603294,
            "unit": "ns/iter",
            "extra": "iterations: 1480262\ncpu: 473.20386526168926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 948.9687489390083,
            "unit": "ns/iter",
            "extra": "iterations: 736327\ncpu: 948.9430646981559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4372.505750920099,
            "unit": "ns/iter",
            "extra": "iterations: 184840\ncpu: 4372.476736637093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19121.078287348002,
            "unit": "ns/iter",
            "extra": "iterations: 43021\ncpu: 19120.529508844495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15407.000275563498,
            "unit": "ns/iter",
            "extra": "iterations: 54434\ncpu: 15406.710879229875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14575.232420260469,
            "unit": "ns/iter",
            "extra": "iterations: 56841\ncpu: 14574.437465913674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15198.33745266027,
            "unit": "ns/iter",
            "extra": "iterations: 55187\ncpu: 15197.756718067661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47614.43021803711,
            "unit": "ns/iter",
            "extra": "iterations: 17612\ncpu: 47612.40063593007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 465929.5255128915,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 465907.36454497586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373575.7150886295,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 373575.44314742816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373661.2009466507,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 373649.09638554277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380620.94541481114,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 380616.24454148323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232836.83729629606,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 232829.842372428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376308.6340721361,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 376301.8252933506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1912085.0434782659,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1911979.917184266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741190.4480315435,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 741181.889763779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2592905.1176470504,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2592721.8487394997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4178.247428695722,
            "unit": "ns/iter",
            "extra": "iterations: 188523\ncpu: 4178.135824276083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19555.059958630718,
            "unit": "ns/iter",
            "extra": "iterations: 42546\ncpu: 19554.790109528523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15604.181091400967,
            "unit": "ns/iter",
            "extra": "iterations: 53161\ncpu: 15603.888188709703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14900.314104521154,
            "unit": "ns/iter",
            "extra": "iterations: 55663\ncpu: 14900.301816287245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15103.752061704496,
            "unit": "ns/iter",
            "extra": "iterations: 54324\ncpu: 15103.55827994991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47830.02858274848,
            "unit": "ns/iter",
            "extra": "iterations: 17668\ncpu: 47829.448720850945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480232.17517850327,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 480220.9774849012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388700.76936698536,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 388697.96370075253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383594.4753597889,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 383583.90754470206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376706.0145054739,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 376689.93406593375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228244.8609081292,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 228244.72860125208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379577.92117799126,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 379568.6877436125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1914565.9012604544,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1914511.3445378116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 759669.8614263353,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 759644.2463533236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4176.01501239198,
            "unit": "ns/iter",
            "extra": "iterations: 190043\ncpu: 4175.823892487483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19067.01278294559,
            "unit": "ns/iter",
            "extra": "iterations: 43339\ncpu: 19065.99367774988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15524.380831292461,
            "unit": "ns/iter",
            "extra": "iterations: 53483\ncpu: 15523.82439279765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14642.157407078803,
            "unit": "ns/iter",
            "extra": "iterations: 56338\ncpu: 14641.538570769262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15034.846725321177,
            "unit": "ns/iter",
            "extra": "iterations: 54784\ncpu: 15034.088419976646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46933.52127180479,
            "unit": "ns/iter",
            "extra": "iterations: 17770\ncpu: 46930.73719752406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 468758.4903537397,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 468748.6602357982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381186.0199220481,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 381173.2784755296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 382830.59434785054,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 382816.7826086972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378185.13550598884,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 378169.4682675808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233364.9357161958,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 233355.4014403847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 380612.66463681735,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 380607.3075250128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.2149233404175,
            "unit": "ns/iter",
            "extra": "iterations: 2329063\ncpu: 300.1942412034351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1692.1448762909795,
            "unit": "ns/iter",
            "extra": "iterations: 412621\ncpu: 1692.1438802193813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1244.5114873227697,
            "unit": "ns/iter",
            "extra": "iterations: 560618\ncpu: 1244.503208958681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1302.2124729885752,
            "unit": "ns/iter",
            "extra": "iterations: 540977\ncpu: 1302.2023117433712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1055.4725101540403,
            "unit": "ns/iter",
            "extra": "iterations: 661808\ncpu: 1055.4452348717437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8129.2691213526,
            "unit": "ns/iter",
            "extra": "iterations: 86121\ncpu: 8129.1496847459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19165.665926351263,
            "unit": "ns/iter",
            "extra": "iterations: 36471\ncpu: 19165.131200131582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4613.835672545223,
            "unit": "ns/iter",
            "extra": "iterations: 151618\ncpu: 4613.757601340129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4622.004600538296,
            "unit": "ns/iter",
            "extra": "iterations: 151504\ncpu: 4621.8746699757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4602.405425301453,
            "unit": "ns/iter",
            "extra": "iterations: 152139\ncpu: 4602.372830109308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9778.011500990586,
            "unit": "ns/iter",
            "extra": "iterations: 71646\ncpu: 9777.747536498873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8747.002122347621,
            "unit": "ns/iter",
            "extra": "iterations: 80100\ncpu: 8746.853932584183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3163.5525008938694,
            "unit": "ns/iter",
            "extra": "iterations: 220901\ncpu: 3163.464628951442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15813.344113871255,
            "unit": "ns/iter",
            "extra": "iterations: 44401\ncpu: 15813.11682169323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12501.265930864341,
            "unit": "ns/iter",
            "extra": "iterations: 55631\ncpu: 12500.904172134124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12496.21708274738,
            "unit": "ns/iter",
            "extra": "iterations: 55518\ncpu: 12496.210238121124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13144.276551414112,
            "unit": "ns/iter",
            "extra": "iterations: 53274\ncpu: 13144.177272215458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29000.9933620172,
            "unit": "ns/iter",
            "extra": "iterations: 24405\ncpu: 29000.651505838832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101801.06553290927,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 101800.29321214004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86956.82169482557,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 86953.83946322056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85941.43496434404,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 85941.39414801936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86345.1531666044,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 86344.29513500031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56609.704754973056,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 56608.91153161944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85915.11452653639,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 85914.4521566694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3143.546920472771,
            "unit": "ns/iter",
            "extra": "iterations: 223005\ncpu: 3143.4335553014307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15656.906139449016,
            "unit": "ns/iter",
            "extra": "iterations: 44662\ncpu: 15656.777573776408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12512.832227368637,
            "unit": "ns/iter",
            "extra": "iterations: 55909\ncpu: 12512.459532454559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12402.498980008048,
            "unit": "ns/iter",
            "extra": "iterations: 56373\ncpu: 12402.325581395322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12887.031263825369,
            "unit": "ns/iter",
            "extra": "iterations: 54248\ncpu: 12886.93223713333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27828.55005565881,
            "unit": "ns/iter",
            "extra": "iterations: 25152\ncpu: 27828.53451017816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99285.74488344786,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 99284.83513359903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84636.38691566003,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 84633.91919931643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84029.13186681627,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84028.51304243327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84060.95249033035,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84058.57108317119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57090.63600814765,
            "unit": "ns/iter",
            "extra": "iterations: 12275\ncpu: 57090.183299388154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86391.46993456701,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86390.72725027661 ns\nthreads: 1"
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
        "date": 1705775492978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.6193216562373,
            "unit": "ns/iter",
            "extra": "iterations: 1010638\ncpu: 693.6080970634392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10936.63359628991,
            "unit": "ns/iter",
            "extra": "iterations: 76312\ncpu: 10936.508019708568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24417.183379322367,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 24416.832031938004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36813.78548539516,
            "unit": "ns/iter",
            "extra": "iterations: 22157\ncpu: 36813.09292774293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46956.15186296077,
            "unit": "ns/iter",
            "extra": "iterations: 17338\ncpu: 46954.40073826279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58471.23676227293,
            "unit": "ns/iter",
            "extra": "iterations: 14504\ncpu: 58468.650027578624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59866.46019999853,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59862.259999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67446.4680018807,
            "unit": "ns/iter",
            "extra": "iterations: 12782\ncpu: 67445.05554686286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77927.13670728034,
            "unit": "ns/iter",
            "extra": "iterations: 11243\ncpu: 77924.01494263107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 559.6984833792867,
            "unit": "ns/iter",
            "extra": "iterations: 1250873\ncpu: 559.690072453399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 470.2875874331278,
            "unit": "ns/iter",
            "extra": "iterations: 1489853\ncpu: 470.2779401726209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.9889960981662,
            "unit": "ns/iter",
            "extra": "iterations: 1481111\ncpu: 470.9750990979078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.1841613438691,
            "unit": "ns/iter",
            "extra": "iterations: 1478383\ncpu: 471.1641029422004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 948.8695822071572,
            "unit": "ns/iter",
            "extra": "iterations: 739577\ncpu: 948.8250716287836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4334.079576827378,
            "unit": "ns/iter",
            "extra": "iterations: 185456\ncpu: 4333.953067034763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18592.527035861443,
            "unit": "ns/iter",
            "extra": "iterations: 44367\ncpu: 18591.890368967954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15357.28329406497,
            "unit": "ns/iter",
            "extra": "iterations: 53478\ncpu: 15356.5877557126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14591.517208970976,
            "unit": "ns/iter",
            "extra": "iterations: 56395\ncpu: 14591.038212607493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15352.63321188157,
            "unit": "ns/iter",
            "extra": "iterations: 53794\ncpu: 15352.17868163739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47268.20650533965,
            "unit": "ns/iter",
            "extra": "iterations: 17893\ncpu: 47266.12082937457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470679.24628454575,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 470658.2802547785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375728.88499779766,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 375717.20709035796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372571.26947639283,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372557.72669220984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375071.58170783136,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375055.70004334697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231033.7332630542,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 231028.25513969403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373655.0959139652,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373638.4516129033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1900187.4927836098,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1900145.7731958767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750224.6036392319,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 750194.1455696183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578710.859943996,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2578582.633053229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4237.854513245967,
            "unit": "ns/iter",
            "extra": "iterations: 186285\ncpu: 4237.692782564357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19055.273385287943,
            "unit": "ns/iter",
            "extra": "iterations: 43243\ncpu: 19054.686307610446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15324.055517362187,
            "unit": "ns/iter",
            "extra": "iterations: 53821\ncpu: 15323.602311365448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14623.826369577988,
            "unit": "ns/iter",
            "extra": "iterations: 56459\ncpu: 14623.484298340401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14986.055504028218,
            "unit": "ns/iter",
            "extra": "iterations: 54987\ncpu: 14985.662065579141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46942.8164771151,
            "unit": "ns/iter",
            "extra": "iterations: 18025\ncpu: 46940.932038834915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476412.3505211105,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 476394.40482720925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386962.38723970193,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 386952.5919361972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385828.10259793693,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 385817.21708498657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381855.7957410137,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 381841.4602346809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229267.65604596026,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 229259.36275790056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382000.5219298258,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 381987.3684210531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1917923.8305438051,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1917832.2175732213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 773265.6536868907,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 773225.9320629694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4258.049415664721,
            "unit": "ns/iter",
            "extra": "iterations: 188847\ncpu: 4257.8944860124975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19472.631371902484,
            "unit": "ns/iter",
            "extra": "iterations: 42452\ncpu: 19472.451239046462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15301.995040824906,
            "unit": "ns/iter",
            "extra": "iterations: 53033\ncpu: 15301.595233156722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14605.71765643853,
            "unit": "ns/iter",
            "extra": "iterations: 55181\ncpu: 14605.3406063682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14974.462122196028,
            "unit": "ns/iter",
            "extra": "iterations: 53897\ncpu: 14974.356643226789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46659.66679681098,
            "unit": "ns/iter",
            "extra": "iterations: 17929\ncpu: 46659.24479892922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 464046.56369425746,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 464032.484076431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380566.1589432631,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 380559.4196621931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375343.69260701904,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 375337.61348897754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376912.86434778705,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 376907.6956521737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241842.8007989286,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 241841.25166444835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376641.0515151533,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 376633.89610389795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.60536083579615,
            "unit": "ns/iter",
            "extra": "iterations: 2321541\ncpu: 303.60265013626594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1664.7571852469207,
            "unit": "ns/iter",
            "extra": "iterations: 419575\ncpu: 1664.7212059822427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1276.2355917205896,
            "unit": "ns/iter",
            "extra": "iterations: 548105\ncpu: 1276.2264529606566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1306.8282491018695,
            "unit": "ns/iter",
            "extra": "iterations: 536102\ncpu: 1306.8182920414438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1056.6002738574873,
            "unit": "ns/iter",
            "extra": "iterations: 661658\ncpu: 1056.58164792082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7912.014090254351,
            "unit": "ns/iter",
            "extra": "iterations: 88217\ncpu: 7912.01355747754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18955.48491595958,
            "unit": "ns/iter",
            "extra": "iterations: 36827\ncpu: 18955.328970592178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4496.505071240989,
            "unit": "ns/iter",
            "extra": "iterations: 155879\ncpu: 4496.47547135927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4494.236543317655,
            "unit": "ns/iter",
            "extra": "iterations: 155629\ncpu: 4494.150833070904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4466.292149497913,
            "unit": "ns/iter",
            "extra": "iterations: 156283\ncpu: 4466.213215768824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9064.802002872393,
            "unit": "ns/iter",
            "extra": "iterations: 77289\ncpu: 9064.740131195895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8566.016787415732,
            "unit": "ns/iter",
            "extra": "iterations: 82264\ncpu: 8565.95108431392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3189.863885455961,
            "unit": "ns/iter",
            "extra": "iterations: 220072\ncpu: 3189.7783452687995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15850.204649476842,
            "unit": "ns/iter",
            "extra": "iterations: 44134\ncpu: 15850.097430552158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12522.778271955369,
            "unit": "ns/iter",
            "extra": "iterations: 53737\ncpu: 12522.615702402642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12471.039849785288,
            "unit": "ns/iter",
            "extra": "iterations: 56186\ncpu: 12470.958957747436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13241.423567419994,
            "unit": "ns/iter",
            "extra": "iterations: 52929\ncpu: 13241.317614162486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28805.423472323753,
            "unit": "ns/iter",
            "extra": "iterations: 24318\ncpu: 28805.0785426433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99477.36516934322,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 99474.62094374304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85474.55678772193,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85473.12941750078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85446.17775061767,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85445.55012224993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85594.18216295096,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 85592.14582823431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55184.97367161505,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 55184.31466411421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85218.89773832333,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 85217.4854085596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3110.4979907538223,
            "unit": "ns/iter",
            "extra": "iterations: 224960\ncpu: 3110.448079658619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15644.197645796678,
            "unit": "ns/iter",
            "extra": "iterations: 44686\ncpu: 15643.910844559921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12318.05933157543,
            "unit": "ns/iter",
            "extra": "iterations: 56850\ncpu: 12317.84872471403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12297.744650949797,
            "unit": "ns/iter",
            "extra": "iterations: 56926\ncpu: 12297.740926817403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12911.232034328717,
            "unit": "ns/iter",
            "extra": "iterations: 54298\ncpu: 12910.937787763918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27645.701893926733,
            "unit": "ns/iter",
            "extra": "iterations: 25397\ncpu: 27645.49356223146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98468.65887653112,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98467.11248768143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84043.68792026624,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 84042.80739673298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83619.91688591547,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 83619.92346328602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83922.21483622034,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 83920.29142581916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56789.596038318385,
            "unit": "ns/iter",
            "extra": "iterations: 12318\ncpu: 56788.14742653088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85448.73477095699,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85445.0048732927 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}