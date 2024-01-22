window.BENCHMARK_DATA = {
  "lastUpdate": 1705956383729,
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
        "date": 1705774156170,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7363.688277882526,
            "unit": "ns/iter",
            "extra": "iterations: 94889\ncpu: 7363.405663459411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52467.78140000288,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52463.77999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96247.1476072833,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 96241.04695574027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139520.46913580378,
            "unit": "ns/iter",
            "extra": "iterations: 6156\ncpu: 139513.2228719948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183193.58345672418,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 183182.88555108945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226287.5155636912,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 226274.1041067225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279873.1009660358,
            "unit": "ns/iter",
            "extra": "iterations: 3209\ncpu: 279858.89685260225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313459.2615607004,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 313435.98265895934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357643.52339901554,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 357620.6075533664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6037.42247206514,
            "unit": "ns/iter",
            "extra": "iterations: 115984\ncpu: 6036.888708787422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4974.036078999175,
            "unit": "ns/iter",
            "extra": "iterations: 140913\ncpu: 4973.894530667858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4963.632016351858,
            "unit": "ns/iter",
            "extra": "iterations: 140903\ncpu: 4963.440806796159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5020.185704680385,
            "unit": "ns/iter",
            "extra": "iterations: 139808\ncpu: 5020.107576104372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7673.816893355066,
            "unit": "ns/iter",
            "extra": "iterations: 90947\ncpu: 7673.258051392567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27290.263912619932,
            "unit": "ns/iter",
            "extra": "iterations: 29847\ncpu: 27288.745937615182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146461.55894898644,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 146452.6019450606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110994.40584582846,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 110987.64873253983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109516.71941062773,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 109511.60794362571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106108.06708073367,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 106100.48447204969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202410.92136632916,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 202396.12563044525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1725689.000000002,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1725555.9701492516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1359014.5337244645,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1358908.6510263935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1361063.2199413064,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1360959.0909090904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1341653.5621387134,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1341580.9248554935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 750832.8763221927,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 750801.3832384037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1312030.1274787164,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1311966.005665724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36383.933849589775,
            "unit": "ns/iter",
            "extra": "iterations: 22857\ncpu: 36383.383646147755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 183591.7281096103,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 183584.86405480653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138443.35697134156,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 138438.16231791204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137538.14005070628,
            "unit": "ns/iter",
            "extra": "iterations: 6312\ncpu: 137533.4125475282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134762.4373522425,
            "unit": "ns/iter",
            "extra": "iterations: 6345\ncpu: 134760.89834515343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217759.4156852781,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217749.66173891336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1760556.737335753,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1760490.2439024346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1383835.2989689386,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1383774.374079534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1386768.970015023,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1386716.1919040524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1364317.9224011423,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1364259.4436310458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 790778.2655319294,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 790755.5744680846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1352020.5508721608,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1351957.267441861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6473439.307692039,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6473142.657342662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2903341.3730408214,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2903297.805642617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30095.58316806755,
            "unit": "ns/iter",
            "extra": "iterations: 27733\ncpu: 30093.336458370864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 157675.66993108342,
            "unit": "ns/iter",
            "extra": "iterations: 5514\ncpu: 157670.9104098665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116388.39891598618,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 116383.8075880762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113074.1385973777,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 113068.69721013623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110425.14322548246,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 110421.45159211039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191084.109098861,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 191081.8023128957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1738393.7403315576,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1738330.5709023825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1359886.1374820261,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1359858.031837912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1371459.5645160843,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1371434.0175953112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1331243.2892086082,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1331236.402877696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 749980.3211084132,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 749963.8141809255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1315352.3661972159,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1315333.8028168995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2870.300421125937,
            "unit": "ns/iter",
            "extra": "iterations: 241258\ncpu: 2870.239328851273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18229.52272787082,
            "unit": "ns/iter",
            "extra": "iterations: 37993\ncpu: 18229.434369489092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14880.900450820165,
            "unit": "ns/iter",
            "extra": "iterations: 48800\ncpu: 14880.715163934441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15161.947572244324,
            "unit": "ns/iter",
            "extra": "iterations: 47513\ncpu: 15161.703112832356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10993.950609909198,
            "unit": "ns/iter",
            "extra": "iterations: 63616\ncpu: 10993.677691146937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66461.25467311434,
            "unit": "ns/iter",
            "extra": "iterations: 10539\ncpu: 66459.43637916283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121084.91155047056,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 121083.29864724191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29165.28410518511,
            "unit": "ns/iter",
            "extra": "iterations: 23882\ncpu: 29164.50046059791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29119.66833291713,
            "unit": "ns/iter",
            "extra": "iterations: 24006\ncpu: 29119.049404315647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29040.785150469328,
            "unit": "ns/iter",
            "extra": "iterations: 24324\ncpu: 29040.36753823383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59197.49091839577,
            "unit": "ns/iter",
            "extra": "iterations: 11727\ncpu: 59197.21156305941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54810.84780000174,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54809.140000000414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21586.113725849882,
            "unit": "ns/iter",
            "extra": "iterations: 32508\ncpu: 21585.754275870837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114542.3756915077,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 114540.70940448974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88285.21160883078,
            "unit": "ns/iter",
            "extra": "iterations: 7925\ncpu: 88284.02523659417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87774.29071518373,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 87773.83939774298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87916.98343449639,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 87914.93424380415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133600.37421919566,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 133598.14499337476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519727.2097242503,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 519720.1741654571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435664.92164173175,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435659.7014925366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427487.07283577975,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 427474.9850746313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418862.66022262204,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 418852.1382542496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 268854.43035018805,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 268842.4902723717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 419553.5054151139,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 419537.30445246724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22400.361811617167,
            "unit": "ns/iter",
            "extra": "iterations: 31287\ncpu: 22398.814203982365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113310.27287502932,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 113307.02096538308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90290.12410116878,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 90285.71782792099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91631.28504672021,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 91629.88128315349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90140.3757483008,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 90134.1230416495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130968.62652641357,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 130960.15404846802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515938.81079081376,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 515920.76866223285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 424696.5036764698,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 424670.83333333756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 421081.22309552133,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 421054.594921405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414330.6043631921,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 414309.492924532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271579.57364343305,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 271568.4108527151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 413879.6584651137,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 413873.9308728784 ns\nthreads: 1"
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
        "date": 1705952860234,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7323.382167941498,
            "unit": "ns/iter",
            "extra": "iterations: 95390\ncpu: 7323.013942761296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53597.354099997574,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53594.030000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98660.38331803601,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 98655.43827443781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142845.9803954122,
            "unit": "ns/iter",
            "extra": "iterations: 6019\ncpu: 142841.70127928225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187931.5447242687,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 187924.07729049068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232024.34112272886,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 232015.9011549826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277006.2806513155,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 276995.17879948916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321830.13767580746,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 321818.3197631385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366493.78619526536,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 366480.1767676768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6056.147006325102,
            "unit": "ns/iter",
            "extra": "iterations: 115410\ncpu: 6055.86517632787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5073.502597083044,
            "unit": "ns/iter",
            "extra": "iterations: 138232\ncpu: 5073.272469471612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5077.07551660775,
            "unit": "ns/iter",
            "extra": "iterations: 139903\ncpu: 5076.7581824549925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5008.1883200004995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5008.186999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7619.33710059239,
            "unit": "ns/iter",
            "extra": "iterations: 91667\ncpu: 7618.9632037701695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26331.583963395897,
            "unit": "ns/iter",
            "extra": "iterations: 30817\ncpu: 26330.19761819774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136326.34296201754,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 136321.8321097988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104724.06624953671,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 104719.3841246472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104689.5566303351,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 104685.23325578557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99106.44694867295,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 99101.37540453079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198274.18403946434,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 198268.14615557043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1757863.5406427123,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1757820.982986769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1380100.4391692514,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380032.1958456975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1376987.982222191,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376929.0370370343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1372081.359467384,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1372002.0710059176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 768923.8993344731,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 768888.7687188016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1331227.190817665,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1331142.898134864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35662.77166805619,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 35661.973932505316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173928.7030744341,
            "unit": "ns/iter",
            "extra": "iterations: 4944\ncpu: 173921.50080906102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132396.7598830962,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 132391.80126134475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134392.3487572316,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 134390.66750039108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128209.73362249692,
            "unit": "ns/iter",
            "extra": "iterations: 6686\ncpu: 128210.34998504339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 218115.09616830762,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 218111.04432757318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1793431.6011560475,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1793413.2947976845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1435049.7037037327,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1435005.4012345609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1416775.458841392,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1416750.7621951245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1436244.3106645704,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1436198.6089644507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824946.3700088642,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 824946.583850931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1379625.5066865294,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1379600.2971768123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6655998.121428703,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6655853.571428593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2939114.5264796712,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2939107.7881619874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29269.69658835758,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29269.01001746839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146875.273874477,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 146876.04024556605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109511.30970626687,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 109506.67943805885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107620.65794393078,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 107618.84112149489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102607.60151006079,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 102604.09875359603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189336.121172363,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 189334.51443569644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1765734.4128787231,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765679.9242424264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1383664.0830860524,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383662.462908014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1385852.4323923038,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1385823.3283803896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1366335.6975035525,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1366335.0954478798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 778988.3983263714,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 778969.7907949792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1339376.364296162,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1339365.3120464508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2864.394755984942,
            "unit": "ns/iter",
            "extra": "iterations: 244698\ncpu: 2864.352794056373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18573.21801778156,
            "unit": "ns/iter",
            "extra": "iterations: 37685\ncpu: 18573.198885498194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13947.673022516063,
            "unit": "ns/iter",
            "extra": "iterations: 50190\ncpu: 13947.105000996207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15436.72097320649,
            "unit": "ns/iter",
            "extra": "iterations: 45458\ncpu: 15436.618417000405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11141.229490761683,
            "unit": "ns/iter",
            "extra": "iterations: 62996\ncpu: 11140.99942853514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68904.75966172176,
            "unit": "ns/iter",
            "extra": "iterations: 10169\ncpu: 68901.68158127632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123275.51498588957,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 123277.27433004214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30116.274746081544,
            "unit": "ns/iter",
            "extra": "iterations: 23236\ncpu: 30115.74281287661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29650.131489652464,
            "unit": "ns/iter",
            "extra": "iterations: 23576\ncpu: 29650.20783847966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29531.501220843387,
            "unit": "ns/iter",
            "extra": "iterations: 23754\ncpu: 29530.912688389344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60642.80155709746,
            "unit": "ns/iter",
            "extra": "iterations: 11560\ncpu: 60643.68512110758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56155.440713196054,
            "unit": "ns/iter",
            "extra": "iterations: 12507\ncpu: 56153.577996321605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21802.966815056952,
            "unit": "ns/iter",
            "extra": "iterations: 32123\ncpu: 21803.08190393177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115863.73186850056,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 115861.44060796156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89897.37233221642,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 89896.41295962897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89312.01773184561,
            "unit": "ns/iter",
            "extra": "iterations: 7839\ncpu: 89311.63413700793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87587.43627942189,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 87583.70055082547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129841.76308948877,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 129842.12773858015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 540289.0457365054,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 540270.93023256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 446416.66305041517,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 446417.8047223969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435881.8342679486,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 435863.0529595063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 434969.8965087466,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 434970.76059850067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279286.65255590336,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 279281.3099041496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 431922.7010500307,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431918.15935762745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22648.828892053178,
            "unit": "ns/iter",
            "extra": "iterations: 30922\ncpu: 22647.121790310975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114129.29384892303,
            "unit": "ns/iter",
            "extra": "iterations: 6129\ncpu: 114130.96753140965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91532.47446975813,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91532.65252683913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91739.91462616177,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 91734.4507005366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91496.00195694182,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91491.44161774457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128166.72409397185,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 128162.44764159725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522709.5980539029,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 522711.6017964055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439544.64742783253,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 439517.44040150597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 433557.69602973305,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 433533.560794045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427785.2442002576,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427772.2832722784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 289469.6492969335,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 289454.67328370624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426918.46817623905,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 426904.2227662217 ns\nthreads: 1"
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
        "date": 1705954352083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7184.092222405193,
            "unit": "ns/iter",
            "extra": "iterations: 97048\ncpu: 7183.788434589071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52392.89350000718,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52387.32999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95903.23196337435,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 95897.76636140271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140499.01003559513,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 140489.8672709615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183491.21650793505,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 183475.76719576717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226442.67291944168,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 226422.87978863931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269570.2518656558,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269565.5161691542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312202.2552195662,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 312193.23254139675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357043.3252267465,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 357041.34377576265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5939.020763506788,
            "unit": "ns/iter",
            "extra": "iterations: 117851\ncpu: 5938.838024284912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4888.976309928231,
            "unit": "ns/iter",
            "extra": "iterations: 144111\ncpu: 4888.898141016301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4887.216635903506,
            "unit": "ns/iter",
            "extra": "iterations: 143028\ncpu: 4887.254243924258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4907.089207866465,
            "unit": "ns/iter",
            "extra": "iterations: 142678\ncpu: 4907.125134919198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7719.5847699718715,
            "unit": "ns/iter",
            "extra": "iterations: 90663\ncpu: 7719.388284085012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26830.82531971637,
            "unit": "ns/iter",
            "extra": "iterations: 30261\ncpu: 26830.345989887974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134569.5212264258,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 134562.38993710713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105606.9859992483,
            "unit": "ns/iter",
            "extra": "iterations: 8071\ncpu: 105602.81253871917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104375.59875716221,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 104366.65042037293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101154.51843946069,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 101147.1125340925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197466.8454384488,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 197451.3064658994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1692742.3272394915,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1692671.4808043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1350966.8255812414,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1350848.6918604618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1348783.9270072298,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1348762.6277372304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1344828.1476122192,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344805.065123009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 754397.2931596132,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 754372.3941368087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1303654.596910224,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1303626.9662921359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35985.5980366408,
            "unit": "ns/iter",
            "extra": "iterations: 22818\ncpu: 35984.30624945221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172793.90004023004,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 172794.85116653246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132606.35947915373,
            "unit": "ns/iter",
            "extra": "iterations: 6451\ncpu: 132604.78995504577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133987.72917962732,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 133984.85083903017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130662.1566265144,
            "unit": "ns/iter",
            "extra": "iterations: 6557\ncpu: 130658.24309897811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220703.4139784786,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 220704.6850998473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1732632.927509246,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732569.1449814164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1387990.7287630935,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1387930.7004470886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1405635.1480362976,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1405499.2447129956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1378078.8562964383,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378052.444444443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 810400.4403748068,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 810361.1584327071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1341290.15942032,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1341244.637681161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6513133.454545569,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6512811.888111929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3032918.6818181523,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3032851.2987013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29685.188456966087,
            "unit": "ns/iter",
            "extra": "iterations: 27757\ncpu: 29684.043664661178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143908.5901036385,
            "unit": "ns/iter",
            "extra": "iterations: 5982\ncpu: 143902.59110665362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110484.53262537502,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 110482.07523029696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107668.21122359065,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 107665.04186976672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105616.01452844929,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 105613.81433144554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188486.21581010352,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 188482.2517421601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1712531.0183486147,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1712524.2201834945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1355334.6284469613,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1355282.438316407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1362635.6890509888,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1362609.9270073073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1336657.9928469881,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1336610.7296137346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 760577.6495517233,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 760582.0700896505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1311639.7337111067,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1311579.7450424894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2896.694360074932,
            "unit": "ns/iter",
            "extra": "iterations: 241333\ncpu: 2896.5172603829615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18129.350934094302,
            "unit": "ns/iter",
            "extra": "iterations: 38540\ncpu: 18127.43124026988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14912.896697730055,
            "unit": "ns/iter",
            "extra": "iterations: 46998\ncpu: 14912.057959913162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14450.977558883986,
            "unit": "ns/iter",
            "extra": "iterations: 48527\ncpu: 14451.076720176374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11060.515829443611,
            "unit": "ns/iter",
            "extra": "iterations: 63205\ncpu: 11059.806977296039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66222.47205786106,
            "unit": "ns/iter",
            "extra": "iterations: 10647\ncpu: 66214.44538367576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118375.19489089008,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 118361.68161055609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29380.037930021743,
            "unit": "ns/iter",
            "extra": "iterations: 23807\ncpu: 29378.661738144205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29333.01974043203,
            "unit": "ns/iter",
            "extra": "iterations: 23809\ncpu: 29329.556050232994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29444.72479415256,
            "unit": "ns/iter",
            "extra": "iterations: 23804\ncpu: 29442.11477062681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59306.05279214083,
            "unit": "ns/iter",
            "extra": "iterations: 11801\ncpu: 59300.550800779594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54608.63366336883,
            "unit": "ns/iter",
            "extra": "iterations: 12827\ncpu: 54603.69533016288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21418.70538468493,
            "unit": "ns/iter",
            "extra": "iterations: 32741\ncpu: 21418.58526007134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109659.64170704212,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109652.02438643259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87302.88266900473,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 87296.83868549298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88112.19526029869,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 88101.19752930834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87403.1769557621,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 87398.67533116607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131726.6027011926,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131717.93284562053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507907.36271680857,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 507861.2716762957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 416415.9177101667,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 416412.6416219437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 430535.8986486443,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430499.3857493827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 419499.0852852584,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419451.35135135875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279444.0671463123,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 279412.4700239858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 414839.43179122655,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414793.29774614633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21806.89270466288,
            "unit": "ns/iter",
            "extra": "iterations: 32089\ncpu: 21806.104895758977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112045.82553465554,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 112036.96735809525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89636.17246672072,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 89627.64841351128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89095.81843646358,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89092.29691876825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87713.41972361876,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 87702.34924623126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 136035.29837047932,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 136030.06180932742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 514299.75236019614,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 514243.50036310364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423770.8048338506,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423738.73111782514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 421072.18806514924,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 421026.40144665935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 417857.18746268685,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 417853.5522388088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279945.3586565106,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 279929.58816472924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416279.986943637,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 416274.8961424378 ns\nthreads: 1"
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
        "date": 1705956382032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7293.993509339411,
            "unit": "ns/iter",
            "extra": "iterations: 95830\ncpu: 7294.062402170512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53327.098900001605,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53326.469999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98271.38758005215,
            "unit": "ns/iter",
            "extra": "iterations: 8744\ncpu: 98270.51692589205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141954.4366545594,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 141951.45166611674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188069.49783457836,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 188069.4023386747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231773.91893348133,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 231756.6657689199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276277.6170825305,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 276265.7389635317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 319756.0922794029,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 319737.8308823531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 364298.6412085675,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 364281.9974821655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6090.938764855609,
            "unit": "ns/iter",
            "extra": "iterations: 114934\ncpu: 6090.848660970638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4997.47512288948,
            "unit": "ns/iter",
            "extra": "iterations: 140370\ncpu: 4997.319940158157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4984.024593361661,
            "unit": "ns/iter",
            "extra": "iterations: 140973\ncpu: 4983.971398778486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4961.651293357541,
            "unit": "ns/iter",
            "extra": "iterations: 141067\ncpu: 4961.612567078055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7744.388550360746,
            "unit": "ns/iter",
            "extra": "iterations: 90588\ncpu: 7744.244270764337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26871.6592053695,
            "unit": "ns/iter",
            "extra": "iterations: 30379\ncpu: 26871.355212482296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140509.07446114242,
            "unit": "ns/iter",
            "extra": "iterations: 6124\ncpu: 140506.1397779227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109898.60445072902,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 109894.40442500662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110086.90229516727,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 110082.88242082298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108085.96980797958,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 108085.72511369352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196975.0300200183,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 196968.24549699778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1759405.8749998773,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1759384.280303032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1391750.4565868427,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1391701.1976047887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1376828.28974742,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1376783.65527489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1375968.4926035388,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1375908.1360946775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 758455.9975449701,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 758455.2373158764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1337240.9510790387,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1337144.6043165436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36078.46045456696,
            "unit": "ns/iter",
            "extra": "iterations: 22923\ncpu: 36076.569384460905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176316.37651159722,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 176308.03443328507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136910.39423841843,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 136903.39010027074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135120.24198112317,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 135112.9874213839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136551.1103689738,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 136542.68447837167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 215026.85196223747,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 215014.82861400952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1796345.9961388377,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796233.9768339733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1439542.2673879543,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1439542.9675425005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1445094.3660436661,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1445064.6417445485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1429607.3087558108,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1429551.9201228851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 792089.7621483387,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 792068.115942029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1384457.9895987778,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1384407.2808320944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6485945.951388159,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6485563.8888888415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2948299.466666752,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2948149.206349198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29689.937572212617,
            "unit": "ns/iter",
            "extra": "iterations: 27696\ncpu: 29689.32697862498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150289.12373650295,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 150286.68525618644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114220.39717822416,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 114220.41794223303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111808.7480925906,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 111805.36661062927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 112405.87609921378,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112403.39939624582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187286.29820774827,
            "unit": "ns/iter",
            "extra": "iterations: 4631\ncpu: 187274.0012956164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1778287.2385494832,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1778228.6259541968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1397832.3263472703,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1397773.5029940135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1388457.5982142708,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1388412.2023809562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1376538.6159527656,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1376474.8892171371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767162.0518945573,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 767130.06589786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343245.6349205251,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1343221.645021647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2911.540124714338,
            "unit": "ns/iter",
            "extra": "iterations: 240550\ncpu: 2911.5659945957113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18742.4863975499,
            "unit": "ns/iter",
            "extra": "iterations: 39809\ncpu: 18741.99804064409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14490.568141371174,
            "unit": "ns/iter",
            "extra": "iterations: 48326\ncpu: 14490.061250672536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14069.203993978828,
            "unit": "ns/iter",
            "extra": "iterations: 49825\ncpu: 14068.262920220746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11030.77449664474,
            "unit": "ns/iter",
            "extra": "iterations: 63325\ncpu: 11030.136596920656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65831.25629878258,
            "unit": "ns/iter",
            "extra": "iterations: 10121\ncpu: 65827.4182393045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123738.55228119908,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 123732.02556364231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30093.890249666216,
            "unit": "ns/iter",
            "extra": "iterations: 23271\ncpu: 30092.613123630406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29978.66930148707,
            "unit": "ns/iter",
            "extra": "iterations: 23278\ncpu: 29976.58303977997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30243.242004402662,
            "unit": "ns/iter",
            "extra": "iterations: 23169\ncpu: 30243.174068798955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59478.448847692365,
            "unit": "ns/iter",
            "extra": "iterations: 11759\ncpu: 59478.067862913435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55902.77965830922,
            "unit": "ns/iter",
            "extra": "iterations: 12526\ncpu: 55902.57065304161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21875.12589579063,
            "unit": "ns/iter",
            "extra": "iterations: 31955\ncpu: 21874.654983570934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112285.33995831347,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 112284.46866484915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89345.39627694002,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 89342.07573632445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88675.36584747754,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 88672.32074993609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88635.63346814367,
            "unit": "ns/iter",
            "extra": "iterations: 7912\ncpu: 88633.48078867633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129192.53612448479,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129190.6076324583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521446.2752976413,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 521439.7321428614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441512.99429654586,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 441504.37262357393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 434404.3954066181,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434393.79267535376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427491.31521078263,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427473.0604764801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273658.15164578566,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 273654.19278997194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424940.33718108915,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 424908.80923450977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22072.135572923642,
            "unit": "ns/iter",
            "extra": "iterations: 31732\ncpu: 22070.58489852511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114584.33683348034,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 114580.67268252697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91082.37127230181,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 91080.96106263669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91113.57865902403,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 91109.39212105428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90412.31737612517,
            "unit": "ns/iter",
            "extra": "iterations: 7729\ncpu: 90407.18074783214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132915.45280515496,
            "unit": "ns/iter",
            "extra": "iterations: 5276\ncpu: 132909.21152388133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 526667.5591559872,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 526644.3858327038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 436268.72469130997,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 436250.18518518656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429189.45738815825,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429170.5702023338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427388.1984126435,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427367.58241758076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284300.6841892457,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 284287.545491307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426911.57727553236,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 426891.5088576664 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}