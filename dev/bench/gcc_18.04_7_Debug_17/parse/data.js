window.BENCHMARK_DATA = {
  "lastUpdate": 1702381143383,
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
      }
    ]
  }
}