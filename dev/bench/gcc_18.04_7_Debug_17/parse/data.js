window.BENCHMARK_DATA = {
  "lastUpdate": 1702388123693,
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387028501,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7502.420148845278,
            "unit": "ns/iter",
            "extra": "iterations: 93117\ncpu: 7502.095213548548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54469.17470000016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54468.29 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100915.16437065779,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 100911.45649358297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146742.5268633778,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146740.11598157947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194259.43504463663,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 194251.78571428562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238784.93894620414,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 238777.0839141343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284737.5732107683,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 284728.66053841106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 333743.35488778615,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 333726.66413084813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376538.4096228949,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 376526.3545730386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6275.398952795141,
            "unit": "ns/iter",
            "extra": "iterations: 111344\ncpu: 6275.185910331954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5190.891309665743,
            "unit": "ns/iter",
            "extra": "iterations: 134897\ncpu: 5190.492746317551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5187.860100245914,
            "unit": "ns/iter",
            "extra": "iterations: 134868\ncpu: 5187.732449506183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5254.795278776746,
            "unit": "ns/iter",
            "extra": "iterations: 133440\ncpu: 5254.644784172664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8904.477460163576,
            "unit": "ns/iter",
            "extra": "iterations: 78572\ncpu: 8904.13887898998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29672.56492539949,
            "unit": "ns/iter",
            "extra": "iterations: 27547\ncpu: 29672.41078883362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146533.718542478,
            "unit": "ns/iter",
            "extra": "iterations: 5873\ncpu: 146530.15494636475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113953.25948609361,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113950.35281586999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113334.80236733437,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113330.45617768334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109996.89700954528,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 109994.80536220668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 342133.33580705046,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 342126.4935064932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761981.0267175457,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761928.0534351203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1416686.7808219378,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416188.888888891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1399907.5815709657,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1399853.7764350486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1404104.093797279,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1404051.2859304056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 791765.2893835764,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 791733.4760273956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1357889.473607013,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1357803.519061583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38115.9648846481,
            "unit": "ns/iter",
            "extra": "iterations: 21586\ncpu: 38113.9488557399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179348.3824817571,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 179338.87382690323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136954.68615580734,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 136946.50310657988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142666.71066475046,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 142660.87996174046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134191.51014310025,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 134185.81537977693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 327054.35214446223,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 327036.3807373966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1808978.5728154788,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808931.0679611596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1439462.5842348982,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1439410.3554868577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1449179.4968846876,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1449134.4236760149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1439611.4698609104,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1439560.7418856216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 821545.7389380602,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821523.8053097348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1392105.4549550158,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1392022.972972968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5045236.880000061,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5044822.000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3043626.4967106967,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3043496.05263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28519.75540794246,
            "unit": "ns/iter",
            "extra": "iterations: 28754\ncpu: 28518.6061069763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135899.21581600097,
            "unit": "ns/iter",
            "extra": "iterations: 6348\ncpu: 135892.64335223642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106022.75604341704,
            "unit": "ns/iter",
            "extra": "iterations: 8108\ncpu: 106019.40059200769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106199.48814521723,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 106194.92467275854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102191.50399428462,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 102188.1125551448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282534.007168451,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 282526.3603779718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764552.767924498,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1764496.2264150984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1397531.928035931,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1397491.0044977549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1390995.686746915,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1390953.012048195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1395987.481259397,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1395957.2713643163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788876.2838982814,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 788849.2372881413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353573.5822416178,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353531.1499272182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3028.349727273423,
            "unit": "ns/iter",
            "extra": "iterations: 230634\ncpu: 3028.2902781029943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19241.86634628481,
            "unit": "ns/iter",
            "extra": "iterations: 36415\ncpu: 19241.340107098706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14306.491299729272,
            "unit": "ns/iter",
            "extra": "iterations: 48964\ncpu: 14306.053427007666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15674.105981371773,
            "unit": "ns/iter",
            "extra": "iterations: 44555\ncpu: 15673.491190663186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11311.299083103868,
            "unit": "ns/iter",
            "extra": "iterations: 61839\ncpu: 11310.858843124824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98636.1241544531,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 98635.21702367473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121664.40472057562,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 121662.35682054904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29980.76397674778,
            "unit": "ns/iter",
            "extra": "iterations: 23396\ncpu: 29980.85997606456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29805.253722452304,
            "unit": "ns/iter",
            "extra": "iterations: 23506\ncpu: 29804.62009699666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29697.101083187037,
            "unit": "ns/iter",
            "extra": "iterations: 23634\ncpu: 29696.94507912346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61726.83628669472,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61725.51353257529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56245.090368221325,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 56243.06158546349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22264.938248405077,
            "unit": "ns/iter",
            "extra": "iterations: 31400\ncpu: 22264.019108280274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107897.74634446211,
            "unit": "ns/iter",
            "extra": "iterations: 6497\ncpu: 107893.84331229857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87694.10836881961,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 87692.3327486836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86622.26375805789,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 86622.49628160583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87782.31624467946,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 87780.83479568841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157981.76380437156,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 157976.98895650182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 518806.64047439094,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 518791.3269088207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 430406.10885608697,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430401.1685116833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435348.3524283668,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 435339.47696139023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427728.63836282474,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427714.8442272392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279044.04536411184,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 279042.5785913249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 423763.2099213709,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423756.56382335466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22085.416621915934,
            "unit": "ns/iter",
            "extra": "iterations: 31657\ncpu: 22085.32394099247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108582.48417073853,
            "unit": "ns/iter",
            "extra": "iterations: 6349\ncpu: 108581.83965978783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88937.92102576289,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 88934.77928042761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88797.44505076,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88795.96446700423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88247.45789875717,
            "unit": "ns/iter",
            "extra": "iterations: 7862\ncpu: 88242.45738997824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156044.3805920427,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 156041.6648119291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517263.23781385564,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517259.74889217893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 431210.87821302994,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 430946.87882496975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428060.8746943491,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 428036.73594132176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430488.6373693354,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 430466.625691455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276795.4916995895,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 276784.4664031585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422480.57780456234,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 422461.5802171256 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388123058,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7521.907858990954,
            "unit": "ns/iter",
            "extra": "iterations: 93129\ncpu: 7520.987018007281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54508.37650000154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54507.35 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99712.1687994452,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 99707.98045602604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144915.00846310158,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 144911.06973595123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190781.72292079224,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 190779.96911537612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236184.9478427135,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 236173.32058984146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281001.37645914685,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 280990.2399481192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326262.59759759915,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 326239.0765765767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371315.42455244326,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 371279.7953964199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6286.950668166594,
            "unit": "ns/iter",
            "extra": "iterations: 111125\ncpu: 6286.507986501684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5208.2871907272865,
            "unit": "ns/iter",
            "extra": "iterations: 134590\ncpu: 5202.766921762378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5203.549783005326,
            "unit": "ns/iter",
            "extra": "iterations: 135257\ncpu: 5203.017958405112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5184.732738204853,
            "unit": "ns/iter",
            "extra": "iterations: 135545\ncpu: 5184.499612674759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8899.069974877491,
            "unit": "ns/iter",
            "extra": "iterations: 78814\ncpu: 8898.388611160446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29594.0336569802,
            "unit": "ns/iter",
            "extra": "iterations: 27602\ncpu: 29592.833852619384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144631.7075519441,
            "unit": "ns/iter",
            "extra": "iterations: 5919\ncpu: 144623.11201216426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112051.76839884477,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 112049.47243471385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112598.07258809094,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 112592.89956447133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110328.15909972748,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 110326.03802871518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 332498.3570914473,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 332473.18214542925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1760076.4811320158,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1760019.2452830165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1406990.786363615,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1406885.6060606076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1404095.2299546194,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1404014.5234493222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1391306.6701492758,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391228.80597015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 781442.3565365258,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 781414.7707979622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1354670.2379562205,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1354556.642335766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38368.39261495722,
            "unit": "ns/iter",
            "extra": "iterations: 21530\ncpu: 38368.12354853697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176075.81665985746,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 176070.8248264594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136598.838859524,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 136592.50360403667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137196.89338645132,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 137190.61354581686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134174.19806159163,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 134171.70548694706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 322542.6231829959,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 322518.1513231453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1788560.2096153153,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1788468.6538461545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1442082.1764705637,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1441992.8792569553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1430439.6159754016,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430392.6267281093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1421652.0886850227,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421596.941896021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 827631.5523978352,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 827601.776198936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1385509.758569345,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385423.3979135565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5091763.770000171,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5091785.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3022193.224026083,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3021891.233766237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28661.789525139273,
            "unit": "ns/iter",
            "extra": "iterations: 28640\ncpu: 28661.445530726185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134726.46763042215,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 134721.10307982442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104740.4965635737,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 104736.11929307846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105132.72133562565,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 105124.45371961758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102046.49331888513,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 102041.7358853977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 276324.3873127144,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 276300.3825310796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1762118.557655932,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1762084.1209829957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1430578.1589205307,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1430447.8260869551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1387873.7910447603,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387755.6716417903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1366989.136363689,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1366913.0498533756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 774292.283817395,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 774246.8049792552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1340765.487769796,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1340687.6258992807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3317.095718664869,
            "unit": "ns/iter",
            "extra": "iterations: 235534\ncpu: 3316.736861769421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19144.356797773027,
            "unit": "ns/iter",
            "extra": "iterations: 36637\ncpu: 19143.09577749279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14885.583227230192,
            "unit": "ns/iter",
            "extra": "iterations: 47124\ncpu: 14884.328579916952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14929.964783769577,
            "unit": "ns/iter",
            "extra": "iterations: 46825\ncpu: 14929.518419647713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11261.078217949404,
            "unit": "ns/iter",
            "extra": "iterations: 62198\ncpu: 11261.138621820597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97797.34316202982,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 97789.69390620542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121476.88614635597,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 121466.452285764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29959.790205305875,
            "unit": "ns/iter",
            "extra": "iterations: 23380\ncpu: 29956.899059024687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29743.843821044466,
            "unit": "ns/iter",
            "extra": "iterations: 23313\ncpu: 29741.16158366598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29433.860073998734,
            "unit": "ns/iter",
            "extra": "iterations: 23784\ncpu: 29430.230406996525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60979.25019649041,
            "unit": "ns/iter",
            "extra": "iterations: 11451\ncpu: 60973.88001047978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55733.41832036772,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 55729.76662962388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22245.384128700636,
            "unit": "ns/iter",
            "extra": "iterations: 31453\ncpu: 22244.47906400025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110203.5012614376,
            "unit": "ns/iter",
            "extra": "iterations: 6342\ncpu: 110204.08388520947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88890.14031520035,
            "unit": "ns/iter",
            "extra": "iterations: 7868\ncpu: 88885.62531774258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87827.91678172887,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 87825.2792770191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88086.57865027447,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 88080.39387857473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157160.3148439265,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 157156.5461486642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519910.1619613339,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 519913.22436849255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435815.1084788167,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 435801.43391521496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437291.9422001268,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 437242.7594779435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 428531.43613138725,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 428504.0145985342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277333.92304640205,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 277308.33002776623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 426390.603864717,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 426377.2342995175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22174.199936830217,
            "unit": "ns/iter",
            "extra": "iterations: 31660\ncpu: 22173.572331017032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109727.2906411576,
            "unit": "ns/iter",
            "extra": "iterations: 6379\ncpu: 109721.85295500724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90080.17899883464,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 90075.18980826251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89736.80523143375,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 89734.82497756249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88511.4071818358,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 88510.25250602608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155501.1177254543,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155493.73611728178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 520185.9687732567,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 520170.26022304955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430680.7092592424,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 430661.4814814856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429059.17690417037,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 429061.6707616698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 424619.7515151311,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424613.2727272718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276988.9193994499,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 276990.478071907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421758.98312235426,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 421741.47076551785 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}