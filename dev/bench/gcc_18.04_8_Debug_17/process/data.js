window.BENCHMARK_DATA = {
  "lastUpdate": 1702398843031,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398841991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16502.897761916956,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 16502.545317042044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 155032.2728440345,
            "unit": "ns/iter",
            "extra": "iterations: 5450\ncpu: 155028.0550458716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 296192.23830509634,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 296188.5084745763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 432670.6991017981,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 432665.9181636724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 577528.7856673392,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 577504.0762656145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576200.5049999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576175.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 688553.0252600043,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 688544.6508172365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 799796.044905008,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 799765.025906735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 912526.6453831272,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 912515.8153241645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13141.503742180694,
            "unit": "ns/iter",
            "extra": "iterations: 53712\ncpu: 13141.242180518318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11000.196351408436,
            "unit": "ns/iter",
            "extra": "iterations: 63641\ncpu: 11000.152417466725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10904.173993636527,
            "unit": "ns/iter",
            "extra": "iterations: 64738\ncpu: 10903.949766752145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11081.014235890523,
            "unit": "ns/iter",
            "extra": "iterations: 59638\ncpu: 11080.740467487156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18317.971157126958,
            "unit": "ns/iter",
            "extra": "iterations: 38103\ncpu: 18317.384457916676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70930.77311203397,
            "unit": "ns/iter",
            "extra": "iterations: 12050\ncpu: 70929.97510373435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364623.1359724695,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 364611.96213425143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 291970.49196581147,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 291960.47863247857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 293711.69775357924,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 293700.0340367601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 291879.06771545217,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 291874.487004104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 587021.601999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586996.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4842719.661458143,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4842608.333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3954433.055084638,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954307.203389832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3907883.90794977,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3907827.615062765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3931727.5211863616,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3931621.6101695006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2263206.3527979674,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2263146.4720194633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3839859.5432099756,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839758.024691362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15057184.492957916,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15056601.408450715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6532311.299999947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6532208.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18772864.368420534,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18772294.736842137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76244.05925860045,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 76242.64836927473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 395123.00091911166,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 395107.12316176586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 318040.6864124426,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 318035.6534616802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 315775.88520970196,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 315772.0750551855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 310421.7123685039,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 310411.96953209967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571633.0980000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571622.9000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4895902.636842134,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4895681.052631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4140345.9698277004,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4140215.517241373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3954720.8983049323,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954532.203389842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3966112.2425533244,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3966047.2340425234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2305155.7376238173,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2305099.25742575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3863932.4813278173,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3863826.970954341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15352194.04285694,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15350764.285714293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6672700.080000027,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6672399.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68140.84023478192,
            "unit": "ns/iter",
            "extra": "iterations: 12437\ncpu: 68140.00160810434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358098.0711610466,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 358077.3616312951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 285626.21773923776,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 285621.0070023362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 283897.33167660574,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 283889.99337309494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 283830.3516738492,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 283824.89227709675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544006.0810000205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543987.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4871418.9322917415,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4871399.479166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3948185.5423730873,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3948052.96610171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3924377.708860643,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3924243.459915615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3929070.995798299,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3928922.6890756246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2242390.3686747355,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2242222.650602395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3814439.6188525367,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3814336.0655737687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6325.094022275097,
            "unit": "ns/iter",
            "extra": "iterations: 110527\ncpu: 6324.700751852443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40888.43726701055,
            "unit": "ns/iter",
            "extra": "iterations: 17168\ncpu: 40887.296132339485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31856.605640860475,
            "unit": "ns/iter",
            "extra": "iterations: 21947\ncpu: 31855.520116644526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33566.6600607791,
            "unit": "ns/iter",
            "extra": "iterations: 23363\ncpu: 33565.77922355872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25044.243438038306,
            "unit": "ns/iter",
            "extra": "iterations: 27888\ncpu: 25042.93244406183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 185693.30869450932,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 185688.96570061112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 318646.8323462385,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 318626.78815489827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77488.12735375557,
            "unit": "ns/iter",
            "extra": "iterations: 8975\ncpu: 77485.6490250707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78008.83760107637,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 78004.51482479829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77632.24883875545,
            "unit": "ns/iter",
            "extra": "iterations: 9042\ncpu: 77627.74828577662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162214.1558652711,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 162205.4587688741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 152040.78431799152,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152034.38314509118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49414.0779505307,
            "unit": "ns/iter",
            "extra": "iterations: 14150\ncpu: 49412.92579505299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 244046.6035335857,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 244038.65724381836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 197260.81068918438,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 197255.80872011057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 195361.6230704476,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 195352.7364580379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 196492.89916201294,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 196487.48603351903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343574.12844486244,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 343556.2992125986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1369920.785992232,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1369880.7392996014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1154942.2339374034,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1154884.843492597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1141642.7786885186,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1141590.4918032854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1143680.000000046,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1143629.8045602501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 726526.960580921,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 726495.5394190826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1135434.2504064816,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1135399.9999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50031.98139999653,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50028.02000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 243088.9152777856,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 243077.8472222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 198077.23667800517,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 198070.18140589766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197240.05458636768,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 197235.28418682903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198182.7646057828,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 198177.93533749357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342478.3984336597,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 342474.15565345215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1366879.311890829,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1366841.3255360473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1150416.084019814,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1150351.0708402067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1143178.455429559,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1143136.628849286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1143467.7063621394,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1143393.311582379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 723426.2639751771,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 723405.7971014584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1131597.1915584777,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1131558.4415584435 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}