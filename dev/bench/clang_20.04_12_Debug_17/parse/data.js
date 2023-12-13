window.BENCHMARK_DATA = {
  "lastUpdate": 1702489579845,
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
      }
    ]
  }
}