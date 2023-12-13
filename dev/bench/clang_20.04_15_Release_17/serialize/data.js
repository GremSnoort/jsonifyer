window.BENCHMARK_DATA = {
  "lastUpdate": 1702490379023,
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
      }
    ]
  }
}