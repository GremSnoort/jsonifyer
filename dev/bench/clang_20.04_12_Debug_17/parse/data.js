window.BENCHMARK_DATA = {
  "lastUpdate": 1705772772688,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 20.04 Debug c++-17": [
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
        "date": 1702489579262,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7356.59110602841,
            "unit": "ns/iter",
            "extra": "iterations: 95323\ncpu: 7356.463812511146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52791.147799996455,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52786.119999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97453.51368301355,
            "unit": "ns/iter",
            "extra": "iterations: 8770\ncpu: 97450.14823261116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142498.63146553212,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 142495.73938992043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190080.49783175613,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 190073.4605377276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231636.0917602982,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 231624.31781701447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275564.3255962086,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 275555.96184419724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320021.7533137236,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 320006.885125184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 364065.99037253927,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 364059.8576810385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5999.171361261731,
            "unit": "ns/iter",
            "extra": "iterations: 116730\ncpu: 5999.0499443159415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5003.476870000441,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5003.243999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4985.622889612744,
            "unit": "ns/iter",
            "extra": "iterations: 140614\ncpu: 4985.418237159875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4956.26161651166,
            "unit": "ns/iter",
            "extra": "iterations: 141329\ncpu: 4956.188751070199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7637.778136980056,
            "unit": "ns/iter",
            "extra": "iterations: 91561\ncpu: 7637.226548421271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26708.819727667666,
            "unit": "ns/iter",
            "extra": "iterations: 30404\ncpu: 26707.92329956584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140284.747175364,
            "unit": "ns/iter",
            "extra": "iterations: 6107\ncpu: 140276.27312919605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107729.92307693187,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 107725.90497737541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107784.40709523544,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 107778.24883633178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104657.76178841983,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 104654.80087955038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203369.24433249905,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 203364.04854591264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1734601.1738318424,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1734549.5327102845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1377494.6088888436,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1377453.7777777752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1374098.5250737069,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1374051.4749262515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355893.7492711314,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1355864.5772594744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 762439.1744856712,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 762418.024691358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1328913.0328571121,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1328860.5714285749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35975.390142131946,
            "unit": "ns/iter",
            "extra": "iterations: 23007\ncpu: 35975.37271265267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176683.43478260442,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 176679.90155865529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137610.96079057563,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 137608.60694931474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134760.82527177845,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 134756.07373562336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132670.71566189764,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 132669.85705407074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221330.4417955949,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 221327.8214557444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1778203.501908398,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1778133.0152671684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1409899.1772727638,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1409823.6363636397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1418085.622154899,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1418041.274658576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1408908.6495467825,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408854.9848942608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819462.3201057763,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 819430.3350970026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1374399.175149617,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1374284.7305389266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6645375.949999886,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6645007.142857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3089357.2310231877,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3089247.5247524767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29673.28509500899,
            "unit": "ns/iter",
            "extra": "iterations: 27682\ncpu: 29671.696409218825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150353.40560779165,
            "unit": "ns/iter",
            "extra": "iterations: 5742\ncpu: 150349.442702891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112536.29864847541,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 112534.69360976246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109821.42875399733,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 109818.96485623057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109525.2938618912,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 109523.12020460407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190724.28033473098,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 190722.329883286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1749651.1219512525,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1749582.3639774818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1380160.5303702943,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1380134.9629629608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1387571.1919642831,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1387485.7142857183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1352684.9942029028,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1352669.7101449235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 776064.7908333832,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 776024.916666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1334490.9799427483,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334466.1891117468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2864.596928042026,
            "unit": "ns/iter",
            "extra": "iterations: 244795\ncpu: 2864.504585469474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18343.68331890907,
            "unit": "ns/iter",
            "extra": "iterations: 38133\ncpu: 18343.16471297826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13973.584851084302,
            "unit": "ns/iter",
            "extra": "iterations: 50129\ncpu: 13973.348760198745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14121.413614359268,
            "unit": "ns/iter",
            "extra": "iterations: 49580\ncpu: 14121.081081081084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11101.669144273563,
            "unit": "ns/iter",
            "extra": "iterations: 62964\ncpu: 11100.962454736105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68809.38597525122,
            "unit": "ns/iter",
            "extra": "iterations: 10182\ncpu: 68807.88646631334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120961.02846790767,
            "unit": "ns/iter",
            "extra": "iterations: 5796\ncpu: 120957.45341614934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30089.4782064041,
            "unit": "ns/iter",
            "extra": "iterations: 23149\ncpu: 30088.483303814464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29982.40678906858,
            "unit": "ns/iter",
            "extra": "iterations: 23420\ncpu: 29981.44748078563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29584.131682042625,
            "unit": "ns/iter",
            "extra": "iterations: 23739\ncpu: 29583.377564345566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60920.63983938383,
            "unit": "ns/iter",
            "extra": "iterations: 11456\ncpu: 60918.98568435797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55552.26347542852,
            "unit": "ns/iter",
            "extra": "iterations: 12597\ncpu: 55551.34555846634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22200.927915083135,
            "unit": "ns/iter",
            "extra": "iterations: 31560\ncpu: 22200.532319391514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109965.78697292962,
            "unit": "ns/iter",
            "extra": "iterations: 6356\ncpu: 109959.0151038405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88605.79407669196,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 88602.73383116147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91071.26441558766,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 91067.29870129864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89644.81776357438,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 89640.01277955124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133175.74690770337,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133172.04567078958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525871.2806885866,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525831.2125748522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435841.90292472765,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435839.95021779585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432384.7030864019,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 432361.3580246916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 429415.4545454661,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 429401.10565109964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280783.4653225427,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 280763.34677418997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424539.5358881028,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 424529.92700729636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22779.59978070246,
            "unit": "ns/iter",
            "extra": "iterations: 31008\ncpu: 22779.040892672925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115029.81649415687,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 115028.88122227669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92136.82804059249,
            "unit": "ns/iter",
            "extra": "iterations: 7589\ncpu: 92133.08736329027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92559.9138429325,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 92555.24034672973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91173.56649666578,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 91169.68745913573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135214.70929109753,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135211.29998068535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517465.0620384445,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517457.68094534817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 429998.6654366871,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 429979.8277982772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428902.65603924217,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428892.58123850054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429798.20807835215,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 429795.8384332872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279193.3095617499,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 279186.25498007756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423745.0976349369,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423742.8138265559 ns\nthreads: 1"
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
        "date": 1702492216047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7259.614543374895,
            "unit": "ns/iter",
            "extra": "iterations: 96195\ncpu: 7259.468787359012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52847.045300006816,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52846.36000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96982.68346705665,
            "unit": "ns/iter",
            "extra": "iterations: 8849\ncpu: 96983.73827551135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139977.4536735899,
            "unit": "ns/iter",
            "extra": "iterations: 6152\ncpu: 139978.94993498048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184226.93071001154,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 184227.63045337886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228252.77097622817,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 228247.33509234842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271031.6966750186,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 271026.1919698869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315495.232532771,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 315486.1353711793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358047.7832370141,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 358032.78282411257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5988.885581420144,
            "unit": "ns/iter",
            "extra": "iterations: 116336\ncpu: 5988.74638976758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5012.9752630144685,
            "unit": "ns/iter",
            "extra": "iterations: 139346\ncpu: 5012.991402695445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4957.64172198052,
            "unit": "ns/iter",
            "extra": "iterations: 141767\ncpu: 4957.543010714754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5005.841860099753,
            "unit": "ns/iter",
            "extra": "iterations: 139971\ncpu: 5005.8183480863945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7725.1128253320885,
            "unit": "ns/iter",
            "extra": "iterations: 91522\ncpu: 7724.761259587852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26867.37181697821,
            "unit": "ns/iter",
            "extra": "iterations: 30160\ncpu: 26866.67771883291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145311.90857143287,
            "unit": "ns/iter",
            "extra": "iterations: 5950\ncpu: 145312.1512605044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110102.84154749979,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 110100.28089887623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111777.57450117219,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 111776.43171806159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108669.83386136175,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 108669.37016854616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200997.7547468381,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 200998.1012658228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1732293.5485074327,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1732274.440298507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1358591.7441519792,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358584.3567251426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1362447.016034955,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1362445.9183673447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1340934.312138731,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1340935.9826589616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 755289.7770491111,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 755288.9344262274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1308645.2178218097,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1308627.5813295618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36012.71583173147,
            "unit": "ns/iter",
            "extra": "iterations: 22916\ncpu: 36012.71600628372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 184582.34381013893,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 184580.2865084452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139778.69896307288,
            "unit": "ns/iter",
            "extra": "iterations: 6172\ncpu: 139779.47180816604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139068.30352787275,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 139064.13591285946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136420.67256917834,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 136421.40711462402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217396.59859332023,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217396.3074604364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1755666.7834276292,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755648.399246702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1392568.0958083742,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1392561.8263472987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1406908.4123866628,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406908.761329306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1377934.4362018618,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1377923.2937685489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 810634.4777681574,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 810618.6573670474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1351889.9404934016,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1351870.2467343975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6666445.21985816,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6666476.59574466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2981791.33762052,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2981808.038585207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29887.90492816958,
            "unit": "ns/iter",
            "extra": "iterations: 27495\ncpu: 29887.845062738685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154644.0802195867,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 154645.88276961204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116400.13684921789,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 116399.97295469926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113130.5653361005,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 113131.10128721864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111164.08226785678,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 111159.07271083552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190850.95657923305,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 190844.39056645258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1731726.7988826584,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1731683.9851024211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1369983.7107194462,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369934.2143906015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1367214.8460409783,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367197.2140762468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1339037.143678092,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1339011.3505747146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 766657.1263418727,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 766645.4170107348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1321198.991489295,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1321141.560283692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2870.0668584900814,
            "unit": "ns/iter",
            "extra": "iterations: 244322\ncpu: 2870.0133430472956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18652.462503987575,
            "unit": "ns/iter",
            "extra": "iterations: 37604\ncpu: 18652.127433251793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13961.529470509553,
            "unit": "ns/iter",
            "extra": "iterations: 50067\ncpu: 13961.211975952103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13643.985451714987,
            "unit": "ns/iter",
            "extra": "iterations: 51415\ncpu: 13643.73042886316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11062.111137463939,
            "unit": "ns/iter",
            "extra": "iterations: 63246\ncpu: 11062.027638111527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67707.01326286166,
            "unit": "ns/iter",
            "extra": "iterations: 10405\ncpu: 67703.20999519483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120657.79961897411,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 120655.33425701494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29936.77319278135,
            "unit": "ns/iter",
            "extra": "iterations: 23337\ncpu: 29936.204310751087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29707.565605856707,
            "unit": "ns/iter",
            "extra": "iterations: 23504\ncpu: 29706.71800544585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29553.706345844508,
            "unit": "ns/iter",
            "extra": "iterations: 23606\ncpu: 29553.07972549338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56432.96574898222,
            "unit": "ns/iter",
            "extra": "iterations: 12350\ncpu: 56431.465587044506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55197.10779618879,
            "unit": "ns/iter",
            "extra": "iterations: 12737\ncpu: 55196.26285624539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22446.39588680788,
            "unit": "ns/iter",
            "extra": "iterations: 31168\ncpu: 22446.214065708522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110415.30252764151,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 110414.5023696687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88928.74225101435,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 88925.87652438997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89455.16168046789,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89451.13940165426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89064.55156607131,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89060.7970460911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133888.18117465818,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 133883.89133345915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 520748.2376017066,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 520735.75129533565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 436153.3696060608,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 436158.2864290154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 428033.9252451352,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 428030.9436274548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430046.3937346184,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430038.3906633906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272621.2454226673,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 272615.27074406215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 422091.71144571865,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 422093.43373493856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22422.007398393052,
            "unit": "ns/iter",
            "extra": "iterations: 31223\ncpu: 22421.910130352582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116912.83528036307,
            "unit": "ns/iter",
            "extra": "iterations: 5992\ncpu: 116909.91321762414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92471.22979230675,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 92470.41936764146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91892.81852824321,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 91893.85019710832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91020.7878708914,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91020.4060385206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131444.34197181935,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131443.83098591695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519638.16901413526,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519624.8332097805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428228.5579399611,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428222.80809318816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430300.34830770514,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 430305.2307692234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 423813.9291767867,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423814.40677965654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278972.82491046336,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 278970.5133306779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421472.8980084015,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 421472.78213638545 ns\nthreads: 1"
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
        "date": 1702503251143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7329.192798899583,
            "unit": "ns/iter",
            "extra": "iterations: 95291\ncpu: 7328.711001038923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53687.61380000252,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53683.429999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99562.16492693637,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 99556.6225933658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144259.3530104314,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 144254.38950554995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189140.82428884675,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 189138.88402625817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234151.5185586546,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 234143.8634516392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280515.4568137986,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 280507.29366602685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322248.2620817979,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 322236.282527881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366791.59502738767,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366783.4808259588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6097.051283616167,
            "unit": "ns/iter",
            "extra": "iterations: 114754\ncpu: 6096.855011590001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4972.17818950228,
            "unit": "ns/iter",
            "extra": "iterations: 140547\ncpu: 4972.091186578161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4959.977958900927,
            "unit": "ns/iter",
            "extra": "iterations: 141463\ncpu: 4959.872899627462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4980.5567357214895,
            "unit": "ns/iter",
            "extra": "iterations: 140564\ncpu: 4980.536268176772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7734.698558930688,
            "unit": "ns/iter",
            "extra": "iterations: 90419\ncpu: 7734.56684988775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26726.976293316584,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 26725.6355303505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142836.64633332667,
            "unit": "ns/iter",
            "extra": "iterations: 6000\ncpu: 142831.3500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107049.04797094998,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 107047.82064128255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107695.01611279043,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 107692.18277945612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105102.47885065361,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 105100.06165988429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199376.04479281802,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 199369.69764837626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1753715.2585551587,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1753668.8212927752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1395192.2030074436,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1395138.496240602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1390720.4431137608,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1390685.0299401192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1399390.6009036216,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1399324.5481927705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767291.5847176554,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 767257.7242524935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1349003.1455603126,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1348856.3318777275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36409.66641682251,
            "unit": "ns/iter",
            "extra": "iterations: 22681\ncpu: 36407.177814029325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179388.94202898644,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 179048.28157349912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138810.8678698,
            "unit": "ns/iter",
            "extra": "iterations: 6206\ncpu: 138802.85207863327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139066.7095629725,
            "unit": "ns/iter",
            "extra": "iterations: 6201\ncpu: 139059.36139332404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132971.61699487927,
            "unit": "ns/iter",
            "extra": "iterations: 6449\ncpu: 132960.42797332912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217942.60342222475,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 217938.3744338202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1795370.2490347805,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795318.5328185307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1464792.3842519915,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1464761.5748031521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1442997.6919504444,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1442931.8885448882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1428777.7526881888,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1428699.846390174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 793373.9624252998,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 793310.8454312554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1392843.9834835608,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1392756.1561561627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6596647.964788101,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6596164.78873239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2941551.056782321,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2941352.996845422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29216.80562978663,
            "unit": "ns/iter",
            "extra": "iterations: 28065\ncpu: 29215.592374844142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152449.78484149938,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 152439.63166282908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114745.04298915547,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 114739.90893263688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111637.95234385513,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 111630.65835605803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109767.33435778206,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 109754.02740427686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189071.17412174714,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 189058.06240453874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1786409.8061420878,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786282.9174664188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1407744.2284417688,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407669.2889561267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1403282.936651516,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403211.6138763258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1394448.254491031,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1394316.7664670704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 773111.6935216569,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 773058.139534879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1362805.6020556688,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1362694.419970634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2868.783437068277,
            "unit": "ns/iter",
            "extra": "iterations: 244534\ncpu: 2868.6211324396595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18955.45058353435,
            "unit": "ns/iter",
            "extra": "iterations: 38044\ncpu: 18953.453895489387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15064.48675781264,
            "unit": "ns/iter",
            "extra": "iterations: 46518\ncpu: 15062.86168794877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14035.183892779613,
            "unit": "ns/iter",
            "extra": "iterations: 49692\ncpu: 14034.560895113776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11171.248177161278,
            "unit": "ns/iter",
            "extra": "iterations: 62677\ncpu: 11170.556982625287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66056.26747806673,
            "unit": "ns/iter",
            "extra": "iterations: 10599\ncpu: 66056.05245777842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123504.5390459274,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 123492.4381625439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29988.92922628673,
            "unit": "ns/iter",
            "extra": "iterations: 23342\ncpu: 29986.714934452917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29913.12716023199,
            "unit": "ns/iter",
            "extra": "iterations: 23435\ncpu: 29910.450181352717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30040.92345647271,
            "unit": "ns/iter",
            "extra": "iterations: 23307\ncpu: 30039.876431973124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60517.067278560535,
            "unit": "ns/iter",
            "extra": "iterations: 11549\ncpu: 60510.459780067446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56022.48108756698,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 56019.480207916575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22229.17350888544,
            "unit": "ns/iter",
            "extra": "iterations: 31520\ncpu: 22227.731598984763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113638.64837134603,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 113631.80781759133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90460.3508272911,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 90459.08738366126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89418.2657565729,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89409.42842561743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89127.73273998655,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 89122.09790209799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132463.59213758472,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132457.1158571165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536661.8010711857,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 536632.5937260906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 437495.0406504266,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 437462.4140087555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436533.4031152547,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 436510.40498442313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438642.5421085495,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 438580.53649408143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276031.1870560254,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 276008.99763220426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 430301.00369687256,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 430271.4109673515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22450.16787923475,
            "unit": "ns/iter",
            "extra": "iterations: 31201\ncpu: 22449.35739239127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116870.51928882004,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 116854.176450855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93304.90355667904,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 93297.40242440511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92392.54385732659,
            "unit": "ns/iter",
            "extra": "iterations: 7570\ncpu: 92387.22589167899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91051.77909398692,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 91043.51731320015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 136015.33773034834,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 136015.09214355078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 530164.4765506963,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 530095.9152798813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 440508.09367087786,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 440501.20253164286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 439086.82172000536,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 439086.18957941147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 434640.5189559296,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 434619.5773772481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284851.00366148714,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 284829.69894222834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 431516.9597273953,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 431479.12019825896 ns\nthreads: 1"
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
        "date": 1705574941056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7253.464826654046,
            "unit": "ns/iter",
            "extra": "iterations: 96195\ncpu: 7253.433130620095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51789.18469999871,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51783.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95452.15280399828,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 95447.89561354801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138186.26395125635,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 138177.58178319433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181774.17568134636,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 181765.49266247373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224130.90106189635,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 224114.5817145816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267071.5929694724,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 267057.6626580328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311036.70764831867,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 311014.97498212993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353526.4539179721,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 353513.3576938689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6010.243674504529,
            "unit": "ns/iter",
            "extra": "iterations: 116315\ncpu: 6009.856854232044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4924.814476037422,
            "unit": "ns/iter",
            "extra": "iterations: 142014\ncpu: 4924.779951272403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4950.467253839206,
            "unit": "ns/iter",
            "extra": "iterations: 141696\ncpu: 4950.48413504969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4959.9371857154165,
            "unit": "ns/iter",
            "extra": "iterations: 140796\ncpu: 4959.893746981439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7649.988583505322,
            "unit": "ns/iter",
            "extra": "iterations: 91797\ncpu: 7649.915574583033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26427.49915303917,
            "unit": "ns/iter",
            "extra": "iterations: 30698\ncpu: 26427.027819401916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140883.669952371,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 140881.0415639886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105192.64203148255,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 105190.08853910475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103746.75115151673,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 103746.23030303055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102883.83064902882,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 102883.30528846137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197649.87942946004,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 197645.2863828834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1685077.9981684736,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1685039.7435897484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1343675.521739119,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1343643.0434782603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1345697.9188405334,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1345681.449275364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1336396.4417266673,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1336374.676258994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 753041.4910568992,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 753034.3089430904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1301809.4642356224,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1301746.1430575044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35803.26000608224,
            "unit": "ns/iter",
            "extra": "iterations: 23011\ncpu: 35802.407544217895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176626.7358065061,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 176622.40213158404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135971.03899588436,
            "unit": "ns/iter",
            "extra": "iterations: 6334\ncpu: 135968.9927376065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134440.7866416466,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 134437.0405130614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130627.71083054203,
            "unit": "ns/iter",
            "extra": "iterations: 6574\ncpu: 130627.1980529357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 218647.68549808694,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 218643.95964691043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1726038.4081632318,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1726015.2133580688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1400842.3298193577,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1400821.9879518047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1382516.243684952,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1382493.0163447156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1366272.1850219741,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1366248.604992658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 789941.613423951,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 789932.965165673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1349659.7089336577,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1349640.3458213327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6604957.894366257,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6604845.774647903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2965040.4968354544,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2965031.01265823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29553.344603335892,
            "unit": "ns/iter",
            "extra": "iterations: 27832\ncpu: 29552.91391204374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149230.735304285,
            "unit": "ns/iter",
            "extra": "iterations: 5784\ncpu: 149230.4114799453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112959.35141881701,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 112957.09406200767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108861.80597201776,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 108860.9046239136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105211.37659625772,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 105207.73575638539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187802.9676793638,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 187797.99612152646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1718770.3529412972,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1718739.3382352912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1352029.9405796863,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1352014.7826086895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1359291.2921511976,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1359272.8197674404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1352420.8412015894,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1352415.4506437727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 761824.5151763196,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 761809.7621000834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1311575.8959213013,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311569.7609001363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2876.7805398693645,
            "unit": "ns/iter",
            "extra": "iterations: 243133\ncpu: 2876.7308427897483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18429.147567338503,
            "unit": "ns/iter",
            "extra": "iterations: 37942\ncpu: 18428.870381108016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15048.556173525712,
            "unit": "ns/iter",
            "extra": "iterations: 46748\ncpu: 15048.32934029259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15085.158045666807,
            "unit": "ns/iter",
            "extra": "iterations: 46379\ncpu: 15085.049267987675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11044.810722565666,
            "unit": "ns/iter",
            "extra": "iterations: 63399\ncpu: 11044.619000299646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65881.71519879947,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 65880.19550709694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118691.62447114973,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 118689.98138432873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29417.593423206097,
            "unit": "ns/iter",
            "extra": "iterations: 23811\ncpu: 29417.185334509195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29381.038724566668,
            "unit": "ns/iter",
            "extra": "iterations: 23835\ncpu: 29380.826515628174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29216.712618766825,
            "unit": "ns/iter",
            "extra": "iterations: 23996\ncpu: 29216.548591431943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59924.82354451867,
            "unit": "ns/iter",
            "extra": "iterations: 11680\ncpu: 59924.43493150657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54638.03064805536,
            "unit": "ns/iter",
            "extra": "iterations: 12823\ncpu: 54637.058410669044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21819.59837620944,
            "unit": "ns/iter",
            "extra": "iterations: 32147\ncpu: 21819.669020437508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110024.87930763075,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 110021.79386309852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88035.7725613584,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 88035.1667715548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89758.09078104814,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 89755.3137003832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88626.20258292531,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88624.75310205008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131375.30099963504,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 131364.42058496797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519227.7175685614,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519220.23721274745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 427908.71288345853,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 427888.2208588927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422422.5467149016,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422413.7432188086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423026.91051994695,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 423018.80290205457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281884.83937195333,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 281877.0531400987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 419834.8197115629,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419819.59134614805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21827.889328061687,
            "unit": "ns/iter",
            "extra": "iterations: 32131\ncpu: 21827.079767203028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110711.6050500204,
            "unit": "ns/iter",
            "extra": "iterations: 6297\ncpu: 110708.22613943227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91316.55652627599,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 91315.13887077928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90435.69442656921,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 90432.03758527522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88456.54070427471,
            "unit": "ns/iter",
            "extra": "iterations: 7923\ncpu: 88455.90054272416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130839.51111941382,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130837.65651280148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505214.8111030529,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 505189.6899783785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 425116.74924105033,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 425109.53248330293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418822.0724984796,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418816.7765128832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414843.98576511414,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414834.22301304806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281822.93062882696,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 281818.90466531634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416191.60393091047,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416173.73436569783 ns\nthreads: 1"
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
        "date": 1705772771901,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7235.222696192549,
            "unit": "ns/iter",
            "extra": "iterations: 96818\ncpu: 7235.07612220868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51994.9696000026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51990.329999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96338.18421052444,
            "unit": "ns/iter",
            "extra": "iterations: 8930\ncpu: 96331.47816349384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139690.889719024,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 139681.0784472958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183687.76295033764,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 183672.79897676388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 230281.93254590538,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 229783.28083989513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269852.0942164094,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269850.7151741293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312671.962643687,
            "unit": "ns/iter",
            "extra": "iterations: 2784\ncpu: 312644.10919540224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355019.4756047405,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 354995.9819598197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5955.351788914714,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5955.14777991952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4875.3119144737,
            "unit": "ns/iter",
            "extra": "iterations: 143674\ncpu: 4875.025404735731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4958.456356582194,
            "unit": "ns/iter",
            "extra": "iterations: 141499\ncpu: 4958.437162100085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4877.175191700395,
            "unit": "ns/iter",
            "extra": "iterations: 144105\ncpu: 4877.077825196896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7706.171438220989,
            "unit": "ns/iter",
            "extra": "iterations: 91794\ncpu: 7705.559186874952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26773.199340151044,
            "unit": "ns/iter",
            "extra": "iterations: 30310\ncpu: 26771.290003299247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137321.2552166887,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 137314.60674157282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105216.49783816728,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 105207.62198888183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104618.4009797922,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 104613.0189834658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101309.24884191409,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101303.82468226651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211862.28551725394,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 211853.31034482684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1705910.1086556062,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1705745.8563535926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1341493.0886626919,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1341437.2093023232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1344896.724890896,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1344804.657933041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1333692.5402298328,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1333615.3735632182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 751797.6628756628,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 751721.1210398049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1305043.0730337733,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1304958.4269662895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35721.916481218694,
            "unit": "ns/iter",
            "extra": "iterations: 22917\ncpu: 35718.93354278482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172864.10064153458,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 172850.4009623091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132275.64204371057,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 132272.94552169883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135163.28091650098,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 135161.45637162618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130131.03342911907,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 130128.42232642596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224008.05392910936,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 224002.0801232663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1739580.923507472,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1739519.589552244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1369490.2500000529,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1369469.7058823567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1406128.2087744775,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1406102.8744326786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1381488.0385755643,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1381435.3115727042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 782976.0210792836,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 782944.5193929155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1348791.3728324145,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1348759.5375722523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6399069.130136374,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6398921.232876687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2859948.3538461686,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2859821.23076921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30151.274089319973,
            "unit": "ns/iter",
            "extra": "iterations: 27699\ncpu: 30150.83216000587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147735.95275591168,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 147735.1934269091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110561.13094170036,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 110559.20563741145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107228.53408949812,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 107223.45755951668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105856.7075157369,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 105856.16438356122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192177.30523514433,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 192174.62289263454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1705095.6270567218,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1705043.8756855596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1346026.5108224882,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1345967.388167385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1349543.4242424543,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1349537.2294372239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1323667.9216524318,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1323660.6837606872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 757036.1718240652,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 757023.8599348575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1304327.1753154434,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1304300.8415147252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2901.1458981958895,
            "unit": "ns/iter",
            "extra": "iterations: 240894\ncpu: 2901.135769259528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18358.566480503523,
            "unit": "ns/iter",
            "extra": "iterations: 38139\ncpu: 18358.504418049804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13462.430770115578,
            "unit": "ns/iter",
            "extra": "iterations: 52174\ncpu: 13462.38739602095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14008.254941065392,
            "unit": "ns/iter",
            "extra": "iterations: 50141\ncpu: 14007.620510161261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11034.139333492434,
            "unit": "ns/iter",
            "extra": "iterations: 63165\ncpu: 11034.093247842904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67353.21017145285,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 67352.91851281066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112577.87194729019,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 112572.23650385579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28950.04054780878,
            "unit": "ns/iter",
            "extra": "iterations: 24169\ncpu: 28949.145599735133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29194.05922067144,
            "unit": "ns/iter",
            "extra": "iterations: 23995\ncpu: 29192.606793081966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29109.597313470465,
            "unit": "ns/iter",
            "extra": "iterations: 23897\ncpu: 29108.281374231025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61548.32425021316,
            "unit": "ns/iter",
            "extra": "iterations: 11670\ncpu: 61540.137103684465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54742.5787708618,
            "unit": "ns/iter",
            "extra": "iterations: 12822\ncpu: 54737.66963032295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21762.89129560141,
            "unit": "ns/iter",
            "extra": "iterations: 32317\ncpu: 21740.201751400087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108999.03897935068,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 108993.69129618109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85983.67902451029,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 85982.07907377896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88433.47116842937,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 88431.22154779908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86415.45903051594,
            "unit": "ns/iter",
            "extra": "iterations: 8128\ncpu: 86408.75984252068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126703.03695612504,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 126695.37593300597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510864.40859427484,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 510842.9715950485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426232.6389578072,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 426221.7121588169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423038.6652769229,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 423031.03037522634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 414203.8272189199,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 414190.7692307669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280484.30796253786,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 280478.0249804816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412578.4982290359,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 412576.6824085019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21517.21436681019,
            "unit": "ns/iter",
            "extra": "iterations: 32589\ncpu: 21516.419650802352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111480.78439490222,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 111477.94585987198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90081.40123536198,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 90074.61073220833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89494.04042471302,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 89485.6850454137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87691.93995728591,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 87682.1002386637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130430.86064658915,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130423.26272761027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 506107.10567938106,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 506060.10064701294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 421195.87778442015,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421182.66104756546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 416113.19678958,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 416083.590963139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411907.4210217354,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 411877.51027598354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276730.6930379737,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 276711.98575949634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 411623.0360732957,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 411613.4240094606 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}