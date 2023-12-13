window.BENCHMARK_DATA = {
  "lastUpdate": 1702503269805,
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
      }
    ]
  }
}