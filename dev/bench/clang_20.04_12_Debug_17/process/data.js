window.BENCHMARK_DATA = {
  "lastUpdate": 1702394264868,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 20.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394251946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.723512455328,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 16140.509948208384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152853.72397618642,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 152838.42684466898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288808.36475684703,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288808.9273817456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424126.99363061524,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 424114.4536991672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565107.4987113116,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 565084.5360824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563851.3469999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672845.0460189866,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 672833.6011687363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785108.6677937497,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 785072.6120033807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 891580.4322766114,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 891573.1988472615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12801.503329746367,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 12800.83562918499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10508.307138562006,
            "unit": "ns/iter",
            "extra": "iterations: 66540\ncpu: 10507.287345957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10352.462352888819,
            "unit": "ns/iter",
            "extra": "iterations: 67721\ncpu: 10352.152212755289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10483.628479496858,
            "unit": "ns/iter",
            "extra": "iterations: 66820\ncpu: 10483.757856929076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17399.429256297753,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17399.423717025198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60841.63179999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.14999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321106.98155816115,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 321104.3658261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254342.3383054985,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 254333.17422434402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252529.9283599574,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 252525.9029011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 251977.01360944664,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 251978.01775147955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582137.6220735168,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582119.4648829426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4701161.136363616,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4701071.717171727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841319.045643153,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3841256.016597513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3813800.5081971074,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3813692.213114756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3789913.2032524035,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789863.8211382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2210520.6261904812,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210480.9523809487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3716386.9760001944,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3716266.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14598604.31506893,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597968.493150687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6669422.569999597,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6669422.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18690200.403507892,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18689957.894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69580.36376244301,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 69575.25697503658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 350848.11056710785,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 350812.2807017537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 285460.2443181617,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 285442.8141711223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284093.9694149189,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 284073.96941489406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286302.74824235647,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 286293.6391027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 601987.6866294967,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601983.0779944287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4793847.497435658,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4793276.923076917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3880977.381742482,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880719.087136927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3846689.148760151,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3846520.247933882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3877206.680498097,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877026.141078843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241443.2674699435,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241321.6867469912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3771003.0323886517,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770704.4534413037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14959067.041666508,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14957941.666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593858.319999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593185.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59724.28630000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59723.49000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 333091.7420603969,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 333045.7397366385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261437.22865014424,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261423.87511478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255900.48356245863,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255874.08846383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251220.45228952097,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251207.3264401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583371.9295302009,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583332.684563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753263.055837646,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4753045.685279175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3824628.8934423598,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824415.5737705166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3822645.963265243,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3822355.918367342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3790542.48780469,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790217.8861788516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2219783.3875596635,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2219662.9186602887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3718077.03200011,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717589.199999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5808.9133157705055,
            "unit": "ns/iter",
            "extra": "iterations: 120714\ncpu: 5808.87883758307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39541.15027861208,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 39537.8904710982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31481.747773281604,
            "unit": "ns/iter",
            "extra": "iterations: 22230\ncpu: 31479.23076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31114.66646606295,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 31110.162059923467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23369.119492035687,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23367.48550096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155532.20084427533,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155524.0835369922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316104.8209982895,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 316073.66609294433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78329.76305534081,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78324.45162008665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77744.03398111016,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 77738.4453081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.07903743042,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77379.63351363335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162643.4323570422,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162627.21989772233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149991.61383593702,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149979.545941315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46481.51439755801,
            "unit": "ns/iter",
            "extra": "iterations: 15072\ncpu: 46475.79617834353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234674.57133244182,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 234653.9703903106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 191961.68484514806,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191942.75143874993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 189441.40286408135,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189426.15509321797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 190292.73913041013,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 190261.90217391265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325613.1610643923,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 325581.9794584522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1352055.1389961473,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1351951.7374517361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127297.9515347588,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1127276.413570263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120425.1554486742,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120304.1666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123602.0724637175,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1123504.1867954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 744870.0920372951,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 742865.4601861325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1119335.0911999005,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119199.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47415.46989909639,
            "unit": "ns/iter",
            "extra": "iterations: 14767\ncpu: 47411.64082074966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236698.65111562773,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 236672.31237322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194780.9724770572,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194767.58409786064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193734.3908713722,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193707.96680497855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194352.93325948907,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194332.67792855046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323311.77536901046,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323255.76568266196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349004.7423077228,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1348993.0769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1132623.852512179,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132589.951377633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1122118.2536116196,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122024.398073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122571.0658107018,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122472.712680566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728517.9323621088,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728415.9209157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1122408.1565495192,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1122317.0926517688 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}