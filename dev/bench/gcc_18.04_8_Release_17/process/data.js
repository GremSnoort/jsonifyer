window.BENCHMARK_DATA = {
  "lastUpdate": 1702382311627,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702381116286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1816.722042644739,
            "unit": "ns/iter",
            "extra": "iterations: 384854\ncpu: 1816.6333206878453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26758.818649978697,
            "unit": "ns/iter",
            "extra": "iterations: 30681\ncpu: 26757.234118835757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55141.384707287885,
            "unit": "ns/iter",
            "extra": "iterations: 15066\ncpu: 55140.063719633596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68798.57913413762,
            "unit": "ns/iter",
            "extra": "iterations: 12681\ncpu: 68795.53662960336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96574.57580205567,
            "unit": "ns/iter",
            "extra": "iterations: 9538\ncpu: 96572.2583350807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119681.60491441544,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 119674.40640530092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145403.78926572262,
            "unit": "ns/iter",
            "extra": "iterations: 6074\ncpu: 145398.8475469213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 168237.6602852133,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 168225.25883961693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 191853.93901909812,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 191848.13368055568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1645.269531861083,
            "unit": "ns/iter",
            "extra": "iterations: 428313\ncpu: 1645.1597313179864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1318.005985638218,
            "unit": "ns/iter",
            "extra": "iterations: 532107\ncpu: 1317.9631164408656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1287.6597248259363,
            "unit": "ns/iter",
            "extra": "iterations: 544092\ncpu: 1287.5866581386988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1293.8843057103938,
            "unit": "ns/iter",
            "extra": "iterations: 540891\ncpu: 1293.8577273424764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2402.800979281518,
            "unit": "ns/iter",
            "extra": "iterations: 290417\ncpu: 2402.7236697576213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10038.800772472736,
            "unit": "ns/iter",
            "extra": "iterations: 82333\ncpu: 10038.436592860702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52638.14941723571,
            "unit": "ns/iter",
            "extra": "iterations: 15701\ncpu: 52635.71747022488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39031.59124191689,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 39030.12076835292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40916.70959558179,
            "unit": "ns/iter",
            "extra": "iterations: 20103\ncpu: 40913.5701139133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38970.24593912199,
            "unit": "ns/iter",
            "extra": "iterations: 20993\ncpu: 38968.69432668032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106322.82762351181,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 106318.2834475298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828137.500439747,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 828109.4986807399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 683328.3352941108,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 683297.1323529413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688478.3750000101,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 688459.7953216373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 675840.9853157032,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 675803.5976505129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 483914.2063053123,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 483902.3783185846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 683169.0745614127,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 683150.8040935658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3648011.930232608,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3647808.5271317754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1548495.433993419,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1548420.6270627098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4691767.641791086,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4691543.28358209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13063.526081574473,
            "unit": "ns/iter",
            "extra": "iterations: 63819\ncpu: 13062.940503611779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55429.7900000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55426.09000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49908.33289228422,
            "unit": "ns/iter",
            "extra": "iterations: 16627\ncpu: 49906.80820352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52079.03349462598,
            "unit": "ns/iter",
            "extra": "iterations: 15913\ncpu: 52077.44611324052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50015.640739406146,
            "unit": "ns/iter",
            "extra": "iterations: 16662\ncpu: 50013.5337894611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115279.83651551243,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 115277.87059135517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 872305.0696143019,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 872281.185324555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 713683.6907294862,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 713658.7386018219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 709489.9379727632,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 709459.0015128581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 704965.0661654278,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 704948.3458646601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 494729.5508712892,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 494706.4643057919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 694164.8146233326,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 694149.7784342706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3848941.229838644,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3848682.2580644973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1647202.4436741555,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1647131.195840549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8983.091034378602,
            "unit": "ns/iter",
            "extra": "iterations: 92877\ncpu: 8982.64586496118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51781.29941352579,
            "unit": "ns/iter",
            "extra": "iterations: 16028\ncpu: 51779.760419266306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41525.47969302843,
            "unit": "ns/iter",
            "extra": "iterations: 20067\ncpu: 41524.18398365473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41565.21835237753,
            "unit": "ns/iter",
            "extra": "iterations: 20041\ncpu: 41563.44493787748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41229.263758622175,
            "unit": "ns/iter",
            "extra": "iterations: 20151\ncpu: 41227.97379782629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103624.55931799415,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 103618.56444497469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 859173.5326678603,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 859148.4573502671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 716424.8289085524,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 716391.0766961633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 692862.2051094801,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 692843.4306569357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 692937.8159240424,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 692902.1913805701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 489498.36237514176,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 489486.9589345171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 686181.3942238181,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 686163.7545126319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 631.0242153279335,
            "unit": "ns/iter",
            "extra": "iterations: 1091953\ncpu: 630.9830184998757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4816.840269981619,
            "unit": "ns/iter",
            "extra": "iterations: 146084\ncpu: 4816.637003367949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3705.1613603397313,
            "unit": "ns/iter",
            "extra": "iterations: 191658\ncpu: 3705.1002306191044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3908.487772164372,
            "unit": "ns/iter",
            "extra": "iterations: 178936\ncpu: 3908.43150623688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2841.139628897636,
            "unit": "ns/iter",
            "extra": "iterations: 244892\ncpu: 2841.104650213162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25760.20578707136,
            "unit": "ns/iter",
            "extra": "iterations: 27164\ncpu: 25759.818141658416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49168.89653475838,
            "unit": "ns/iter",
            "extra": "iterations: 14227\ncpu: 49168.01152737699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11625.859449760534,
            "unit": "ns/iter",
            "extra": "iterations: 60192\ncpu: 11625.652910685718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11511.645181949394,
            "unit": "ns/iter",
            "extra": "iterations: 60896\ncpu: 11511.514713610279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11534.780042776752,
            "unit": "ns/iter",
            "extra": "iterations: 60780\ncpu: 11534.35011516948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21877.274943665594,
            "unit": "ns/iter",
            "extra": "iterations: 31952\ncpu: 21876.93728092145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22611.529068266253,
            "unit": "ns/iter",
            "extra": "iterations: 30996\ncpu: 22610.914311524048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6758.062652484607,
            "unit": "ns/iter",
            "extra": "iterations: 103699\ncpu: 6758.048775783752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34007.07497580002,
            "unit": "ns/iter",
            "extra": "iterations: 20660\ncpu: 34005.469506292095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27454.324832269085,
            "unit": "ns/iter",
            "extra": "iterations: 25487\ncpu: 27454.274728292457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27607.17364066099,
            "unit": "ns/iter",
            "extra": "iterations: 25380\ncpu: 27606.126871552333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28353.349600421072,
            "unit": "ns/iter",
            "extra": "iterations: 24651\ncpu: 28353.29601233195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59771.49978725231,
            "unit": "ns/iter",
            "extra": "iterations: 11751\ncpu: 59769.27070036486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 223568.1350574716,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 223567.65644955117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 190888.4342248954,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 190882.86026201074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187045.9100729165,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 187042.88414798887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 186883.50600801685,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 186879.73297730254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111674.2281150104,
            "unit": "ns/iter",
            "extra": "iterations: 6260\ncpu: 111670.07987220299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 185143.35379729368,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185143.00079386015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6197.563405363547,
            "unit": "ns/iter",
            "extra": "iterations: 112869\ncpu: 6197.321673798779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32335.486219568564,
            "unit": "ns/iter",
            "extra": "iterations: 21770\ncpu: 32333.67478180929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25705.965257631222,
            "unit": "ns/iter",
            "extra": "iterations: 27229\ncpu: 25704.065518381492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26072.831887727545,
            "unit": "ns/iter",
            "extra": "iterations: 26863\ncpu: 26071.913040241383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26532.993456388165,
            "unit": "ns/iter",
            "extra": "iterations: 26438\ncpu: 26531.753536576252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57886.332949685486,
            "unit": "ns/iter",
            "extra": "iterations: 12164\ncpu: 57885.300887865356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 209004.56810036418,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 208993.548387097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 180543.07991751024,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 180538.38618200496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 178639.33836704306,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 178629.51113386345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 180451.2988565539,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 180449.50623700512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 108054.09970808815,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 108051.92809955476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 181383.70023419693,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 181375.33177205335 ns\nthreads: 1"
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
        "date": 1702382310141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1824.1016229439658,
            "unit": "ns/iter",
            "extra": "iterations: 385041\ncpu: 1824.0535423500355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26979.071733282286,
            "unit": "ns/iter",
            "extra": "iterations: 30474\ncpu: 26978.125615278597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55165.528181214446,
            "unit": "ns/iter",
            "extra": "iterations: 15010\ncpu: 55164.27048634243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68960.42024539907,
            "unit": "ns/iter",
            "extra": "iterations: 12714\ncpu: 68956.45744848198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97520.72073209277,
            "unit": "ns/iter",
            "extra": "iterations: 9507\ncpu: 97515.11517828969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121496.31706632476,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 121488.09423643243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 146009.11075949206,
            "unit": "ns/iter",
            "extra": "iterations: 6004\ncpu: 146002.91472351772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 165737.39827518465,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 165727.94982359864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 189025.3218837773,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 189012.63771872973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1568.8365881984503,
            "unit": "ns/iter",
            "extra": "iterations: 447740\ncpu: 1568.7570911689802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1280.351248540606,
            "unit": "ns/iter",
            "extra": "iterations: 547319\ncpu: 1280.279507928648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1260.1516247567054,
            "unit": "ns/iter",
            "extra": "iterations: 555437\ncpu: 1260.0460538278874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1293.774709358504,
            "unit": "ns/iter",
            "extra": "iterations: 543023\ncpu: 1293.703213307724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2405.1516322102243,
            "unit": "ns/iter",
            "extra": "iterations: 293559\ncpu: 2404.9782156227566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10158.817165471199,
            "unit": "ns/iter",
            "extra": "iterations: 80860\ncpu: 10158.229037843195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52739.381929400784,
            "unit": "ns/iter",
            "extra": "iterations: 15694\ncpu: 52735.82897922769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39177.32145230125,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 39176.33127669665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 41017.469557426375,
            "unit": "ns/iter",
            "extra": "iterations: 20087\ncpu: 41015.09433962273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38876.137017873145,
            "unit": "ns/iter",
            "extra": "iterations: 21260\ncpu: 38875.21166509879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105430.04631629187,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 105410.66714662829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 830843.2251539463,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 830822.075637644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 680108.8519051145,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 680073.2566498944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 682226.6016081806,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 682213.3040935694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 688641.5908756094,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 688612.8771155262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 485621.9284916179,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 485587.93296089326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 686893.5688005979,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 686850.7726269317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3663254.0195313813,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3663137.8906250014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1600311.0441426237,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1600196.6044142595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4700723.169154326,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4700421.89054725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13038.004009314043,
            "unit": "ns/iter",
            "extra": "iterations: 64849\ncpu: 13037.599654582189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55589.18360000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55586.0599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50090.20468721775,
            "unit": "ns/iter",
            "extra": "iterations: 16513\ncpu: 50087.97311209335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52535.69866949908,
            "unit": "ns/iter",
            "extra": "iterations: 16009\ncpu: 52533.437441439186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50431.81436477358,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 50429.95668912408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114440.99588750361,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 114437.22472804437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 868497.6306976961,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 868462.4186046512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 709508.3113636598,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 709477.9545454559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 701538.0560538387,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 701510.762331835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 703131.9463087382,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 703101.1931394446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 495006.1542824808,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 494970.1077708448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699333.6166418663,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 699293.5364041607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3818078.4674796825,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3817840.2439024206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1658294.4779541937,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1658128.9241622493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8967.097270621602,
            "unit": "ns/iter",
            "extra": "iterations: 92402\ncpu: 8966.856777991821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 52432.149665443925,
            "unit": "ns/iter",
            "extra": "iterations: 15842\ncpu: 52429.64903421282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41097.95975555151,
            "unit": "ns/iter",
            "extra": "iterations: 20127\ncpu: 41095.01167585828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41301.60759681563,
            "unit": "ns/iter",
            "extra": "iterations: 20219\ncpu: 41298.73881003007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41294.67321928739,
            "unit": "ns/iter",
            "extra": "iterations: 19992\ncpu: 41293.27230892373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103794.55318392595,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 103787.16945333818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 859683.8981818358,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 859606.9090909063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 697052.6426931625,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 696999.4644223385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 690591.1143911491,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 690555.9409594097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 697369.4383868653,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 697320.7617625083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 491543.59288537747,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 491508.24392998306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 683347.182412782,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 683306.6133720919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 655.3889086963702,
            "unit": "ns/iter",
            "extra": "iterations: 1068621\ncpu: 655.3761342889634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4886.453559615578,
            "unit": "ns/iter",
            "extra": "iterations: 143302\ncpu: 4886.046949798325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3744.1335866176587,
            "unit": "ns/iter",
            "extra": "iterations: 182930\ncpu: 3743.823867052982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3849.7509188345603,
            "unit": "ns/iter",
            "extra": "iterations: 181752\ncpu: 3849.4382455213467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2864.7926169474154,
            "unit": "ns/iter",
            "extra": "iterations: 244533\ncpu: 2864.5839211885673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25578.021434579972,
            "unit": "ns/iter",
            "extra": "iterations: 27339\ncpu: 25575.423387834322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49664.48765650376,
            "unit": "ns/iter",
            "extra": "iterations: 14137\ncpu: 49661.1374407586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11632.338856448929,
            "unit": "ns/iter",
            "extra": "iterations: 60111\ncpu: 11631.500058225683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11534.446075681311,
            "unit": "ns/iter",
            "extra": "iterations: 60622\ncpu: 11533.656098446183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11690.543230697556,
            "unit": "ns/iter",
            "extra": "iterations: 59888\ncpu: 11689.423590702745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23032.358124999737,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 23031.210526316052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22786.14749846134,
            "unit": "ns/iter",
            "extra": "iterations: 30841\ncpu: 22784.708667034207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6802.067633840974,
            "unit": "ns/iter",
            "extra": "iterations: 102360\ncpu: 6801.698905822564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34088.538262820155,
            "unit": "ns/iter",
            "extra": "iterations: 20516\ncpu: 34086.80542015956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27302.301996413724,
            "unit": "ns/iter",
            "extra": "iterations: 25646\ncpu: 27301.009904078426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27499.39938080458,
            "unit": "ns/iter",
            "extra": "iterations: 25517\ncpu: 27498.1894423326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28133.00887443233,
            "unit": "ns/iter",
            "extra": "iterations: 24903\ncpu: 28132.791229972077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59657.32163494086,
            "unit": "ns/iter",
            "extra": "iterations: 11768\ncpu: 59652.396329028066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 217371.70842536024,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 217353.8340170394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186261.95634816037,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 186242.90657439636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 185963.42388139406,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185946.6507810429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 187289.33414107823,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 187274.23263328025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111963.42610641198,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 111953.84246684784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 186067.8213333358,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 186058.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6142.828301146479,
            "unit": "ns/iter",
            "extra": "iterations: 114695\ncpu: 6142.5607044770895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32573.45024333592,
            "unit": "ns/iter",
            "extra": "iterations: 21575\ncpu: 32572.060254924818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26014.4088869125,
            "unit": "ns/iter",
            "extra": "iterations: 26961\ncpu: 26011.965431549437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26275.836580247596,
            "unit": "ns/iter",
            "extra": "iterations: 26692\ncpu: 26275.30346171162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26978.710671572615,
            "unit": "ns/iter",
            "extra": "iterations: 26088\ncpu: 26977.17724624355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57994.79387465405,
            "unit": "ns/iter",
            "extra": "iterations: 11983\ncpu: 57993.55753984758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 207449.31889646532,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 207442.7172945707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 179045.31371546604,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 179037.487205733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 177359.6672570759,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 177353.1629554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 180085.5935483806,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180074.21935483822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106603.3850364995,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 106602.6459854018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178271.6349085435,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 178261.25508130185 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}