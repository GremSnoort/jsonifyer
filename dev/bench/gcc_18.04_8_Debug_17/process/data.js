window.BENCHMARK_DATA = {
  "lastUpdate": 1705772030250,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412558583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15638.550009570867,
            "unit": "ns/iter",
            "extra": "iterations: 41792\ncpu: 15638.064701378255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125152.86174298738,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 125143.8552437223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235532.12544026074,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 235518.12516933086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344041.4753577031,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 343987.51987281395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454709.5478806837,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 454676.50444793317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567730.1459143914,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 567695.3307392999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 547410.345000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546214.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 631836.6209999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631819.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716923.1828703652,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 716891.9753086425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12701.431854013508,
            "unit": "ns/iter",
            "extra": "iterations: 55183\ncpu: 12700.59438595219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10706.665963303416,
            "unit": "ns/iter",
            "extra": "iterations: 65400\ncpu: 10705.784403669724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10650.558064810753,
            "unit": "ns/iter",
            "extra": "iterations: 65668\ncpu: 10650.172077724315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10631.887175745065,
            "unit": "ns/iter",
            "extra": "iterations: 65766\ncpu: 10631.458504394368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17914.201614963815,
            "unit": "ns/iter",
            "extra": "iterations: 39134\ncpu: 17914.061941023152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56456.032300002335,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56452.90999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299494.4414225959,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 299479.2887029292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235455.19895575996,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 235441.1651552625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230615.5814705093,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230599.91920280087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230874.1988667107,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 230858.74257960005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 606980.6010781842,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 606954.7843665789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3975545.5531915086,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3975283.829787232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3207111.055363348,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3206899.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3166362.1262798943,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166249.8293515393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3182955.7030715686,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182835.494880548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1836861.992063384,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1836755.1587301563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3098243.337792671,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3098039.1304347874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11658824.582417475,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11658424.175824163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5182470.070000136,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5182005.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14674277.791666808,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14673583.333333302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61083.60719999837,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61080.70000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321786.15378872294,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 321770.73534901056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258136.86291051842,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 258120.48809882416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252701.14361388283,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 252685.4620364917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252605.80111961704,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 252592.75191514433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 587947.6240703285,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 587918.5936443555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4011571.87068974,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4011306.4655172336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3233292.3693379182,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3233074.564459922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3201164.616438344,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3200887.671232872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3216214.2896550386,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3216053.4482758716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1854499.881526102,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1854378.3132530171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3130599.127516788,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130471.812080527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11897044.27777719,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11896365.555555534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5122734.799999762,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5122546.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54062.52100000301,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54058.78000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 288402.2908726252,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 288383.0825810744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226747.66394090824,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 226723.89870746603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223221.61556420478,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 223214.03372243833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222562.9545099995,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 222544.3202495465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553050.028553283,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 553029.6319796977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946163.2754238453,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946040.2542372965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3207791.9896906973,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3207610.3092783466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3174663.2687075017,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3174544.55782315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3182943.856164419,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3182780.4794520536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1828300.4980237372,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1828202.7667984292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3090558.666666728,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3090350.666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6208.460665879695,
            "unit": "ns/iter",
            "extra": "iterations: 112663\ncpu: 6208.143756157733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35129.339984351944,
            "unit": "ns/iter",
            "extra": "iterations: 20448\ncpu: 35128.1005477308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29074.880921792508,
            "unit": "ns/iter",
            "extra": "iterations: 24908\ncpu: 29073.430223221545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28590.76391744475,
            "unit": "ns/iter",
            "extra": "iterations: 25292\ncpu: 28589.518424798203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22181.05601521713,
            "unit": "ns/iter",
            "extra": "iterations: 31545\ncpu: 22179.889047392786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157112.61828803053,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 157104.04403504822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264215.2535849215,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 264202.3018867958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66331.02978160323,
            "unit": "ns/iter",
            "extra": "iterations: 10577\ncpu: 66328.02306892388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65982.23427168284,
            "unit": "ns/iter",
            "extra": "iterations: 10586\ncpu: 65978.57547704506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66498.66186169317,
            "unit": "ns/iter",
            "extra": "iterations: 10614\ncpu: 66312.2008667805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126108.4212039578,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 126105.66037735928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123064.1469798635,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 123057.9194630871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41536.56046705509,
            "unit": "ns/iter",
            "extra": "iterations: 16786\ncpu: 41535.19599666364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197779.3412496531,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 197766.94939213997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160787.70284533754,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 160779.27948600496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161911.55959269704,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 161904.67484378492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159958.3732813882,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 159951.12282309803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297679.95406210766,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 297665.54657592427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1131896.8756058444,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1131812.9240710866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 944643.9892037923,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944608.6369770617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 934269.7352150956,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 934245.2956989165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 936312.6599732805,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936239.7590361356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 597717.9063032599,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 597695.4003407223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 930406.6671087058,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 930336.3395225463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41620.2457410831,
            "unit": "ns/iter",
            "extra": "iterations: 16847\ncpu: 41618.11598504184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203863.3413783043,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 203851.70107589566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165187.62883435714,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 165176.54554034644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162801.86547397965,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 162791.61245352967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163363.30878583813,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 163357.4458168234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297620.3568394151,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 297609.64316057763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120374.0739549235,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120330.5466237995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 941157.1093117906,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 941123.2118758406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 930705.933598912,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930663.0810092919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 931256.7543160985,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 931214.3426294749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 600169.0795551848,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 600148.4174508083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 923920.4459102332,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 923886.8073878628 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416024849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15829.511929659247,
            "unit": "ns/iter",
            "extra": "iterations: 44469\ncpu: 15828.352335334728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128096.94967702618,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 128089.42466576536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240845.79822862888,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 240814.44782729028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351434.7686354541,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 351397.9633401222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 461906.3498666643,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 461874.02666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574864.5871313743,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 574802.2117962467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555512.6579999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555516.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 640862.7430000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640803.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 749161.3046566924,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 749108.2872928187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12681.414139949578,
            "unit": "ns/iter",
            "extra": "iterations: 55177\ncpu: 12680.435688783375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10625.475715498367,
            "unit": "ns/iter",
            "extra": "iterations: 65968\ncpu: 10624.42699490661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10744.123406572071,
            "unit": "ns/iter",
            "extra": "iterations: 66131\ncpu: 10744.17746593883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10805.157845868102,
            "unit": "ns/iter",
            "extra": "iterations: 65697\ncpu: 10803.654656985867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17773.52381558296,
            "unit": "ns/iter",
            "extra": "iterations: 39302\ncpu: 17771.894560073317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55292.26720000224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55286.259999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299497.08885802724,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 299472.4054147862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232315.1635168445,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 232286.6885784722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229858.93660254273,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 229843.13194256325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228594.93442183887,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 228576.49892933632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595483.2498352067,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 595442.386288727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3989747.3931623064,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3989451.709401708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3215305.768965444,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3214926.5517241354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3189540.228373685,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3189308.6505190297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3210147.7395833908,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3209813.888888894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1875699.8323231693,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1875555.5555555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3132386.882154846,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3132140.740740746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11941819.777777912,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11941072.22222224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5293584.589999796,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5293102.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15118588.370967247,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 15117532.258064536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59950.18369999912,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59939.93999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322321.87100413826,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 322302.9710417446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254166.2499259807,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 254138.61415457388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260150.68114253596,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 260138.50189449068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253741.16671566304,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 253725.66892090562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 576601.4418758077,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 576525.6935270771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4081987.643478096,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4081560.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3284935.632142906,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3284757.4999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3261559.1951220846,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3261440.7665505246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3252922.566433638,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252669.580419589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1895552.2373225,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1895437.1196754647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3156956.908163252,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156922.108843533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12124005.272727087,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12123463.636363609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5054568.840000115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5054337.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53092.4395999989,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53092.84999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 291732.1502379221,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 291696.97484704107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226224.89583333686,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 226219.3829113923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223407.96381149607,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 223394.66284821558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222104.83545620172,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 222099.0902001555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537473.8266253952,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 537433.1269349821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3986144.021459247,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3985862.6609441983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3223261.142361069,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3223130.9027777785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3202279.8788925777,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3202073.7024221285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3319790.579860932,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3319524.3055555373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1934383.0549683578,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1934284.3551797124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3132140.538720647,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3131880.4713804736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6211.551453565214,
            "unit": "ns/iter",
            "extra": "iterations: 113170\ncpu: 6211.011752231111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35202.19636509388,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 35199.709607970566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28061.503521973973,
            "unit": "ns/iter",
            "extra": "iterations: 24986\ncpu: 28061.21027775556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27950.02625326647,
            "unit": "ns/iter",
            "extra": "iterations: 25254\ncpu: 27948.325017818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22342.71083918404,
            "unit": "ns/iter",
            "extra": "iterations: 31626\ncpu: 22342.78125592851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154516.4395410431,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 154514.2100617835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266234.2774390169,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 266234.9847560944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67057.89195666682,
            "unit": "ns/iter",
            "extra": "iterations: 10431\ncpu: 67055.72811810981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66438.0240975276,
            "unit": "ns/iter",
            "extra": "iterations: 10582\ncpu: 66434.62483462406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67245.9331781603,
            "unit": "ns/iter",
            "extra": "iterations: 10311\ncpu: 67246.33886140995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 128660.7602115232,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 128655.30634573336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125273.86058210132,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 125274.631692419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41376.34321031367,
            "unit": "ns/iter",
            "extra": "iterations: 16908\ncpu: 41374.2666193515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199508.11814824614,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 199506.6742402751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163580.6583217517,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 163581.59480760354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162958.0825367122,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 162958.9647936586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162118.7931273157,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 162119.71863468798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297502.1868921832,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 297486.04651162605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1133411.2967741448,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1133355.6451612897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 949795.7821380253,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 949763.3288227462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936007.6863271145,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 936013.5388739918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 945891.7861975653,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 945897.6995940459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609910.8456843622,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609879.2502179653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 947479.7967914097,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 947459.8930481193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41765.76254320181,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 41763.818376832474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203906.82286212544,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 203908.4060500272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165585.93795707135,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 165579.6650153312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163241.80345875182,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163236.9946249153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164722.50756501837,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 164713.94799054504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297251.0145610171,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 297252.71948607935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1118843.7363344452,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1118772.347266886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 948090.4013422705,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 948095.7046979896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 934988.3613333532,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 934958.5333333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 939088.8373333534,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 939005.9999999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 606934.7994813841,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 606938.2022471844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 930188.6648936162,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 930122.6063829735 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418366805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15404.07754893833,
            "unit": "ns/iter",
            "extra": "iterations: 45107\ncpu: 15403.440707650698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124913.01315400672,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 124910.07981081879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234994.0674763887,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 234991.0391363023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342686.1379721746,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 342660.11928429425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451878.79738902993,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 451860.9921671018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 562479.6300129236,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 562466.0413971542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539239.2349999682,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539227.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 628421.0339999845,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628399.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714140.4996150886,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 714091.070053888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12544.571877411881,
            "unit": "ns/iter",
            "extra": "iterations: 55699\ncpu: 12543.661466094543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10617.503167187615,
            "unit": "ns/iter",
            "extra": "iterations: 66147\ncpu: 10616.682540402426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10586.072589185134,
            "unit": "ns/iter",
            "extra": "iterations: 66098\ncpu: 10585.309691669921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10579.674298486336,
            "unit": "ns/iter",
            "extra": "iterations: 66214\ncpu: 10579.221916815155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17558.117479156386,
            "unit": "ns/iter",
            "extra": "iterations: 39939\ncpu: 17556.966874483573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56668.71590000255,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56667.12 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 305080.4426403163,
            "unit": "ns/iter",
            "extra": "iterations: 2833\ncpu: 305064.59583480406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237983.1365026437,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 237975.1181540172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235479.0132486799,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 235478.05685895673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234822.53099287415,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 234816.0724081185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599193.2427248657,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 599171.2301587302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3938568.1144068483,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3938442.372881363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3189731.579310311,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3189602.0689655114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3177859.6609588913,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177838.356164384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3174733.999999968,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3174623.5494880504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1849846.8340000045,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1849836.7999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3090052.3733333787,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3089984.3333333386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11783261.955555543,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11782933.33333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5251415.459999862,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5251324.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14830826.416666158,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14830113.888888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60609.63819999756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60608.00999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324634.94641510723,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 324632.8301886792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259158.84124584595,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 259154.6114302991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259082.89237263316,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 259076.51492312344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256121.2128993724,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256116.3630934599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 568653.7051532698,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 568634.3770384853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3991795.439655095,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3991751.724137912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3221282.128027562,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3221158.4775086385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3199645.298969063,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3199544.329896919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3212843.2482758053,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3209528.965517229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867814.2064777096,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1867695.951417006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3112970.30100339,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3112840.802675562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12017500.831460526,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12016969.66292132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5201044.670000101,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5200894.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54198.801699999414,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54196.909999999574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297193.2364184964,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 297177.69953051605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230171.42830339592,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 230164.21870812128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226848.27748413663,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 226835.49154334003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225373.12509875858,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 225362.5230445075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534825.9558823375,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 534828.7377450995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3957357.5787234735,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3957199.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3187697.1821306143,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3187666.666666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3172834.2662116527,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3172775.7679180987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3165276.537414905,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3165240.136054418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1839585.337944617,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1839553.7549407121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3093254.463576064,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3093151.324503317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6243.776448261877,
            "unit": "ns/iter",
            "extra": "iterations: 112238\ncpu: 6243.82740248397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35359.47855984952,
            "unit": "ns/iter",
            "extra": "iterations: 20359\ncpu: 35358.598162974595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29293.256028109372,
            "unit": "ns/iter",
            "extra": "iterations: 24759\ncpu: 29293.12573205697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28740.350028713623,
            "unit": "ns/iter",
            "extra": "iterations: 24378\ncpu: 28739.371564525398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22117.18048010083,
            "unit": "ns/iter",
            "extra": "iterations: 31660\ncpu: 22117.321541377336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156341.27761660854,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 156340.30350368205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239043.7296283686,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 239041.52744630075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66009.44991976093,
            "unit": "ns/iter",
            "extra": "iterations: 10593\ncpu: 66007.05182667836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66090.9358223045,
            "unit": "ns/iter",
            "extra": "iterations: 10580\ncpu: 66089.60302457516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66249.45961028665,
            "unit": "ns/iter",
            "extra": "iterations: 10572\ncpu: 66248.58115777484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134004.60230105903,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134003.70086289546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111801.24563650839,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 111800.28823058464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41154.95243981591,
            "unit": "ns/iter",
            "extra": "iterations: 16989\ncpu: 41153.67590794066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197961.50792304162,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 197962.47877758823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160085.5005716915,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 160080.05945574943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159708.94741655697,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 159706.218564243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159060.35299475546,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159056.319744934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 291250.3636363603,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 291232.48540450266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120878.4256000398,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120847.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947412.7347766964,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 947368.335588647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 935192.1780455069,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 935177.9116465913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933341.5000000212,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 933294.1333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 604498.1382886728,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 604468.9714779556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 924448.4934037015,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 924410.6860158321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41601.05233347284,
            "unit": "ns/iter",
            "extra": "iterations: 16949\ncpu: 41598.5426868838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201022.75129682219,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 201012.5360230546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164203.46184456977,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 164193.42228464477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162002.4968713847,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 161999.28157589634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 162975.3402373798,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 162972.25971608152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 291848.5193830561,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 291837.473947477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1122550.479871149,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1122521.4170692374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 938295.6295302386,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938250.335570479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 931181.6111850546,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 931156.7243675098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 932684.9907038279,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 932646.7463479528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 607751.2291666507,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 607724.5659722328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 923419.3337730801,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 923389.7097625356 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420980141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15680.060247396912,
            "unit": "ns/iter",
            "extra": "iterations: 44948\ncpu: 15678.512948295811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126609.36022795289,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 126600.65986802637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238551.2890839249,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 238533.10477235328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346967.11688311753,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 346936.52597402595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 457412.0664206768,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 457379.8629414866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567453.0117646985,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 567438.5620915032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555566.3720000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555559.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 632945.8419999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632906.1999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 723232.7840997627,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 723200.4676539365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12589.057259713516,
            "unit": "ns/iter",
            "extra": "iterations: 55746\ncpu: 12588.429663114859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10637.855493246405,
            "unit": "ns/iter",
            "extra": "iterations: 66336\ncpu: 10637.774360829706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10536.106545887646,
            "unit": "ns/iter",
            "extra": "iterations: 66347\ncpu: 10535.668530604265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10606.281438215943,
            "unit": "ns/iter",
            "extra": "iterations: 65915\ncpu: 10605.816581961617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17783.05779744207,
            "unit": "ns/iter",
            "extra": "iterations: 39327\ncpu: 17782.27426450022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57804.85299999895,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57801.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306378.4224598914,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 306357.6827094472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 239254.6823759047,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 239244.14389291717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 237455.85166666828,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 237443.50000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 236310.34451219664,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 236301.7738359196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601860.7293485466,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 601828.341168569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3988969.429787069,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3988787.6595744723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3188895.0342465,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188842.4657534286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3158235.9047618234,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3158134.353741496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3162976.8156996337,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3162925.93856655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1859375.4495967575,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1859304.6370967792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3094092.474916267,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3094017.056856183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11814091.644444287,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11813375.555555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5145057.390000147,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5145095.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14879699.859154923,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14879073.239436654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59662.71859999778,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59660.93000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330181.1995386539,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 330169.62706651277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259494.3344451122,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 259489.9029714979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260312.1687725651,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 260305.0842358608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258252.14862440442,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 258243.9294258365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577307.4271523203,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 577305.8940397353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3994735.098712463,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3994454.9356223294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3212779.2975777923,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3212768.512110743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3201009.155172438,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200971.7241379083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3209027.876712244,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3208962.3287671143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1878272.224242398,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1878267.6767676834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3129086.5973155494,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128966.1073825415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11967485.022472026,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11967311.235955045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5224842.750000107,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5224514.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53238.87780000405,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53237.9199999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 293906.4694643458,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293904.16240191035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232132.48590786304,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 232128.3739837396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229558.13976482238,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 229554.97060395422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225961.1362556037,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 225958.04066543427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542929.0873907318,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 542909.6754057435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3972098.5085470397,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3972125.213675192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3184674.116040962,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3184488.7372013596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3173527.6326530706,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3173425.850340134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3189639.373287558,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3189621.232876716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1861345.4331337365,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1861290.2195608662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3109923.267558609,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109937.4581939867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6227.22405538166,
            "unit": "ns/iter",
            "extra": "iterations: 111950\ncpu: 6227.042429656062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35281.476835531765,
            "unit": "ns/iter",
            "extra": "iterations: 19858\ncpu: 35281.64971296204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28157.739616419745,
            "unit": "ns/iter",
            "extra": "iterations: 24871\ncpu: 28156.423143420125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28712.13278843287,
            "unit": "ns/iter",
            "extra": "iterations: 24347\ncpu: 28712.231486425426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22125.655503904825,
            "unit": "ns/iter",
            "extra": "iterations: 31623\ncpu: 22124.760459159676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157591.25089927387,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157589.8830935251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264711.45041634294,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 264698.1453444349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65937.87923569347,
            "unit": "ns/iter",
            "extra": "iterations: 10624\ncpu: 65937.33998493965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66252.13100066481,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 66250.10845986896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66118.66830512988,
            "unit": "ns/iter",
            "extra": "iterations: 10579\ncpu: 66115.71982228973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133889.06568646865,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133882.68092419492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124973.02456390703,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 124965.1655393379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41576.98580844252,
            "unit": "ns/iter",
            "extra": "iterations: 16841\ncpu: 41574.98960869256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200224.98112128265,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 200213.67276887715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163191.85657741508,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 163184.74970896431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162959.5849627478,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 162954.46927374398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160914.6469364122,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 160907.49132948174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297101.7856840393,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 297094.4938585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1142461.086178868,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1142418.6991870033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 950417.9125682978,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 950411.7486338858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 934821.6561643188,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 934753.5616438356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 941594.8458444622,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 941590.8847184958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612638.3513985872,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 612612.3251748253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 932363.8974700626,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932341.5446071848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42052.28536277973,
            "unit": "ns/iter",
            "extra": "iterations: 16663\ncpu: 42052.00144031739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205617.79753882263,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 205577.38060357544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166404.4645330799,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 166396.87126821125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166199.999287069,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166194.41539923946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 165708.52188312318,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 165700.5677785665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297462.9090909023,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 297443.457943927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1126625.1368760052,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1126584.7020934036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 945215.045946015,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 945152.7027026928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 935125.2152406594,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935101.203208558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936991.9465241116,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936976.6042780686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611025.0915431636,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 610986.0505667067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 931162.5312084422,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 931125.8964143399 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421383161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15542.61043272935,
            "unit": "ns/iter",
            "extra": "iterations: 44878\ncpu: 15541.746512767948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125346.3893333362,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 125341.95555555559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235859.4398914594,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 235851.31614654005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343854.1753686851,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 343850.17935432435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452118.2945776774,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 452088.11261730944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564766.8509397147,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 564739.9870382372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539735.089999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539708.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624834.7590000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624820.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 711545.1577726081,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 711495.5143078115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12566.89431814137,
            "unit": "ns/iter",
            "extra": "iterations: 55686\ncpu: 12566.632546780174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10546.760794577625,
            "unit": "ns/iter",
            "extra": "iterations: 66098\ncpu: 10546.311537414123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10584.86919490477,
            "unit": "ns/iter",
            "extra": "iterations: 65632\ncpu: 10584.644685519259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10698.244843868926,
            "unit": "ns/iter",
            "extra": "iterations: 65650\ncpu: 10698.132520944422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17653.86273124123,
            "unit": "ns/iter",
            "extra": "iterations: 39623\ncpu: 17652.80266511876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55508.90900000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55508.27000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299386.2697690744,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 299374.9125262423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 239607.82307265306,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 239605.13033832517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235365.6867436707,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 235353.5203520352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 236962.34331669565,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 236959.4841930108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601398.0153538302,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 601378.1041388515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3924598.3571428484,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3924401.260504201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3175908.181506848,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3175820.2054794477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3161380.6360544274,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3161210.8843537313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3173668.5170068196,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3173608.5034013544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1836706.2455445419,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1836567.7227722774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3092393.1866666027,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3092185.666666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11711461.701149043,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 11710444.827586178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5097008.980000054,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096954.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14819579.74999975,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14818105.555555554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59771.741200000855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59767.4099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322315.85044977104,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 322291.0044977513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260547.81278400184,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 260536.2920327179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260597.8849073819,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 260570.05769814682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261203.32525005992,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 261191.60351621776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 569375.3791748593,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 569339.816633923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3983486.931623941,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3983161.538461528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3212622.8310344545,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212486.551724141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3227659.0996565325,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3227468.3848797474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3200555.6245613866,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3200423.508771939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1860648.5943775102,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1860555.8232931732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3109802.073578617,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109633.4448160725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11932408.233333388,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11932169.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5266196.05999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5265908.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52537.84239999959,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52532.360000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 288484.94184873416,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 288472.33613445394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 229264.66541856213,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 229247.79352768106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228453.66453844085,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 228439.7712157474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 229172.55947607983,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 229153.3814488107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534864.9631675844,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 534829.5273173709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3922679.6694915276,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3922527.5423728814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3167062.9593218956,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3166875.5932203424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3158174.0540541187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3158106.7567567504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3159020.4610168613,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158955.5932203517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1828484.893909653,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828426.915520625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3074087.4933774164,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3074003.9735099324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6210.200161951775,
            "unit": "ns/iter",
            "extra": "iterations: 112379\ncpu: 6209.42613833546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35064.79534159849,
            "unit": "ns/iter",
            "extra": "iterations: 19921\ncpu: 35062.15551428116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27162.865667015212,
            "unit": "ns/iter",
            "extra": "iterations: 25809\ncpu: 27160.591266612653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27736.301180946506,
            "unit": "ns/iter",
            "extra": "iterations: 25234\ncpu: 27734.362368233302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22129.94210227008,
            "unit": "ns/iter",
            "extra": "iterations: 31642\ncpu: 22128.282030212908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156100.22328584967,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 156093.321460375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261374.67488790414,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 261366.2182361758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66291.93171889626,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 66288.4710351377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66329.35163274973,
            "unit": "ns/iter",
            "extra": "iterations: 10565\ncpu: 66326.01041173625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66302.43420679016,
            "unit": "ns/iter",
            "extra": "iterations: 10571\ncpu: 66297.67287863084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132880.14980064367,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132870.70438579677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123988.0918096644,
            "unit": "ns/iter",
            "extra": "iterations: 5653\ncpu: 123981.51424022662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41288.57259870309,
            "unit": "ns/iter",
            "extra": "iterations: 16970\ncpu: 41285.63347083067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197935.9541725559,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 197922.85714285666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160986.97635445147,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 160980.28007345946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161354.17355180817,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 161352.38864528175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160945.6123105153,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160929.00780891106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292805.7061036815,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292802.42474916676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1122678.6061093009,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1122578.7781350294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 943879.659029601,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 943811.994609172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 941632.4308725223,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 941562.8187919435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 936150.5595715928,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936097.1887550286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 624018.7512998465,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 623971.2305026066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 929047.1258277679,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 928940.6622516654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41670.753672318104,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 41670.31816830266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201809.03884892745,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 201789.41007194231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164117.5574308516,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 164108.50914205398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163355.18430272854,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 163340.9717355771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164572.10599295827,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 164560.39952996428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 292864.2518828377,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 292835.1464435101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1114355.329617895,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114282.8025477873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 940219.3892617028,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940186.845637591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 931791.0903054819,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 931746.347941568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 930292.8779841168,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 930243.2360742756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 606164.3649000843,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 606098.6967854005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 922548.154150211,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922475.2305665386 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422463291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15585.42487728693,
            "unit": "ns/iter",
            "extra": "iterations: 44820\ncpu: 15585.080321285142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125308.83757772995,
            "unit": "ns/iter",
            "extra": "iterations: 6754\ncpu: 125304.63429079062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235216.86050921702,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 235209.85915492955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342399.8266401568,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 342400.9145129224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449715.7396049743,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 449708.31600831565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559642.1623711537,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559626.546391753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538085.4279999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538071.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 622930.8130000391,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622930.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714763.5975422664,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 714745.0076804913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12544.869149299157,
            "unit": "ns/iter",
            "extra": "iterations: 55613\ncpu: 12544.620862028636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10539.034010740108,
            "unit": "ns/iter",
            "extra": "iterations: 66479\ncpu: 10538.831811549517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10564.076135917068,
            "unit": "ns/iter",
            "extra": "iterations: 66158\ncpu: 10564.052722270919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10516.167133153305,
            "unit": "ns/iter",
            "extra": "iterations: 66097\ncpu: 10516.164122426128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17627.81293424629,
            "unit": "ns/iter",
            "extra": "iterations: 39724\ncpu: 17627.577786728412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55928.48200000162,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55926.93999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300718.94209977065,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 300714.3006627137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 236754.2837763074,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 236751.85492801768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235266.90438138,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 235263.5161201428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235708.6650014007,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 235703.08076602788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 602109.4151069376,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 602104.9465240649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3895417.368201029,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3895332.2175732213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3147817.96598643,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3147742.5170067945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3134983.0305085345,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3134791.864406787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3160567.460207611,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3160476.1245674756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1828733.039603956,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1828692.0792079181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3077505.9966778215,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077354.152823913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11602153.30434789,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11601802.173913056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5082099.219999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5081772.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14690462.888888571,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14689819.444444425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60984.46760000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60984.03999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324139.0041446854,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 324121.81612660165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260938.66666667577,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 260930.32512913906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257992.05660946225,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 257984.2216199927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258963.97675821776,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 258955.6293389677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 576527.8324503431,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 576501.7218543042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3975909.7692308193,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975792.7350427276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206084.3620687877,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3205956.5517241284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3192368.2910958985,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192298.287671253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3192481.9143836517,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192387.328767137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1856693.1217564698,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1856620.7584830427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3116176.923076842,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3116080.6020066943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11831481.488888409,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11830687.777777705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5090079.250000485,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5089788.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53375.08160000084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53372.079999999754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286634.93424565095,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 286624.9666221642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230726.2684762108,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 230720.2364955645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227196.7638668704,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 227187.32171156837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 227237.4480743605,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 227224.83399734276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 540043.9684210519,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 540020.8049535591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3929217.092827208,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929113.080168783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3207994.257627048,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3207797.28813558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3146766.817567591,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146698.986486466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3341428.2203389355,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3341363.0508474493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1837913.6653465193,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1837838.4158415827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3069855.155629194,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3069807.2847681995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6201.129327866355,
            "unit": "ns/iter",
            "extra": "iterations: 113162\ncpu: 6201.036567045477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34126.39760866165,
            "unit": "ns/iter",
            "extra": "iterations: 20407\ncpu: 34126.45170774734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29263.437033328693,
            "unit": "ns/iter",
            "extra": "iterations: 23973\ncpu: 29262.987527635236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28870.984285832896,
            "unit": "ns/iter",
            "extra": "iterations: 24182\ncpu: 28865.80100901497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22028.93361283592,
            "unit": "ns/iter",
            "extra": "iterations: 31723\ncpu: 22028.531349494067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156279.61143367816,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 156277.3112996883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262435.76640420733,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 262425.27184101596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65896.31132253057,
            "unit": "ns/iter",
            "extra": "iterations: 10616\ncpu: 65893.31198191312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65823.44208149065,
            "unit": "ns/iter",
            "extra": "iterations: 10627\ncpu: 65822.81923402626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66048.42648169055,
            "unit": "ns/iter",
            "extra": "iterations: 10596\ncpu: 66047.30086825261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131888.82117958023,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 131887.31863576232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123449.12227304837,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 123443.64883884488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41193.6722817758,
            "unit": "ns/iter",
            "extra": "iterations: 16978\ncpu: 41192.59041112054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198377.29229456905,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 198369.03611032388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161583.30396679905,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 161580.58118081058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161985.53485688774,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 161981.94829178188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160774.675091908,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 160765.25735294024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 299801.5528455272,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299783.82541720354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1123695.8400646031,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1123642.1647819192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 942661.0430686658,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 942613.4589502157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937248.6350267028,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 937248.1283422497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 929428.8470744382,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 929378.0585106345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 603220.640893506,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 603186.5120274925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 924012.908244658,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 923979.5212765931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41797.005970506936,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 41795.67138336622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200877.67439863656,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 200869.5589919816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163972.17987804327,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163964.98592870543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162024.1136048146,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 162015.27070800666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163669.48455778926,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 163667.80533458237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295558.4096283693,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 295543.4966216179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1114446.2752000436,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1114434.2399999914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936269.1826666681,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 936216.399999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927698.9099337409,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 927669.2715231724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 926212.1253297993,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 926173.0870712422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 600609.0334476983,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 600582.3327615857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 930544.0621693035,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 930511.9047619092 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453363420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15480.077360159572,
            "unit": "ns/iter",
            "extra": "iterations: 45230\ncpu: 15479.568870218884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124606.73647854479,
            "unit": "ns/iter",
            "extra": "iterations: 6804\ncpu: 124602.61610817167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235373.71652691456,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 235371.21990803358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342287.5725069621,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 342254.6682558601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452549.79417879967,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 452535.60291060264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561905.9482870144,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561900.3232062055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537905.7639999588,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537902.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 622925.1830000067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622910.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713620.877220066,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 713601.8532818537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12527.056394205074,
            "unit": "ns/iter",
            "extra": "iterations: 55910\ncpu: 12526.47826864606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10567.48781265174,
            "unit": "ns/iter",
            "extra": "iterations: 65888\ncpu: 10567.585903351135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10559.909565164873,
            "unit": "ns/iter",
            "extra": "iterations: 66324\ncpu: 10559.590796695024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10567.195444603649,
            "unit": "ns/iter",
            "extra": "iterations: 66295\ncpu: 10566.732031073218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17834.584037247205,
            "unit": "ns/iter",
            "extra": "iterations: 39304\ncpu: 17828.986871565234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55754.544900003115,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55754.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293618.0523415916,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 293609.05647382926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232100.41049723956,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 232090.49723756884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227183.8002670222,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 227171.29506008088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227146.38887410224,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 227136.67820069197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601341.1613333422,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 601318.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3929842.3966243826,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929697.046413498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3177344.2534245467,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3176881.1643835576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3141717.898648606,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3141576.3513513478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3158933.5254236977,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158743.7288135644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1849450.435129742,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1849383.2335329347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3092144.819999968,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3091966.3333333363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11755880.19780232,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11755445.054945052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5175902.700000279,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5175355.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14774431.541666565,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14773980.555555541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59641.942000001785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59637.80000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321779.85847997497,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 321767.0535380009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255865.99314659994,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 255845.9475566153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 251768.27102257276,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 251758.48227366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251827.1561218418,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 251811.86291739895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 570885.0822909712,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 570868.6635944725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4004609.8534482894,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4004396.1206896557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3216587.0934255165,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3216401.038062265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3186723.6952053905,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3186618.150684931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3191313.078767205,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3191098.6301369783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1876071.7862902987,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1875951.0080645126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3133605.3333333447,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3133531.649831641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11995026.314607227,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11994688.764044965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5361429.829999906,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5361157.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53122.27320000033,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53119.41999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282202.948077552,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 282185.7048964842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224611.20481928435,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 224605.1859612368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221511.12761021493,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221499.0203660746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220809.18904320945,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 220793.3641975305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539321.9291587416,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 539325.5534471878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3956789.0468084505,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3956681.702127667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3184357.2832764327,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3184181.9112627963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3154438.614864824,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3154325.675675676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3174223.6745762737,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3174113.220338975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1838975.080867873,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838974.3589743644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082320.9102988713,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3082301.9933554847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.347774012166,
            "unit": "ns/iter",
            "extra": "iterations: 112714\ncpu: 6183.328601593436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34652.846344119374,
            "unit": "ns/iter",
            "extra": "iterations: 20214\ncpu: 34653.14138715726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28706.079520176547,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 28706.02160788054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28323.30189273216,
            "unit": "ns/iter",
            "extra": "iterations: 25413\ncpu: 28322.79541966709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21971.935603559825,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21971.663050655578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155826.31061451338,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 155824.44692737344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263374.61007194355,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 263374.35251798586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65924.91469730259,
            "unit": "ns/iter",
            "extra": "iterations: 10621\ncpu: 65923.45353544792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65886.19794513794,
            "unit": "ns/iter",
            "extra": "iterations: 10609\ncpu: 65886.73767555798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66075.9858410395,
            "unit": "ns/iter",
            "extra": "iterations: 10594\ncpu: 66076.57164432791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132775.92469821926,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 132776.06821230135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123913.32978722856,
            "unit": "ns/iter",
            "extra": "iterations: 5640\ncpu: 123912.90780141838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41423.789539006124,
            "unit": "ns/iter",
            "extra": "iterations: 16920\ncpu: 41423.75295508316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197908.18513284952,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 197907.49010740314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161612.95675301185,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 161610.36077705835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161286.92820985246,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 161284.0773124702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 164179.20907207415,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 164165.85309693855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294832.94863156945,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 294821.68421052874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1134154.2414910686,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1134131.442463524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 951200.457142845,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951180.8163265175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936575.2198391419,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 936546.9168900911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 936300.3927613187,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 936279.758713121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 603851.5946643483,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 603837.2633390812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 938709.6626667244,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 938705.1999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41758.68541604502,
            "unit": "ns/iter",
            "extra": "iterations: 16765\ncpu: 41757.93617655767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202729.92298783982,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 202727.30167921536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164097.84837120952,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 164098.8985235558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163596.09280037438,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 163597.1014492753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164828.68658823354,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164826.65882352876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294607.6141897363,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 294596.0537363562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1119441.4519230176,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119425.961538453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 938812.375838915,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938796.1073825666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 930344.7915006323,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930332.0053120899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 931349.9694149098,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931356.2500000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605780.0753246561,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 605765.8008658094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 924982.1704094998,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924969.352708061 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479535333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15637.722920447328,
            "unit": "ns/iter",
            "extra": "iterations: 44637\ncpu: 15637.878889710333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127292.25325068094,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 127292.21348654371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238061.05887185404,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 238059.33734939748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347413.0348884373,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 347394.1987829616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454473.0078864211,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 454469.0325972661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563019.9036222558,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 562980.0776196639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 542075.3870000112,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542063.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629487.2769999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629447.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 722991.010093166,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 722941.0714285725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12650.971122530127,
            "unit": "ns/iter",
            "extra": "iterations: 55268\ncpu: 12650.356444959105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10674.21470328534,
            "unit": "ns/iter",
            "extra": "iterations: 65686\ncpu: 10673.964010595879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10652.166192703971,
            "unit": "ns/iter",
            "extra": "iterations: 65406\ncpu: 10652.057915175974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.985340825895,
            "unit": "ns/iter",
            "extra": "iterations: 65488\ncpu: 10680.410151478134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17797.986843109957,
            "unit": "ns/iter",
            "extra": "iterations: 39295\ncpu: 17796.607710904693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55612.4226999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55608.609999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294213.19725557504,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 294215.4373927964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228928.31385687698,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 228926.96328062168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231154.88846881242,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231156.8458007024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226072.163481954,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 226069.5594479823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595409.3029100539,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 595404.8280423277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3951055.1702127284,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3951055.744680846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3202285.175862095,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3202258.6206896524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3170562.301369818,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3170480.479452053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3178762.7337883906,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178571.6723549464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1843627.1150793547,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843453.1746031805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3092570.7792642433,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3092487.290969901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11721733.065934109,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11721347.25274727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5201608.849999957,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5201653.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14881847.704225173,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14881302.816901429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59667.51829999736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59665.77999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 319762.1320402753,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 319755.8746736294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254438.3224173869,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 254437.45162250628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253284.2630177591,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 253277.78106508875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250782.09572599063,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 250780.67915690845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 564450.7470817266,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 564450.5188067447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4009259.9396553235,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4009217.2413792973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3234780.425087174,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3234750.871080137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3214607.2379309144,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3214479.655172408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3191434.66323023,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3191431.615120269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1860910.010020028,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1860904.2084168328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3162171.194630801,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3162104.3624160863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11915954.191010768,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11915814.606741572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5151520.079999727,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5151426.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52664.39310000237,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52664.049999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 285537.3690159526,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 285535.47207446926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225735.93926591086,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 225725.50831792908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222168.0328504861,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 222167.6927056394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220107.100025711,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 220103.95988686112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 533077.9669926675,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 533069.070904646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3955903.851694926,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3955890.2542373035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3192447.2876711464,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192419.8630137034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3180214.9455781737,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3180201.020408186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3168062.9931972306,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167953.7414965983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1835414.0039526366,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1835415.6126482112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3100951.0099668666,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3100916.9435216035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6171.410449015661,
            "unit": "ns/iter",
            "extra": "iterations: 113025\ncpu: 6171.293076752921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34935.28517945513,
            "unit": "ns/iter",
            "extra": "iterations: 20033\ncpu: 34935.15699096475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27076.78969574961,
            "unit": "ns/iter",
            "extra": "iterations: 25834\ncpu: 27076.736084230008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28552.412448979503,
            "unit": "ns/iter",
            "extra": "iterations: 24500\ncpu: 28550.926530612327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22105.369507575477,
            "unit": "ns/iter",
            "extra": "iterations: 31680\ncpu: 22104.501262626363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156895.13975363105,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156894.02015677496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 267919.49621211714,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 267918.9393939431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66227.94912846157,
            "unit": "ns/iter",
            "extra": "iterations: 10556\ncpu: 66227.27358848126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66532.70127400654,
            "unit": "ns/iter",
            "extra": "iterations: 10518\ncpu: 66530.10077961697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66184.43051488054,
            "unit": "ns/iter",
            "extra": "iterations: 10585\ncpu: 66181.51157298144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127272.94415135676,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 127266.36347098535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124295.40127727379,
            "unit": "ns/iter",
            "extra": "iterations: 5637\ncpu: 124293.96842292047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41015.05134202542,
            "unit": "ns/iter",
            "extra": "iterations: 17101\ncpu: 41013.49043915536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197901.3288135514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197895.31073446324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160127.1880712983,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 160124.22303473426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160186.26200275208,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 160187.65432098636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160623.65168539225,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 160623.02224260313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297446.82829142455,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 297442.4371538111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1136312.5609755928,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1136238.3739837254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947283.3731138521,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 947260.3566529382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 939343.4624664879,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 939314.0750670166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940230.1677852737,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940226.1744966437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607716.3521249114,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607708.4128360773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 934580.2211796349,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 934507.5067024215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41532.90811965801,
            "unit": "ns/iter",
            "extra": "iterations: 16848\ncpu: 41533.29772079779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202643.64646464877,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 202632.7849927878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163477.77268475245,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 163470.36950420885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162317.97683576832,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 162307.59786888864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 162743.44537424712,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162741.42259414098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296917.3379805717,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 296900.29573299724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1132345.7657511614,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1132328.1098546027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 942550.4037685145,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 942558.9502018826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 947552.9378378085,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 947512.432432422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936396.6693440044,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936369.210174021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 606428.6333045721,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 606382.3123382209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 939117.1609042686,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 939078.5904255429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488597699,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15557.097218530651,
            "unit": "ns/iter",
            "extra": "iterations: 45156\ncpu: 15556.964744441491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127689.38991097624,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 127688.30860534123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236045.517630866,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 236039.69696969693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343726.40287195035,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 343706.1029118468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451992.56784970453,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 451977.92275574117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561207.6910148719,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561198.9010989005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536631.2159999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536621.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625291.021999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625263.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715574.9543343638,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 715564.3962848291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12549.369249918595,
            "unit": "ns/iter",
            "extra": "iterations: 55434\ncpu: 12549.204459357086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10608.828131622004,
            "unit": "ns/iter",
            "extra": "iterations: 66068\ncpu: 10608.618393170671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10619.460138740214,
            "unit": "ns/iter",
            "extra": "iterations: 66167\ncpu: 10619.482521498641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10654.056242491008,
            "unit": "ns/iter",
            "extra": "iterations: 65751\ncpu: 10653.854694225169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17542.96543086218,
            "unit": "ns/iter",
            "extra": "iterations: 39920\ncpu: 17542.79308617238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56510.52790000222,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56509.85000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295845.2640990353,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 295836.10729023366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232661.9866448573,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 232654.61978740778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232713.08823529366,
            "unit": "ns/iter",
            "extra": "iterations: 3672\ncpu: 232705.3376906325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230966.8814154373,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 230964.58670988632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 596934.7004608447,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 596919.3548387088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3917466.2731091133,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3910142.8571428508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3175774.644827517,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3175639.3103448316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3125131.3412162834,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3124927.3648648704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3142988.1520270286,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3142823.6486486504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1818009.840864465,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1817867.387033398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3067718.7582780817,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3067553.6423841086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11570215.336956589,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11569309.782608675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5007467.5600001225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5007175.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14668313.333333554,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14667222.222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59825.820200001086,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59821.00999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324365.8842105352,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 324338.045112782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257871.17671766458,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 257850.28502850133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253725.7674556156,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 253705.0887573973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253388.68738951185,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 253374.3076016492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572610.6085526121,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 572568.5526315788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3957371.196581371,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3956994.8717948818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3211621.5206897403,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3211378.9655172382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3176170.163822543,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175905.8020477756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3178155.808219322,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3178008.5616438417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1840782.4365079517,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1840626.1904761917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3101776.083333334,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3101521.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11814844.912087986,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11813756.043956013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5105155.120000404,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104919.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52784.13400000091,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52776.99999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 287339.7815322857,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 287316.12579457875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225704.48508054065,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 225683.25851597474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223812.93265199958,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 223799.34486373162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221996.29162330713,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 221976.35275754414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 536770.8383713756,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 536739.0499691569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3933795.4810126936,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3933525.316455698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3166471.8225255017,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166217.0648464127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3126242.426174489,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3126055.0335570443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3153433.4305084962,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3153144.745762717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1814483.9571150122,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814391.8128654934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3059767.8552631554,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3059592.105263152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6151.464598501723,
            "unit": "ns/iter",
            "extra": "iterations: 113724\ncpu: 6151.226654004388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35248.03566032045,
            "unit": "ns/iter",
            "extra": "iterations: 19854\ncpu: 35246.07132064074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26888.235610543445,
            "unit": "ns/iter",
            "extra": "iterations: 26026\ncpu: 26887.931299469838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27681.018304205703,
            "unit": "ns/iter",
            "extra": "iterations: 25404\ncpu: 27680.274759880445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21053.551760361832,
            "unit": "ns/iter",
            "extra": "iterations: 33317\ncpu: 21052.555752318658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156371.55139977694,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156358.52183650556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260642.51212234076,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 260628.3103319644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65417.72931276448,
            "unit": "ns/iter",
            "extra": "iterations: 10695\ncpu: 65410.26647966296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65382.31396324665,
            "unit": "ns/iter",
            "extra": "iterations: 10721\ncpu: 65377.119671673034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65699.92093197737,
            "unit": "ns/iter",
            "extra": "iterations: 10687\ncpu: 65696.65013567978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131730.89387370137,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131721.0367577771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122491.27169349608,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 122484.42967110043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41202.24418399074,
            "unit": "ns/iter",
            "extra": "iterations: 16979\ncpu: 41199.70551858139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201761.79734313057,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 201753.13736574163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160791.36226318686,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 160782.38607270925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160999.87565835594,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160987.31394550097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159823.53117150682,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 159811.44096825758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295728.95025293983,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 295704.3423271487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1122979.777599994,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1122879.6800000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 935630.5006675768,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 935577.5700934575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 928802.9019867491,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 928773.9072847586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 934408.7832446536,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 934354.5212766095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 601286.8453607841,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 601274.0549828176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920032.9973753808,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919978.7401574823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41528.59457863274,
            "unit": "ns/iter",
            "extra": "iterations: 16933\ncpu: 41527.413925470784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201564.58422113958,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 201556.98243593142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163410.8464594471,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163411.19420425282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 161893.51883521266,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161885.90247284382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 162895.24749708487,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 162891.61816065127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 291891.18716133246,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 291876.7819924961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1110147.468253917,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1110129.2063492178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 934757.8851802287,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934735.3805073288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 923528.7361477425,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 923490.3693931283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 923962.2625329957,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 923941.8205804897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 602318.7530120857,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 602292.3407917337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 916766.542594955,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 916753.4731323624 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490743677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15545.331945040709,
            "unit": "ns/iter",
            "extra": "iterations: 44179\ncpu: 15543.9484823106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125794.81985731018,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 125787.75267538642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237123.8665035329,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 237116.39477977165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343490.97208929434,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 343482.61562998383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454535.96598640905,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 454509.7331240189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561859.0290697423,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 561843.0878552974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 540048.4070000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540032.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 627552.6809999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627532.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 717188.57552284,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 717160.3408210684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12521.289622255328,
            "unit": "ns/iter",
            "extra": "iterations: 56149\ncpu: 12521.150866444646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10481.907384136515,
            "unit": "ns/iter",
            "extra": "iterations: 66846\ncpu: 10481.891212637998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10544.705867316658,
            "unit": "ns/iter",
            "extra": "iterations: 66504\ncpu: 10544.546192710202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10573.074059555556,
            "unit": "ns/iter",
            "extra": "iterations: 66325\ncpu: 10572.820203543168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17628.530573728232,
            "unit": "ns/iter",
            "extra": "iterations: 39740\ncpu: 17628.256165072995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54665.80330000284,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54665.82000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299430.5835342847,
            "unit": "ns/iter",
            "extra": "iterations: 2903\ncpu: 299426.4898380989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233740.30422993298,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 233717.89587852528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228866.20808783208,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 228836.28816282828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227178.97626666856,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 227158.34666666694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601621.9487008452,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 601598.5343104589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3926865.5991561534,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3926391.139240514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3164758.6928327535,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3164554.948805458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3184279.3816255187,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3183966.0777385184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3138292.0472973916,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3137970.608108108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1833519.3861386222,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1833397.2277227757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3056830.9438943304,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3056529.0429042852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11664111.043956552,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11663356.04395604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5162990.889999719,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5162615.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14739745.15277771,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14738658.333333297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59704.43489999866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59699.39000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 319160.52162564994,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 319140.26845637587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256031.4363312559,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 255586.5835559507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 251167.13604446937,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 251163.25336454157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250488.22748145918,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 250480.50158954394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 573556.1398416776,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 573543.997361479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3957229.557446913,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3957159.5744681135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3185839.719178182,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3185744.1780821974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3194558.1924397517,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3194515.8075601333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3205655.9897260703,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3205627.739726032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1851574.496000012,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851551.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3104192.137123674,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3104186.287625421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11963724.200000392,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11962558.888888944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5089244.870000016,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5088718.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52211.951800001094,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52210.690000000424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 285117.9417218563,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 285117.7483443709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222165.85475879227,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 222162.1121251628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220614.8881190692,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 220592.91762894404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220714.6921689824,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 220703.5033487898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537258.131157621,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 537199.5689655162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3916943.4194914214,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3916687.288135598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3155835.528813657,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3155443.0508474647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3155170.6632653587,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3155139.115646251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3152047.725423711,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3152003.3898304957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1832823.9803535754,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1832788.212180743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3067359.355263103,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3067271.710526325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6187.717783024492,
            "unit": "ns/iter",
            "extra": "iterations: 112658\ncpu: 6187.640469385206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34259.19881610539,
            "unit": "ns/iter",
            "extra": "iterations: 20441\ncpu: 34258.685974267355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26975.13559322009,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 26975.10400616348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27686.783066052336,
            "unit": "ns/iter",
            "extra": "iterations: 25192\ncpu: 27686.745792315087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22056.35630045296,
            "unit": "ns/iter",
            "extra": "iterations: 31712\ncpu: 22056.322527749748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155715.675145028,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 155715.43953592126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263998.4763705094,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 263978.6767485817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66735.10695643554,
            "unit": "ns/iter",
            "extra": "iterations: 10537\ncpu: 66732.29571984342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66294.70138161174,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 66290.01429252015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66104.89430970975,
            "unit": "ns/iter",
            "extra": "iterations: 10597\ncpu: 66097.9805605357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132757.57318922496,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132748.5210466462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124441.99056603719,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 124429.4944820228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41082.07360704083,
            "unit": "ns/iter",
            "extra": "iterations: 17050\ncpu: 41079.607038122864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197016.6162954583,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197004.34169720628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160367.17090491633,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160366.9644902624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160081.90022882374,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160074.78260869588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.21548974953,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159262.46013667504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294754.93544303096,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 294729.07172995596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1125101.1062802575,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1125016.7471819655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947230.702156316,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 947157.0080862616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936370.6751337285,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936266.0427807505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 934625.3311081362,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934613.0841121481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 597776.3432963641,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 597741.1614005077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 923241.420634946,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 923166.6666666818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41449.41463846792,
            "unit": "ns/iter",
            "extra": "iterations: 16928\ncpu: 41445.48086011298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202309.2419495223,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 202296.63475485911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163505.95659277428,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 163492.7421236872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162491.62598424646,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 162475.5905511809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163058.1514305555,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 163049.36031635187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294262.2571548801,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 294229.6717171725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1121401.0799999414,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1121335.8400000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 938423.2676431425,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 938372.4367510031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 942324.248322184,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 942254.3624161171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 934094.7289719515,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934007.0761014718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 600677.6315338346,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 600591.4310197117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 927054.6297760261,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 926997.7602108029 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573960137,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15746.512317486771,
            "unit": "ns/iter",
            "extra": "iterations: 44449\ncpu: 15745.609575018563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127622.58231106684,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 127615.11434196577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242953.47741756096,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 242933.41645885288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349590.6479902441,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 349557.6938692652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 460335.85047720995,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460312.7783669144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571432.2554455417,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 571401.3861386136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 548737.6979999681,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548712.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 636579.0220000349,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636572.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 723556.5516431709,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 723512.8325508606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12655.006807648191,
            "unit": "ns/iter",
            "extra": "iterations: 55232\ncpu: 12654.870365005794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10676.749047656664,
            "unit": "ns/iter",
            "extra": "iterations: 62215\ncpu: 10676.502451177385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10599.4924362875,
            "unit": "ns/iter",
            "extra": "iterations: 66039\ncpu: 10598.516028407457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10643.496497759063,
            "unit": "ns/iter",
            "extra": "iterations: 65815\ncpu: 10642.666565372634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18064.205059750202,
            "unit": "ns/iter",
            "extra": "iterations: 39330\ncpu: 18063.541825578446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55100.08730000209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55096.089999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 305429.117262721,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 305401.4099037138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231679.27895021313,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 231658.14393939424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230190.1908232181,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 230173.03643724724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226511.27671957706,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 226506.13756613754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599578.1359416244,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 599535.4111405833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3986280.7863246086,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3985973.0769230826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3229960.999999981,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3229815.2249134984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3202115.5344827143,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3201872.7586206854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3212683.503448355,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212561.724137931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1852198.0159999887,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1852077.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3120617.1486486653,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3120579.729729735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11858710.233333467,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11858178.888888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5310530.990000188,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5310348.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14980745.464788789,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14979628.169014068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60284.57259999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60282.730000000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 319611.27835433633,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 319587.36100815417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 253031.67718160324,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 253013.2075471692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253061.2365401547,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 253045.42512503616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251365.30401641308,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 251356.2005277051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 569835.9947814795,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 569818.7214611862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4042647.1956520705,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4042466.956521721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3262054.3157894355,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3261845.263157887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3254207.3473684085,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3253963.5087719364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3220788.6678201053,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220498.6159169516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1887042.456211875,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1886915.885947056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3154714.9830507576,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154522.033898316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12093673.272726914,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12092409.0909091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5181353.229999673,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5180974.999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53593.13150000275,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53585.389999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286071.8725457617,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 286051.11480865243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225868.46735123973,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 225850.6319115322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220785.39006178168,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 220777.65190525213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219827.3476251497,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 219821.10397946165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 540005.7247990324,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 539969.6969696974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3997109.785407803,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3996786.6952789677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3209089.927835032,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3208887.285223368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3202890.2061855993,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3202717.8694157917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3190701.3047945253,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3190466.7808218994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1852502.587649453,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852361.3545816801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3106839.6409394736,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3106655.03355704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6213.8155980376305,
            "unit": "ns/iter",
            "extra": "iterations: 112309\ncpu: 6213.372036079036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35088.83203007462,
            "unit": "ns/iter",
            "extra": "iterations: 19950\ncpu: 35087.85964912281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26104.778005362947,
            "unit": "ns/iter",
            "extra": "iterations: 26852\ncpu: 26103.65708327122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26768.010301776318,
            "unit": "ns/iter",
            "extra": "iterations: 26112\ncpu: 26767.738970588405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22218.22802162858,
            "unit": "ns/iter",
            "extra": "iterations: 31440\ncpu: 22216.647582697256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156229.98280482538,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 156221.39347923142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 267353.16953035776,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 267329.5914471183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67039.7111025743,
            "unit": "ns/iter",
            "extra": "iterations: 10412\ncpu: 67036.45793315412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67358.5944096414,
            "unit": "ns/iter",
            "extra": "iterations: 10375\ncpu: 67354.85301204796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66936.23555896114,
            "unit": "ns/iter",
            "extra": "iterations: 10439\ncpu: 66933.49937733584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134746.96917148403,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 134743.0828516356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125078.85607142554,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125068.03571428447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41791.12039136178,
            "unit": "ns/iter",
            "extra": "iterations: 16762\ncpu: 41790.65147357174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201692.8868413451,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 201674.7480564338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162138.32228916136,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162129.14735866585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163395.4266759813,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 163383.98510241974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161497.09471724997,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 161489.0621363764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296352.3163698151,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296330.19508057967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1139227.0343137335,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1139111.7647058675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 957554.4938440274,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 957515.0478796215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 950817.0122116477,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 950765.2645861667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951401.6317934572,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 951359.1032608775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 635455.7108014121,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 635421.6027874628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 939916.7432795222,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 939852.2849462372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42282.10123367448,
            "unit": "ns/iter",
            "extra": "iterations: 16536\ncpu: 42279.54160619252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204739.08718548133,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 204729.54944411706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166000.53857109192,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 165991.81106100295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164471.22250879803,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 164459.8593200485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164659.47483538164,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 164651.90498588848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296539.0207627047,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 296524.70338983554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1131958.8381876315,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1131945.9546925582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 952063.1537415297,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951992.7891156479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 943688.9230769657,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 943647.5033738102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 937048.3288590768,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 936972.2147650903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 610929.0313862603,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 610907.6721883231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 934673.9305740754,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934656.4753004034 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771640536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15713.25222174166,
            "unit": "ns/iter",
            "extra": "iterations: 43997\ncpu: 15713.125894947383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127966.35472210155,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 127964.84410302756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240095.66343491044,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 240093.04709141277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349206.9693424643,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 349153.69100443734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 465750.5005291017,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 465701.74603174627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570073.5324590137,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 570054.2295081969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550038.5419999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550004.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 639149.9790000239,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639088.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 726694.4585289882,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 726656.5727699533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12679.639290098428,
            "unit": "ns/iter",
            "extra": "iterations: 55388\ncpu: 12679.018921065923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10685.571773183992,
            "unit": "ns/iter",
            "extra": "iterations: 65498\ncpu: 10685.627042047072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10677.15494244476,
            "unit": "ns/iter",
            "extra": "iterations: 65676\ncpu: 10676.359705219573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10711.148988970031,
            "unit": "ns/iter",
            "extra": "iterations: 65280\ncpu: 10710.677083333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17863.909971106368,
            "unit": "ns/iter",
            "extra": "iterations: 39454\ncpu: 17862.660313276207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54903.31880000099,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54900.549999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294891.40704907756,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 294877.1250863856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232584.97661623286,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 232565.63961485587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232818.72219191608,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 232801.19956379454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230017.56485468594,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 230003.95586652306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 598041.8290086396,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 597988.5562208917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3978735.500000178,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3978510.2564102593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3210964.193771641,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3210792.733564003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3192735.7397261066,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192061.301369863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3203609.7079038024,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3200025.0859106546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1848287.0060120423,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1848248.6973947922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3114968.626262603,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3114894.612794614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11817989.505494516,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11817710.98901099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5223588.260000156,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5223522.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14859572.225352108,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14859163.380281685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59280.32219999864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59278.31999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323108.79559042724,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 323099.66367713024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254471.78209308482,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 254467.6252594124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 251727.48239436152,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 251723.56220657105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258727.33401819755,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 258728.38274141465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 569494.7307944791,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 569480.1050558153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4032266.134199095,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4032102.597402577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3238123.3554007793,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238108.3623693553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3240200.249999998,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3240116.3194444305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3218708.7681660526,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218665.7439446286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1875086.6835700204,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1875040.9736308302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3151912.1351353023,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3151873.3108108146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12007770.449438186,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12007589.887640422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5176418.460000036,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5176106.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52992.61420000221,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52990.669999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283159.3931285132,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 283152.0647505793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224015.20088820392,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 223999.55590386514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222948.24356640212,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 222943.3324668579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218797.27757916338,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 218786.1082737482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537891.0179012388,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 537870.0617283955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3995261.1422413727,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3995086.63793103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3215443.795847759,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3215424.5674740514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3184078.5324231884,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3184065.5290102344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3196510.460481244,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3196416.151202733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1844900.589641401,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1844856.573705184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3107650.3846153314,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107633.44481606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6244.962759740494,
            "unit": "ns/iter",
            "extra": "iterations: 112083\ncpu: 6244.9800594202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35351.92136760537,
            "unit": "ns/iter",
            "extra": "iterations: 20386\ncpu: 35351.687432551895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29080.94618199996,
            "unit": "ns/iter",
            "extra": "iterations: 24044\ncpu: 29080.456662784876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28746.79821380893,
            "unit": "ns/iter",
            "extra": "iterations: 26201\ncpu: 28746.627991297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22151.17188589547,
            "unit": "ns/iter",
            "extra": "iterations: 31550\ncpu: 22151.2297939776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156380.44019673078,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156379.56628660808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266185.6803340758,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 266179.49886104563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66965.20495932204,
            "unit": "ns/iter",
            "extra": "iterations: 10324\ncpu: 66962.35955056157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66894.36679976873,
            "unit": "ns/iter",
            "extra": "iterations: 10518\ncpu: 66894.33352348377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66961.25269689779,
            "unit": "ns/iter",
            "extra": "iterations: 10475\ncpu: 66958.69212410587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 129459.64544111479,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129457.77039498043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125832.11175865198,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 125830.25368529354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41448.207424098575,
            "unit": "ns/iter",
            "extra": "iterations: 16864\ncpu: 41447.396821632545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198852.36743392894,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 198853.14009661955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161195.11789182358,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 161192.62598243266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161876.13526682102,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 161873.480278424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161222.91378515595,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 161219.801751959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 293127.77126100095,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 293125.21994134714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1137822.4926829715,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1137789.5934959322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 952191.9986319995,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 952185.0889192935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 948631.6626016055,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 948626.0162601612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 949670.0351827225,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 949663.1935047325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609332.6922406389,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609335.222319097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 937374.7483266243,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937346.1847389691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41743.653696961606,
            "unit": "ns/iter",
            "extra": "iterations: 16757\ncpu: 41743.038730082735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205184.69789228385,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 205179.30327869116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166599.3311148055,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166598.35987639576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165989.53436912052,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 165978.13088512287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167021.8920965409,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 167020.84713677235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296239.0969107026,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 296232.9665679189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1132759.5258899494,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1132750.3236245804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 952367.0639455736,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 952370.2040816365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 941756.7833109064,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 941720.7267833065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 941193.2153431746,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 941174.5625841196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 609691.2258064859,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609677.8552746354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 930681.2324037252,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930671.9787516559 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772028212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15497.758116958994,
            "unit": "ns/iter",
            "extra": "iterations: 43058\ncpu: 15496.472200287984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126746.70809032371,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 126741.70779123672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237884.294987685,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 237867.05012325387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346608.56001606834,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 346550.2609393818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 456548.341386548,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 456530.1995798319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570930.0293350525,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 570897.9139504565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 542848.9450000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542843.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629516.4720000343,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629478.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716122.0388802767,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 716073.4836702951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12478.005645994434,
            "unit": "ns/iter",
            "extra": "iterations: 56146\ncpu: 12477.467673565348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10474.667031747269,
            "unit": "ns/iter",
            "extra": "iterations: 66652\ncpu: 10474.501890415891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10473.314938992991,
            "unit": "ns/iter",
            "extra": "iterations: 66959\ncpu: 10473.065607311943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10481.237059669547,
            "unit": "ns/iter",
            "extra": "iterations: 66768\ncpu: 10480.836628324943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17688.378181450214,
            "unit": "ns/iter",
            "extra": "iterations: 39526\ncpu: 17686.803622931777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55974.605400001565,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55971.86999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300887.22428272146,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 300880.6158152556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235171.67379972385,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 235169.38271604906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234891.85583332845,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 234876.9444444443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230086.97497309186,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 230077.07212055934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 598167.5298013465,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 598134.2384105951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3943114.3474576715,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3942947.0338983107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195440.000000017,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3195281.379310346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3164901.941780945,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3164689.7260273965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3169222.612244898,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169043.1972789057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1853623.7334669176,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1853533.0661322647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3094802.795302004,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3094638.926174496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11929957.044444311,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11929054.444444435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5347302.600000035,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5347323.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14895641.830985947,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14886919.71830987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62711.2081000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62706.9800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327220.11090010987,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 327200.56969236705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258023.23650074576,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 258007.60180995488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 258956.91945702152,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 258939.75867270044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253929.71094674303,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 253922.98816568195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571003.8333333388,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 570978.6089238824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3995635.9484977843,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995409.871244645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3245460.199300746,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3245353.8461538507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3214338.750865212,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3214197.577854669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3213390.6539792353,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3213187.1972318506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1881743.77935226,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1881614.7773279313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3140653.32432432,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3140499.9999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11979869.101123717,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11979505.617977513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5156035.109999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5155846.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53376.31680000072,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53375.18000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 289178.80195352266,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 289174.5031997308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 228408.80154297134,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 228407.15615855396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228225.55921919542,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 228223.31838564898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223509.24706495836,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 223502.1654056872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537632.9531731335,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 537625.939617993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3961635.4425532413,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3961643.829787237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3188327.557093506,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3188284.083044982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3180992.2423207616,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3180963.4812286687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3212911.781570015,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3212871.3310580207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1849084.0141700124,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1849055.8704453392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3109860.6833334467,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109795.6666666702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6191.233867682085,
            "unit": "ns/iter",
            "extra": "iterations: 112910\ncpu: 6190.883004162636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35146.081669510946,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 35144.286144275975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28133.275447414257,
            "unit": "ns/iter",
            "extra": "iterations: 24865\ncpu: 28131.236678061658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27808.31358260613,
            "unit": "ns/iter",
            "extra": "iterations: 25113\ncpu: 27806.40704017818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22097.441574416345,
            "unit": "ns/iter",
            "extra": "iterations: 31707\ncpu: 22096.281578200258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157494.44434449341,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157481.40319316453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265228.75075757515,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 265214.469696969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66577.10658545878,
            "unit": "ns/iter",
            "extra": "iterations: 10508\ncpu: 66576.29425199762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66576.12982821967,
            "unit": "ns/iter",
            "extra": "iterations: 10537\ncpu: 66573.09480876956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66939.57689007498,
            "unit": "ns/iter",
            "extra": "iterations: 10489\ncpu: 66934.38840690299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134854.55125985242,
            "unit": "ns/iter",
            "extra": "iterations: 5199\ncpu: 134845.6626274284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124614.53360596791,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124605.2987197744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41748.74897217365,
            "unit": "ns/iter",
            "extra": "iterations: 16783\ncpu: 41738.99779538817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199238.8831057974,
            "unit": "ns/iter",
            "extra": "iterations: 3516\ncpu: 199220.50625710792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162360.63585693907,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 162353.1583836494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163555.6182921103,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 163550.34997666976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162150.54296965938,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 162145.74936298153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297524.2952906121,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 297509.5884599082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1128648.8126009784,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1128640.7108238968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 946459.0391363306,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 946434.9527665424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 938142.0937081532,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 938118.8755020145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 937207.5133689898,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 937200.80213902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607141.033824779,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607136.253252395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 928272.3629139311,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 928265.4304635817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41884.15793565112,
            "unit": "ns/iter",
            "extra": "iterations: 16722\ncpu: 41883.010405453104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203294.9921397391,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 203289.4614264926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164597.3903127333,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 164595.9087702795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164436.70850011957,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 164437.74429008682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 165342.9808284111,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 165339.62130177667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297946.90928361256,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297945.527766004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1123275.9775640743,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123269.5512820494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 939541.3346774442,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 939534.5430107457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 937687.1869158616,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 937678.1041388378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 928342.9402390299,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 928308.2337317322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 604638.1613460054,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 604635.4616048435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 927895.5039577781,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 927890.7651715 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}