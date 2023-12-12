window.BENCHMARK_DATA = {
  "lastUpdate": 1702382307108,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381140968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7489.042303563893,
            "unit": "ns/iter",
            "extra": "iterations: 93160\ncpu: 7488.455345641908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54799.63459999908,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54798.27000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100576.5975624074,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 100573.59662486814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146241.01883590798,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 146237.51909044627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192459.37416925997,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 192453.81036774474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240327.59928492585,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 240319.69196919687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295825.18452380865,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 295811.4417989417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329205.17335352197,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 329191.37017411034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374714.444396563,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374699.4827586206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6211.606620066821,
            "unit": "ns/iter",
            "extra": "iterations: 112446\ncpu: 6211.361898155564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5116.680200970073,
            "unit": "ns/iter",
            "extra": "iterations: 136936\ncpu: 5116.346322369571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5132.900590694823,
            "unit": "ns/iter",
            "extra": "iterations: 136788\ncpu: 5132.684153580729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5159.723802715257,
            "unit": "ns/iter",
            "extra": "iterations: 135682\ncpu: 5159.528898453734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8826.445570163536,
            "unit": "ns/iter",
            "extra": "iterations: 79258\ncpu: 8826.001160766094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29356.03721133833,
            "unit": "ns/iter",
            "extra": "iterations: 27411\ncpu: 29355.047243807243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148200.85645355648,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 148193.60675512662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112267.30798478525,
            "unit": "ns/iter",
            "extra": "iterations: 7627\ncpu: 112263.432542284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114544.44985941447,
            "unit": "ns/iter",
            "extra": "iterations: 7469\ncpu: 114540.63462310882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110062.82977354582,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 110057.96448790522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 338591.0608727529,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 338570.5537220386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1783595.1136801578,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1783525.2408477839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1413671.7469512296,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1413587.8048780458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1411142.568597564,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1411089.48170732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1390965.097305373,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1390939.9700598752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790402.0367835776,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 790381.0949529497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1362920.1369661805,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1362897.2017673082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38180.37955526652,
            "unit": "ns/iter",
            "extra": "iterations: 21541\ncpu: 38178.715008588246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173937.45052504464,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 173931.17932148604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141695.73046487963,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 141690.5209363665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138256.0284886547,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 138254.740061162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133415.09279152678,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 133413.35824381182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318871.9933603814,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 318858.17041681975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1823359.0352250636,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1823307.8277886475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1448617.003110411,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448570.6065318852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1430602.889570571,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1430536.963190186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1437559.5146831984,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1437512.0556414174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813507.0464912555,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 813478.8596491212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401084.5120120486,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1401034.6846846794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5026694.899999598,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5026486.999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3009249.096463,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009103.5369775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28391.55123369156,
            "unit": "ns/iter",
            "extra": "iterations: 28897\ncpu: 28390.35540021443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138934.93700533468,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138928.2506864807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106345.97618457016,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106338.14190027305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108749.95797358784,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108745.35297105134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102441.62160538303,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 102439.88223984586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 277513.4083199919,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 277503.3280000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1788775.8604205805,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1788666.1567877666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1400065.1563910274,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1400006.7669172937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391531.4343283973,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391476.7164179133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1384445.2709867621,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1384389.690721646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 777256.0426064974,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 777197.7443609067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1347151.7644508842,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1347107.8034682074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3004.2977176017275,
            "unit": "ns/iter",
            "extra": "iterations: 232650\ncpu: 3004.110896195996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19243.923241757646,
            "unit": "ns/iter",
            "extra": "iterations: 36400\ncpu: 19243.346153846218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14944.494243544108,
            "unit": "ns/iter",
            "extra": "iterations: 46817\ncpu: 14943.428669073233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15157.231190476195,
            "unit": "ns/iter",
            "extra": "iterations: 46200\ncpu: 15156.54112554117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11368.390079009627,
            "unit": "ns/iter",
            "extra": "iterations: 61385\ncpu: 11368.03290706199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97658.3854515023,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 97653.33054626518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122225.52617800912,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 122220.57591623052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29752.228138343344,
            "unit": "ns/iter",
            "extra": "iterations: 23420\ncpu: 29750.798462852188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29514.93733659397,
            "unit": "ns/iter",
            "extra": "iterations: 23714\ncpu: 29514.054988614276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29829.826565903764,
            "unit": "ns/iter",
            "extra": "iterations: 23421\ncpu: 29828.559839460322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61268.621725800964,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 61266.67542706985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56185.75424069393,
            "unit": "ns/iter",
            "extra": "iterations: 12439\ncpu: 56180.47270680885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21944.726689612362,
            "unit": "ns/iter",
            "extra": "iterations: 31960\ncpu: 21943.238423028826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111150.76796194314,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 111146.93100713781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89868.43009098784,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89866.75637575368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88815.76192893193,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88811.89086294458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88052.72220123472,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 88045.49804810583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159202.2112771793,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 159194.089673915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524892.0621722582,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 524873.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431664.7828500868,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 431646.51449722104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436934.41385771387,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 436902.87141073745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426561.93837706116,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426549.42037828395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276508.3450315472,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 276494.95268138667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424267.99636141513,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 424262.9472407447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22299.509931877714,
            "unit": "ns/iter",
            "extra": "iterations: 31414\ncpu: 22299.299675304344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112759.93332259577,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112757.07843453072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91315.0939825104,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 91308.23652264575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90321.38203839218,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 90317.60082463591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89219.86813888443,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 89216.84962981878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156250.66629514136,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156247.74855104717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 518416.4792593004,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518393.7037037051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427242.9768009546,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427237.3015872957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431360.62878318137,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431346.3866584328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425546.25273391075,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425529.52612393594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282515.6393700535,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 282499.0944881879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422520.46807227575,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 422500.7228915692 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381140968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7489.042303563893,
            "unit": "ns/iter",
            "extra": "iterations: 93160\ncpu: 7488.455345641908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54799.63459999908,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54798.27000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100576.5975624074,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 100573.59662486814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146241.01883590798,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 146237.51909044627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192459.37416925997,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 192453.81036774474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240327.59928492585,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 240319.69196919687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295825.18452380865,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 295811.4417989417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329205.17335352197,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 329191.37017411034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374714.444396563,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374699.4827586206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6211.606620066821,
            "unit": "ns/iter",
            "extra": "iterations: 112446\ncpu: 6211.361898155564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5116.680200970073,
            "unit": "ns/iter",
            "extra": "iterations: 136936\ncpu: 5116.346322369571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5132.900590694823,
            "unit": "ns/iter",
            "extra": "iterations: 136788\ncpu: 5132.684153580729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5159.723802715257,
            "unit": "ns/iter",
            "extra": "iterations: 135682\ncpu: 5159.528898453734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8826.445570163536,
            "unit": "ns/iter",
            "extra": "iterations: 79258\ncpu: 8826.001160766094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29356.03721133833,
            "unit": "ns/iter",
            "extra": "iterations: 27411\ncpu: 29355.047243807243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148200.85645355648,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 148193.60675512662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112267.30798478525,
            "unit": "ns/iter",
            "extra": "iterations: 7627\ncpu: 112263.432542284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114544.44985941447,
            "unit": "ns/iter",
            "extra": "iterations: 7469\ncpu: 114540.63462310882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110062.82977354582,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 110057.96448790522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 338591.0608727529,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 338570.5537220386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1783595.1136801578,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1783525.2408477839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1413671.7469512296,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1413587.8048780458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1411142.568597564,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1411089.48170732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1390965.097305373,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1390939.9700598752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790402.0367835776,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 790381.0949529497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1362920.1369661805,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1362897.2017673082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38180.37955526652,
            "unit": "ns/iter",
            "extra": "iterations: 21541\ncpu: 38178.715008588246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173937.45052504464,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 173931.17932148604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141695.73046487963,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 141690.5209363665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138256.0284886547,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 138254.740061162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133415.09279152678,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 133413.35824381182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318871.9933603814,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 318858.17041681975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1823359.0352250636,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1823307.8277886475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1448617.003110411,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448570.6065318852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1430602.889570571,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1430536.963190186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1437559.5146831984,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1437512.0556414174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813507.0464912555,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 813478.8596491212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401084.5120120486,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1401034.6846846794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5026694.899999598,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5026486.999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3009249.096463,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009103.5369775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28391.55123369156,
            "unit": "ns/iter",
            "extra": "iterations: 28897\ncpu: 28390.35540021443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138934.93700533468,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138928.2506864807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106345.97618457016,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106338.14190027305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108749.95797358784,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108745.35297105134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102441.62160538303,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 102439.88223984586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 277513.4083199919,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 277503.3280000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1788775.8604205805,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1788666.1567877666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1400065.1563910274,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1400006.7669172937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391531.4343283973,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391476.7164179133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1384445.2709867621,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1384389.690721646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 777256.0426064974,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 777197.7443609067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1347151.7644508842,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1347107.8034682074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3004.2977176017275,
            "unit": "ns/iter",
            "extra": "iterations: 232650\ncpu: 3004.110896195996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19243.923241757646,
            "unit": "ns/iter",
            "extra": "iterations: 36400\ncpu: 19243.346153846218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14944.494243544108,
            "unit": "ns/iter",
            "extra": "iterations: 46817\ncpu: 14943.428669073233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15157.231190476195,
            "unit": "ns/iter",
            "extra": "iterations: 46200\ncpu: 15156.54112554117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11368.390079009627,
            "unit": "ns/iter",
            "extra": "iterations: 61385\ncpu: 11368.03290706199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97658.3854515023,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 97653.33054626518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122225.52617800912,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 122220.57591623052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29752.228138343344,
            "unit": "ns/iter",
            "extra": "iterations: 23420\ncpu: 29750.798462852188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29514.93733659397,
            "unit": "ns/iter",
            "extra": "iterations: 23714\ncpu: 29514.054988614276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29829.826565903764,
            "unit": "ns/iter",
            "extra": "iterations: 23421\ncpu: 29828.559839460322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61268.621725800964,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 61266.67542706985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56185.75424069393,
            "unit": "ns/iter",
            "extra": "iterations: 12439\ncpu: 56180.47270680885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21944.726689612362,
            "unit": "ns/iter",
            "extra": "iterations: 31960\ncpu: 21943.238423028826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111150.76796194314,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 111146.93100713781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89868.43009098784,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89866.75637575368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88815.76192893193,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88811.89086294458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88052.72220123472,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 88045.49804810583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159202.2112771793,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 159194.089673915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524892.0621722582,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 524873.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431664.7828500868,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 431646.51449722104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436934.41385771387,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 436902.87141073745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426561.93837706116,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426549.42037828395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276508.3450315472,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 276494.95268138667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424267.99636141513,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 424262.9472407447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22299.509931877714,
            "unit": "ns/iter",
            "extra": "iterations: 31414\ncpu: 22299.299675304344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112759.93332259577,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112757.07843453072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91315.0939825104,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 91308.23652264575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90321.38203839218,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 90317.60082463591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89219.86813888443,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 89216.84962981878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156250.66629514136,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156247.74855104717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 518416.4792593004,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518393.7037037051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427242.9768009546,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427237.3015872957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431360.62878318137,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431346.3866584328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425546.25273391075,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425529.52612393594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282515.6393700535,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 282499.0944881879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422520.46807227575,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 422500.7228915692 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382306771,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7514.962718688022,
            "unit": "ns/iter",
            "extra": "iterations: 93398\ncpu: 7514.824728580912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54564.32149999841,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54561.90999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100358.7990632309,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100354.77751756439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146178.7133423618,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 146175.2624449712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192504.15074263033,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 192497.00731545113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238246.26835304376,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 238235.27632664292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283789.0600393592,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 283760.53149606305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329113.65453166614,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 329102.2753128557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374252.41964668967,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374245.66996984027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6340.784851542194,
            "unit": "ns/iter",
            "extra": "iterations: 110031\ncpu: 6340.6585416837015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5143.006317576973,
            "unit": "ns/iter",
            "extra": "iterations: 136603\ncpu: 5142.8907125026535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5224.071224340538,
            "unit": "ns/iter",
            "extra": "iterations: 132553\ncpu: 5223.872715064927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5210.157338257866,
            "unit": "ns/iter",
            "extra": "iterations: 134303\ncpu: 5210.0578542549265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8921.385710280862,
            "unit": "ns/iter",
            "extra": "iterations: 78476\ncpu: 8921.205209235939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29520.693811426747,
            "unit": "ns/iter",
            "extra": "iterations: 27777\ncpu: 29520.80138243874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144441.64548212802,
            "unit": "ns/iter",
            "extra": "iterations: 5932\ncpu: 144436.8509777478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113497.07685148403,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 113494.62837388637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113453.71536423732,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 113448.99337748362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110236.5984211213,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 110234.96829299851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331890.89684508974,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 331880.2552286427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1794867.8146717479,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1794822.3938223892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1407003.1170212615,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406969.1489361736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1419656.2274809582,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1419643.8167938902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1391620.2239031259,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1391577.3071104432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 777239.5215189704,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 777218.2278481033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1371691.5511110562,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1371655.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38969.10011338891,
            "unit": "ns/iter",
            "extra": "iterations: 21166\ncpu: 38967.75961447593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172376.80885594076,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 172373.21178120616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135989.57898906228,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 135986.10362858462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136381.57226810075,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 136378.2878017788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134427.5625686942,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 134423.80279478728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 313285.5786049881,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 313278.74954824784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1809889.5795677155,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1809852.0628683695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1445784.4839694537,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1445755.7251908402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1442990.7531055424,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442936.6459627377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1446656.0962733054,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446633.0745341566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813056.0602619991,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 813026.2008733614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1398719.577443608,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1398697.293233081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6630843.057143108,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6630594.285714254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3024887.064516186,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3024765.8064516075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28129.53685086014,
            "unit": "ns/iter",
            "extra": "iterations: 28846\ncpu: 28129.047354919257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134441.1335107247,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 134439.02019095275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104869.56321143488,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 104864.78566238817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104832.48055724577,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 104829.6305269538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101157.50166746916,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 101155.0619342548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268587.0739469465,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 268573.5413416532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1778278.0769231557,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1778220.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1403983.3618906809,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1403923.4859675006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1404588.7545180738,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1404560.8433735028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1391366.0669642594,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1391302.5297619025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 765464.9786885426,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 765454.3442622952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353609.0485294661,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1353579.7058823463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2991.5254652532185,
            "unit": "ns/iter",
            "extra": "iterations: 233475\ncpu: 2991.5070135988917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19484.935503917615,
            "unit": "ns/iter",
            "extra": "iterations: 37010\ncpu: 19458.24101594158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15422.762180069893,
            "unit": "ns/iter",
            "extra": "iterations: 47393\ncpu: 15422.340852024538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14969.96693932393,
            "unit": "ns/iter",
            "extra": "iterations: 46823\ncpu: 14969.63885270061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11119.419599108694,
            "unit": "ns/iter",
            "extra": "iterations: 62860\ncpu: 11119.137766465143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97784.23094076852,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 97782.91289198544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121890.39878154731,
            "unit": "ns/iter",
            "extra": "iterations: 5745\ncpu: 121887.50217580529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29910.652287187444,
            "unit": "ns/iter",
            "extra": "iterations: 23413\ncpu: 29910.75470892258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29767.362799030856,
            "unit": "ns/iter",
            "extra": "iterations: 23451\ncpu: 29766.879877190688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29767.587295517238,
            "unit": "ns/iter",
            "extra": "iterations: 23535\ncpu: 29767.0448268538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61370.22906447355,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 61368.82445690259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56211.94865407821,
            "unit": "ns/iter",
            "extra": "iterations: 12445\ncpu: 56211.2012856567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22327.55817740787,
            "unit": "ns/iter",
            "extra": "iterations: 31318\ncpu: 22327.166485726844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110552.35355948273,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 110549.16387959829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89276.69425782168,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 89275.58625934794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86178.50537365877,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 86175.69357660448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85107.00699125993,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 85105.75530586689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156691.264082932,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 156685.2636322672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524049.88222051796,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 524038.0345086198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434184.1800486826,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 434168.61313868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 438157.24293790857,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 438148.52479598555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424647.5984107425,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 424641.0757946153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270199.23361933796,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 270200.1170046814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424103.35322481167,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 424088.3664858336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22234.452404350963,
            "unit": "ns/iter",
            "extra": "iterations: 31547\ncpu: 22233.648207436523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109152.3628905101,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 109148.09088040412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88810.15305474347,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 88808.96735678826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89549.65543720177,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 89546.86648501376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87795.49652207,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 87793.46148981931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 159472.78810662532,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 159468.62611073258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 521166.6113179821,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 521157.4832464673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426555.03742331243,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 426549.5092024604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434643.66439209285,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434632.50620347663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429366.2090741966,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429351.2568976027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272679.649436417,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 272673.41624562844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422723.98729582806,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 422703.93224439985 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}