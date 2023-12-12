window.BENCHMARK_DATA = {
  "lastUpdate": 1702388110874,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 18.04 Release c++-17": [
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
        "date": 1702381117750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1001.6713034295462,
            "unit": "ns/iter",
            "extra": "iterations: 695097\ncpu: 1001.6492662175209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20342.278627802458,
            "unit": "ns/iter",
            "extra": "iterations: 41306\ncpu: 20341.80506463952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45517.42376969324,
            "unit": "ns/iter",
            "extra": "iterations: 19487\ncpu: 45516.723969826024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57860.25539999855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57858.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69277.43123070573,
            "unit": "ns/iter",
            "extra": "iterations: 11335\ncpu: 69274.82134980155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86467.03647326268,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 86464.34713847983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103833.35608132233,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 103830.66222803478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121870.81806775519,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 121866.90366652717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152315.291141364,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 152307.79963018987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 849.1959975172109,
            "unit": "ns/iter",
            "extra": "iterations: 824888\ncpu: 849.178555149305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 677.4646593086202,
            "unit": "ns/iter",
            "extra": "iterations: 1009785\ncpu: 677.4568843862804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 675.5014284181278,
            "unit": "ns/iter",
            "extra": "iterations: 1034361\ncpu: 675.4916320317565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 685.9759170738035,
            "unit": "ns/iter",
            "extra": "iterations: 1020474\ncpu: 685.9635816297136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1324.5585103795972,
            "unit": "ns/iter",
            "extra": "iterations: 514037\ncpu: 1324.536949674829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6363.395991222964,
            "unit": "ns/iter",
            "extra": "iterations: 128518\ncpu: 6363.275183242826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37280.27562171186,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 37279.37671448492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27383.70858037436,
            "unit": "ns/iter",
            "extra": "iterations: 30022\ncpu: 27383.17900206515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25158.850842507753,
            "unit": "ns/iter",
            "extra": "iterations: 32878\ncpu: 25158.36729728083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26640.009632422938,
            "unit": "ns/iter",
            "extra": "iterations: 31041\ncpu: 26639.21909732288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 71186.28032628098,
            "unit": "ns/iter",
            "extra": "iterations: 12382\ncpu: 71184.46131481198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620435.6609999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620420.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 619382.8128531236,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 619365.4661016959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 619520.8837375088,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 619499.286733239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 622012.9893917841,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 621987.2701555875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359710.9954657693,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 359701.40148392366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 620736.5289139559,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 620712.1297602262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2815920.9615384066,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2815753.846153849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1191417.749685573,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1191356.8553459125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3556936.694339695,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3556760.754716975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6431.33189595554,
            "unit": "ns/iter",
            "extra": "iterations: 130098\ncpu: 6425.991175882792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37734.288208018974,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 37732.698427129726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27397.92188116044,
            "unit": "ns/iter",
            "extra": "iterations: 30428\ncpu: 27397.242671223827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26738.773756966963,
            "unit": "ns/iter",
            "extra": "iterations: 31033\ncpu: 26738.062707440426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27333.372249308024,
            "unit": "ns/iter",
            "extra": "iterations: 30356\ncpu: 27333.317960205568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71483.23430627504,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 71481.05557776886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 624597.404000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624575.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 522774.242999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522773.4999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 519766.642000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519746.90000000125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528340.3870000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528332.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 367605.4636287728,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 367588.71237458306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 507927.3190000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507912.9000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2909226.9686520495,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2909107.5235109795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1249679.5191040614,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1249639.6574440121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6359.887631151358,
            "unit": "ns/iter",
            "extra": "iterations: 131718\ncpu: 6359.678252023294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37758.7497769455,
            "unit": "ns/iter",
            "extra": "iterations: 22416\ncpu: 37757.83815132049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27519.540789474428,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27518.52631578926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26747.452863463423,
            "unit": "ns/iter",
            "extra": "iterations: 31186\ncpu: 26746.66517026877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26940.42695904699,
            "unit": "ns/iter",
            "extra": "iterations: 31010\ncpu: 26939.16156078677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 70030.7784977205,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 70028.27773778127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 632871.9769999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632848.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 515214.70600005164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515159.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 513537.370999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513531.0000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 511637.92199997714,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511613.90000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 372799.69047618454,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 372779.8469387772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 515007.46900001104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514994.5999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 334.2304051250858,
            "unit": "ns/iter",
            "extra": "iterations: 2087306\ncpu: 334.21985085081167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2928.9452196706857,
            "unit": "ns/iter",
            "extra": "iterations: 238425\ncpu: 2928.6299674950305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2136.6132863342727,
            "unit": "ns/iter",
            "extra": "iterations: 326531\ncpu: 2136.522412879641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2262.1336919349806,
            "unit": "ns/iter",
            "extra": "iterations: 308792\ncpu: 2262.075766211567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1582.9250827534047,
            "unit": "ns/iter",
            "extra": "iterations: 441674\ncpu: 1582.8323605192882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14407.695838458558,
            "unit": "ns/iter",
            "extra": "iterations: 48780\ncpu: 14407.42312423121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33988.06318835022,
            "unit": "ns/iter",
            "extra": "iterations: 21428\ncpu: 33985.50028000749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7923.517782450554,
            "unit": "ns/iter",
            "extra": "iterations: 88458\ncpu: 7923.275452757237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7879.212878385774,
            "unit": "ns/iter",
            "extra": "iterations: 88567\ncpu: 7878.926688269845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7874.5340958883135,
            "unit": "ns/iter",
            "extra": "iterations: 88999\ncpu: 7874.140158878165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16631.595798279435,
            "unit": "ns/iter",
            "extra": "iterations: 42078\ncpu: 16631.11126954701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15535.96629665233,
            "unit": "ns/iter",
            "extra": "iterations: 44773\ncpu: 15535.063542760132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4397.76732623782,
            "unit": "ns/iter",
            "extra": "iterations: 160104\ncpu: 4397.685879178505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23379.008750543908,
            "unit": "ns/iter",
            "extra": "iterations: 29941\ncpu: 23378.063524932106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17781.870761722195,
            "unit": "ns/iter",
            "extra": "iterations: 38518\ncpu: 17781.40609585143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18369.12140978414,
            "unit": "ns/iter",
            "extra": "iterations: 38020\ncpu: 18368.913729615815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19116.613801948442,
            "unit": "ns/iter",
            "extra": "iterations: 36647\ncpu: 19115.783010887484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38735.48377613741,
            "unit": "ns/iter",
            "extra": "iterations: 18029\ncpu: 38734.0118697661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152824.1244008698,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 152820.26143790685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134070.42398164122,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 134070.22375215223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134633.0720876578,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134627.41253364104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135391.4084670439,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135391.18499903491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80502.17195402141,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80501.33333333423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131947.72610502783,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 131945.52323385183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4291.907599383054,
            "unit": "ns/iter",
            "extra": "iterations: 163408\ncpu: 4291.762949182427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22184.89919571122,
            "unit": "ns/iter",
            "extra": "iterations: 31705\ncpu: 22184.54187036767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17751.966037161044,
            "unit": "ns/iter",
            "extra": "iterations: 39396\ncpu: 17751.62960706674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17670.391369236328,
            "unit": "ns/iter",
            "extra": "iterations: 39533\ncpu: 17670.105987403003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18535.246215730116,
            "unit": "ns/iter",
            "extra": "iterations: 37788\ncpu: 18534.80469990456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37096.57406719498,
            "unit": "ns/iter",
            "extra": "iterations: 18841\ncpu: 37095.58940608205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149896.39730423503,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 149896.0847240047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 134986.83553513413,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134982.67279341456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134205.47416762562,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134205.24301569018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134195.6162523831,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134190.554493308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79044.47266154579,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 79043.14279258874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129939.36682764132,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 129937.05423477029 ns\nthreads: 1"
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
        "date": 1702381117750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1001.6713034295462,
            "unit": "ns/iter",
            "extra": "iterations: 695097\ncpu: 1001.6492662175209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20342.278627802458,
            "unit": "ns/iter",
            "extra": "iterations: 41306\ncpu: 20341.80506463952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45517.42376969324,
            "unit": "ns/iter",
            "extra": "iterations: 19487\ncpu: 45516.723969826024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57860.25539999855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57858.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69277.43123070573,
            "unit": "ns/iter",
            "extra": "iterations: 11335\ncpu: 69274.82134980155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86467.03647326268,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 86464.34713847983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103833.35608132233,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 103830.66222803478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121870.81806775519,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 121866.90366652717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152315.291141364,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 152307.79963018987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 849.1959975172109,
            "unit": "ns/iter",
            "extra": "iterations: 824888\ncpu: 849.178555149305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 677.4646593086202,
            "unit": "ns/iter",
            "extra": "iterations: 1009785\ncpu: 677.4568843862804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 675.5014284181278,
            "unit": "ns/iter",
            "extra": "iterations: 1034361\ncpu: 675.4916320317565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 685.9759170738035,
            "unit": "ns/iter",
            "extra": "iterations: 1020474\ncpu: 685.9635816297136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1324.5585103795972,
            "unit": "ns/iter",
            "extra": "iterations: 514037\ncpu: 1324.536949674829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6363.395991222964,
            "unit": "ns/iter",
            "extra": "iterations: 128518\ncpu: 6363.275183242826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37280.27562171186,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 37279.37671448492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27383.70858037436,
            "unit": "ns/iter",
            "extra": "iterations: 30022\ncpu: 27383.17900206515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25158.850842507753,
            "unit": "ns/iter",
            "extra": "iterations: 32878\ncpu: 25158.36729728083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26640.009632422938,
            "unit": "ns/iter",
            "extra": "iterations: 31041\ncpu: 26639.21909732288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 71186.28032628098,
            "unit": "ns/iter",
            "extra": "iterations: 12382\ncpu: 71184.46131481198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620435.6609999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620420.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 619382.8128531236,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 619365.4661016959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 619520.8837375088,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 619499.286733239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 622012.9893917841,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 621987.2701555875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359710.9954657693,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 359701.40148392366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 620736.5289139559,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 620712.1297602262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2815920.9615384066,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2815753.846153849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1191417.749685573,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1191356.8553459125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3556936.694339695,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3556760.754716975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6431.33189595554,
            "unit": "ns/iter",
            "extra": "iterations: 130098\ncpu: 6425.991175882792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37734.288208018974,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 37732.698427129726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27397.92188116044,
            "unit": "ns/iter",
            "extra": "iterations: 30428\ncpu: 27397.242671223827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26738.773756966963,
            "unit": "ns/iter",
            "extra": "iterations: 31033\ncpu: 26738.062707440426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27333.372249308024,
            "unit": "ns/iter",
            "extra": "iterations: 30356\ncpu: 27333.317960205568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71483.23430627504,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 71481.05557776886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 624597.404000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624575.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 522774.242999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522773.4999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 519766.642000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519746.90000000125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528340.3870000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528332.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 367605.4636287728,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 367588.71237458306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 507927.3190000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507912.9000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2909226.9686520495,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2909107.5235109795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1249679.5191040614,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1249639.6574440121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6359.887631151358,
            "unit": "ns/iter",
            "extra": "iterations: 131718\ncpu: 6359.678252023294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37758.7497769455,
            "unit": "ns/iter",
            "extra": "iterations: 22416\ncpu: 37757.83815132049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27519.540789474428,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27518.52631578926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26747.452863463423,
            "unit": "ns/iter",
            "extra": "iterations: 31186\ncpu: 26746.66517026877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26940.42695904699,
            "unit": "ns/iter",
            "extra": "iterations: 31010\ncpu: 26939.16156078677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 70030.7784977205,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 70028.27773778127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 632871.9769999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632848.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 515214.70600005164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515159.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 513537.370999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513531.0000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 511637.92199997714,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511613.90000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 372799.69047618454,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 372779.8469387772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 515007.46900001104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514994.5999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 334.2304051250858,
            "unit": "ns/iter",
            "extra": "iterations: 2087306\ncpu: 334.21985085081167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2928.9452196706857,
            "unit": "ns/iter",
            "extra": "iterations: 238425\ncpu: 2928.6299674950305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2136.6132863342727,
            "unit": "ns/iter",
            "extra": "iterations: 326531\ncpu: 2136.522412879641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2262.1336919349806,
            "unit": "ns/iter",
            "extra": "iterations: 308792\ncpu: 2262.075766211567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1582.9250827534047,
            "unit": "ns/iter",
            "extra": "iterations: 441674\ncpu: 1582.8323605192882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14407.695838458558,
            "unit": "ns/iter",
            "extra": "iterations: 48780\ncpu: 14407.42312423121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33988.06318835022,
            "unit": "ns/iter",
            "extra": "iterations: 21428\ncpu: 33985.50028000749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7923.517782450554,
            "unit": "ns/iter",
            "extra": "iterations: 88458\ncpu: 7923.275452757237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7879.212878385774,
            "unit": "ns/iter",
            "extra": "iterations: 88567\ncpu: 7878.926688269845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7874.5340958883135,
            "unit": "ns/iter",
            "extra": "iterations: 88999\ncpu: 7874.140158878165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16631.595798279435,
            "unit": "ns/iter",
            "extra": "iterations: 42078\ncpu: 16631.11126954701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15535.96629665233,
            "unit": "ns/iter",
            "extra": "iterations: 44773\ncpu: 15535.063542760132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4397.76732623782,
            "unit": "ns/iter",
            "extra": "iterations: 160104\ncpu: 4397.685879178505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23379.008750543908,
            "unit": "ns/iter",
            "extra": "iterations: 29941\ncpu: 23378.063524932106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17781.870761722195,
            "unit": "ns/iter",
            "extra": "iterations: 38518\ncpu: 17781.40609585143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18369.12140978414,
            "unit": "ns/iter",
            "extra": "iterations: 38020\ncpu: 18368.913729615815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19116.613801948442,
            "unit": "ns/iter",
            "extra": "iterations: 36647\ncpu: 19115.783010887484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38735.48377613741,
            "unit": "ns/iter",
            "extra": "iterations: 18029\ncpu: 38734.0118697661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152824.1244008698,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 152820.26143790685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134070.42398164122,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 134070.22375215223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134633.0720876578,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134627.41253364104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135391.4084670439,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135391.18499903491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80502.17195402141,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80501.33333333423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131947.72610502783,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 131945.52323385183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4291.907599383054,
            "unit": "ns/iter",
            "extra": "iterations: 163408\ncpu: 4291.762949182427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22184.89919571122,
            "unit": "ns/iter",
            "extra": "iterations: 31705\ncpu: 22184.54187036767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17751.966037161044,
            "unit": "ns/iter",
            "extra": "iterations: 39396\ncpu: 17751.62960706674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17670.391369236328,
            "unit": "ns/iter",
            "extra": "iterations: 39533\ncpu: 17670.105987403003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18535.246215730116,
            "unit": "ns/iter",
            "extra": "iterations: 37788\ncpu: 18534.80469990456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37096.57406719498,
            "unit": "ns/iter",
            "extra": "iterations: 18841\ncpu: 37095.58940608205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149896.39730423503,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 149896.0847240047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 134986.83553513413,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134982.67279341456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134205.47416762562,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134205.24301569018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134195.6162523831,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134190.554493308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79044.47266154579,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 79043.14279258874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129939.36682764132,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 129937.05423477029 ns\nthreads: 1"
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
        "date": 1702381117750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1001.6713034295462,
            "unit": "ns/iter",
            "extra": "iterations: 695097\ncpu: 1001.6492662175209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20342.278627802458,
            "unit": "ns/iter",
            "extra": "iterations: 41306\ncpu: 20341.80506463952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45517.42376969324,
            "unit": "ns/iter",
            "extra": "iterations: 19487\ncpu: 45516.723969826024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57860.25539999855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57858.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69277.43123070573,
            "unit": "ns/iter",
            "extra": "iterations: 11335\ncpu: 69274.82134980155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86467.03647326268,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 86464.34713847983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103833.35608132233,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 103830.66222803478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121870.81806775519,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 121866.90366652717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152315.291141364,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 152307.79963018987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 849.1959975172109,
            "unit": "ns/iter",
            "extra": "iterations: 824888\ncpu: 849.178555149305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 677.4646593086202,
            "unit": "ns/iter",
            "extra": "iterations: 1009785\ncpu: 677.4568843862804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 675.5014284181278,
            "unit": "ns/iter",
            "extra": "iterations: 1034361\ncpu: 675.4916320317565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 685.9759170738035,
            "unit": "ns/iter",
            "extra": "iterations: 1020474\ncpu: 685.9635816297136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1324.5585103795972,
            "unit": "ns/iter",
            "extra": "iterations: 514037\ncpu: 1324.536949674829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6363.395991222964,
            "unit": "ns/iter",
            "extra": "iterations: 128518\ncpu: 6363.275183242826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37280.27562171186,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 37279.37671448492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27383.70858037436,
            "unit": "ns/iter",
            "extra": "iterations: 30022\ncpu: 27383.17900206515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25158.850842507753,
            "unit": "ns/iter",
            "extra": "iterations: 32878\ncpu: 25158.36729728083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26640.009632422938,
            "unit": "ns/iter",
            "extra": "iterations: 31041\ncpu: 26639.21909732288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 71186.28032628098,
            "unit": "ns/iter",
            "extra": "iterations: 12382\ncpu: 71184.46131481198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620435.6609999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620420.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 619382.8128531236,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 619365.4661016959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 619520.8837375088,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 619499.286733239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 622012.9893917841,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 621987.2701555875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359710.9954657693,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 359701.40148392366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 620736.5289139559,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 620712.1297602262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2815920.9615384066,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2815753.846153849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1191417.749685573,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1191356.8553459125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3556936.694339695,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3556760.754716975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6431.33189595554,
            "unit": "ns/iter",
            "extra": "iterations: 130098\ncpu: 6425.991175882792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37734.288208018974,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 37732.698427129726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27397.92188116044,
            "unit": "ns/iter",
            "extra": "iterations: 30428\ncpu: 27397.242671223827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26738.773756966963,
            "unit": "ns/iter",
            "extra": "iterations: 31033\ncpu: 26738.062707440426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27333.372249308024,
            "unit": "ns/iter",
            "extra": "iterations: 30356\ncpu: 27333.317960205568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71483.23430627504,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 71481.05557776886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 624597.404000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624575.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 522774.242999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522773.4999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 519766.642000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519746.90000000125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528340.3870000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528332.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 367605.4636287728,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 367588.71237458306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 507927.3190000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507912.9000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2909226.9686520495,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2909107.5235109795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1249679.5191040614,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1249639.6574440121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6359.887631151358,
            "unit": "ns/iter",
            "extra": "iterations: 131718\ncpu: 6359.678252023294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37758.7497769455,
            "unit": "ns/iter",
            "extra": "iterations: 22416\ncpu: 37757.83815132049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27519.540789474428,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27518.52631578926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26747.452863463423,
            "unit": "ns/iter",
            "extra": "iterations: 31186\ncpu: 26746.66517026877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26940.42695904699,
            "unit": "ns/iter",
            "extra": "iterations: 31010\ncpu: 26939.16156078677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 70030.7784977205,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 70028.27773778127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 632871.9769999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632848.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 515214.70600005164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515159.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 513537.370999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513531.0000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 511637.92199997714,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511613.90000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 372799.69047618454,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 372779.8469387772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 515007.46900001104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514994.5999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 334.2304051250858,
            "unit": "ns/iter",
            "extra": "iterations: 2087306\ncpu: 334.21985085081167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2928.9452196706857,
            "unit": "ns/iter",
            "extra": "iterations: 238425\ncpu: 2928.6299674950305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2136.6132863342727,
            "unit": "ns/iter",
            "extra": "iterations: 326531\ncpu: 2136.522412879641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2262.1336919349806,
            "unit": "ns/iter",
            "extra": "iterations: 308792\ncpu: 2262.075766211567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1582.9250827534047,
            "unit": "ns/iter",
            "extra": "iterations: 441674\ncpu: 1582.8323605192882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14407.695838458558,
            "unit": "ns/iter",
            "extra": "iterations: 48780\ncpu: 14407.42312423121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33988.06318835022,
            "unit": "ns/iter",
            "extra": "iterations: 21428\ncpu: 33985.50028000749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7923.517782450554,
            "unit": "ns/iter",
            "extra": "iterations: 88458\ncpu: 7923.275452757237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7879.212878385774,
            "unit": "ns/iter",
            "extra": "iterations: 88567\ncpu: 7878.926688269845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7874.5340958883135,
            "unit": "ns/iter",
            "extra": "iterations: 88999\ncpu: 7874.140158878165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16631.595798279435,
            "unit": "ns/iter",
            "extra": "iterations: 42078\ncpu: 16631.11126954701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15535.96629665233,
            "unit": "ns/iter",
            "extra": "iterations: 44773\ncpu: 15535.063542760132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4397.76732623782,
            "unit": "ns/iter",
            "extra": "iterations: 160104\ncpu: 4397.685879178505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23379.008750543908,
            "unit": "ns/iter",
            "extra": "iterations: 29941\ncpu: 23378.063524932106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17781.870761722195,
            "unit": "ns/iter",
            "extra": "iterations: 38518\ncpu: 17781.40609585143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18369.12140978414,
            "unit": "ns/iter",
            "extra": "iterations: 38020\ncpu: 18368.913729615815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19116.613801948442,
            "unit": "ns/iter",
            "extra": "iterations: 36647\ncpu: 19115.783010887484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38735.48377613741,
            "unit": "ns/iter",
            "extra": "iterations: 18029\ncpu: 38734.0118697661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152824.1244008698,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 152820.26143790685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134070.42398164122,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 134070.22375215223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134633.0720876578,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134627.41253364104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135391.4084670439,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135391.18499903491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80502.17195402141,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80501.33333333423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131947.72610502783,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 131945.52323385183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4291.907599383054,
            "unit": "ns/iter",
            "extra": "iterations: 163408\ncpu: 4291.762949182427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22184.89919571122,
            "unit": "ns/iter",
            "extra": "iterations: 31705\ncpu: 22184.54187036767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17751.966037161044,
            "unit": "ns/iter",
            "extra": "iterations: 39396\ncpu: 17751.62960706674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17670.391369236328,
            "unit": "ns/iter",
            "extra": "iterations: 39533\ncpu: 17670.105987403003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18535.246215730116,
            "unit": "ns/iter",
            "extra": "iterations: 37788\ncpu: 18534.80469990456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37096.57406719498,
            "unit": "ns/iter",
            "extra": "iterations: 18841\ncpu: 37095.58940608205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149896.39730423503,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 149896.0847240047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 134986.83553513413,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134982.67279341456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134205.47416762562,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134205.24301569018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134195.6162523831,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134190.554493308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79044.47266154579,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 79043.14279258874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129939.36682764132,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 129937.05423477029 ns\nthreads: 1"
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
        "date": 1702382312874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1033.1999815677266,
            "unit": "ns/iter",
            "extra": "iterations: 531674\ncpu: 1033.1579125554383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19903.860403525377,
            "unit": "ns/iter",
            "extra": "iterations: 41534\ncpu: 19902.98309818462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46398.882952815125,
            "unit": "ns/iter",
            "extra": "iterations: 19710\ncpu: 46396.25063419584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56755.80609999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56750.18999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69648.83830631603,
            "unit": "ns/iter",
            "extra": "iterations: 11596\ncpu: 69645.64505001727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87304.70888092316,
            "unit": "ns/iter",
            "extra": "iterations: 10044\ncpu: 87301.3440860215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103861.12422581935,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 103853.71605526443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121237.99126455872,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 121230.76816417086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151647.0590865495,
            "unit": "ns/iter",
            "extra": "iterations: 6262\ncpu: 151638.00702650897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 826.2047149892744,
            "unit": "ns/iter",
            "extra": "iterations: 845898\ncpu: 826.1306918801082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 677.7038742665153,
            "unit": "ns/iter",
            "extra": "iterations: 1033615\ncpu: 677.6803742205766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 679.1010775780377,
            "unit": "ns/iter",
            "extra": "iterations: 1027211\ncpu: 679.0658394429199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 678.1291347507628,
            "unit": "ns/iter",
            "extra": "iterations: 1035794\ncpu: 678.0717980602328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1355.6643365580633,
            "unit": "ns/iter",
            "extra": "iterations: 516428\ncpu: 1355.5736714508098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6418.860924376032,
            "unit": "ns/iter",
            "extra": "iterations: 128822\ncpu: 6418.440173262332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37413.041854793344,
            "unit": "ns/iter",
            "extra": "iterations: 22148\ncpu: 37411.2967310818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27396.407600276732,
            "unit": "ns/iter",
            "extra": "iterations: 30341\ncpu: 27394.67387363632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26662.881520238214,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 26661.470805379915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27343.329078527575,
            "unit": "ns/iter",
            "extra": "iterations: 30397\ncpu: 27341.800177649042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70203.62910116721,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 70199.54856912515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 617584.7789999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617524.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 621697.6661951813,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 621537.6944837344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 619084.3395017763,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 619031.1743772244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 500930.35099996545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500917.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357988.2900981889,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 357963.4615384621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 614111.1647646172,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 614058.7731811709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2794746.392330285,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2794541.8879056056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1211682.8979591613,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1211593.749999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3593114.9049430606,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3592845.2471482935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6483.96440484326,
            "unit": "ns/iter",
            "extra": "iterations: 130411\ncpu: 6483.476087139888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37538.15753455381,
            "unit": "ns/iter",
            "extra": "iterations: 22211\ncpu: 37536.20278240507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27648.338484581862,
            "unit": "ns/iter",
            "extra": "iterations: 29378\ncpu: 27645.976581115112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26876.923941478508,
            "unit": "ns/iter",
            "extra": "iterations: 30963\ncpu: 26875.50947905562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27529.662098643556,
            "unit": "ns/iter",
            "extra": "iterations: 30210\ncpu: 27528.94074809673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 70324.13252525455,
            "unit": "ns/iter",
            "extra": "iterations: 12375\ncpu: 70320.33939393936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 628830.1490000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628764.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 525549.5970000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525506.2000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 518372.2310000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518357.99999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 517532.5870000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517481.79999999877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362843.4878650839,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 362823.98190045246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 507859.23099999764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507857.1000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2949733.7578616,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2949499.6855345718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1229479.1304909152,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 1229371.834625323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6342.744142576884,
            "unit": "ns/iter",
            "extra": "iterations: 131073\ncpu: 6342.251264562517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37624.113301385194,
            "unit": "ns/iter",
            "extra": "iterations: 22118\ncpu: 37621.941405190315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27453.82003759534,
            "unit": "ns/iter",
            "extra": "iterations: 30323\ncpu: 27452.392573294186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26798.123806472704,
            "unit": "ns/iter",
            "extra": "iterations: 31210\ncpu: 26796.449855815554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26918.118090694414,
            "unit": "ns/iter",
            "extra": "iterations: 31027\ncpu: 26916.769265478277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 69671.54450979056,
            "unit": "ns/iter",
            "extra": "iterations: 12413\ncpu: 69667.13123338454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 630593.8369999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630538.2999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 515527.29400003725,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515514.1000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 515304.97700002795,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515256.5000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 515282.8650000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515270.7000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 374503.1389945199,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 374496.155471059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 514231.95699999266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514205.60000000393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 335.24938199428567,
            "unit": "ns/iter",
            "extra": "iterations: 2090191\ncpu: 335.2251540648689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3046.854703649315,
            "unit": "ns/iter",
            "extra": "iterations: 235498\ncpu: 3046.638188010079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2132.5090005408997,
            "unit": "ns/iter",
            "extra": "iterations: 342035\ncpu: 2132.382358530571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2267.5846191233045,
            "unit": "ns/iter",
            "extra": "iterations: 316861\ncpu: 2267.4052660314637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1590.170066498212,
            "unit": "ns/iter",
            "extra": "iterations: 440463\ncpu: 1590.0892924036748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14431.824930633755,
            "unit": "ns/iter",
            "extra": "iterations: 48655\ncpu: 14430.763539204543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32657.000838144122,
            "unit": "ns/iter",
            "extra": "iterations: 21476\ncpu: 32654.78208232438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7826.713451736583,
            "unit": "ns/iter",
            "extra": "iterations: 89074\ncpu: 7826.250084199669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7741.807133010704,
            "unit": "ns/iter",
            "extra": "iterations: 89948\ncpu: 7741.211588918026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7792.6337079655505,
            "unit": "ns/iter",
            "extra": "iterations: 89688\ncpu: 7792.582062260285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16423.159867577873,
            "unit": "ns/iter",
            "extra": "iterations: 46820\ncpu: 16422.797949594285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15204.2990942464,
            "unit": "ns/iter",
            "extra": "iterations: 46039\ncpu: 15204.194270075404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4317.838063926579,
            "unit": "ns/iter",
            "extra": "iterations: 160903\ncpu: 4317.677109811474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23322.314793214977,
            "unit": "ns/iter",
            "extra": "iterations: 30007\ncpu: 23321.071749924995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 18178.950099851852,
            "unit": "ns/iter",
            "extra": "iterations: 38557\ncpu: 18177.700547241704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 20917.405105175196,
            "unit": "ns/iter",
            "extra": "iterations: 38079\ncpu: 20914.12327004414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19180.513785962696,
            "unit": "ns/iter",
            "extra": "iterations: 36704\ncpu: 19178.759808195253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38983.01620152071,
            "unit": "ns/iter",
            "extra": "iterations: 18023\ncpu: 38980.458303279054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154411.1607773802,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154398.85159010568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133631.7657142856,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133618.07619047622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134686.20107650393,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134671.54940407496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135996.40329864863,
            "unit": "ns/iter",
            "extra": "iterations: 5093\ncpu: 135979.93324170526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80773.40986630021,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80770.44721069583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 132910.5852595707,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132898.08639636132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4140.0942284338735,
            "unit": "ns/iter",
            "extra": "iterations: 167996\ncpu: 4140.0646443962905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22182.751294029287,
            "unit": "ns/iter",
            "extra": "iterations: 31684\ncpu: 22181.549046837477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17737.77570472652,
            "unit": "ns/iter",
            "extra": "iterations: 39448\ncpu: 17737.322551206496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17599.889946193864,
            "unit": "ns/iter",
            "extra": "iterations: 40144\ncpu: 17598.829214826634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18512.714474587687,
            "unit": "ns/iter",
            "extra": "iterations: 37818\ncpu: 18511.179861441673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37477.9165508391,
            "unit": "ns/iter",
            "extra": "iterations: 18706\ncpu: 37475.17374104509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 148055.09288324934,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 148045.00107504055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 131551.90294006947,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 131549.0388239725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133357.29114412313,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 133347.30850858593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134407.46835442772,
            "unit": "ns/iter",
            "extra": "iterations: 5135\ncpu: 134401.2852969834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79554.07469633747,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 79547.76932682353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 131595.92984431458,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131590.39579816067 ns\nthreads: 1"
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
        "date": 1702387064118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1012.4815812469203,
            "unit": "ns/iter",
            "extra": "iterations: 692365\ncpu: 1012.3976515277346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20314.46381157301,
            "unit": "ns/iter",
            "extra": "iterations: 41353\ncpu: 20313.79101878945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46298.02437883178,
            "unit": "ns/iter",
            "extra": "iterations: 19238\ncpu: 46295.69601829712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57627.062400001705,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57624.42000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70376.05954681175,
            "unit": "ns/iter",
            "extra": "iterations: 11386\ncpu: 70373.62550500612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88066.15142337499,
            "unit": "ns/iter",
            "extra": "iterations: 9906\ncpu: 88058.44942459116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105216.20911722293,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 105208.98456343469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 134389.1147402502,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 134383.48585104887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 153436.50939382563,
            "unit": "ns/iter",
            "extra": "iterations: 5642\ncpu: 153430.095710741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 856.790627556855,
            "unit": "ns/iter",
            "extra": "iterations: 822539\ncpu: 856.7761528632677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 698.4869058874762,
            "unit": "ns/iter",
            "extra": "iterations: 999495\ncpu: 698.4586216039098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 696.0414855670919,
            "unit": "ns/iter",
            "extra": "iterations: 1005892\ncpu: 695.9928103613498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 698.7510905465545,
            "unit": "ns/iter",
            "extra": "iterations: 1000645\ncpu: 698.7071338986353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1336.2369342621903,
            "unit": "ns/iter",
            "extra": "iterations: 525420\ncpu: 1336.1815309657059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6522.307662532682,
            "unit": "ns/iter",
            "extra": "iterations: 129174\ncpu: 6522.204932881217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38142.03653519377,
            "unit": "ns/iter",
            "extra": "iterations: 22362\ncpu: 38140.14399427605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27475.788099030615,
            "unit": "ns/iter",
            "extra": "iterations: 30132\ncpu: 27474.618345944502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26623.467010341985,
            "unit": "ns/iter",
            "extra": "iterations: 30843\ncpu: 26621.495963427675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27293.124580465497,
            "unit": "ns/iter",
            "extra": "iterations: 30093\ncpu: 27291.695743196095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70876.74567319658,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70873.01535711365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622676.8329999573,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622611.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 619019.8253182382,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 618981.4710042428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 622612.2710413705,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 622585.3067047099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 504854.27799998206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504809.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 361385.43945069826,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 361372.6591760294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 504540.96099997516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504511.90000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2781232.9821957075,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2781108.6053412436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1211136.8815286444,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1211083.0573248407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3570554.172932303,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3570401.5037593874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6440.920657244407,
            "unit": "ns/iter",
            "extra": "iterations: 130119\ncpu: 6440.531359755302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37510.132217272396,
            "unit": "ns/iter",
            "extra": "iterations: 22221\ncpu: 37508.685477701285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27401.819508018754,
            "unit": "ns/iter",
            "extra": "iterations: 30367\ncpu: 27400.602627852597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26915.463786776312,
            "unit": "ns/iter",
            "extra": "iterations: 31066\ncpu: 26914.585076933126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27648.88296178338,
            "unit": "ns/iter",
            "extra": "iterations: 30144\ncpu: 27648.427547770676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71134.9927447587,
            "unit": "ns/iter",
            "extra": "iterations: 12267\ncpu: 71132.73824080845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 631619.1380000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631582.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 528304.2070000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528266.7999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 519876.174999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519876.59999999637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522904.3810000462,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522867.50000000384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 364496.07002918114,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 364485.577323884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 510204.90899998095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510190.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2937354.9811321697,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2937138.9937107014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1202090.2329974633,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1202041.1838790933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6282.754209007388,
            "unit": "ns/iter",
            "extra": "iterations: 133048\ncpu: 6282.426643016087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37446.81599172932,
            "unit": "ns/iter",
            "extra": "iterations: 22249\ncpu: 37444.878421501926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27703.57998871359,
            "unit": "ns/iter",
            "extra": "iterations: 30123\ncpu: 27702.629220197014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26880.02083535002,
            "unit": "ns/iter",
            "extra": "iterations: 31005\ncpu: 26878.335752298124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27067.987354085195,
            "unit": "ns/iter",
            "extra": "iterations: 30840\ncpu: 27066.825551232163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 71006.3778302623,
            "unit": "ns/iter",
            "extra": "iterations: 12278\ncpu: 71002.16647662476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 630648.715999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630619.2999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 516294.2469999621,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516295.39999999705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 515450.7980000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515404.60000000364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 517123.8620000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517111.70000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 371018.1712242365,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 371015.56583929266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 509518.8550000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509482.59999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 340.2160270882574,
            "unit": "ns/iter",
            "extra": "iterations: 2047234\ncpu: 340.2029274621267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3067.9453693703936,
            "unit": "ns/iter",
            "extra": "iterations: 227766\ncpu: 3067.7629672558714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2148.422785774218,
            "unit": "ns/iter",
            "extra": "iterations: 325633\ncpu: 2148.3396953011447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2189.43720986968,
            "unit": "ns/iter",
            "extra": "iterations: 319684\ncpu: 2189.323206666586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1596.199828998561,
            "unit": "ns/iter",
            "extra": "iterations: 432745\ncpu: 1596.122196674713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14453.810540485416,
            "unit": "ns/iter",
            "extra": "iterations: 48290\ncpu: 14453.073100020792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33955.485889806354,
            "unit": "ns/iter",
            "extra": "iterations: 20836\ncpu: 33954.17066615495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7732.572469117821,
            "unit": "ns/iter",
            "extra": "iterations: 90749\ncpu: 7732.091813683882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7724.359526040389,
            "unit": "ns/iter",
            "extra": "iterations: 90725\ncpu: 7724.210526315758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7778.083577892534,
            "unit": "ns/iter",
            "extra": "iterations: 89617\ncpu: 7777.777653793371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16429.047071497276,
            "unit": "ns/iter",
            "extra": "iterations: 42701\ncpu: 16428.12346315074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15105.992426687964,
            "unit": "ns/iter",
            "extra": "iterations: 46479\ncpu: 15105.391682264968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4369.7563492607005,
            "unit": "ns/iter",
            "extra": "iterations: 160373\ncpu: 4369.543501711639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23065.392419729993,
            "unit": "ns/iter",
            "extra": "iterations: 30210\ncpu: 23064.515061237744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17987.549253117857,
            "unit": "ns/iter",
            "extra": "iterations: 38962\ncpu: 17986.212206765435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17909.98392085729,
            "unit": "ns/iter",
            "extra": "iterations: 39119\ncpu: 17909.064648892032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19327.300569249575,
            "unit": "ns/iter",
            "extra": "iterations: 36188\ncpu: 19326.160605725585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38726.38421489846,
            "unit": "ns/iter",
            "extra": "iterations: 18055\ncpu: 38724.76876211642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 155448.0514412393,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 155438.5365853671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134368.16385588108,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 134361.11536987414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134443.45360627433,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 134442.33786110513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137112.9966692776,
            "unit": "ns/iter",
            "extra": "iterations: 5104\ncpu: 137111.7163009396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81347.69126099935,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 81344.5395894427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 136395.4943454091,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 136383.51543032282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4183.388404460375,
            "unit": "ns/iter",
            "extra": "iterations: 166978\ncpu: 4183.218148498616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22437.959036836535,
            "unit": "ns/iter",
            "extra": "iterations: 31272\ncpu: 22436.793297518834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17787.808482795055,
            "unit": "ns/iter",
            "extra": "iterations: 38973\ncpu: 17786.01082800917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17800.75966241733,
            "unit": "ns/iter",
            "extra": "iterations: 39457\ncpu: 17800.10137618178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18792.766966147454,
            "unit": "ns/iter",
            "extra": "iterations: 37398\ncpu: 18791.79367880639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37650.5785652815,
            "unit": "ns/iter",
            "extra": "iterations: 18596\ncpu: 37648.21466982111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152667.06444016285,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 152658.38150289143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 134191.5572416441,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 134187.86016135264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 135116.2798918257,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135111.58972377848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 135966.27701527558,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135960.13918422532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79137.11772665654,
            "unit": "ns/iter",
            "extra": "iterations: 8868\ncpu: 79134.75417230534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 130302.4093610703,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130298.69985141396 ns\nthreads: 1"
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
        "date": 1702388109927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1008.4822322010124,
            "unit": "ns/iter",
            "extra": "iterations: 690350\ncpu: 1008.4394872166292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19873.122927249973,
            "unit": "ns/iter",
            "extra": "iterations: 41732\ncpu: 19872.215565992523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45602.653075714465,
            "unit": "ns/iter",
            "extra": "iterations: 19719\ncpu: 45599.84786246768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57003.199899997984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56999.979999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68146.4183350909,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 68138.57569371269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85283.1289947707,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 85281.33836916521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102265.67502387488,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 102262.09407831899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123759.6154163235,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 123753.68233031056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 148967.1729746601,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 148959.83734751333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 829.945225855152,
            "unit": "ns/iter",
            "extra": "iterations: 844413\ncpu: 829.9135612549793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 704.8930172907627,
            "unit": "ns/iter",
            "extra": "iterations: 992609\ncpu: 704.8777514610476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 681.5771739893828,
            "unit": "ns/iter",
            "extra": "iterations: 1024568\ncpu: 681.5350469661354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 681.7480903367415,
            "unit": "ns/iter",
            "extra": "iterations: 1024788\ncpu: 681.7051917079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1304.2397455237074,
            "unit": "ns/iter",
            "extra": "iterations: 539618\ncpu: 1304.188147912044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6442.903833627869,
            "unit": "ns/iter",
            "extra": "iterations: 128964\ncpu: 6442.667721224528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37573.06105969928,
            "unit": "ns/iter",
            "extra": "iterations: 22044\ncpu: 37571.60678642713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27756.966838269527,
            "unit": "ns/iter",
            "extra": "iterations: 29914\ncpu: 27755.57598448887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27143.46494102165,
            "unit": "ns/iter",
            "extra": "iterations: 30520\ncpu: 27141.766055045817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27669.296680080493,
            "unit": "ns/iter",
            "extra": "iterations: 29820\ncpu: 27668.27632461429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70705.26963855218,
            "unit": "ns/iter",
            "extra": "iterations: 12450\ncpu: 70701.9678714861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 608845.2839999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608805.4000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 620401.918745559,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 620370.2066999294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 614601.6756756752,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 614595.8748221903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 617051.8359046245,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 617013.1837307148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 356589.718379047,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 356575.60376586206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616371.4723011117,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 616366.1221590904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2788404.0614033807,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2788275.7309941575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1176342.706748439,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1176322.822085891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3575922.7849057596,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3575825.2830188633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6349.93879321472,
            "unit": "ns/iter",
            "extra": "iterations: 131407\ncpu: 6349.572701606467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37385.80898725774,
            "unit": "ns/iter",
            "extra": "iterations: 22365\ncpu: 37383.997317236724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27482.413107290966,
            "unit": "ns/iter",
            "extra": "iterations: 30319\ncpu: 27481.308750288423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26817.124927274286,
            "unit": "ns/iter",
            "extra": "iterations: 30938\ncpu: 26816.183980865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27548.834833737023,
            "unit": "ns/iter",
            "extra": "iterations: 30103\ncpu: 27547.486961432416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71011.47202063812,
            "unit": "ns/iter",
            "extra": "iterations: 12402\ncpu: 71008.34542815675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 616006.294999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615976.0000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 517575.733000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517561.70000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 509174.1470000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509147.09999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 511694.7500000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511690.20000000385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362986.99505969934,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 362970.31700288225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 503738.9830000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503720.80000000354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2938354.3993710373,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2938221.698113223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1212876.629629653,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1212839.0804597675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6327.915245517318,
            "unit": "ns/iter",
            "extra": "iterations: 132170\ncpu: 6327.560717258116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37147.603761003076,
            "unit": "ns/iter",
            "extra": "iterations: 22494\ncpu: 37146.701342580425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27402.555595727434,
            "unit": "ns/iter",
            "extra": "iterations: 30425\ncpu: 27401.531635168503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26729.353690136715,
            "unit": "ns/iter",
            "extra": "iterations: 31259\ncpu: 26728.33743881768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26858.720438401768,
            "unit": "ns/iter",
            "extra": "iterations: 31113\ncpu: 26856.632275897566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 69810.18395965951,
            "unit": "ns/iter",
            "extra": "iterations: 12693\ncpu: 69806.98810367932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 611606.6519999777,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611591.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 506805.01699997653,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506775.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 508435.2250000279,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508430.5000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 505231.1369999529,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505191.10000000463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 371644.0021017216,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 371625.0945775539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 509342.13499999716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509311.6999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 337.84124638246846,
            "unit": "ns/iter",
            "extra": "iterations: 2071852\ncpu: 337.8267849247936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3037.846027446901,
            "unit": "ns/iter",
            "extra": "iterations: 231866\ncpu: 3037.719631166268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2129.2966392807984,
            "unit": "ns/iter",
            "extra": "iterations: 329245\ncpu: 2129.2128961715407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2213.9800781011268,
            "unit": "ns/iter",
            "extra": "iterations: 312671\ncpu: 2213.882963242512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1591.777582696834,
            "unit": "ns/iter",
            "extra": "iterations: 439134\ncpu: 1591.6941070379503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14446.486849422728,
            "unit": "ns/iter",
            "extra": "iterations: 48553\ncpu: 14446.23195271146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34297.97472415302,
            "unit": "ns/iter",
            "extra": "iterations: 20573\ncpu: 34296.067661498135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7987.402528073879,
            "unit": "ns/iter",
            "extra": "iterations: 88605\ncpu: 7987.18018170525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7900.036582382444,
            "unit": "ns/iter",
            "extra": "iterations: 89934\ncpu: 7899.716458736354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7957.123927734339,
            "unit": "ns/iter",
            "extra": "iterations: 87898\ncpu: 7956.805615599957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16612.815403745182,
            "unit": "ns/iter",
            "extra": "iterations: 41821\ncpu: 16611.83615886746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15650.489973766431,
            "unit": "ns/iter",
            "extra": "iterations: 44982\ncpu: 15649.755457738629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4417.605196887136,
            "unit": "ns/iter",
            "extra": "iterations: 158441\ncpu: 4417.399536736087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23464.776072084747,
            "unit": "ns/iter",
            "extra": "iterations: 29965\ncpu: 23464.395127649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 18058.580697190504,
            "unit": "ns/iter",
            "extra": "iterations: 38440\ncpu: 18058.28043704493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17896.678780986913,
            "unit": "ns/iter",
            "extra": "iterations: 38687\ncpu: 17896.2700648796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19505.142426861818,
            "unit": "ns/iter",
            "extra": "iterations: 35857\ncpu: 19504.685277630764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38761.38497756559,
            "unit": "ns/iter",
            "extra": "iterations: 18053\ncpu: 38760.63258184281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154661.38579016816,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 154659.9822930513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 132593.2992051415,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132589.96971990928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133841.259414228,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 133838.3605933802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135709.8179531799,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 135708.5703230807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80134.80963329156,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 80133.4176342116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 132912.1598329511,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132911.02885345442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4172.99970540473,
            "unit": "ns/iter",
            "extra": "iterations: 166330\ncpu: 4172.830517645619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22232.874197399662,
            "unit": "ns/iter",
            "extra": "iterations: 30993\ncpu: 22232.668667118363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 18009.499364999316,
            "unit": "ns/iter",
            "extra": "iterations: 39370\ncpu: 18008.773177546234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 18118.49064551061,
            "unit": "ns/iter",
            "extra": "iterations: 38698\ncpu: 18118.321360277005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18728.78999892313,
            "unit": "ns/iter",
            "extra": "iterations: 37176\ncpu: 18728.179470626295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37872.89325233206,
            "unit": "ns/iter",
            "extra": "iterations: 18436\ncpu: 37872.537426774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 154675.14148050675,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 154671.20017520737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135986.63507477078,
            "unit": "ns/iter",
            "extra": "iterations: 5149\ncpu: 135984.34647504374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 136460.18144610527,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 136456.92847398357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 136524.36969697234,
            "unit": "ns/iter",
            "extra": "iterations: 5115\ncpu: 136517.18475073378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80975.39951461946,
            "unit": "ns/iter",
            "extra": "iterations: 8653\ncpu: 80971.00427597483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132889.01492537517,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 132884.54562629896 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}