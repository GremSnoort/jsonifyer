window.BENCHMARK_DATA = {
  "lastUpdate": 1702489564567,
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
      }
    ]
  }
}