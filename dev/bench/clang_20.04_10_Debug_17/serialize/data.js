window.BENCHMARK_DATA = {
  "lastUpdate": 1705952872200,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 20.04 Debug c++-17": [
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
        "date": 1702489563985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7923.37850970086,
            "unit": "ns/iter",
            "extra": "iterations: 88291\ncpu: 7923.1167389654665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72006.0671243383,
            "unit": "ns/iter",
            "extra": "iterations: 11799\ncpu: 71999.8474446987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136955.47179003363,
            "unit": "ns/iter",
            "extra": "iterations: 6363\ncpu: 136947.39902561682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202417.6904651117,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 202403.3720930232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267732.07949662046,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 267723.17372621235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329209.22930181026,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 329202.51812285377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393139.06170596275,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 393136.84210526315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456111.1458662628,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 456099.4207477615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 521937.5748647338,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 521926.9993986774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6086.119329062406,
            "unit": "ns/iter",
            "extra": "iterations: 114884\ncpu: 6085.975418683193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5154.593785876586,
            "unit": "ns/iter",
            "extra": "iterations: 135884\ncpu: 5154.567130788034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5177.188228433835,
            "unit": "ns/iter",
            "extra": "iterations: 135479\ncpu: 5177.0362934476825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5179.178994876602,
            "unit": "ns/iter",
            "extra": "iterations: 136043\ncpu: 5178.9434223003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9309.788759639228,
            "unit": "ns/iter",
            "extra": "iterations: 74962\ncpu: 9309.075264800844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31594.700760350614,
            "unit": "ns/iter",
            "extra": "iterations: 25909\ncpu: 31593.006291250098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138394.604466738,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 138385.75821330323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 104620.108901162,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 104612.89134438302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101576.26199041116,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 101569.98800959214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101142.2843500014,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 101135.58553181344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271817.8994325368,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 271796.2168978564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2181675.899297406,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2181529.742388762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1783758.5815738318,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1783719.1938579627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767798.3847618506,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1767777.714285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1774316.6247618361,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774279.0476190438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1059772.8333334336,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1059751.826484019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1724367.2931353995,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1724343.4137291263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7164276.699999163,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7164157.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4011578.54506425,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4011314.1630901285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9166502.107438818,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9156846.280991739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30993.156888524067,
            "unit": "ns/iter",
            "extra": "iterations: 26624\ncpu: 30992.7208533655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133320.04430280958,
            "unit": "ns/iter",
            "extra": "iterations: 6433\ncpu: 133314.61215607016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105642.81519049732,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 105638.85452746156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101593.30597370799,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 101587.99283154089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104138.63768647875,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 104133.92027390518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 280867.2157244967,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 280853.63872644457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2201790.567375963,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2201673.758865251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1808282.0213177556,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1808205.6201550397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1795981.362763886,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1795891.554702495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1780337.4444443847,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780254.7892720331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1060054.6383466385,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1059983.5820895468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1752703.2138836521,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1752608.4427767408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7207504.279999739,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7206900.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4147224.888888559,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4146969.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29639.213165011202,
            "unit": "ns/iter",
            "extra": "iterations: 27725\ncpu: 29637.803426510447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127265.99970237982,
            "unit": "ns/iter",
            "extra": "iterations: 6720\ncpu: 127258.45238095168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102422.03044468565,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102416.94833992569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101915.53102212111,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 101909.36043036419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101999.1158573033,
            "unit": "ns/iter",
            "extra": "iterations: 8381\ncpu: 101992.99606252242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274129.96350365685,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 274114.59854014585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2177480.997663647,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2177378.7383177504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1779874.062977052,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779770.2290076397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1785828.226053768,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1785728.544061296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1784991.0823755378,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784899.0421455987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1052707.6906393038,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1052675.913242014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1731456.6299064269,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1731364.6728971957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3225.8080085670945,
            "unit": "ns/iter",
            "extra": "iterations: 217567\ncpu: 3225.5728120532967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15954.260833959052,
            "unit": "ns/iter",
            "extra": "iterations: 43959\ncpu: 15953.950271844196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12182.977870178083,
            "unit": "ns/iter",
            "extra": "iterations: 57479\ncpu: 12182.798935263307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12156.860312771016,
            "unit": "ns/iter",
            "extra": "iterations: 57550\ncpu: 12156.227628149381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10424.897710877804,
            "unit": "ns/iter",
            "extra": "iterations: 67231\ncpu: 10424.186759084352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64290.00421669807,
            "unit": "ns/iter",
            "extra": "iterations: 10909\ncpu: 64283.82986524882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144187.51419168524,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 144179.617441381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36663.64206274344,
            "unit": "ns/iter",
            "extra": "iterations: 19062\ncpu: 36661.21603189598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37075.90211682277,
            "unit": "ns/iter",
            "extra": "iterations: 18849\ncpu: 37073.16568518254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36857.27387092876,
            "unit": "ns/iter",
            "extra": "iterations: 18998\ncpu: 36855.89009369405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74870.09585243506,
            "unit": "ns/iter",
            "extra": "iterations: 9379\ncpu: 74868.24821409538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66622.63046785709,
            "unit": "ns/iter",
            "extra": "iterations: 10516\ncpu: 66622.23278813252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20187.262089673757,
            "unit": "ns/iter",
            "extra": "iterations: 34637\ncpu: 20187.126483240674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97379.68455625026,
            "unit": "ns/iter",
            "extra": "iterations: 7155\ncpu: 97375.56953179545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78518.69644658676,
            "unit": "ns/iter",
            "extra": "iterations: 8921\ncpu: 78516.35466875855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77530.86636970346,
            "unit": "ns/iter",
            "extra": "iterations: 8980\ncpu: 77526.09131403104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78873.68871112457,
            "unit": "ns/iter",
            "extra": "iterations: 8876\ncpu: 78869.32176656146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156819.03796046972,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 156814.19586702614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 613746.6628720908,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 613709.8949211932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 523311.7225130795,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 523277.5617053098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526135.7122464454,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 526107.062359129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 525672.3553223356,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 525647.8260869638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344784.48717950046,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 344767.948717953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 510724.10771469655,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 510709.9708879228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20185.365332714122,
            "unit": "ns/iter",
            "extra": "iterations: 34459\ncpu: 20184.866072724337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96989.04449065185,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 96983.40956340962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78458.43154460505,
            "unit": "ns/iter",
            "extra": "iterations: 8889\ncpu: 78452.35684553895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77486.5262110219,
            "unit": "ns/iter",
            "extra": "iterations: 9042\ncpu: 77482.60340632637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79648.37404840226,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 79644.81308942118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156003.39642856753,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156000.82589285626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 617122.4165931416,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 617080.6707855274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 521447.0512434838,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 521409.41974377487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 519744.79437870526,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519710.1331360876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526399.3146067907,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 526390.2621722847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 347506.75783191755,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 347504.72401789954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 511267.64061357465,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511255.66106646537 ns\nthreads: 1"
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
        "date": 1702492192878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7883.535345030664,
            "unit": "ns/iter",
            "extra": "iterations: 89079\ncpu: 7882.9555787559375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73980.19882026341,
            "unit": "ns/iter",
            "extra": "iterations: 11528\ncpu: 73975.27758501041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141968.4302439096,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 141961.1219512195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 210688.97711394183,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 210678.87256082878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 277860.62603701884,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 277842.1186981493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343703.596138688,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 343700.59101654857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407199.1147850671,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 407189.4189891357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478304.0257534719,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 478288.21917808254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545047.1691635593,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545038.9513108616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6061.326777282183,
            "unit": "ns/iter",
            "extra": "iterations: 115415\ncpu: 6061.148031018484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5130.247729868807,
            "unit": "ns/iter",
            "extra": "iterations: 136556\ncpu: 5130.1619848267355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5097.7166214319905,
            "unit": "ns/iter",
            "extra": "iterations: 137431\ncpu: 5097.611164875467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5100.068567678016,
            "unit": "ns/iter",
            "extra": "iterations: 137120\ncpu: 5099.919049008174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9294.03799113866,
            "unit": "ns/iter",
            "extra": "iterations: 75386\ncpu: 9293.85827607246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31450.503040503416,
            "unit": "ns/iter",
            "extra": "iterations: 26147\ncpu: 31449.94454430718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126988.4849836532,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 126987.40707701462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102392.33545290961,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102390.5698860229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102969.1355421597,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 102968.30120481917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105451.44433436567,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 105448.4210526317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 274883.81757401326,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 274875.2308182108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2213212.880952499,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2213133.0952381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1840128.918972185,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1840110.0790513838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1835829.3643564363,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1835793.0693069324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1863469.7234468847,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863453.7074148268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1089328.5650644314,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1089310.9026963653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1780497.478927385,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780482.9501915716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7373014.749999812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7372689.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4169332.0848210645,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4169192.857142853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9273922.457626374,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9273554.237288147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29831.537210484596,
            "unit": "ns/iter",
            "extra": "iterations: 27546\ncpu: 29830.730414579233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130682.56859453334,
            "unit": "ns/iter",
            "extra": "iterations: 6553\ncpu: 130680.4669616968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107324.06877907323,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107321.31271218405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101958.92740970581,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 101957.21119349418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102560.86083789117,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 102560.00000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 280198.0948668065,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 280195.9064327505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2228483.0287080957,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2228443.0622009602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1848729.291666695,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1848696.8253968246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1853566.9841269066,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1853519.4444444373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1863632.7684631313,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1863604.391217565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1093400.8579811063,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1093383.0985915542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1787869.6679464031,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1787854.8944337755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7374786.079999467,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7374511.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4253880.597284643,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4253842.081447985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29521.574050285544,
            "unit": "ns/iter",
            "extra": "iterations: 27245\ncpu: 29521.10846026793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126827.23017523579,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 126824.7846747842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106222.85778275045,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106220.90332213532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101643.07629753611,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 101639.22506577423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101835.19271769126,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 101832.08767517043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274255.0624603908,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 274249.80976537685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2202706.907363447,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2202667.458432307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1820298.1013646917,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820284.6003898578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1820270.3294347094,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820229.6296296325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1859368.918163507,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859355.888223543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1080694.563005757,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1080677.2254335263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1771673.885496239,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1771637.78625954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3222.3676283174013,
            "unit": "ns/iter",
            "extra": "iterations: 216572\ncpu: 3222.2688066785977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16064.490177066124,
            "unit": "ns/iter",
            "extra": "iterations: 43317\ncpu: 16064.196504836375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12150.346921121376,
            "unit": "ns/iter",
            "extra": "iterations: 57797\ncpu: 12150.248282782899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11724.535972484799,
            "unit": "ns/iter",
            "extra": "iterations: 59893\ncpu: 11724.321707044179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10474.560817472562,
            "unit": "ns/iter",
            "extra": "iterations: 66938\ncpu: 10474.361349308367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63830.9409779202,
            "unit": "ns/iter",
            "extra": "iterations: 10962\ncpu: 63824.95894909652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145073.1868655492,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 145061.71535114912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37511.99823236045,
            "unit": "ns/iter",
            "extra": "iterations: 18669\ncpu: 37509.83448497482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37775.00064903858,
            "unit": "ns/iter",
            "extra": "iterations: 18489\ncpu: 37772.57288117307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37747.13065028686,
            "unit": "ns/iter",
            "extra": "iterations: 18561\ncpu: 37744.88443510622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75556.69124174582,
            "unit": "ns/iter",
            "extra": "iterations: 9237\ncpu: 75551.75922918688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67812.89707590194,
            "unit": "ns/iter",
            "extra": "iterations: 10328\ncpu: 67809.51781564759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20867.178333481384,
            "unit": "ns/iter",
            "extra": "iterations: 33471\ncpu: 20865.34014519996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100220.23918028138,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 100217.61249641584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80858.45345345634,
            "unit": "ns/iter",
            "extra": "iterations: 8658\ncpu: 80853.90390390376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80506.00620474793,
            "unit": "ns/iter",
            "extra": "iterations: 8703\ncpu: 80498.06963116214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81678.84585809727,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81674.23977630159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155539.7822092589,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 155530.45036970667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630066.9155435716,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 630054.9865229124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 537694.7517293952,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537654.3428132196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 535308.4391736911,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 535269.8546289199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 543866.0038729712,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 543839.5042602686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 350583.8365914943,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 350562.7568922295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 523291.8847305299,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 523282.1856287448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21124.60757931518,
            "unit": "ns/iter",
            "extra": "iterations: 33222\ncpu: 21124.02323761378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99676.62403653337,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 99674.86440194098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81342.3689466924,
            "unit": "ns/iter",
            "extra": "iterations: 8611\ncpu: 81336.75531297107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81044.54041222871,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 81039.67114404804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82215.0191314602,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 82210.01173709042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154861.16069055995,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 154858.45506861535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 628636.9073741225,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 628624.460431653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537641.6286371032,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 537609.2649310782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 530920.5758725525,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530887.7086494659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 543388.3384972612,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 543355.8481797058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 352409.3142144911,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 352387.7306733106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522910.9205992133,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 522906.96629213454 ns\nthreads: 1"
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
        "date": 1702503268615,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7810.247501679845,
            "unit": "ns/iter",
            "extra": "iterations: 89260\ncpu: 7810.084024198969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72354.67727967698,
            "unit": "ns/iter",
            "extra": "iterations: 11778\ncpu: 72351.15469519443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138000.63613432556,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 137995.4280309002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203903.27071960815,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 203896.65012406945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269398.09183672594,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 269389.0847247989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334988.0084680841,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 334952.69438029255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398835.9367552685,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 398815.39871677343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463999.3667912424,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 463979.3913507738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527041.0423472485,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 527026.9812462184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6081.553280740726,
            "unit": "ns/iter",
            "extra": "iterations: 115858\ncpu: 6081.3435412314975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5126.734739495436,
            "unit": "ns/iter",
            "extra": "iterations: 136447\ncpu: 5126.379473348623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5147.2740846649,
            "unit": "ns/iter",
            "extra": "iterations: 135688\ncpu: 5143.297122811156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5125.8126574118405,
            "unit": "ns/iter",
            "extra": "iterations: 136584\ncpu: 5125.710185673294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9040.720477978517,
            "unit": "ns/iter",
            "extra": "iterations: 77493\ncpu: 9040.67335114139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31558.12380440524,
            "unit": "ns/iter",
            "extra": "iterations: 26033\ncpu: 31557.938001767034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125918.3541697399,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 125914.34034416814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101961.32476076826,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 101955.41866028706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101470.53684461872,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 101464.5527290099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101450.49904511988,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 101444.86751014572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268605.6324257398,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 268591.5222772282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2143987.812933035,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2143862.3556581987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1772734.0359848766,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1772626.8939393982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1727476.1005585974,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1727466.1080074531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1780291.458574097,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1780206.1657032806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1034223.7185762328,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1034173.5261401576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1703128.023766014,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1703051.9195612445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7081912.580000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081866.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4024852.4805197143,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4024672.727272714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9064803.188524649,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 9064530.327868873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30307.902645385457,
            "unit": "ns/iter",
            "extra": "iterations: 27066\ncpu: 30306.620852730335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129349.19906287738,
            "unit": "ns/iter",
            "extra": "iterations: 6616\ncpu: 129341.6717049578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104637.79279942323,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 104632.89248101861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101833.7342482098,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 101828.94988066771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104166.01396203139,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 104160.20820575634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273227.43857995386,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 273218.63022306014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2169665.5302323876,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2169526.5116279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779903.1278626074,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779796.5648854983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1756055.5657896092,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1755961.8421052636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1817213.4418603124,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1817147.8682170666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1036333.9877369057,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1036246.2653288727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1721989.068645757,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1721918.36734694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7090473.440000551,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7089868.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4079847.7598256525,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4079695.1965065547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29557.053752644577,
            "unit": "ns/iter",
            "extra": "iterations: 27887\ncpu: 29556.879549611014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126675.23887000578,
            "unit": "ns/iter",
            "extra": "iterations: 6761\ncpu: 126671.33560124248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102666.68611211238,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 102662.2734365623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101256.75062255526,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 101249.66204197802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102013.46781998586,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 102007.56109363605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269956.97201494576,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269945.77114428027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2152363.7020784733,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2152249.4226327995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1776115.7272727075,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1776064.2045454509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1807723.2434945782,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1807630.4832713765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1778632.6007603488,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1778559.8859315678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1026355.1024228348,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1026326.9823788538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1705690.420475169,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1705620.4753199252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3234.65742953361,
            "unit": "ns/iter",
            "extra": "iterations: 216770\ncpu: 3234.4535682981955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15910.346277584098,
            "unit": "ns/iter",
            "extra": "iterations: 44138\ncpu: 15909.506547645919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12693.49746055274,
            "unit": "ns/iter",
            "extra": "iterations: 55327\ncpu: 12693.055831691536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12760.739652724826,
            "unit": "ns/iter",
            "extra": "iterations: 54942\ncpu: 12760.571147755845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10308.743089000114,
            "unit": "ns/iter",
            "extra": "iterations: 67899\ncpu: 10308.265217455266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62320.164961296425,
            "unit": "ns/iter",
            "extra": "iterations: 11239\ncpu: 62317.35029806929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141654.1140953297,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 141645.1130856215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36844.83318470683,
            "unit": "ns/iter",
            "extra": "iterations: 19063\ncpu: 36842.56937522962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36931.83202113246,
            "unit": "ns/iter",
            "extra": "iterations: 18925\ncpu: 36928.644649933754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37353.497945676376,
            "unit": "ns/iter",
            "extra": "iterations: 18741\ncpu: 37351.74750546943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73411.18356625614,
            "unit": "ns/iter",
            "extra": "iterations: 9517\ncpu: 73407.62845434442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66094.60209276172,
            "unit": "ns/iter",
            "extra": "iterations: 10608\ncpu: 66092.12858220162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20176.39034228297,
            "unit": "ns/iter",
            "extra": "iterations: 34708\ncpu: 20174.904921056004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94477.04570581076,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 94474.07307536647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76315.2230341276,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 76313.62198712995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76700.57748956252,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 76696.65860628821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76776.1532461818,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 76771.20729429799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152584.06009143204,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 152568.38667537607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 605406.5393939146,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 605394.2857142898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516019.74797940155,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 515981.92505510245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 509460.1609614199,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 509434.6686088861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516851.9210914816,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516828.83480825886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336983.55883774697,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 336966.4406779678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 502753.22078849183,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502726.45161290356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20122.314530700765,
            "unit": "ns/iter",
            "extra": "iterations: 34871\ncpu: 20121.932264632323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94411.0031060192,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 94410.39837947236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77532.45951956965,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 77529.1036476856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77469.07920901298,
            "unit": "ns/iter",
            "extra": "iterations: 9052\ncpu: 77465.54352629314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78083.62037450248,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 78076.83905483696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152286.89123341255,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152284.22884489826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 606054.1610389471,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 606050.8225108152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 518283.32038835157,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 518259.2979835636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 503184.11549500696,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 503159.3974175028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517837.5424354584,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517809.15129152086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337653.79884507804,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 337636.66987487517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505932.5364620222,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505929.81949458853 ns\nthreads: 1"
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
        "date": 1705574903598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7951.140684884886,
            "unit": "ns/iter",
            "extra": "iterations: 88190\ncpu: 7950.833427826285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74271.42485372453,
            "unit": "ns/iter",
            "extra": "iterations: 11451\ncpu: 74268.0813902716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141641.97118342816,
            "unit": "ns/iter",
            "extra": "iterations: 6177\ncpu: 141641.20123037076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209226.8307323076,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 209214.9819927971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272781.0279347304,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 272772.72441933455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337927.3456886589,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 337915.68474443996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403402.5796563283,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 403387.41291221563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469109.77113625396,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 469101.023155627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534449.2762430462,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 534420.257826888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6060.668046443301,
            "unit": "ns/iter",
            "extra": "iterations: 115236\ncpu: 6060.493248637582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5145.584036544749,
            "unit": "ns/iter",
            "extra": "iterations: 136161\ncpu: 5145.383773620943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5187.483555457924,
            "unit": "ns/iter",
            "extra": "iterations: 136185\ncpu: 5187.291551933034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5100.1396755830865,
            "unit": "ns/iter",
            "extra": "iterations: 137354\ncpu: 5099.954133115891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9125.386401888867,
            "unit": "ns/iter",
            "extra": "iterations: 76643\ncpu: 9124.761556828402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31976.29123008868,
            "unit": "ns/iter",
            "extra": "iterations: 26055\ncpu: 31975.693724812867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126139.68108027961,
            "unit": "ns/iter",
            "extra": "iterations: 6776\ncpu: 126134.94687131037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102637.5318406215,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 102636.57156614914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101752.63449593063,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 101748.80554228384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100615.51270234972,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 100614.74654377879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271528.3898939424,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 271516.2195882725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2180731.990610314,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2180625.1173708914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1804528.9729206278,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1804357.8336557022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1808107.4182878945,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1808004.2801556427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1805114.6216215428,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1804939.575289574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072878.5022831275,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1072819.977168952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1745822.3082705028,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1745636.6541353364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7332978.989999219,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7332102.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4117797.1371678975,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4117468.584070799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9160270.571428822,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9159341.176470578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29840.241913106333,
            "unit": "ns/iter",
            "extra": "iterations: 27390\ncpu: 29839.95253742235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127643.72652757788,
            "unit": "ns/iter",
            "extra": "iterations: 6710\ncpu: 127635.84202682524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103660.93990791564,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 103658.81996607722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101645.39060450453,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101642.0412543226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103134.4112617689,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 103131.35458654001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 272524.27312637627,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 272513.3584195676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2208756.2969120573,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2208736.1045130496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1819700.1933593082,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1819639.4531249937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1836911.974359169,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1836882.0512820473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1833033.0197238955,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832941.4201183547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1079496.4502313714,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1079485.6481481437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1770506.5238095855,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770429.7142857076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7371472.179999045,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7371257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4232325.6027393695,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4232073.972602766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29188.31169340179,
            "unit": "ns/iter",
            "extra": "iterations: 28050\ncpu: 29187.782531194403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129837.07320400717,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 129831.43376780818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 103920.61279338284,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 103919.67651708625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101143.31545217223,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 101133.58651792062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101123.72992873809,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 101112.7078384796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 268966.776949367,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 268948.30692761706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2211995.435714341,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2211950.714285715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1819164.9181285915,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1819099.6101364493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1815939.1186769244,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1815921.4007782082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1822714.352250523,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1822632.2896281814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1081269.5573581217,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1081259.7914252623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1770066.631477967,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1770033.589251439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3191.81532320591,
            "unit": "ns/iter",
            "extra": "iterations: 219210\ncpu: 3191.7188996852265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16272.989821999694,
            "unit": "ns/iter",
            "extra": "iterations: 43034\ncpu: 16272.46828089409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12536.9818769077,
            "unit": "ns/iter",
            "extra": "iterations: 55730\ncpu: 12536.865243136503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12846.919815356667,
            "unit": "ns/iter",
            "extra": "iterations: 56108\ncpu: 12846.253653667893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10490.408531559315,
            "unit": "ns/iter",
            "extra": "iterations: 66717\ncpu: 10490.30531948388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62699.823445185044,
            "unit": "ns/iter",
            "extra": "iterations: 11175\ncpu: 62696.76957494411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146272.38659148314,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 146255.93149540527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37751.44623829735,
            "unit": "ns/iter",
            "extra": "iterations: 18582\ncpu: 37749.38650306754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37955.36811044964,
            "unit": "ns/iter",
            "extra": "iterations: 18470\ncpu: 37954.42880346514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38158.068909122405,
            "unit": "ns/iter",
            "extra": "iterations: 18343\ncpu: 38156.11950062661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76328.10995850671,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76327.51692509274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68075.27247983387,
            "unit": "ns/iter",
            "extra": "iterations: 10287\ncpu: 68073.66579177651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20596.286799339377,
            "unit": "ns/iter",
            "extra": "iterations: 33968\ncpu: 20595.907913330087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98953.39355385958,
            "unit": "ns/iter",
            "extra": "iterations: 7074\ncpu: 98949.4910941475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79859.29813170084,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 79854.06698564565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79034.77105440402,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 79033.11131180952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80568.00668896423,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 80565.26352208451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156199.01183828738,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 156197.63234308668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 625797.2157565613,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 625791.4950760948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 531532.1909090575,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 531494.0909090809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 532303.2771450732,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 532293.1662870137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 540602.436772722,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 540591.0783553168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 347513.72893950745,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 347510.70366699697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 521584.69431984815,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 521580.4932735425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20785.27404374089,
            "unit": "ns/iter",
            "extra": "iterations: 33699\ncpu: 20784.693907831253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97220.29193235665,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 97219.37898530561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79480.94601045405,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 79476.80154580616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78568.62244898896,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 78567.96366898395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80946.4552290639,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 80945.88153632474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154956.9591111069,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 154954.71111111037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626670.3491495142,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 626665.6222023248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 533742.3813882438,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 533718.0015255589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 530236.7046317259,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 530233.1814730533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540057.9105628429,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540054.2791056238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350287.0370370205,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 350284.334334336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 521080.27955387713,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521076.28252788325 ns\nthreads: 1"
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
        "date": 1705772695869,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7862.223145608391,
            "unit": "ns/iter",
            "extra": "iterations: 88924\ncpu: 7862.03387162071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73139.05699793618,
            "unit": "ns/iter",
            "extra": "iterations: 11632\ncpu: 73139.39993122421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139573.38057197529,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 139572.8550886723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205193.03212853457,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 205195.18072289156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270556.73642924975,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 270556.008785692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334510.78471682745,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 334506.633048875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399474.26749539137,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 399463.9042357274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 464153.6721836779,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 464138.9215162838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529020.6989051636,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 529014.4160583953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6019.7135254572295,
            "unit": "ns/iter",
            "extra": "iterations: 116314\ncpu: 6019.508399676734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5072.380975669265,
            "unit": "ns/iter",
            "extra": "iterations: 139043\ncpu: 5072.344526513389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5090.494117735945,
            "unit": "ns/iter",
            "extra": "iterations: 132602\ncpu: 5090.5061763774265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5031.263458161709,
            "unit": "ns/iter",
            "extra": "iterations: 139525\ncpu: 5031.210177387562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9136.223725572623,
            "unit": "ns/iter",
            "extra": "iterations: 76348\ncpu: 9136.23670561114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32270.0229934575,
            "unit": "ns/iter",
            "extra": "iterations: 25529\ncpu: 32269.391672215916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 129028.61730448938,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 129026.30464377555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103513.82565470481,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 103509.56595538322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102042.1959281488,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 102039.85628742514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103103.79264900135,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 103102.07955507198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 272805.7760630218,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 272795.7795275594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2194960.8779343455,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2194891.784037561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1796932.4536678495,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796879.9227799235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1791485.1040464423,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791453.3718689831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1815441.9083821108,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1815399.6101364526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1064859.9266896218,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1064847.6517754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1750569.6572504954,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1750553.1073446327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7212092.039999333,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7211800.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3992102.4017093466,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3992036.7521367464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9009739.421488173,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9009279.338842971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29959.246830584758,
            "unit": "ns/iter",
            "extra": "iterations: 27371\ncpu: 29958.81772679104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130302.5107551543,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 130298.443935927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105973.04776753188,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 105970.01746071296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102198.71399177298,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 102198.97119341584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103697.2967193212,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103697.67922235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 272577.5883838175,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 272572.9482323222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2216938.9497606424,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2216878.9473684244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1814285.6751467318,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1814267.9060665285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1802505.6279068498,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802463.17829457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1820359.545988332,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1820293.3463796393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1071137.0633640392,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1071114.6313364038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1763030.7836813063,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762998.4819734357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7271263.169999429,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7271040.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4131583.889867989,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4131497.3568282085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29387.490743736358,
            "unit": "ns/iter",
            "extra": "iterations: 27819\ncpu: 29386.4876523239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132186.90382244156,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 132184.41738594248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105308.87194066664,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 105304.91965389345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101287.3312759733,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 101284.20178041587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103418.0099082699,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 103417.29663608612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274596.1739821759,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 274597.70992366463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2201305.643025811,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2201280.851063827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1810495.9787235302,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1810516.2475822007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1788839.1791908091,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1788861.2716763106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1994938.252918197,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1994945.9143968911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1057875.7831050963,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1057870.7762557077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1752244.8452828545,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752239.0566037737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3215.2534392866733,
            "unit": "ns/iter",
            "extra": "iterations: 217705\ncpu: 3215.1622608575994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16084.446261253068,
            "unit": "ns/iter",
            "extra": "iterations: 43544\ncpu: 16084.516810582281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12625.234247537479,
            "unit": "ns/iter",
            "extra": "iterations: 55531\ncpu: 12625.133709099422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12887.069058229796,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12887.208574269753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10510.426953311993,
            "unit": "ns/iter",
            "extra": "iterations: 66656\ncpu: 10510.384661545808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65204.15034933121,
            "unit": "ns/iter",
            "extra": "iterations: 10735\ncpu: 65204.8998602699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145204.45422462135,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 145206.0411044206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37085.24261325167,
            "unit": "ns/iter",
            "extra": "iterations: 18919\ncpu: 37084.65563719029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37226.814765603674,
            "unit": "ns/iter",
            "extra": "iterations: 18814\ncpu: 37226.04975018581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37553.12948175369,
            "unit": "ns/iter",
            "extra": "iterations: 18659\ncpu: 37551.803419261596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74945.95155411973,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 74944.93033226168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67110.0816326547,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 67108.48902941449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20773.917254096978,
            "unit": "ns/iter",
            "extra": "iterations: 33621\ncpu: 20773.763421670767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97443.6297068193,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97441.26719466393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79250.74642452181,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 79248.28603859156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78724.35482785205,
            "unit": "ns/iter",
            "extra": "iterations: 8917\ncpu: 78721.47583267993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79416.1845177309,
            "unit": "ns/iter",
            "extra": "iterations: 8823\ncpu: 79414.58687521203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153556.67706503606,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153555.47012302163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 622140.9021351773,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 622132.3843416305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 527846.3992509261,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 527826.1423220956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 521324.9598513472,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521317.54646840744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518483.16148144245,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518470.88888889755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340901.2653358858,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 340902.72638753196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511278.52158007806,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 511279.73664960376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20216.149278293597,
            "unit": "ns/iter",
            "extra": "iterations: 34640\ncpu: 20216.0941108547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99718.29335609227,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 99717.27130459574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79743.0172591142,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 79743.91359012373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78163.2660263568,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78161.54791154845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80404.97344521602,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 80403.77054833961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155265.3713904986,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155267.10350955016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 622589.6553873406,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 622583.7934105172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 524845.8836336186,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 524851.9519519563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 516295.8292862289,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 516295.43782193685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 522252.50746268267,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 522250.22388059506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340812.2579384685,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 340816.1211529081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510923.5537673653,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 510913.02121434675 ns\nthreads: 1"
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
        "date": 1705774159063,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8293.855545953202,
            "unit": "ns/iter",
            "extra": "iterations: 87938\ncpu: 8272.007550774411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74541.40225661958,
            "unit": "ns/iter",
            "extra": "iterations: 11433\ncpu: 74535.75614449401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142670.56185650817,
            "unit": "ns/iter",
            "extra": "iterations: 6119\ncpu: 142668.32815819574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209777.52590797603,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 209770.67796610168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 277242.08857507614,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 277234.8202824135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 342945.4478381887,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 342937.8421261403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 411593.52693763777,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 411583.3175803404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478256.4722374646,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 478247.49862561846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545930.0306633469,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 545913.2665832292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6055.9627489093255,
            "unit": "ns/iter",
            "extra": "iterations: 115755\ncpu: 6055.872316530601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5150.492025941509,
            "unit": "ns/iter",
            "extra": "iterations: 135690\ncpu: 5150.240990493026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5123.210944879805,
            "unit": "ns/iter",
            "extra": "iterations: 136557\ncpu: 5122.885681437053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5096.436848641981,
            "unit": "ns/iter",
            "extra": "iterations: 137693\ncpu: 5096.15666736871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9213.38524687072,
            "unit": "ns/iter",
            "extra": "iterations: 76133\ncpu: 9212.932631053545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30626.144570289205,
            "unit": "ns/iter",
            "extra": "iterations: 27018\ncpu: 30624.620623288225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123830.82270019135,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 123826.21711960477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98319.55291250096,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 98315.23555349278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99588.4161199667,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 99586.71508903464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99334.80855017979,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 99334.51440520458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269302.87744946545,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 269290.51321928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2179830.946009404,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2179692.4882629113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1810444.9241244402,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810357.0038910569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1799885.224171602,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1799800.389863544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1808322.7777777575,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1808229.629629631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1080082.258479504,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1080016.8421052615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1748562.1528302939,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748479.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7333098.130000054,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7332506.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4203078.995515925,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4202830.493273556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9267999.170940798,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9267383.760683753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28954.526558724738,
            "unit": "ns/iter",
            "extra": "iterations: 28164\ncpu: 28953.461866212197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127309.08215297671,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 127301.04368570127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101708.82390913904,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 101704.2438732816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102129.54063138552,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 102127.88380746609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100843.15220214172,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 100841.88215845948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 272179.32497652475,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 272176.8724537754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2218931.0811456037,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2218919.3317422485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1913666.0874752055,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1913630.0198807118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1832387.7948718832,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832381.2623274266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1848045.624505941,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1848010.869565219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1095530.72823527,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1095525.1764705854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1777912.1070745608,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777873.0401529693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7387885.110000525,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7387766.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4093037.6008771565,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4092919.29824559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28569.823993271493,
            "unit": "ns/iter",
            "extra": "iterations: 28533\ncpu: 28569.670206427665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125052.48708920027,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 125049.23708920136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99246.54440424682,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 99246.97164196511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99720.51060837532,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 99718.60274293793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100907.78992294223,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 100906.47302904577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271581.1230769171,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 271561.5070643649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2211131.50354622,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2210996.453900725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1833005.6640315133,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1832912.4505928874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1825615.9901380686,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1825468.2445759275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1837701.102766754,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1837584.5849802415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1095354.4058822766,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1095290.9411764722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1780897.006048393,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1780810.2822580647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3185.5543034835487,
            "unit": "ns/iter",
            "extra": "iterations: 219636\ncpu: 3185.3243548416503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16245.126173751354,
            "unit": "ns/iter",
            "extra": "iterations: 43131\ncpu: 16244.381071619033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12817.669640734553,
            "unit": "ns/iter",
            "extra": "iterations: 54695\ncpu: 12816.8315202487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12253.206935182607,
            "unit": "ns/iter",
            "extra": "iterations: 57129\ncpu: 12252.591503439671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10512.362122599823,
            "unit": "ns/iter",
            "extra": "iterations: 66541\ncpu: 10512.411896424717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63463.137413605655,
            "unit": "ns/iter",
            "extra": "iterations: 10996\ncpu: 63460.08548563166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147067.49066215774,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 147056.9821731744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37567.53774039757,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 37566.3738147532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38279.06663753678,
            "unit": "ns/iter",
            "extra": "iterations: 18308\ncpu: 38278.752457942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37847.07976622027,
            "unit": "ns/iter",
            "extra": "iterations: 18479\ncpu: 37846.355322257856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76907.86187176882,
            "unit": "ns/iter",
            "extra": "iterations: 9093\ncpu: 76907.36830528892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68492.09550781055,
            "unit": "ns/iter",
            "extra": "iterations: 10240\ncpu: 68485.69335937416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21038.89452009338,
            "unit": "ns/iter",
            "extra": "iterations: 33267\ncpu: 21037.27718159135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100037.8553648084,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 100029.2417739627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81468.77570963484,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 81463.2154490464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81889.36201469685,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81888.84225253652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81095.44182007984,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 81089.6028713669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160280.09519452092,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160269.6338672762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630524.4302430559,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 630471.0171017033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 542060.2772200954,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 542022.2393822405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540981.5282726168,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 540977.2269558458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 546254.4387197378,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546197.4238875839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 357360.1788617929,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 357342.6321138178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 527998.438913951,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 527956.4102564203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20994.655145326527,
            "unit": "ns/iter",
            "extra": "iterations: 33098\ncpu: 20994.150703970034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99530.21317995124,
            "unit": "ns/iter",
            "extra": "iterations: 7041\ncpu: 99530.77687828422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81605.3008509136,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81603.35703461949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82010.87423816546,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 82010.25550867232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83038.02104149236,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 83037.00481955986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159343.27483519344,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 159341.10025005662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 625611.2423698002,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 625614.3626570819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 535660.4004594159,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 535645.7120980131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 535240.9150076575,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 535227.9479326154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 543904.3914728865,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 543860 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 357177.6163748762,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 357152.5231719891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525014.1477612074,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 524971.4179104518 ns\nthreads: 1"
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
        "date": 1705777696896,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8021.464293483103,
            "unit": "ns/iter",
            "extra": "iterations: 87337\ncpu: 8021.461694356344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72911.69753298502,
            "unit": "ns/iter",
            "extra": "iterations: 11674\ncpu: 72906.39026897379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139415.70009537105,
            "unit": "ns/iter",
            "extra": "iterations: 6292\ncpu: 139409.66306420855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205255.69495522106,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 205249.4106553513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271771.21399435174,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 271762.3470348289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 335935.4951493854,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 335926.23205277463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 400934.4739270708,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 400920.6275957543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 465201.8731942208,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 465184.6441947564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529739.0417423022,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 529718.2093163949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6115.176852385243,
            "unit": "ns/iter",
            "extra": "iterations: 114474\ncpu: 6114.856648671308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5163.123473761831,
            "unit": "ns/iter",
            "extra": "iterations: 135300\ncpu: 5162.848484848476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5170.446076949637,
            "unit": "ns/iter",
            "extra": "iterations: 135647\ncpu: 5170.137931542902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5279.708794442654,
            "unit": "ns/iter",
            "extra": "iterations: 135904\ncpu: 5279.672415822931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9241.538909463052,
            "unit": "ns/iter",
            "extra": "iterations: 76421\ncpu: 9241.092108190163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31982.968570869874,
            "unit": "ns/iter",
            "extra": "iterations: 25645\ncpu: 31982.175862741235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127000.49754208005,
            "unit": "ns/iter",
            "extra": "iterations: 6713\ncpu: 126998.42097422892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 104109.26817960122,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 104102.6354319181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101532.29105632877,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 101528.33154698134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102904.04310464638,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 102901.02564102547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 275114.4704954541,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 275113.1587251506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2177955.611241103,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2177786.651053864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1835346.1839530917,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1835250.4892367877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1814277.1621094677,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814192.382812503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1812175.406249894,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812087.4999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1084953.6976745322,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1084955.930232559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1747951.8064517546,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1747926.3757115742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7281525.440000678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7280921.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4116040.841409665,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4115907.048458149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9122422.38333268,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9121947.499999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31008.449210951996,
            "unit": "ns/iter",
            "extra": "iterations: 26551\ncpu: 31006.817069036937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131459.23660231277,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 131450.73359073346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106764.2020495942,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 106757.173582996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103231.2553347138,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 103221.64370198747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105285.05894031114,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 105280.59312569826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 277327.739576674,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 277316.90186016745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2196370.0685579753,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2196269.7399527123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1827520.8317023844,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1827362.0352250505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1830085.0627452729,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829947.2549019626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1827143.2495125835,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1827027.4853801262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1082217.8282710433,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1082173.9485981304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1763071.2784089793,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1763076.7045454623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7339343.040000585,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7338857.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4260896.045248993,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4260744.343891418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29568.081885135867,
            "unit": "ns/iter",
            "extra": "iterations: 27563\ncpu: 29566.396981460835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127410.48747764454,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 127405.09838998172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 103966.06935641279,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 103962.33544612408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100190.79058574715,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 100186.74727080608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102654.54394873657,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 102649.59497037831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 276909.1474052971,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 276902.1967526269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2170564.8697674894,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2170460.232558155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1811784.4941634794,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1811738.1322957268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1804863.5048543678,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1804838.4466019436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1812058.953307486,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1811964.5914396879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1077065.3503480994,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1077029.5823665867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1752283.2116104213,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1752229.0262172236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3220.286588927922,
            "unit": "ns/iter",
            "extra": "iterations: 217395\ncpu: 3220.068538834855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16682.621211760412,
            "unit": "ns/iter",
            "extra": "iterations: 41939\ncpu: 16681.802141204964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12751.051650793053,
            "unit": "ns/iter",
            "extra": "iterations: 58063\ncpu: 12750.801715378073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11975.82513801406,
            "unit": "ns/iter",
            "extra": "iterations: 58509\ncpu: 11975.962672409287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10178.584372631818,
            "unit": "ns/iter",
            "extra": "iterations: 68636\ncpu: 10177.900810070536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65750.07981221251,
            "unit": "ns/iter",
            "extra": "iterations: 10650\ncpu: 65745.53051643174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 136689.08256880415,
            "unit": "ns/iter",
            "extra": "iterations: 5123\ncpu: 136680.20691001258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37322.82949578704,
            "unit": "ns/iter",
            "extra": "iterations: 18762\ncpu: 37321.042532779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37512.82026266562,
            "unit": "ns/iter",
            "extra": "iterations: 18655\ncpu: 37508.9573840796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38282.76617236125,
            "unit": "ns/iter",
            "extra": "iterations: 18612\ncpu: 38280.47496238973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77175.74578103845,
            "unit": "ns/iter",
            "extra": "iterations: 9244\ncpu: 77169.7425356984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67316.37695931773,
            "unit": "ns/iter",
            "extra": "iterations: 10399\ncpu: 67311.64535051401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20821.68752413989,
            "unit": "ns/iter",
            "extra": "iterations: 33657\ncpu: 20820.46231096057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100884.59291271082,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 100882.58426966399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80313.49598808575,
            "unit": "ns/iter",
            "extra": "iterations: 8724\ncpu: 80309.25034387867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80335.8146576498,
            "unit": "ns/iter",
            "extra": "iterations: 8719\ncpu: 80332.53813510737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80481.50914318561,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 80480.08050603812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153680.69860016782,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153676.90288713647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 619552.5760774009,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 619548.1970096696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 530369.4305136485,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 530352.1148036253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 531338.5698027131,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 531310.773899851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 525950.4380164812,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 525936.4387678523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346328.0192974207,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 346317.2191984187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 514516.05726875336,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514498.01762114966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20992.401122311865,
            "unit": "ns/iter",
            "extra": "iterations: 33324\ncpu: 20992.512903612733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101370.38127722639,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 101369.57910014594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82101.87178888517,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 82100.49042503588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81052.19870310136,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 81050.45159796199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82251.76939351016,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82250.94029148924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155218.50110619512,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 155218.67256637296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 613760.212147886,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 613747.1830985976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 529172.3416289772,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 529180.0904977403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 524778.6531225858,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 524748.0812641091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 524949.9669173218,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 524950.5263157894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 344645.54209749034,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 344646.13490891334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 514273.9794268607,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 514270.9037472461 ns\nthreads: 1"
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
        "date": 1705952871531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8086.064715852557,
            "unit": "ns/iter",
            "extra": "iterations: 86733\ncpu: 8085.6594375843115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74113.89415454413,
            "unit": "ns/iter",
            "extra": "iterations: 11479\ncpu: 74110.90687342103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141221.36478189868,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 141215.4765751212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208087.2836285362,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 208079.3681187171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 274115.7055077959,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 274101.0187838268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337874.3241973284,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 337856.81284260005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405729.3743613366,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 405705.10915002343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 467474.3766025303,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 467457.4252136755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531612.2470948627,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 531572.415902141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6145.198399399816,
            "unit": "ns/iter",
            "extra": "iterations: 114582\ncpu: 6145.170271072239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5191.501235479046,
            "unit": "ns/iter",
            "extra": "iterations: 135575\ncpu: 5191.396643924026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5256.3926877124995,
            "unit": "ns/iter",
            "extra": "iterations: 133009\ncpu: 5256.367614221588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5250.5662437807905,
            "unit": "ns/iter",
            "extra": "iterations: 133054\ncpu: 5250.58472499887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9355.617330971609,
            "unit": "ns/iter",
            "extra": "iterations: 75091\ncpu: 9355.541942443147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32090.655982153094,
            "unit": "ns/iter",
            "extra": "iterations: 25551\ncpu: 32090.059097491296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136635.0631982134,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 136632.36514522805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110930.43185059624,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 110930.85202956802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115432.4974005746,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 115431.80400311916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108635.96532084949,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 108634.43867864786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278048.80127795436,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 278040.383386581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2187110.8608488636,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2187103.301886795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1806087.922330211,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806057.8640776698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1797947.8042634549,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1797925.7751937993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1786073.6254827643,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1786051.7374517387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1088065.5608899526,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1088061.241217797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1749087.937969777,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1749039.6616541336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7319857.459999639,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7319718.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4056585.0346321454,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4056435.9307359313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9142926.84745795,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9142873.728813581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32132.02815473342,
            "unit": "ns/iter",
            "extra": "iterations: 25644\ncpu: 32131.4459522695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140859.50360065317,
            "unit": "ns/iter",
            "extra": "iterations: 6110\ncpu: 140856.89034369861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111768.55639884429,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 111769.94242344968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111136.03706112744,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 111134.22626788056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110089.29276187684,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 110088.86443092058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285917.8169013952,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 285911.0055682927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2208621.866983476,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2208602.3752969042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1821179.064705914,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1821158.431372552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820544.0799219322,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820525.7309941526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1811078.2120622587,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1811057.9766537037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1090389.8930669005,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1090395.4171562844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1761222.7424243863,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1761201.1363636344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7400178.379999715,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7399942.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4090142.7017543986,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4089974.1228070124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32190.926663314796,
            "unit": "ns/iter",
            "extra": "iterations: 25867\ncpu: 32189.906057911485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138314.9068123323,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 138309.10989717304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109622.18919954186,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 109617.86033448207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109225.9505431327,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 109220.94568690036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108523.70766489163,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 108520.3463203462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281899.0936487097,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 281884.381075827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2190022.762352943,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2189919.9999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1808760.3618677799,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1808698.4435797783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800810.4390716127,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800756.866537722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1815395.2990289626,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1815334.1747572827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1084454.868698635,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1084417.7022274262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1755424.1735848456,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1755421.5094339633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3247.421402149065,
            "unit": "ns/iter",
            "extra": "iterations: 215184\ncpu: 3247.268384266499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16863.0906809522,
            "unit": "ns/iter",
            "extra": "iterations: 41442\ncpu: 16862.984411949175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12967.0638971145,
            "unit": "ns/iter",
            "extra": "iterations: 54040\ncpu: 12965.34233900823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13097.754555318537,
            "unit": "ns/iter",
            "extra": "iterations: 53454\ncpu: 13097.534328581522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10865.127263659708,
            "unit": "ns/iter",
            "extra": "iterations: 64166\ncpu: 10865.163793909516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64916.802521780606,
            "unit": "ns/iter",
            "extra": "iterations: 10786\ncpu: 64914.852586686204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145911.55322246635,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 145912.01663201713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37669.62948421788,
            "unit": "ns/iter",
            "extra": "iterations: 18593\ncpu: 37668.82697789476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37889.72442736022,
            "unit": "ns/iter",
            "extra": "iterations: 18467\ncpu: 37889.18611577421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37829.54871462784,
            "unit": "ns/iter",
            "extra": "iterations: 18516\ncpu: 37828.81291855626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76638.40569123278,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 76637.24378543514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68189.48652854364,
            "unit": "ns/iter",
            "extra": "iterations: 10281\ncpu: 68187.65684271917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20478.551427820195,
            "unit": "ns/iter",
            "extra": "iterations: 34213\ncpu: 20478.61631543557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98431.25091370098,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98431.6418330059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80212.05523722606,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 80208.05638322217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79753.5188561066,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 79750.52979377896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80178.57426647395,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 80172.45119305844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157935.22666966112,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157930.91972116043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 621181.2398230027,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 621183.1858407088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 532033.3436556531,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 532001.7371601161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 529618.506454016,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 529588.2308276418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 529592.0015116888,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 529559.7127740014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 347141.9370663843,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 347129.28642219695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516590.06351545494,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516585.9675036928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20800.190140427476,
            "unit": "ns/iter",
            "extra": "iterations: 33612\ncpu: 20800.06545281458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99593.0056147345,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 99588.1802476241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79460.02971869348,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 79455.69419237762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78663.46684648826,
            "unit": "ns/iter",
            "extra": "iterations: 8898\ncpu: 78660.96875702449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80386.74551069891,
            "unit": "ns/iter",
            "extra": "iterations: 8743\ncpu: 80383.57543177315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155979.06809555556,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 155978.34338021922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 618732.0750221314,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 618701.0591350324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 525288.4175412657,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 525266.7166416856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 524653.287527981,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 524632.2628827561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528203.5037707294,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 528188.3107089021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 347667.3943452402,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 347653.2242063508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 515047.1018314653,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 515042.6373626323 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}