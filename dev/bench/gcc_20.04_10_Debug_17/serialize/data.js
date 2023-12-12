window.BENCHMARK_DATA = {
  "lastUpdate": 1702398832554,
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
      }
    ]
  }
}