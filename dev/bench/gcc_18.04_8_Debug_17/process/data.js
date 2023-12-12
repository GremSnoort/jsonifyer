window.BENCHMARK_DATA = {
  "lastUpdate": 1702409106416,
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409105509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16750.606504222877,
            "unit": "ns/iter",
            "extra": "iterations: 41327\ncpu: 16750.134294770975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160032.77445447913,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 160020.09029345374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301035.08019356616,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 301025.4407189769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442233.4588414613,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 442203.81097560993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 586233.808026773,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 586199.0635451504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 584071.8479999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584039.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 697129.4521477028,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 697099.0203466464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 818470.3459174747,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 818417.1202809479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 924972.9215491371,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 924938.5302879844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13454.652336699757,
            "unit": "ns/iter",
            "extra": "iterations: 52082\ncpu: 13454.237548481238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10991.058431083693,
            "unit": "ns/iter",
            "extra": "iterations: 63853\ncpu: 10990.6864203718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10984.360112500688,
            "unit": "ns/iter",
            "extra": "iterations: 63644\ncpu: 10983.657532524661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11060.78395208082,
            "unit": "ns/iter",
            "extra": "iterations: 63273\ncpu: 11060.126752327204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19033.29093270597,
            "unit": "ns/iter",
            "extra": "iterations: 36957\ncpu: 19032.232053467564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 67761.82912772601,
            "unit": "ns/iter",
            "extra": "iterations: 12840\ncpu: 67758.40342679132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 358119.2471863206,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 358100.58357649023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287753.479865776,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 287739.4295302018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286852.65317726374,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286839.46488294296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287965.0110701188,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 287951.15732975514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601879.6239999916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601835.6999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4908662.407407213,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4908362.962962956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3985958.296137331,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3985799.141630914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3954851.081196439,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3954659.829059819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3969034.7051281934,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3969000.854700851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2324875.9070352046,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2324821.859296485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3866823.6025103657,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3866679.9163179896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15332569.357142996,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15331457.142857172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6555163.120000316,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6555058.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18844978.403509676,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18843828.07017547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 74361.48020743552,
            "unit": "ns/iter",
            "extra": "iterations: 11570\ncpu: 74358.02074330165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 390153.0855513467,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 390135.5513307989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 322227.05301646254,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 322212.3583180975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313172.18412348116,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 313156.8540977574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308976.0360230565,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 308957.4567723345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 594606.0069999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594579.5999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4993143.2956987135,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 4992883.333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4022575.350649222,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4022424.242424253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4027885.160173091,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4027705.1948051844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4014473.2813850627,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4014294.805194799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2379802.5999999833,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2379684.61538462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3914983.945378242,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3914697.899159687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15685933.088235514,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15685722.058823531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6709326.910000186,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6709145.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66387.67370545707,
            "unit": "ns/iter",
            "extra": "iterations: 12881\ncpu: 66387.26806924962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347400.011313137,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 347369.0909090904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280988.1140895778,
            "unit": "ns/iter",
            "extra": "iterations: 3059\ncpu: 280986.1065707739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 278146.021682852,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 278144.1100323637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 276883.15726715885,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 276881.3728649698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 568989.3240000288,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568977.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4954228.253968277,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4954134.920634928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4000494.4230769756,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4000442.3076923145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3994289.922746954,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3994239.055793981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3979260.1880343715,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3979168.376068372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2322955.2344139875,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2322941.396508713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3890916.7257383494,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3890900.421940911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6607.997064192781,
            "unit": "ns/iter",
            "extra": "iterations: 106274\ncpu: 6607.922916235362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40160.745667003,
            "unit": "ns/iter",
            "extra": "iterations: 17886\ncpu: 40159.76741585596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33065.78593676145,
            "unit": "ns/iter",
            "extra": "iterations: 21190\ncpu: 33064.044360547356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31862.6782814774,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 31861.08746214962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25234.737885144186,
            "unit": "ns/iter",
            "extra": "iterations: 27652\ncpu: 25233.006654129786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 190106.45600653967,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 190098.63797330196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 324990.81148680346,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324967.5775822143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 79809.15342528654,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 79808.35518066828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79431.93810226013,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 79426.56161432936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 79241.35846920242,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 79236.2205615942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 164586.9588815702,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 164579.60526315757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 154849.29579646577,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 154843.65044247775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46564.177855908856,
            "unit": "ns/iter",
            "extra": "iterations: 15074\ncpu: 46560.402016717766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 229415.5573716957,
            "unit": "ns/iter",
            "extra": "iterations: 3059\ncpu: 229411.89931349907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186100.75845539282,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186092.8628495354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193299.28803905015,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 193294.95524816806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186564.99972943336,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 186559.36147186114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 334793.5809386864,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 334790.1340996185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1378057.613412182,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1378003.9447731588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1143961.6737357473,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1143964.4371941339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1142194.5609756252,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1142195.7723577062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1138457.409090947,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1138278.5714285767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 732829.2510416409,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 732808.8541666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1132092.1116504904,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1132056.310679615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47335.15885134991,
            "unit": "ns/iter",
            "extra": "iterations: 14800\ncpu: 47334.44594594625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231472.90683845684,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 231460.9844730768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188837.7176438812,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 188835.93623345296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189610.29163237894,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 189606.47462277184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 190124.16943158893,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 190122.4367691084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335853.6855496904,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 335846.2794047033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1374505.339215687,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1374474.3137254943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1140065.8224756247,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1140035.9934853415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1137617.6006493764,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1137584.577922082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1135701.8006482448,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135665.8022690576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728007.5020790135,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 727982.3284823362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1131161.8284789443,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1131124.4336569596 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}