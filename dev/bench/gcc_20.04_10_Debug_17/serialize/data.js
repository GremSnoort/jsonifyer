window.BENCHMARK_DATA = {
  "lastUpdate": 1705573974460,
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
        "date": 1702416009284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6583.847208461853,
            "unit": "ns/iter",
            "extra": "iterations: 105981\ncpu: 6583.564978628245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64606.853199876634,
            "unit": "ns/iter",
            "extra": "iterations: 13188\ncpu: 64601.653017895056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123980.20366165174,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 123973.95685495315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183664.23427971444,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 183658.1072555205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244211.61538462606,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 244152.81118881117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 299078.93611110916,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 299067.0138888889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 357964.5135579186,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 357940.75595727225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 416359.67623148544,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 416327.642276423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 473273.1398176302,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 473261.82370820653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4883.676474888718,
            "unit": "ns/iter",
            "extra": "iterations: 143621\ncpu: 4883.4272146830945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4113.876278693808,
            "unit": "ns/iter",
            "extra": "iterations: 170682\ncpu: 4113.62182303934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4141.877595706145,
            "unit": "ns/iter",
            "extra": "iterations: 168981\ncpu: 4141.642551529455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4121.897702564865,
            "unit": "ns/iter",
            "extra": "iterations: 169711\ncpu: 4121.652691929222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7342.497313233487,
            "unit": "ns/iter",
            "extra": "iterations: 95654\ncpu: 7342.1414682083305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29667.049328000136,
            "unit": "ns/iter",
            "extra": "iterations: 27753\ncpu: 29665.20376175544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124393.00028964964,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 124383.46125995637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99203.36975565147,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 99194.16781927145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97276.81360574828,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 97272.7314233535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98543.29758064802,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 98538.12211981557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 241467.68485184573,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 241454.77707006436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1984393.5192307655,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1984274.3589743646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1637555.8606701763,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1637531.9223985898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1582623.6456558437,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1582566.2691652474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1626503.6052631962,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1626485.438596491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 961181.8519668875,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 961162.629399587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1577481.680272024,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577423.9795918413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6563536.250000084,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6563234.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3657517.7500000056,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3657394.9218750014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7934892.223021516,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7934621.582733794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28912.25958120747,
            "unit": "ns/iter",
            "extra": "iterations: 28415\ncpu: 28911.96551117359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126081.86321873174,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 126077.1932424425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101369.39950547683,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 101369.31590721838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98464.74821305052,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 98462.99285220176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 99967.73422160026,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 99967.56661991581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 244373.88559439493,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 244367.2727272724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2006856.948275932,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2006774.7844827531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1654574.0928571767,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1654523.0357142948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1601510.5515463476,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1601507.7319587723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1622970.8129369786,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1622915.0349650374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 956661.2945416751,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 956647.4768280165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1580302.4770798055,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1580251.6129032185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6582655.31999973,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6582647.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3664719.1535433475,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3664582.28346457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28216.598250589257,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 28216.093210783667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 122661.6563794822,
            "unit": "ns/iter",
            "extra": "iterations: 6999\ncpu: 122659.22274610719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98611.88391319464,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 98610.80491445695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96977.0814932789,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 96973.45777373094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97681.20178755741,
            "unit": "ns/iter",
            "extra": "iterations: 8727\ncpu: 97679.70665749969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242643.72831241335,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 242639.27475592817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1989280.611940321,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1989276.3326226107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1641391.07760137,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1641360.846560842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1594533.6316695851,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1594492.2547332202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1623635.9265733752,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1623592.4825174888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 960723.5392562099,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 960712.80991736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1581169.554237276,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1581125.76271186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2617.3306381900816,
            "unit": "ns/iter",
            "extra": "iterations: 268384\ncpu: 2617.304310242033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14116.519316258747,
            "unit": "ns/iter",
            "extra": "iterations: 50838\ncpu: 14116.202446988416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10848.03032366938,
            "unit": "ns/iter",
            "extra": "iterations: 64603\ncpu: 10848.022537652992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10870.279117432696,
            "unit": "ns/iter",
            "extra": "iterations: 64403\ncpu: 10870.02779373632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8650.52531223774,
            "unit": "ns/iter",
            "extra": "iterations: 81028\ncpu: 8650.364071678952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55309.98885727904,
            "unit": "ns/iter",
            "extra": "iterations: 12654\ncpu: 55309.93361782814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127297.3910827978,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127294.46769790753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32473.72504987576,
            "unit": "ns/iter",
            "extra": "iterations: 21553\ncpu: 32473.289101285092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31942.285133963178,
            "unit": "ns/iter",
            "extra": "iterations: 21909\ncpu: 31941.558263727224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32300.43800166081,
            "unit": "ns/iter",
            "extra": "iterations: 21678\ncpu: 32300.419780422653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65086.730084782546,
            "unit": "ns/iter",
            "extra": "iterations: 10733\ncpu: 65085.269728873835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58629.78957060327,
            "unit": "ns/iter",
            "extra": "iterations: 11947\ncpu: 58628.961245501196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16960.495390140528,
            "unit": "ns/iter",
            "extra": "iterations: 41216\ncpu: 16959.923330745507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81974.929007992,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 81971.50916784088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 66169.28540407948,
            "unit": "ns/iter",
            "extra": "iterations: 10592\ncpu: 66165.36064954803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64702.194619085785,
            "unit": "ns/iter",
            "extra": "iterations: 10816\ncpu: 64699.31582840328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 66117.85387008786,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 66117.84670500626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 127066.5865332149,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127060.70973612333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 550613.3998428849,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 550580.5970149236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 466538.48666665,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 466514.3333333409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 454316.1078622307,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 454298.7004548466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 464218.99203714624,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464195.5540809522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 295741.7825168947,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 295726.68918918987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 453050.9495472348,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 453026.00258731487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17115.8443330487,
            "unit": "ns/iter",
            "extra": "iterations: 40895\ncpu: 17114.896686636414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 84460.28312598164,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84454.84961951965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66995.35738239287,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 66994.07875826315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65364.41907081352,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65359.31060322261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67218.98458444746,
            "unit": "ns/iter",
            "extra": "iterations: 10444\ncpu: 67216.01876675567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 127860.36905412695,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127853.67231638527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553565.8720378852,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553523.9336492863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 467652.15962438507,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 467631.58953722316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 453576.8352788764,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453558.62516212196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 463202.3516556436,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 463174.3046357636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 297253.77867459843,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 297247.451146989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453323.4594418974,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453301.36275146424 ns\nthreads: 1"
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
        "date": 1702418399144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6454.687638254044,
            "unit": "ns/iter",
            "extra": "iterations: 108496\ncpu: 6454.442560094381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63563.88957009644,
            "unit": "ns/iter",
            "extra": "iterations: 13375\ncpu: 63563.98504672898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 122451.50104588336,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 122450.74606052153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 180588.19775654643,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 180588.2426256751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 239599.37951973808,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 239593.62406845155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294436.25796505593,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 294425.65947242203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 352590.37459547725,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 352568.04207119753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 409266.9571563025,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 409271.61016949173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 467130.2947481225,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 467105.3590568068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4878.214244459381,
            "unit": "ns/iter",
            "extra": "iterations: 143705\ncpu: 4878.114192268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4101.2514162774605,
            "unit": "ns/iter",
            "extra": "iterations: 171047\ncpu: 4101.030710857257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4117.220018813672,
            "unit": "ns/iter",
            "extra": "iterations: 170090\ncpu: 4117.14856840496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4156.033737373688,
            "unit": "ns/iter",
            "extra": "iterations: 168300\ncpu: 4155.906714200828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7302.008320039715,
            "unit": "ns/iter",
            "extra": "iterations: 95913\ncpu: 7301.796419671993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29552.937889094002,
            "unit": "ns/iter",
            "extra": "iterations: 27789\ncpu: 29552.553168519964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127445.174921904,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 127440.81511230068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99241.33838500753,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 99238.69736233258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97249.4950596242,
            "unit": "ns/iter",
            "extra": "iterations: 8805\ncpu: 97245.3605905734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98807.5228713032,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98805.9223412835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240919.4040963087,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 240912.233600886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1954332.6659663331,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1954284.4537815156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1617944.6841186902,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1617886.3874345596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1567840.1976351296,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567815.0337837846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1613468.8507718449,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1613448.027444249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 966513.9938461392,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 966495.3846153861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1555294.7533557198,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1555236.912751676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6494270.919999963,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6493858.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3578002.9923664085,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3577845.8015267258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7869635.345323756,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7869308.633093525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28741.707413991186,
            "unit": "ns/iter",
            "extra": "iterations: 28689\ncpu: 28740.702011223846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127316.19429747565,
            "unit": "ns/iter",
            "extra": "iterations: 6804\ncpu: 127315.15285126386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101062.85896226231,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 101059.17452830185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98476.07403149709,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 98472.43361305838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102998.164836495,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 102992.77181127098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 241147.90783282687,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 241142.26404649788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1981370.987206842,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1981276.119402995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1647505.4098940007,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1647459.5406360338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1581798.1477079089,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1581757.0458404042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1610161.779310386,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1610178.7931034393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 947611.1380368079,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 947577.402862986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1561438.2154881787,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1561390.9090909173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6551988.8500000425,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6551711.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3571844.084291233,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3571854.4061302696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28373.395690905214,
            "unit": "ns/iter",
            "extra": "iterations: 28962\ncpu: 28371.790622194658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123643.34436133342,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 123637.80207134629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98877.57499424678,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 98874.05106970336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97395.71761363147,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 97396.77272727237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98847.35502822614,
            "unit": "ns/iter",
            "extra": "iterations: 8681\ncpu: 98844.21149637148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 239902.62961901573,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 239905.2134059004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1946584.4979079284,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1946493.30543933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1612727.4194107319,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612745.2339688053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1571906.3800676197,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1571860.1351351358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1595739.659246522,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1595710.7876712424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 947097.0407332119,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 947069.3482688413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1546810.0563848105,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1546812.2719734695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2637.350229393059,
            "unit": "ns/iter",
            "extra": "iterations: 266137\ncpu: 2637.3307732483636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14174.145221331195,
            "unit": "ns/iter",
            "extra": "iterations: 49428\ncpu: 14173.49478028644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10841.206231890541,
            "unit": "ns/iter",
            "extra": "iterations: 64539\ncpu: 10840.662235237649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10550.590814636675,
            "unit": "ns/iter",
            "extra": "iterations: 66410\ncpu: 10550.719771118782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8901.331592024091,
            "unit": "ns/iter",
            "extra": "iterations: 78485\ncpu: 8901.135248773657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55644.91848258274,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 55644.45681565149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 119883.12670229172,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 119880.19307016036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31957.894503991025,
            "unit": "ns/iter",
            "extra": "iterations: 21925\ncpu: 31957.550741163115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31571.75600522904,
            "unit": "ns/iter",
            "extra": "iterations: 22189\ncpu: 31571.76979584491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 31818.56575591988,
            "unit": "ns/iter",
            "extra": "iterations: 21960\ncpu: 31818.3333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65108.38758389122,
            "unit": "ns/iter",
            "extra": "iterations: 10728\ncpu: 65105.19202087974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 52073.04948652951,
            "unit": "ns/iter",
            "extra": "iterations: 13438\ncpu: 52070.642952820155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16506.05205756915,
            "unit": "ns/iter",
            "extra": "iterations: 42453\ncpu: 16506.253974984345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80529.1155975997,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 80523.40793724048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64359.38723050964,
            "unit": "ns/iter",
            "extra": "iterations: 10854\ncpu: 64358.24580799733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62715.134689488405,
            "unit": "ns/iter",
            "extra": "iterations: 11159\ncpu: 62712.2322788774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64305.46473829216,
            "unit": "ns/iter",
            "extra": "iterations: 10890\ncpu: 64303.43434343516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 122372.38159273208,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122369.6472231936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 538440.2365591062,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 538413.1336405472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 457401.3108638926,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 457387.95811517787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 447303.6217252473,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447281.214057505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 452262.759223315,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 452245.95469255303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 292560.84252298,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 292546.65831244795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 443280.77468353335,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443253.1012658247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16654.815688322324,
            "unit": "ns/iter",
            "extra": "iterations: 42146\ncpu: 16654.2969676836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80956.10670520044,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 80957.08670520144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65144.91785282208,
            "unit": "ns/iter",
            "extra": "iterations: 10749\ncpu: 65141.46432226157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63526.42876587769,
            "unit": "ns/iter",
            "extra": "iterations: 11020\ncpu: 63525.245009074206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65054.55794270616,
            "unit": "ns/iter",
            "extra": "iterations: 10752\ncpu: 65050.90215773908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 123599.23812885291,
            "unit": "ns/iter",
            "extra": "iterations: 5665\ncpu: 123592.79788173038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 541111.6246130172,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 541116.9504643918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 458756.14126149856,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 458730.486202365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 446388.12579823163,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446359.25925925665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 452440.6692556695,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 452431.0679611632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 295014.32096162706,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 295001.0965837196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 444213.1524777759,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444193.71029225516 ns\nthreads: 1"
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
        "date": 1702420967587,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6412.1342814341,
            "unit": "ns/iter",
            "extra": "iterations: 108146\ncpu: 6412.0059918998395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63215.23463023421,
            "unit": "ns/iter",
            "extra": "iterations: 13468\ncpu: 63210.43956043956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123928.506311553,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 123876.02996254683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 178479.5362795463,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 178466.96813977388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 236553.10155609777,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 236535.95413595418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 291324.9408583991,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 291316.2216965191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 349340.890624994,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 349315.86538461543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 405454.539897333,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 405424.3117125529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 462660.9791888884,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 462622.57203842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4836.27049919134,
            "unit": "ns/iter",
            "extra": "iterations: 145335\ncpu: 4836.039494959922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4013.2857281928195,
            "unit": "ns/iter",
            "extra": "iterations: 174631\ncpu: 4013.059536966526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4015.6501995951544,
            "unit": "ns/iter",
            "extra": "iterations: 174854\ncpu: 4015.272741830327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4088.0766933151326,
            "unit": "ns/iter",
            "extra": "iterations: 169741\ncpu: 4087.6818211274854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7254.4170472313435,
            "unit": "ns/iter",
            "extra": "iterations: 96567\ncpu: 7253.698468420886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30565.129491073323,
            "unit": "ns/iter",
            "extra": "iterations: 26998\ncpu: 30562.24905548555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126633.97287335353,
            "unit": "ns/iter",
            "extra": "iterations: 6783\ncpu: 126625.19534129457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101726.80035398022,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 101719.31563421818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99402.12594312114,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99393.789901335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100787.96277035304,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 100782.10613402666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 242485.0064734031,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 242465.01547987628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1911645.8685831504,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1911528.7474332652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1581492.2687075161,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581391.8367346947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1542687.1937085937,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1542572.5165562925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1563320.4379195026,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1563208.3892617472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 964840.8308004246,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 964780.243161093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1521737.1073825406,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1521674.8322147648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6460020.950000285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6459724.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3572928.683205948,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3572740.839694658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7868880.500000078,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7867682.142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29917.114655923644,
            "unit": "ns/iter",
            "extra": "iterations: 27552\ncpu: 29915.842770034866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130972.55443732902,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 130968.23726745996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103771.41321415348,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 103765.91375770066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100218.43664444206,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 100215.17491517482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101709.74551756632,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 101705.39086779792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 245809.79824064806,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 245805.95913734214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1931135.7738589046,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1931079.8755186812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1603121.9467354089,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603065.1202749202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1563103.671691819,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1563039.3634840893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1568679.2037037257,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1568638.2154882136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 935956.7371601268,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 935914.3001007059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1530754.2889983365,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1530704.5977011467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6514633.360000062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6514138.999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3554164.441064688,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3554047.9087452455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28675.714484681146,
            "unit": "ns/iter",
            "extra": "iterations: 28720\ncpu: 28674.97214484698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125738.3240713611,
            "unit": "ns/iter",
            "extra": "iterations: 6838\ncpu: 125734.23515647829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100428.94218087493,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 100424.84691474338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98201.8627495977,
            "unit": "ns/iter",
            "extra": "iterations: 8714\ncpu: 98199.15079182923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99839.55598275554,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 99835.84993591967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243115.7765987104,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 243108.29377268802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1913417.5102881095,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1913344.4444444515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1590444.4667802246,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590399.3185689978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1550192.636212664,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1550165.780730892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1570545.021885517,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1570480.3030303083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 941263.9989857874,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 941204.9695740353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1523859.1190082347,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1523782.4793388434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2629.497332507411,
            "unit": "ns/iter",
            "extra": "iterations: 266355\ncpu: 2629.3135101650173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13792.405835909887,
            "unit": "ns/iter",
            "extra": "iterations: 50789\ncpu: 13792.053397389116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11267.786718060446,
            "unit": "ns/iter",
            "extra": "iterations: 62265\ncpu: 11267.17738697502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10866.418278904579,
            "unit": "ns/iter",
            "extra": "iterations: 64610\ncpu: 10865.714285714323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8918.164361560099,
            "unit": "ns/iter",
            "extra": "iterations: 78449\ncpu: 8917.598694693388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56018.16376893067,
            "unit": "ns/iter",
            "extra": "iterations: 12481\ncpu: 56014.46999439119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 124666.01434644198,
            "unit": "ns/iter",
            "extra": "iterations: 5646\ncpu: 124582.58944385439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31885.826882702742,
            "unit": "ns/iter",
            "extra": "iterations: 21910\ncpu: 31884.390689182852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31475.001708786884,
            "unit": "ns/iter",
            "extra": "iterations: 22238\ncpu: 31473.095602122747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32032.359741569395,
            "unit": "ns/iter",
            "extra": "iterations: 21824\ncpu: 32030.35190615827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65036.565241583434,
            "unit": "ns/iter",
            "extra": "iterations: 10783\ncpu: 65035.018084020754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57846.94826732346,
            "unit": "ns/iter",
            "extra": "iterations: 12120\ncpu: 57844.59570957089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16514.345548875033,
            "unit": "ns/iter",
            "extra": "iterations: 42405\ncpu: 16513.38757222024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79880.40594736506,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 79876.26751737397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64197.416582502345,
            "unit": "ns/iter",
            "extra": "iterations: 10891\ncpu: 64192.94830594066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64169.89321894663,
            "unit": "ns/iter",
            "extra": "iterations: 10957\ncpu: 64167.18992424987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64651.16536013928,
            "unit": "ns/iter",
            "extra": "iterations: 10843\ncpu: 64646.78594484965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124715.26205561684,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 124704.99824005818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 534328.9778963194,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 534291.8445122011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 453746.8158235828,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453723.54085603164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 444915.6753494216,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444899.61880558974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 451309.8135483659,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 451299.4193548399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 293243.95519262674,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 293234.0871021777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 442256.2812105879,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 442246.59520806634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16889.15655931732,
            "unit": "ns/iter",
            "extra": "iterations: 41422\ncpu: 16888.621988315484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81448.87961776409,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81446.87099405665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65322.14450651646,
            "unit": "ns/iter",
            "extra": "iterations: 10740\ncpu: 65320.5027932953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64492.17694074273,
            "unit": "ns/iter",
            "extra": "iterations: 10885\ncpu: 64490.39044556756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65854.96234585486,
            "unit": "ns/iter",
            "extra": "iterations: 10623\ncpu: 65853.78894850705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124836.8164466564,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 124834.98037816805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 535163.7625570869,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 535160.7305936037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 453130.70569213096,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 453120.05174644035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 443228.1464806282,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443217.12111603905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 447968.2003841142,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 447962.1638924447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 295437.23427607457,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 295429.6749683361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 441738.938170329,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441726.8138801249 ns\nthreads: 1"
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
        "date": 1702421382608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6560.245609603407,
            "unit": "ns/iter",
            "extra": "iterations: 106881\ncpu: 6559.905876629149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63340.9113058979,
            "unit": "ns/iter",
            "extra": "iterations: 13462\ncpu: 63340.52146783538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121750.41423408371,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 121750.73672504867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183684.4890450628,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 183682.12071103766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 238757.13366611226,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 238753.9933444261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 293112.0315682292,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 293108.5879158182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 353320.98346773844,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 353314.23387096764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 407962.6002805263,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 407958.719027583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 466076.09775639983,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 466062.55341880344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4890.148620491955,
            "unit": "ns/iter",
            "extra": "iterations: 143022\ncpu: 4890.172840542021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4122.234696983671,
            "unit": "ns/iter",
            "extra": "iterations: 170816\ncpu: 4122.242647058826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4114.403362722052,
            "unit": "ns/iter",
            "extra": "iterations: 170814\ncpu: 4114.344842928565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4132.3690559335355,
            "unit": "ns/iter",
            "extra": "iterations: 168950\ncpu: 4132.384137318725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7384.2449783129505,
            "unit": "ns/iter",
            "extra": "iterations: 94988\ncpu: 7383.826378068821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29319.061389975726,
            "unit": "ns/iter",
            "extra": "iterations: 27871\ncpu: 29318.768612536358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 122608.61817144904,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 122607.20296676607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98906.9370815057,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98906.58046640528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97852.99191251848,
            "unit": "ns/iter",
            "extra": "iterations: 8779\ncpu: 97851.6118008884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98578.49031365135,
            "unit": "ns/iter",
            "extra": "iterations: 8672\ncpu: 98578.2172509223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 242445.2420116718,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 242436.84356765766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1950025.0209643627,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1950009.0146750559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1613544.7556325586,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613502.4263431563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1583333.781942082,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1583302.0442930136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1610720.471304356,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1610655.1304347846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 957930.9629629168,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 956814.6090534987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1553240.0971525116,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1553193.6348408705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6547072.359999788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6546841.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3705144.103999828,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3705053.1999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7939802.384057608,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7939618.84057971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28852.77323354692,
            "unit": "ns/iter",
            "extra": "iterations: 28461\ncpu: 28851.61097642384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125012.42420270584,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 125010.57230231514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100639.1034442376,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 100636.67994376784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99046.4777018436,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 99044.92065330682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101197.61380531044,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 101193.23893805276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 245514.57545839134,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 245507.1086036659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1972501.8152865467,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1972451.8046709143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1616398.2857142559,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1616366.7247386714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1577535.091836755,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577489.6258503445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1615823.3350695008,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1615813.7152777845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 954285.3069814689,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 954274.2299794656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1561371.7023411428,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1561335.6187290996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6557852.259999777,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6557638.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3620285.267441761,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3620231.3953488385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28417.683307980988,
            "unit": "ns/iter",
            "extra": "iterations: 28924\ncpu: 28417.272852993974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123329.89219491686,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 123326.41943366374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98176.8104455341,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 98174.83678845449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97583.24834285433,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 97582.52571428605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98131.61472110613,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 98130.37377803324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 241668.93720608606,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 241667.19225449456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1952505.3563941477,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952445.0733752598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1607756.0775861572,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607723.4482758632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1573805.6964586189,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1573764.4182124848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1612238.1245675334,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612189.6193771549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 952513.742067552,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 952457.4206755374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1550751.410684503,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1550717.8631051744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2622.215603367744,
            "unit": "ns/iter",
            "extra": "iterations: 267250\ncpu: 2622.111131898972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13979.72907603256,
            "unit": "ns/iter",
            "extra": "iterations: 50110\ncpu: 13979.337457593338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10460.615541799778,
            "unit": "ns/iter",
            "extra": "iterations: 67045\ncpu: 10460.25057797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10803.59357414876,
            "unit": "ns/iter",
            "extra": "iterations: 64863\ncpu: 10803.52280961412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8943.54998849939,
            "unit": "ns/iter",
            "extra": "iterations: 78258\ncpu: 8943.07674614728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55731.519008527415,
            "unit": "ns/iter",
            "extra": "iterations: 12547\ncpu: 55729.57679126473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125499.0568263012,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 125493.95997140849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31929.974337746487,
            "unit": "ns/iter",
            "extra": "iterations: 21744\ncpu: 31929.01030169249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31590.514511039753,
            "unit": "ns/iter",
            "extra": "iterations: 22190\ncpu: 31589.391617845693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32103.606887381553,
            "unit": "ns/iter",
            "extra": "iterations: 21808\ncpu: 32102.41654438758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 64991.61098228391,
            "unit": "ns/iter",
            "extra": "iterations: 10781\ncpu: 64989.36091271611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57918.9802511955,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 57917.06329532299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16702.355708384308,
            "unit": "ns/iter",
            "extra": "iterations: 41877\ncpu: 16702.230341237304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80353.1865671633,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 80349.77037887399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64683.37393872269,
            "unit": "ns/iter",
            "extra": "iterations: 10836\ncpu: 64680.48172757405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62795.34579522936,
            "unit": "ns/iter",
            "extra": "iterations: 11154\ncpu: 62794.88972565872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64794.362293412465,
            "unit": "ns/iter",
            "extra": "iterations: 10831\ncpu: 64792.90924199108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 125376.06277946617,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 125375.0491861919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 542897.6849845239,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 542882.1207430343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 458403.87139110034,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 458391.33858268085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 451557.49580371956,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 451521.8205293674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 458760.7739187311,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 458754.06290956726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 294268.5384615447,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 294261.1181168559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 447192.4894703289,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 447178.0472239936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17149.316976322192,
            "unit": "ns/iter",
            "extra": "iterations: 40798\ncpu: 17149.051424089386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82384.56566371853,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82383.59882005869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65884.06020350478,
            "unit": "ns/iter",
            "extra": "iterations: 10614\ncpu: 65883.17316751515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64327.40851024838,
            "unit": "ns/iter",
            "extra": "iterations: 10881\ncpu: 64326.321110192075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66290.49271936878,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66288.43608169403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 126952.19193752916,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 126948.32031959509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 541543.2815158595,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 541530.6264501207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 460992.82896460773,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 460335.64875490713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 450089.2107969049,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 450064.58868894435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 456861.80653596163,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456850.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 295493.17728999775,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 295481.1312790262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 447060.08881789626,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447055.9105431284 ns\nthreads: 1"
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
        "date": 1702422471636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6563.143980800144,
            "unit": "ns/iter",
            "extra": "iterations: 106667\ncpu: 6562.830116155887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65411.98830948994,
            "unit": "ns/iter",
            "extra": "iterations: 13002\ncpu: 65411.267497308094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125067.38880938664,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 125066.92902117918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184899.98680850698,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 184900.61702127662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244798.59859353385,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 244795.78059071727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300541.8089926884,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 300542.5932380622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 360080.11956970126,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360078.40297889954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 428178.4612421533,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 428164.56427539705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 477315.7139726047,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 477291.4520547951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4878.405479849204,
            "unit": "ns/iter",
            "extra": "iterations: 144858\ncpu: 4878.019163594695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4075.9025410342624,
            "unit": "ns/iter",
            "extra": "iterations: 170954\ncpu: 4075.832095183499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4040.2851544637156,
            "unit": "ns/iter",
            "extra": "iterations: 172759\ncpu: 4040.099213355022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4104.631811746034,
            "unit": "ns/iter",
            "extra": "iterations: 170918\ncpu: 4104.475830515218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7307.189642072807,
            "unit": "ns/iter",
            "extra": "iterations: 96081\ncpu: 7306.910835649084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29408.62726916097,
            "unit": "ns/iter",
            "extra": "iterations: 28039\ncpu: 29407.714255144623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123039.87931035187,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 123035.45977011466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98185.47668690533,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 98181.96815213647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98222.32780177331,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 98219.59536258223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98259.76798250977,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 98257.5670387844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 238670.37072503433,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 238656.71682626527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1924198.975155252,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1924126.9151138768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1602402.765920785,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1602387.4354561092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1570965.2820946397,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570921.1148648683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1594968.24054982,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1594935.3951890063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 964071.9293872888,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 964046.313603323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1544807.472454126,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1544765.1085141904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6614142.290000018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6613718.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3689849.557312203,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3689711.857707511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8005267.470588502,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8004912.499999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29480.29457142809,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 29478.79285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124039.740623193,
            "unit": "ns/iter",
            "extra": "iterations: 6932\ncpu: 124035.41546451207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 99643.07911833243,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 99640.11600928006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98649.20703933112,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 98644.3294225898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100392.13653395543,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100389.94145199048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 237773.31047617766,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 237764.8163265304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1940274.2104167223,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1940225.208333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1619711.9114583891,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1619662.152777769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1583013.9897959193,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1582973.809523809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1605474.9741379996,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605439.8275862157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 959053.9401444981,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 959058.513931883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1555493.0083472256,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1555437.5626043356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6670246.780000184,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6670315.999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3722038.3027888364,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3721977.689243044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28101.402435259748,
            "unit": "ns/iter",
            "extra": "iterations: 29155\ncpu: 28100.641399416992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121554.61057419158,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 121550.3126776573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101706.30711393565,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 101704.24522845594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97304.42988717803,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 97304.04098549443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97603.17413616543,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 97602.60006842307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 237994.39912520396,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 237991.58009841514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1939410.474012448,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1939375.6756756657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1605105.8310345188,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605050.862068974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1574564.192567626,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1574540.3716216176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1598776.621342522,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1598726.506024099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 959359.3505687542,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 959344.7776628737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1551948.9401992965,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1551899.501661131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2598.4858876637445,
            "unit": "ns/iter",
            "extra": "iterations: 270260\ncpu: 2598.421520017759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13666.881144504481,
            "unit": "ns/iter",
            "extra": "iterations: 51306\ncpu: 13666.415234085707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10358.667930171312,
            "unit": "ns/iter",
            "extra": "iterations: 67537\ncpu: 10358.767786546601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10151.990947870345,
            "unit": "ns/iter",
            "extra": "iterations: 69155\ncpu: 10151.915262815348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8770.721705261309,
            "unit": "ns/iter",
            "extra": "iterations: 79847\ncpu: 8770.400891705358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55255.06616778584,
            "unit": "ns/iter",
            "extra": "iterations: 12695\ncpu: 55253.46987002719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125085.75910714066,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125082.35714285831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32190.84290571626,
            "unit": "ns/iter",
            "extra": "iterations: 21764\ncpu: 32185.62304723391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31693.099546896203,
            "unit": "ns/iter",
            "extra": "iterations: 22070\ncpu: 31693.534209333964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32103.38368150946,
            "unit": "ns/iter",
            "extra": "iterations: 21828\ncpu: 32102.954920285832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65471.55107375995,
            "unit": "ns/iter",
            "extra": "iterations: 10710\ncpu: 65468.28197945841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58139.836828093445,
            "unit": "ns/iter",
            "extra": "iterations: 12018\ncpu: 58140.55583291665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16802.463242698803,
            "unit": "ns/iter",
            "extra": "iterations: 41706\ncpu: 16802.167553829164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80299.28024309556,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 80295.92936589949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64439.547787688556,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64436.10523410969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63059.06341944579,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 63055.4359526379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64818.45470495895,
            "unit": "ns/iter",
            "extra": "iterations: 10829\ncpu: 64819.24462092573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124905.17543233543,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124899.14423248258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 544170.5450310587,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544152.5621118002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 460843.16622689954,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 460820.38258575636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 450618.86816719966,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 450625.91639870923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 462012.1293729432,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 461991.61716171325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 298124.5800681516,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 298117.93015332194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 448251.6994818504,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 448239.05440415157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17034.238406729975,
            "unit": "ns/iter",
            "extra": "iterations: 41123\ncpu: 17033.616224497066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 83941.42461316753,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 83937.50749670152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66671.39098462075,
            "unit": "ns/iter",
            "extra": "iterations: 10471\ncpu: 66672.15165695743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64820.09293714881,
            "unit": "ns/iter",
            "extra": "iterations: 10803\ncpu: 64817.189669535845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66804.88127505283,
            "unit": "ns/iter",
            "extra": "iterations: 10478\ncpu: 66803.44531399007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 126369.29148629213,
            "unit": "ns/iter",
            "extra": "iterations: 5544\ncpu: 126366.64862914848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 548494.5156494578,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 548496.4006259756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470493.0910299158,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 470478.93687707745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 452582.88946346106,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452569.2954104649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 462910.25940592785,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462901.5841584193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 300668.5767241463,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 300665.8620689606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 451370.09800130327,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 451379.49709864496 ns\nthreads: 1"
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
        "date": 1702453365171,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6643.9075817550765,
            "unit": "ns/iter",
            "extra": "iterations: 108128\ncpu: 6643.751849659662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 62870.92585761963,
            "unit": "ns/iter",
            "extra": "iterations: 13555\ncpu: 62868.72740686094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121059.29713256983,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 121054.60590109439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 180374.88471023118,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 180368.41348129886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 236246.24336887308,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 236239.40388296428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 291835.94981350267,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 291821.4649033572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 349252.4510433391,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 349234.87158908515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 405909.18936567026,
            "unit": "ns/iter",
            "extra": "iterations: 2144\ncpu: 405880.7835820896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 462545.4081741039,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 462515.33970276004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4915.650749402448,
            "unit": "ns/iter",
            "extra": "iterations: 143848\ncpu: 4915.416967910573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4070.7056965163615,
            "unit": "ns/iter",
            "extra": "iterations: 171561\ncpu: 4070.634934513089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4059.593996482928,
            "unit": "ns/iter",
            "extra": "iterations: 172299\ncpu: 4059.547066436835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4106.7827971679335,
            "unit": "ns/iter",
            "extra": "iterations: 169786\ncpu: 4106.833896787717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7338.003784804381,
            "unit": "ns/iter",
            "extra": "iterations: 94853\ncpu: 7337.942922205944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29519.861682981395,
            "unit": "ns/iter",
            "extra": "iterations: 27784\ncpu: 29519.586812553924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123628.96720126997,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 123627.78500216706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98955.03844821561,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 98954.52026324911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97443.6362188598,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 97442.55488567839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98944.2784912601,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 98943.2025916929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245174.49901987743,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 245173.90086810448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1922993.8322980478,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1922912.0082815771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1594588.357876642,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1594511.8150684955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1558510.5311972355,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1558448.0607082641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1583929.3549487928,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1583889.9317406197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 947119.378710312,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 947080.3480040933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1540112.0980066424,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1540106.1461793974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6454175.920000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6453987.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3646377.3007813226,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3646320.3124999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7786558.48000028,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7786267.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29580.222430108068,
            "unit": "ns/iter",
            "extra": "iterations: 27793\ncpu: 29579.509228942483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125512.16040608936,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 125508.44089920222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100576.083255486,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 100575.35030359637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98174.03763811983,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 98173.18139963232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100304.2734108848,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 100304.08882622566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 244217.45936889166,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 244212.0357442055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1949233.8193278313,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1949232.7731092426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1603356.4628669913,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1603339.0328152082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1569754.0473773044,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1569749.7461928881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1587311.2918088986,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1587312.1160409576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 939446.5642062264,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 939443.8827098093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1541528.53897177,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1541548.0928689837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6482751.930000177,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6482602.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3669473.2109374683,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3669348.828125002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28111.13117702976,
            "unit": "ns/iter",
            "extra": "iterations: 29464\ncpu: 28110.49755633989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 122883.84134477853,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 122883.91988554993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98341.929675869,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 98341.81651586319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96875.47673497231,
            "unit": "ns/iter",
            "extra": "iterations: 8833\ncpu: 96874.15374165095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98066.84706559301,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 98066.72036823948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243884.36246857658,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 243884.30605975943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1920220.2530863953,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1920192.592592582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1586902.9505962532,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1586902.8960817803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1556671.6616666554,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1556635.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1587919.5680272698,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1587936.224489795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 945114.6251266117,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 945088.956433642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1532458.1383854467,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532439.8682042845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2640.907077777162,
            "unit": "ns/iter",
            "extra": "iterations: 265168\ncpu: 2640.867676341047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13721.14924292837,
            "unit": "ns/iter",
            "extra": "iterations: 51118\ncpu: 13721.331037990454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10933.626835396311,
            "unit": "ns/iter",
            "extra": "iterations: 64087\ncpu: 10933.42643593865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10618.551714207619,
            "unit": "ns/iter",
            "extra": "iterations: 65978\ncpu: 10618.409166691887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8984.74023068325,
            "unit": "ns/iter",
            "extra": "iterations: 77769\ncpu: 8984.677699340325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55940.56000000238,
            "unit": "ns/iter",
            "extra": "iterations: 12475\ncpu: 55939.91983967889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125283.64946970984,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 125285.38558331819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32069.511385458445,
            "unit": "ns/iter",
            "extra": "iterations: 21870\ncpu: 32069.10379515313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31585.45871104386,
            "unit": "ns/iter",
            "extra": "iterations: 22173\ncpu: 31585.5003833489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 31967.03703534636,
            "unit": "ns/iter",
            "extra": "iterations: 21925\ncpu: 31966.567844925994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 62065.297503101494,
            "unit": "ns/iter",
            "extra": "iterations: 11294\ncpu: 62066.194439526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58025.8362732939,
            "unit": "ns/iter",
            "extra": "iterations: 12075\ncpu: 58025.7060041411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16361.233398186656,
            "unit": "ns/iter",
            "extra": "iterations: 42661\ncpu: 16360.93387403014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 78820.81677579018,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 78820.0158049227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63370.588889895895,
            "unit": "ns/iter",
            "extra": "iterations: 11053\ncpu: 63369.61006061782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 61996.673478414545,
            "unit": "ns/iter",
            "extra": "iterations: 11304\ncpu: 61997.43453644688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 63829.43935530631,
            "unit": "ns/iter",
            "extra": "iterations: 10982\ncpu: 63829.42087051569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124375.38253601045,
            "unit": "ns/iter",
            "extra": "iterations: 5623\ncpu: 124373.55504179322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 534885.9179447917,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 534886.2730061354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 451103.3627577273,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 451099.7422680415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 447335.9085677727,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447335.7416879794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 452682.12248866376,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 452681.07582631626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 289669.94501860626,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 289673.41876808763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 442943.50347006036,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 442940.88328075514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16627.28058305519,
            "unit": "ns/iter",
            "extra": "iterations: 42123\ncpu: 16627.103957457944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81466.43893352004,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 81466.27081150284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64541.5867299457,
            "unit": "ns/iter",
            "extra": "iterations: 10746\ncpu: 64540.85241019923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63217.701596177154,
            "unit": "ns/iter",
            "extra": "iterations: 11089\ncpu: 63216.26837406543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 68516.69176295023,
            "unit": "ns/iter",
            "extra": "iterations: 10732\ncpu: 68517.582929557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124910.47192012284,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124910.71492244482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 534988.4721586563,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534956.7505720825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 452223.13621692173,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452204.002582309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 443243.2552248431,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 443239.5820139342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 451965.87612901063,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 451961.4838709678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 293683.3951747228,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 293677.8286189681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 440102.9501262628,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 440098.73737373657 ns\nthreads: 1"
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
        "date": 1702479551592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6451.6751348467005,
            "unit": "ns/iter",
            "extra": "iterations: 108642\ncpu: 6451.306124703154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63780.895974162355,
            "unit": "ns/iter",
            "extra": "iterations: 13314\ncpu: 63777.70767613038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 122939.712456017,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 122936.72061928216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 182145.27190963703,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 182136.05940179876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 239733.83532351907,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 239731.65787281326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 295785.37766323145,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 295784.6391752576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 353867.1127789085,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 353862.1501014199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 411619.96310311655,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 411618.1646168404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 470026.24555734225,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 470012.8163704907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4896.050567068076,
            "unit": "ns/iter",
            "extra": "iterations: 142840\ncpu: 4895.979417530102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4147.758652708705,
            "unit": "ns/iter",
            "extra": "iterations: 169080\ncpu: 4147.796309439326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4138.402462818988,
            "unit": "ns/iter",
            "extra": "iterations: 169643\ncpu: 4138.255630942634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4161.603814518699,
            "unit": "ns/iter",
            "extra": "iterations: 167780\ncpu: 4161.559780665149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7336.997617172866,
            "unit": "ns/iter",
            "extra": "iterations: 95265\ncpu: 7336.868734582479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30568.495612887844,
            "unit": "ns/iter",
            "extra": "iterations: 26783\ncpu: 30566.486203935277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125101.94545720072,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 125096.95201983361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100871.34783122563,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 100867.24973407378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100452.733160924,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100449.44163629969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100869.02658317964,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100865.45368620032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 242237.6446166692,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 242224.93772488242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1951715.0419287416,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1951626.8343815503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1609889.7829861515,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1609832.8125000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1575867.3406779408,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1575817.7966101696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1615955.6330435607,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1615886.7826086974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 955856.2229102358,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 955806.8111455112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1560694.023489908,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1560648.154362411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6570516.660000294,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6570032.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3621972.7915056804,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3621783.7837837813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7875714.521739208,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7875234.057971011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30170.532913061426,
            "unit": "ns/iter",
            "extra": "iterations: 27284\ncpu: 30169.146752675584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131352.09945004544,
            "unit": "ns/iter",
            "extra": "iterations: 6546\ncpu: 131351.26794989282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103681.99275974312,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 103680.81332207067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101153.31603270477,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 101151.85448512834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105033.34096754694,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 105028.21800367453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 245216.00872011605,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 245216.09001406597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1985104.9017093724,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1985027.3504273572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1622315.1500873014,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622245.0261780096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1588062.0663265437,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1588014.6258503492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1622759.1873905507,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1622718.0385288969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 954484.9886363625,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 954446.4876033085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1568746.6159052576,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1568686.2944162423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6589380.949999963,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6589352.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3642867.4426877643,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3642731.225296437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28815.800786048523,
            "unit": "ns/iter",
            "extra": "iterations: 28497\ncpu: 28814.057620100244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127344.78347748231,
            "unit": "ns/iter",
            "extra": "iterations: 6706\ncpu: 127339.71070682905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101072.919141325,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 101069.12343470423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99288.70830417534,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99286.36575693918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100777.95698924873,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 100773.5672929222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242236.48372740214,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 242226.0917941585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1959516.3615222615,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1959421.9873150238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1615556.3119584017,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1615505.3726169895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1586507.499148163,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1586433.9011925035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1619219.1319445036,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1619158.8541666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 955998.1666666528,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 955949.3827160489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1562394.3775167102,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1562341.7785234866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2632.2527549347974,
            "unit": "ns/iter",
            "extra": "iterations: 266068\ncpu: 2632.1500518664297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14293.676407610721,
            "unit": "ns/iter",
            "extra": "iterations: 49037\ncpu: 14293.143952525634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10701.109488715902,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10700.639104641887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11092.844705770041,
            "unit": "ns/iter",
            "extra": "iterations: 62842\ncpu: 11092.9458005793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9057.330721388116,
            "unit": "ns/iter",
            "extra": "iterations: 77337\ncpu: 9057.219700790047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55349.11749822107,
            "unit": "ns/iter",
            "extra": "iterations: 12647\ncpu: 55346.10579584048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126473.15073197545,
            "unit": "ns/iter",
            "extra": "iterations: 5533\ncpu: 126467.35947948697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32331.041452933634,
            "unit": "ns/iter",
            "extra": "iterations: 21639\ncpu: 32329.71024539024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31703.997918362158,
            "unit": "ns/iter",
            "extra": "iterations: 22098\ncpu: 31701.801067969645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32258.001891754706,
            "unit": "ns/iter",
            "extra": "iterations: 21673\ncpu: 32256.24971162284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65310.99515828927,
            "unit": "ns/iter",
            "extra": "iterations: 10740\ncpu: 65307.96089385493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58403.75073093164,
            "unit": "ns/iter",
            "extra": "iterations: 11971\ncpu: 58400.785230974965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16483.85974130024,
            "unit": "ns/iter",
            "extra": "iterations: 42443\ncpu: 16484.004429470257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79209.96802982056,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 79208.85675553464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63988.84592172613,
            "unit": "ns/iter",
            "extra": "iterations: 10936\ncpu: 63985.42428675955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62589.30853156801,
            "unit": "ns/iter",
            "extra": "iterations: 11182\ncpu: 62586.64818458279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64987.05404144202,
            "unit": "ns/iter",
            "extra": "iterations: 10714\ncpu: 64984.282247525975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 122448.63625240137,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122448.38314979832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 546988.9306853476,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 546960.7476635469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 465665.9346666553,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 465651.39999999397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 452408.91079510463,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452386.5546218512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 463603.19391132303,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 463582.99139643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 294125.5291649058,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 294112.96684850805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 449370.50417468447,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 449356.5831727764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16855.99224880889,
            "unit": "ns/iter",
            "extra": "iterations: 41542\ncpu: 16855.351210822708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81501.64068507837,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81499.02132121561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65450.9573770471,
            "unit": "ns/iter",
            "extra": "iterations: 10675\ncpu: 65450.81967213166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63935.74842364943,
            "unit": "ns/iter",
            "extra": "iterations: 10943\ncpu: 63934.807639586965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66091.59008966108,
            "unit": "ns/iter",
            "extra": "iterations: 10595\ncpu: 66089.65549787707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124480.39226126559,
            "unit": "ns/iter",
            "extra": "iterations: 5634\ncpu: 124475.18636847622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 546113.271662722,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546089.773614372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 464257.05507630843,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464235.4346383597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 451615.94903223915,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 451601.3548387095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 461436.01583111077,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 461435.3562005243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 296774.7397549594,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 296770.2154626086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 449936.4146341324,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449932.15661103383 ns\nthreads: 1"
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
        "date": 1702488579965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6548.379589080737,
            "unit": "ns/iter",
            "extra": "iterations: 106639\ncpu: 6548.391301493825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63534.95160810387,
            "unit": "ns/iter",
            "extra": "iterations: 13432\ncpu: 63532.76503871353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 122208.69148194001,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 122207.34699567825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 180880.26259067823,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 180873.34715025904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 238921.4703590396,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 238914.66740885066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294793.5604508335,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 294778.2786885247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 352609.40064883075,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 352599.1889699918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 410329.934588256,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 410316.09411764686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 466662.13802360743,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 466649.40923737903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4929.702542067608,
            "unit": "ns/iter",
            "extra": "iterations: 141499\ncpu: 4929.581127781828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4120.377487228827,
            "unit": "ns/iter",
            "extra": "iterations: 169717\ncpu: 4120.2525380486395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4072.94413212959,
            "unit": "ns/iter",
            "extra": "iterations: 172013\ncpu: 4072.9526256736417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4119.212738658563,
            "unit": "ns/iter",
            "extra": "iterations: 169908\ncpu: 4119.155072156697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7478.698955726846,
            "unit": "ns/iter",
            "extra": "iterations: 94707\ncpu: 7478.536961365054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29163.263534581132,
            "unit": "ns/iter",
            "extra": "iterations: 28224\ncpu: 29161.745323129202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125740.1898827019,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 125737.25806451608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99843.96702016104,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 99842.22118634218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97803.50797811907,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 97799.49851834943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99656.4722157667,
            "unit": "ns/iter",
            "extra": "iterations: 8602\ncpu: 99652.63892118118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244880.1947471407,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 244878.2900251466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1952738.2289915173,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1952605.6722689066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1620280.053913002,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1620244.8695652117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1563783.0843169717,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1563716.1888701522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1602017.2936096445,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1601994.127806564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 952705.5564681373,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 952689.4250513363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1552246.366834173,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1552194.3048576184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6500784.780000117,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6500551.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3561123.782442762,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3561058.7786259595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7843309.589999876,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7843081.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29196.82652304499,
            "unit": "ns/iter",
            "extra": "iterations: 28315\ncpu: 29196.634292777624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126249.16015854319,
            "unit": "ns/iter",
            "extra": "iterations: 6812\ncpu: 126243.2618907816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101048.1577584173,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 101046.30327289859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98599.13728423236,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 98597.30724971181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101041.38951975381,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 101038.23042346844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 245330.12363329576,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 245322.03532380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1975205.2675159436,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975174.5222929968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1636388.6164623736,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1636328.0210157651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1569555.6402027048,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1569524.324324322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1603667.0791738066,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1603588.9845094732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 949491.8454451942,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 949477.1750255828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1570215.0984975107,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1569618.363939911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6515975.280000248,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6515863.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3761615.888000051,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3761561.599999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28711.572494335735,
            "unit": "ns/iter",
            "extra": "iterations: 28685\ncpu: 28711.14171169588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124627.15947277147,
            "unit": "ns/iter",
            "extra": "iterations: 6904\ncpu: 124627.82444959438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100297.33091674816,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 100295.123947615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98249.78873399968,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 98248.13756855522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99412.56788118082,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 99412.49709909507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244181.04960980205,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 244182.05128205044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1944683.06471809,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1944649.2693110735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1617116.381944407,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617096.180555561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1562028.676716954,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1560944.3886097176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1590295.9469178533,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1590240.2397260321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 947024.6820041181,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 946987.0143149314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1548055.8438538646,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1547994.3521594764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2614.502879078701,
            "unit": "ns/iter",
            "extra": "iterations: 266752\ncpu: 2614.3631537907927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14300.181360560286,
            "unit": "ns/iter",
            "extra": "iterations: 49068\ncpu: 14299.8716067499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11265.816344395467,
            "unit": "ns/iter",
            "extra": "iterations: 63973\ncpu: 11265.590170853282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11077.257067333396,
            "unit": "ns/iter",
            "extra": "iterations: 63178\ncpu: 11077.060052549943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8977.202975244887,
            "unit": "ns/iter",
            "extra": "iterations: 78044\ncpu: 8976.945056634699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55802.18170226478,
            "unit": "ns/iter",
            "extra": "iterations: 12548\ncpu: 55800.63755180107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125647.47223719722,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 125643.68373764642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32321.278873760148,
            "unit": "ns/iter",
            "extra": "iterations: 21594\ncpu: 32319.99166435122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31519.391537491723,
            "unit": "ns/iter",
            "extra": "iterations: 22192\ncpu: 31518.04253785186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32201.79669063183,
            "unit": "ns/iter",
            "extra": "iterations: 21696\ncpu: 32200.944874631594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 64940.45303662812,
            "unit": "ns/iter",
            "extra": "iterations: 10785\ncpu: 64938.45155308329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58174.412590314496,
            "unit": "ns/iter",
            "extra": "iterations: 12041\ncpu: 58172.88431193391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16433.754339807845,
            "unit": "ns/iter",
            "extra": "iterations: 42571\ncpu: 16433.39597378475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79293.26252119317,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 79290.4691916339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63637.09670090292,
            "unit": "ns/iter",
            "extra": "iterations: 11003\ncpu: 63635.23584476895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 61699.8638642157,
            "unit": "ns/iter",
            "extra": "iterations: 11371\ncpu: 61698.179579632735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 63798.87415709812,
            "unit": "ns/iter",
            "extra": "iterations: 10974\ncpu: 63796.801530891134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124583.34418356813,
            "unit": "ns/iter",
            "extra": "iterations: 5622\ncpu: 124581.37673425766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 541478.2513534183,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 541461.4075792657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 458988.09430253255,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458983.8899803566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 446636.8303108782,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 446622.2150259051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 461738.21897336614,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 461710.85120208625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 291936.3816444997,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 291922.9651162791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 444916.14857143135,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444897.84126984066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16652.763310652645,
            "unit": "ns/iter",
            "extra": "iterations: 42034\ncpu: 16652.000761288567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81107.10650819117,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 81103.02330948476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64910.817244262675,
            "unit": "ns/iter",
            "extra": "iterations: 10763\ncpu: 64910.62900678203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63010.19541984771,
            "unit": "ns/iter",
            "extra": "iterations: 11135\ncpu: 63007.822182307966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65015.88515275795,
            "unit": "ns/iter",
            "extra": "iterations: 10736\ncpu: 65013.04955290699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125219.13910245209,
            "unit": "ns/iter",
            "extra": "iterations: 5593\ncpu: 125214.03540139605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 542788.2370255505,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542770.0232378065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 460296.0019684916,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 460289.5013123382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 445032.8607755819,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 445028.79847424955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 456073.7426900356,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 456059.97400909354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 294672.51680673234,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 294673.61344538006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 445815.8184713579,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 445821.9745222909 ns\nthreads: 1"
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
        "date": 1702490742740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6568.5606969808605,
            "unit": "ns/iter",
            "extra": "iterations: 107320\ncpu: 6568.3255683935895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63894.52761933226,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 63890.77604323026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126234.52607901326,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 126230.52158020526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 180595.40994175783,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 180590.91098169715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 240661.2264933589,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 240660.75774336274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294627.905595613,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 294630.72433916933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 352324.63860784733,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 352306.92027519224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 409760.6123410395,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 409733.86716909986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 467872.0483351395,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 467857.1965628354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5014.17575898163,
            "unit": "ns/iter",
            "extra": "iterations: 142263\ncpu: 5013.972712511342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4077.703001598174,
            "unit": "ns/iter",
            "extra": "iterations: 170809\ncpu: 4077.5960283123263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4037.837800850135,
            "unit": "ns/iter",
            "extra": "iterations: 173176\ncpu: 4037.714232919103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4054.0016789946158,
            "unit": "ns/iter",
            "extra": "iterations: 173318\ncpu: 4053.737638329546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7313.299305368281,
            "unit": "ns/iter",
            "extra": "iterations: 96166\ncpu: 7313.284320861841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29957.367245384263,
            "unit": "ns/iter",
            "extra": "iterations: 27532\ncpu: 29955.724248147657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128230.16057850598,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 128222.02176830168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101308.95640358437,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 101306.52173913029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98125.45412792238,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 98126.36353197835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99136.0882763358,
            "unit": "ns/iter",
            "extra": "iterations: 8598\ncpu: 99129.07652942574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 243063.9256060124,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 243056.1994984677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1946019.190376591,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1945962.9707112978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1607165.2193436585,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1607069.430051815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1559240.4429529575,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1559118.2885906037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1599186.437392691,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1599105.48885077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 959101.1754201682,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 959035.924369749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1548889.3662207245,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1548810.7023411344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6612982.859999193,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6612600.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3716292.337301526,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3716065.476190466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7893588.797101338,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7893248.550724641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29498.83850820638,
            "unit": "ns/iter",
            "extra": "iterations: 28020\ncpu: 29496.877230549613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127886.78907300113,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 127880.429914913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102966.57944711941,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 102957.12740384655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99471.24060325068,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 99465.74245939679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102265.59136964186,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 102260.4482059841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247482.9682809303,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 247469.44208439617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1964763.3678648332,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1964641.226215646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1614168.9443477094,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1614142.2608695575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1572735.743197348,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1572714.6258503357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1603609.475945166,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603595.876288654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 955491.8131417688,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 955480.3901437379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1552725.5809682398,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1552701.6694490851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6556657.620000124,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6555891.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3612217.2664091317,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3612034.7490347386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28223.53642996672,
            "unit": "ns/iter",
            "extra": "iterations: 29193\ncpu: 28222.392354331558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125654.27400468547,
            "unit": "ns/iter",
            "extra": "iterations: 6832\ncpu: 125650.19028103116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100453.0536070472,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100446.65102639321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97556.05810779954,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 97552.2287923583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98752.14876892281,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 98745.28956190089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242106.65632788924,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 242096.67682082628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1977650.0167362976,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1977516.7364016757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1623146.356415694,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1623057.4338085537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1578396.8067796456,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1578281.0169491551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1601995.1497417802,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1601945.6110154812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 950800.676891661,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 950740.2862985649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1553508.297658929,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1553443.8127090363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2663.2801489589524,
            "unit": "ns/iter",
            "extra": "iterations: 263160\ncpu: 2663.1988144094876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14364.508091411013,
            "unit": "ns/iter",
            "extra": "iterations: 48879\ncpu: 14364.013175392283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10998.65270015752,
            "unit": "ns/iter",
            "extra": "iterations: 63700\ncpu: 10997.808477237057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10596.177223771052,
            "unit": "ns/iter",
            "extra": "iterations: 66385\ncpu: 10595.476387738145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8996.0383200216,
            "unit": "ns/iter",
            "extra": "iterations: 78001\ncpu: 8995.49492955215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55954.320725929276,
            "unit": "ns/iter",
            "extra": "iterations: 12453\ncpu: 55953.23215289475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132979.6671522231,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 132970.46613255757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32388.957820733656,
            "unit": "ns/iter",
            "extra": "iterations: 21622\ncpu: 32387.706965127916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31718.68934281318,
            "unit": "ns/iter",
            "extra": "iterations: 22079\ncpu: 31718.438335069703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32043.541511940675,
            "unit": "ns/iter",
            "extra": "iterations: 21813\ncpu: 32042.80016503882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65605.15228807196,
            "unit": "ns/iter",
            "extra": "iterations: 10664\ncpu: 65603.00075018803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58540.10371672672,
            "unit": "ns/iter",
            "extra": "iterations: 11946\ncpu: 58536.187845304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16841.341863659847,
            "unit": "ns/iter",
            "extra": "iterations: 41499\ncpu: 16840.193739608356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80516.72178809614,
            "unit": "ns/iter",
            "extra": "iterations: 8702\ncpu: 80509.89427717883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65387.63960101195,
            "unit": "ns/iter",
            "extra": "iterations: 10727\ncpu: 65386.09117180902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63899.24546697341,
            "unit": "ns/iter",
            "extra": "iterations: 10975\ncpu: 63897.16628701558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65480.62993821407,
            "unit": "ns/iter",
            "extra": "iterations: 10682\ncpu: 65476.31529676037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 125504.4112452666,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 125496.03532167904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 547028.308651672,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 546990.1792673407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 459127.4157376976,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 459093.50819672045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 451531.9451258727,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 451500.45190445066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 456653.082952295,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 456635.9895493195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 295794.8172588685,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 295773.1387478859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 447556.95849295135,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 447561.4303959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17144.418376557893,
            "unit": "ns/iter",
            "extra": "iterations: 40987\ncpu: 17144.07983018995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 83138.96665084107,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83135.94825539953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66494.83261597046,
            "unit": "ns/iter",
            "extra": "iterations: 10455\ncpu: 66489.60306073634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65326.71028560347,
            "unit": "ns/iter",
            "extra": "iterations: 10714\ncpu: 65321.49523987313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66948.3894716766,
            "unit": "ns/iter",
            "extra": "iterations: 10486\ncpu: 66945.84207514852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125730.33885189418,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 125729.80025193356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 546795.0703125446,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 546793.9062499983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 458610.7670603738,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 458604.3307086644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 453247.13527506933,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 453251.3268608455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 466588.3466318141,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 466574.42773054907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 298914.5663830041,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 298898.4680851075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 449111.793457354,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 449103.91276459285 ns\nthreads: 1"
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
        "date": 1705573971184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6664.029370536347,
            "unit": "ns/iter",
            "extra": "iterations: 104867\ncpu: 6663.632029141675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63914.42866806685,
            "unit": "ns/iter",
            "extra": "iterations: 13304\ncpu: 63908.75676488275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123116.66713365645,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 123110.19893527594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 181420.47586206757,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 181417.3249738767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 240573.61662945175,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 240557.4776785713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294661.2192109775,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 294649.60548885097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 353069.0887717991,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 353060.7215241184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 410485.96561467013,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 410450.6829957606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 468320.7567132222,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 468294.14607948455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4905.713748541283,
            "unit": "ns/iter",
            "extra": "iterations: 143077\ncpu: 4905.483760492595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4159.134268287011,
            "unit": "ns/iter",
            "extra": "iterations: 168208\ncpu: 4158.890183582239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4135.71088668266,
            "unit": "ns/iter",
            "extra": "iterations: 169418\ncpu: 4135.518067737786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4152.978978231904,
            "unit": "ns/iter",
            "extra": "iterations: 168825\ncpu: 4152.765881830298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7308.005423559194,
            "unit": "ns/iter",
            "extra": "iterations: 95878\ncpu: 7307.3697824318415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29706.842942561976,
            "unit": "ns/iter",
            "extra": "iterations: 27595\ncpu: 29705.207465120526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124312.19797101544,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 124305.99999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99146.333948762,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 99141.05700438493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98029.91269116469,
            "unit": "ns/iter",
            "extra": "iterations: 8762\ncpu: 98024.54918968285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99645.24860788356,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 99639.69837586986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 239485.00383247316,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 239472.1051190807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1953421.533613425,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953303.9915966406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1632228.1298244975,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1632141.2280701764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1586347.3510273162,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1586257.0205479458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1620494.9353147475,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1620431.6433566425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 957583.6687242344,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 957526.8518518533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1569045.3676223024,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568995.9527824603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6541117.660000281,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6540771.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3611056.1576923425,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3610913.0769230793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7893011.971014591,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7892359.420289843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28774.553821933427,
            "unit": "ns/iter",
            "extra": "iterations: 28585\ncpu: 28773.626027636878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124389.46125995579,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 124387.24112961648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101308.65569917462,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 101304.37132784964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98664.5267026539,
            "unit": "ns/iter",
            "extra": "iterations: 8707\ncpu: 98659.82542781702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102364.34318889225,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102359.16926023462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 243418.482132887,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 243411.97654941236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1976485.6652452145,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1976414.9253731337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1642194.9119717483,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1642158.8028169083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1608741.0305754624,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1608635.7913669078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1635756.0874125285,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1635717.4825174839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 956279.716356089,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 956223.1884057941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1574984.4846938413,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1574913.2653061207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6507455.219999655,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6507159.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3643005.488281226,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3642938.281250008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28365.058184319685,
            "unit": "ns/iter",
            "extra": "iterations: 29080\ncpu: 28363.45254470441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123667.95517241227,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 123661.59482758625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99510.47705243337,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 99508.87539413755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97283.47197271185,
            "unit": "ns/iter",
            "extra": "iterations: 8795\ncpu: 97282.78567367808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98587.52425953849,
            "unit": "ns/iter",
            "extra": "iterations: 8677\ncpu: 98584.93719027296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 237346.48720043353,
            "unit": "ns/iter",
            "extra": "iterations: 3672\ncpu: 237339.43355119778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1958630.3902953423,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1958541.3502109698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1624544.8024475793,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624491.0839160823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1592983.0958904005,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1592808.732876705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1622801.055749141,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622684.3205574877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 955583.4188911605,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 955537.6796714569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1568224.4170854925,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1568159.966499162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2680.897585720219,
            "unit": "ns/iter",
            "extra": "iterations: 262190\ncpu: 2680.7654754185746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14017.637473525017,
            "unit": "ns/iter",
            "extra": "iterations: 50046\ncpu: 14016.748591296027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10249.713268305411,
            "unit": "ns/iter",
            "extra": "iterations: 68381\ncpu: 10249.437709305217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10616.903689478024,
            "unit": "ns/iter",
            "extra": "iterations: 66649\ncpu: 10616.682920974015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8917.849816106318,
            "unit": "ns/iter",
            "extra": "iterations: 78850\ncpu: 8917.440710209257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55279.727589483766,
            "unit": "ns/iter",
            "extra": "iterations: 12628\ncpu: 55276.20367437438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126949.12738738453,
            "unit": "ns/iter",
            "extra": "iterations: 5550\ncpu: 126939.81981981947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32192.38785327611,
            "unit": "ns/iter",
            "extra": "iterations: 21619\ncpu: 32189.948656274606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31730.986924852074,
            "unit": "ns/iter",
            "extra": "iterations: 22103\ncpu: 31729.49373388242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32010.325054883353,
            "unit": "ns/iter",
            "extra": "iterations: 21864\ncpu: 32008.772411269965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65696.90445382199,
            "unit": "ns/iter",
            "extra": "iterations: 10665\ncpu: 65692.3675574303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58192.2505198367,
            "unit": "ns/iter",
            "extra": "iterations: 12023\ncpu: 58190.934043083624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16598.514123892866,
            "unit": "ns/iter",
            "extra": "iterations: 42198\ncpu: 16598.412247026066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80833.08401615713,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 80829.14021927275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65200.29822770868,
            "unit": "ns/iter",
            "extra": "iterations: 10777\ncpu: 65196.705947852235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63304.06083890757,
            "unit": "ns/iter",
            "extra": "iterations: 11062\ncpu: 63299.97288013037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65402.498551805016,
            "unit": "ns/iter",
            "extra": "iterations: 10703\ncpu: 65401.08380827827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 123554.90302067342,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 123554.33668962853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 546897.254488681,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546872.0530835319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 460934.8610013186,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 460911.00131751824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 452882.3389283527,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452879.6642995519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 460507.37944665586,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 460479.7101449238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 295414.59299872967,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 295397.97553774633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 450501.662379401,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 450478.1993569142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16792.85437359048,
            "unit": "ns/iter",
            "extra": "iterations: 41682\ncpu: 16792.226860515533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82504.298075787,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82501.09786329886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66352.26299376527,
            "unit": "ns/iter",
            "extra": "iterations: 10582\ncpu: 66351.20015120077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64443.45427756115,
            "unit": "ns/iter",
            "extra": "iterations: 10859\ncpu: 64441.007459250875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66395.70665150843,
            "unit": "ns/iter",
            "extra": "iterations: 10554\ncpu: 66392.13568315328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124423.90587605035,
            "unit": "ns/iter",
            "extra": "iterations: 5599\ncpu: 124416.82443293526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 545922.7881619931,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545919.470404986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 462286.26402641414,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462268.0528052813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 451065.41043815383,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 451041.4948453671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 459721.59102907823,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 459704.61741424794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 297487.243093911,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 297472.5881852987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 450330.78828831355,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 450318.72586872923 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}