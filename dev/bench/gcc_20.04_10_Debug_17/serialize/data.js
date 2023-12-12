window.BENCHMARK_DATA = {
  "lastUpdate": 1702412532165,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 20.04 Debug c++-17": [
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
        "date": 1702398831854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7468.009216984099,
            "unit": "ns/iter",
            "extra": "iterations: 93523\ncpu: 7467.736278776344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96029.57815442698,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 96021.0812008419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182771.09071905937,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 182762.56270903014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273682.8818525397,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 273668.0214240705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 356617.03117206594,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 356593.76558603486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443327.9414162153,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 443298.67549668864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 530995.3818514138,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 530981.303288672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 616266.671852903,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 616259.8302687414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565179.7440000337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565155.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5809.622726141984,
            "unit": "ns/iter",
            "extra": "iterations: 120610\ncpu: 5809.485946438935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4773.990147212122,
            "unit": "ns/iter",
            "extra": "iterations: 146659\ncpu: 4773.782038606558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4720.421022788303,
            "unit": "ns/iter",
            "extra": "iterations: 148144\ncpu: 4720.165514634422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4803.020052639854,
            "unit": "ns/iter",
            "extra": "iterations: 145517\ncpu: 4802.654672649929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8344.941453526324,
            "unit": "ns/iter",
            "extra": "iterations: 83865\ncpu: 8344.212722828355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46976.57331896459,
            "unit": "ns/iter",
            "extra": "iterations: 16701\ncpu: 46973.510568229445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 198282.4886363591,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 198270.89517625252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 161211.12302184972,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 161200.41446872585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 161327.41092279175,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 161315.9698681732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162923.1453853446,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 162910.56137012367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 360632.531640316,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 360617.4437968359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2915838.881987665,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2915762.732919253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2367473.2538071806,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2367401.0152284293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2393833.6838045404,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2393777.634961437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2411093.9818653283,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2411035.751295339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1411703.9439394253,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1411681.6666666686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2327544.0124688037,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2327438.4039900247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10010601.037735887,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10010433.962264173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5583105.416666813,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5582919.642857145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11564906.521739282,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11564066.304347813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47684.53442206605,
            "unit": "ns/iter",
            "extra": "iterations: 17329\ncpu: 47682.09937099647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 199644.4656577442,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 199633.3876600691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162986.24241845464,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 162976.23497997408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 167724.98444102923,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 167626.93046484826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164500.46607725738,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 164497.71285796724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 361898.2493786159,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 361894.20049710077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2907036.545171314,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2906971.028037393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2393649.266666787,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2393584.3589743567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2409201.1705425773,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2409125.06459949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2425966.3507852936,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2425924.607329858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1422198.2033639706,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422157.3394495354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2340311.135338267,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2340226.3157894732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10209185.21698083,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10208907.547169762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5774133.413580187,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5773889.5061728405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47794.557654761804,
            "unit": "ns/iter",
            "extra": "iterations: 17414\ncpu: 47791.5872286667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 204534.34864351098,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 204529.34316991948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 162954.11437785116,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 162944.27162367175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160483.06332897296,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 160473.88380347565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 162894.3652603564,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 162888.141391106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 365712.76278289413,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 365707.3344509643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2909360.8691589897,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2909329.283489107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2381709.7175571304,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2381617.8117048377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2430281.3506492446,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2430231.428571418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2407833.3324742103,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2407745.87628865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1423393.9954337436,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1423359.208523593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2341963.3400504994,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2341872.5440806053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2683.426214471747,
            "unit": "ns/iter",
            "extra": "iterations: 260566\ncpu: 2683.3558484222904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20028.70393505728,
            "unit": "ns/iter",
            "extra": "iterations: 34739\ncpu: 20027.833270963358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15600.366992327143,
            "unit": "ns/iter",
            "extra": "iterations: 44832\ncpu: 15599.792558886524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15185.025061032167,
            "unit": "ns/iter",
            "extra": "iterations: 46287\ncpu: 15184.475122604545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11739.677901617226,
            "unit": "ns/iter",
            "extra": "iterations: 59665\ncpu: 11739.525685075012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81439.78977338765,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 81439.67460778539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187752.52350426815,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 187747.3023504265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46226.288705415005,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 46225.640686922015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46825.01774675896,
            "unit": "ns/iter",
            "extra": "iterations: 15045\ncpu: 46824.38019275445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46324.22960905212,
            "unit": "ns/iter",
            "extra": "iterations: 15117\ncpu: 46322.616921347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98049.1029453005,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 98046.88639551285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87286.18185218013,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87284.94328804826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21982.81100012616,
            "unit": "ns/iter",
            "extra": "iterations: 31836\ncpu: 21981.345018218668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 107218.1718965216,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 107214.80177560046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85684.48942930829,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 85678.52865697326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85528.58840900686,
            "unit": "ns/iter",
            "extra": "iterations: 8127\ncpu: 85526.68881506007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 87296.49127616793,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87290.65304087692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161165.82661754434,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 161157.77112594884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 778761.2272727075,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 778728.3813747306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 653662.3142588974,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 653615.853658534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 654445.732514145,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 654431.5689981106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 662004.2500000148,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 661951.41509435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 412972.44424778165,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 412964.0707964552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 640974.6489945081,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 640937.2029250511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22159.449632771473,
            "unit": "ns/iter",
            "extra": "iterations: 31588\ncpu: 22158.15816132695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 108238.38555332703,
            "unit": "ns/iter",
            "extra": "iterations: 6479\ncpu: 108232.56675412852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86522.4855941661,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86515.76604426831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 87070.8140665935,
            "unit": "ns/iter",
            "extra": "iterations: 8019\ncpu: 87070.74448185592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 88874.5873921819,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88872.03196347081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 161905.39102415807,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 161897.16915995616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 780113.0658482107,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 780069.9776785595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 654282.3956969314,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 654231.992516376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 655204.5624413177,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 655203.3802816921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 657974.3483992735,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 657930.9792843735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 413277.23036030045,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 413267.3951565311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 642687.6773309354,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 642636.6544789672 ns\nthreads: 1"
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
        "date": 1702409141814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7421.467427696894,
            "unit": "ns/iter",
            "extra": "iterations: 94083\ncpu: 7421.417259228553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94740.63800806284,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 94738.00806363736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 180356.36709902342,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 180355.40457072266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 268784.96513075475,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 268784.2154420921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 351906.092645281,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 351899.9593661114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 437185.8194583738,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 437178.4353059179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 524460.4488567708,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 524458.5439229838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 618299.0412876095,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 618285.1644506648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565198.778000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565186.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5636.977105267138,
            "unit": "ns/iter",
            "extra": "iterations: 124046\ncpu: 5636.958063944029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4694.221005405545,
            "unit": "ns/iter",
            "extra": "iterations: 149114\ncpu: 4694.192362890137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4663.272271863767,
            "unit": "ns/iter",
            "extra": "iterations: 149516\ncpu: 4663.179191524655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4738.415869649355,
            "unit": "ns/iter",
            "extra": "iterations: 147111\ncpu: 4738.396177036391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8392.577044119245,
            "unit": "ns/iter",
            "extra": "iterations: 83569\ncpu: 8392.521150187273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46838.16975604281,
            "unit": "ns/iter",
            "extra": "iterations: 17749\ncpu: 46837.957068003765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 192449.73794642865,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 192444.48660714302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 154667.42918609479,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 154666.74435281486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156811.58406113533,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 156810.80786026173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155283.79482035944,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 155283.2938172531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 352607.22321067605,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 352593.8536190869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2832341.643292718,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2832334.7560975575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2367640.1450382206,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2367585.750636132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2361719.5177664966,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2361697.969543149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398035.187660698,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2397998.20051414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1427761.7307692044,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427743.692307693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2293619.772839475,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2293580.7407407435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9850833.833333448,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9850250.925925937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5699176.073619583,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5699044.171779142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11470913.881720373,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11470163.440860182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46849.46377631757,
            "unit": "ns/iter",
            "extra": "iterations: 17668\ncpu: 46846.145573919086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 193445.77348313967,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 193437.28089887628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 157518.2707990428,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 157511.0257816788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 158607.81163689354,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 158602.54096851381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159129.69752401882,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159120.25129342172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 362070.35681722604,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 362058.80646498204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2881785.9329074156,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2881639.9361022217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2404554.3247422427,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2404470.360824747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2380888.025575504,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2380739.8976982217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2427876.0288713337,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2427823.884514437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1444175.9329173686,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1444106.708268325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2328346.1349998903,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2328218.5000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10101926.700934721,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10101403.738317762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5722258.969512257,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5721979.878048778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47670.071019142735,
            "unit": "ns/iter",
            "extra": "iterations: 17446\ncpu: 47668.451220909985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 190651.73165850274,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 190640.8403734999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 156661.74029303796,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 156657.45421245383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 156354.29171250327,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 156346.47964796526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157301.45687430917,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 157295.81643936646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 351622.92310806504,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 351608.539053014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2866178.492354787,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2866015.2905198825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2396972.3622449366,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2396895.153061237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2391834.6735218996,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2391684.8329048827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2426595.909090875,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2426535.5844155704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1441065.6006192458,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1441002.3219814308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2319229.6014852077,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2319151.980198015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2776.7847825394388,
            "unit": "ns/iter",
            "extra": "iterations: 250988\ncpu: 2776.616411940003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 18156.95914224737,
            "unit": "ns/iter",
            "extra": "iterations: 38426\ncpu: 18156.4982043407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14893.157873480048,
            "unit": "ns/iter",
            "extra": "iterations: 47044\ncpu: 14892.300824759852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15259.256301880447,
            "unit": "ns/iter",
            "extra": "iterations: 45899\ncpu: 15258.57861827052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11336.710368619542,
            "unit": "ns/iter",
            "extra": "iterations: 61744\ncpu: 11336.189751231062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80089.46503655844,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 80085.95749542948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 181938.0273224017,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 181932.05828779587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45248.82295782961,
            "unit": "ns/iter",
            "extra": "iterations: 15437\ncpu: 45248.64287102408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44896.02036372902,
            "unit": "ns/iter",
            "extra": "iterations: 15616\ncpu: 44892.181096311375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45234.407778928544,
            "unit": "ns/iter",
            "extra": "iterations: 15452\ncpu: 45232.2288376909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96683.07218918721,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 96677.52731295949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85264.55959620187,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 85262.63682802189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21327.817210520832,
            "unit": "ns/iter",
            "extra": "iterations: 32852\ncpu: 21327.46560331188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104117.56148559386,
            "unit": "ns/iter",
            "extra": "iterations: 6839\ncpu: 104107.20865623702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 87887.20594581493,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 87883.48117957369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83176.02223543405,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83171.87871581515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84343.33743367181,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84342.84852870129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157583.33454628065,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 157580.00909711196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 765799.8760869281,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 765774.7826086993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 647350.1666666615,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 647316.9459962772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 643087.0477502629,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 643069.513314976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 653965.7319587226,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 653938.6129334515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 411935.2879858784,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 411926.56065959524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 637608.6584922753,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 637581.2897366026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21652.04183198571,
            "unit": "ns/iter",
            "extra": "iterations: 32009\ncpu: 21651.64484988571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103495.45533865751,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 103492.91629695344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83028.44868593519,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 83028.76679747783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83913.48370086275,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83909.58772770791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84669.61375725502,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84666.2959381043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159768.76455812127,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 159765.4715688512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 763482.3496731787,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 763456.2091503189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 655626.3134328439,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 655619.7761194004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 644097.6666666758,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 644071.5469613264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 654362.1693171108,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 654341.814780181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 410548.0979472203,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 410544.3988269818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 635940.4288304233,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 635912.0580235787 ns\nthreads: 1"
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
        "date": 1702412530605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6551.19840585961,
            "unit": "ns/iter",
            "extra": "iterations: 106766\ncpu: 6551.192327145346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64237.541773489465,
            "unit": "ns/iter",
            "extra": "iterations: 13262\ncpu: 64233.50927461921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123536.48116389806,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 123531.89485521505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183186.26538300235,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 183178.61029719547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 241962.39453675467,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 241960.03942551388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 296846.4007607317,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 296836.58367911505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 354655.7724306617,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 354649.1435562807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 412350.39488637686,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 412346.35416666686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 470408.5790609819,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 470401.6189962223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4838.9621594833725,
            "unit": "ns/iter",
            "extra": "iterations: 135199\ncpu: 4838.821293056897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4090.8754912124905,
            "unit": "ns/iter",
            "extra": "iterations: 170751\ncpu: 4090.7584728639927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4034.8959540903393,
            "unit": "ns/iter",
            "extra": "iterations: 173558\ncpu: 4034.8575116099464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4122.2601021417395,
            "unit": "ns/iter",
            "extra": "iterations: 169568\ncpu: 4122.196994715993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7223.663874583855,
            "unit": "ns/iter",
            "extra": "iterations: 96702\ncpu: 7223.132923827842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29992.520676211403,
            "unit": "ns/iter",
            "extra": "iterations: 27447\ncpu: 29991.33967282397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132920.46887778302,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 132914.66000302925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102370.67822966595,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 102367.88277511953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99590.33880354204,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 99583.8221601487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102194.94824288573,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 102189.51709299536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245313.14828361495,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 245302.30725942555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1973241.0318470236,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1973189.3842887464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1648583.0936396515,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1648443.1095406348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1582524.6115843244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1582410.2214650752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1628334.5500878545,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1628219.3321616817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 964266.4513457799,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 964233.5403726714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1571934.1372880922,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1571821.5254237312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6612576.37999995,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6612197.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3701388.372000111,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3701349.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7959812.868613173,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7959345.255474437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30423.761268904378,
            "unit": "ns/iter",
            "extra": "iterations: 27110\ncpu: 30423.769826632208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127485.32064009272,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 127475.72973773866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102960.18908218112,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102957.56448710208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101708.24712303186,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 101707.17760113938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104813.39585377745,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 104811.78851815507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246024.77850071364,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 246016.20933522013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1997234.3519313112,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1997233.4763948498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1647688.5876106715,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1647656.8141592806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1595389.4341880428,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1595387.8632478572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1634702.551056352,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1634656.6901408487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 988252.4597938033,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 988251.7525773158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1574071.9202037854,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1574060.1018675675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6619901.979999554,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6619790.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3685493.857707563,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685380.632411048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28404.829379785097,
            "unit": "ns/iter",
            "extra": "iterations: 28877\ncpu: 28404.785815701074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129094.88830426596,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 129093.46061335011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102809.18241314046,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 102809.16230366501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99212.04837393264,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 99208.63737032311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101714.72012802056,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 101714.68705547623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 245014.59820678583,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 245009.86270664114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1968428.1380042646,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1968429.087048831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1668336.5325131852,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1668298.0667838308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1584431.6808149682,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1584386.078098478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1627486.1433566832,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1627472.0279720302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 956777.4655704012,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 956753.4429599168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1572402.76222598,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1572401.6863406338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2587.273298692351,
            "unit": "ns/iter",
            "extra": "iterations: 270777\ncpu: 2587.2419001613775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14376.180149391314,
            "unit": "ns/iter",
            "extra": "iterations: 48865\ncpu: 14376.05443569015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10645.432219800126,
            "unit": "ns/iter",
            "extra": "iterations: 65587\ncpu: 10645.448030859765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10596.69963053848,
            "unit": "ns/iter",
            "extra": "iterations: 66042\ncpu: 10596.315980739593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8926.993189572002,
            "unit": "ns/iter",
            "extra": "iterations: 78556\ncpu: 8927.001120219998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56652.05798510072,
            "unit": "ns/iter",
            "extra": "iterations: 12348\ncpu: 56650.64787819866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126645.62805756189,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 126644.55035971277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32241.393415678023,
            "unit": "ns/iter",
            "extra": "iterations: 21293\ncpu: 32240.529751561673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31617.912313179888,
            "unit": "ns/iter",
            "extra": "iterations: 22147\ncpu: 31617.93922427392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32058.135420957122,
            "unit": "ns/iter",
            "extra": "iterations: 21843\ncpu: 32057.75305589892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65663.69128272217,
            "unit": "ns/iter",
            "extra": "iterations: 10657\ncpu: 65663.18851459162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58297.56114028605,
            "unit": "ns/iter",
            "extra": "iterations: 11997\ncpu: 58297.607735268146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16604.035147633676,
            "unit": "ns/iter",
            "extra": "iterations: 42165\ncpu: 16603.360607138642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80951.62232451398,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 80951.57652474116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65035.238701878035,
            "unit": "ns/iter",
            "extra": "iterations: 10754\ncpu: 65034.38720475994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63308.32032520081,
            "unit": "ns/iter",
            "extra": "iterations: 11070\ncpu: 63307.75971092976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65187.68012712708,
            "unit": "ns/iter",
            "extra": "iterations: 10698\ncpu: 65187.633202467696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 123991.73849150327,
            "unit": "ns/iter",
            "extra": "iterations: 5648\ncpu: 123986.38456090883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 547408.2453125196,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 547400.2343749951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 464162.8939694772,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464151.9549370443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 451505.03112839255,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 451506.6796368351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 464202.20436505077,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 464197.6851851844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 295147.2966244666,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295148.3544303758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 449660.71786636196,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449616.4524421585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16979.695851418455,
            "unit": "ns/iter",
            "extra": "iterations: 41243\ncpu: 16978.91036054603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 83276.6747619135,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83273.21428571416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66028.79816947192,
            "unit": "ns/iter",
            "extra": "iterations: 10598\ncpu: 66024.12719380947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64540.40531316077,
            "unit": "ns/iter",
            "extra": "iterations: 10841\ncpu: 64539.25837099952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66519.16967679963,
            "unit": "ns/iter",
            "extra": "iterations: 10520\ncpu: 66513.47908745304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125262.80890237872,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 125258.68787987117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 548905.0235109829,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 548865.2821316641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 464744.32757475256,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 464729.16943520756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 449077.0141116019,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 449038.6144964658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 473899.14039734664,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 472604.83443708473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 297941.2640305756,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297927.76360544097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 452333.22243710473,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 452309.92907801503 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}