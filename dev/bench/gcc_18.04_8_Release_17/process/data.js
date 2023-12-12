window.BENCHMARK_DATA = {
  "lastUpdate": 1702396472076,
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
        "date": 1702387061721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1839.6357202758204,
            "unit": "ns/iter",
            "extra": "iterations: 380389\ncpu: 1839.5902615480472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 29646.62252269604,
            "unit": "ns/iter",
            "extra": "iterations: 25885\ncpu: 29645.995750434613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56126.94139194272,
            "unit": "ns/iter",
            "extra": "iterations: 14742\ncpu: 56125.613892280584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69846.30807799459,
            "unit": "ns/iter",
            "extra": "iterations: 12565\ncpu: 69844.65578989254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96985.17139841864,
            "unit": "ns/iter",
            "extra": "iterations: 9475\ncpu: 96982.2480211082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121095.21589643354,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 121091.17483296206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 146978.59857284673,
            "unit": "ns/iter",
            "extra": "iterations: 6026\ncpu: 146970.66047129105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 170388.62438155842,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 170382.0898476152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 194271.7763099983,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 194261.66886833977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1604.3888699464082,
            "unit": "ns/iter",
            "extra": "iterations: 436997\ncpu: 1604.3297780076277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1325.6244289514605,
            "unit": "ns/iter",
            "extra": "iterations: 528414\ncpu: 1325.5653710916038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1314.3733373850114,
            "unit": "ns/iter",
            "extra": "iterations: 533121\ncpu: 1314.3753481854978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1316.90989634119,
            "unit": "ns/iter",
            "extra": "iterations: 531166\ncpu: 1316.8858699540244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2395.2289302084127,
            "unit": "ns/iter",
            "extra": "iterations: 293216\ncpu: 2395.133280584961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10101.787098594288,
            "unit": "ns/iter",
            "extra": "iterations: 81526\ncpu: 10101.253587812476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52152.49201960803,
            "unit": "ns/iter",
            "extra": "iterations: 15914\ncpu: 52152.5197938921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38642.03711330447,
            "unit": "ns/iter",
            "extra": "iterations: 21367\ncpu: 38639.481443347155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40738.9644917879,
            "unit": "ns/iter",
            "extra": "iterations: 20277\ncpu: 40737.32307540566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38900.35548577685,
            "unit": "ns/iter",
            "extra": "iterations: 21337\ncpu: 38899.456343440965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 107042.89497771802,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 107037.92605082504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 831655.6770462281,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 831619.4839857632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 685754.4352256013,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 685727.6564774365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 677466.5465201536,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 677450.8424908438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 689893.4826054593,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 689862.1761658033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 490474.60918255814,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 490453.3034714437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 681708.6820175403,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 681681.1403508778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3697028.046874884,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3696928.1249999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1582703.1400000162,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1582629.8333333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4710212.9253730215,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4710005.4726368245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13014.981323726628,
            "unit": "ns/iter",
            "extra": "iterations: 64681\ncpu: 13014.387532660277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56110.85769999705,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56111.040000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50411.05624392606,
            "unit": "ns/iter",
            "extra": "iterations: 16464\ncpu: 50409.535957240194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52090.62466184451,
            "unit": "ns/iter",
            "extra": "iterations: 15895\ncpu: 52088.266750550785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50489.48776043512,
            "unit": "ns/iter",
            "extra": "iterations: 16463\ncpu: 50489.50373564993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 116146.26410834947,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 116141.24286283297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 873999.3609022809,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 873960.2443608964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 709489.5424886155,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 709452.7314112284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 709422.0736842329,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 709401.5789473673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 709903.847662159,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 709875.1885369517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 496713.5591882467,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 496696.5614430657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 695442.1505534857,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 695414.3173431685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3819086.7366255,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3818942.798353901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1657581.752631518,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1657487.719298239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8995.896882572228,
            "unit": "ns/iter",
            "extra": "iterations: 91614\ncpu: 8995.595651319683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51804.81587104771,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51803.60818350904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41209.0922038614,
            "unit": "ns/iter",
            "extra": "iterations: 20151\ncpu: 41208.212991911336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41252.07951555909,
            "unit": "ns/iter",
            "extra": "iterations: 20147\ncpu: 41250.56832282726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41313.80400912975,
            "unit": "ns/iter",
            "extra": "iterations: 20154\ncpu: 41312.15143395863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103734.13499703254,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 103732.3945335706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 860010.8947368121,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 859980.671506349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692847.5616740495,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 692841.5565345085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693913.6004398932,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 693894.4281524926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 698826.9335302729,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 698824.2983751844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 511775.9137737934,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 511765.84546472924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 682333.3654124517,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 682302.3154848046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 644.3097247067038,
            "unit": "ns/iter",
            "extra": "iterations: 1090110\ncpu: 644.3027767839963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4907.981275381528,
            "unit": "ns/iter",
            "extra": "iterations: 142326\ncpu: 4907.865744839272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3731.439731319972,
            "unit": "ns/iter",
            "extra": "iterations: 187137\ncpu: 3731.3171633616016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3548.5127191535403,
            "unit": "ns/iter",
            "extra": "iterations: 197065\ncpu: 3548.3972293405873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2787.7578864415964,
            "unit": "ns/iter",
            "extra": "iterations: 251254\ncpu: 2787.643579803708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25453.675931011134,
            "unit": "ns/iter",
            "extra": "iterations: 27309\ncpu: 25453.04112197437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48952.22621874391,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 48944.69898030452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11715.150134136089,
            "unit": "ns/iter",
            "extra": "iterations: 60759\ncpu: 11714.824141279514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11221.981695325665,
            "unit": "ns/iter",
            "extra": "iterations: 59493\ncpu: 11221.847948498169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11288.45359647487,
            "unit": "ns/iter",
            "extra": "iterations: 62172\ncpu: 11287.891655407542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23015.354433733737,
            "unit": "ns/iter",
            "extra": "iterations: 30189\ncpu: 23014.34959753542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22105.155152317344,
            "unit": "ns/iter",
            "extra": "iterations: 31743\ncpu: 22104.82941120853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6758.211642299456,
            "unit": "ns/iter",
            "extra": "iterations: 103897\ncpu: 6758.0199620777385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34269.15877779859,
            "unit": "ns/iter",
            "extra": "iterations: 20324\ncpu: 34268.1263530798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27190.009099394607,
            "unit": "ns/iter",
            "extra": "iterations: 25716\ncpu: 27188.808523876167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27486.852446184505,
            "unit": "ns/iter",
            "extra": "iterations: 25550\ncpu: 27486.5949119372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28149.350738759378,
            "unit": "ns/iter",
            "extra": "iterations: 24839\ncpu: 28148.162164338035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59278.251605272846,
            "unit": "ns/iter",
            "extra": "iterations: 11836\ncpu: 59277.57688408206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221249.8639671031,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 221241.50585257416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189196.32207511264,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189186.73331532328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 189304.30723541512,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 189297.246220301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 189891.5966820742,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 189889.17595866194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112819.44526603994,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 112818.48577399227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 188980.85444233654,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 188976.2084796145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6311.296901707316,
            "unit": "ns/iter",
            "extra": "iterations: 111158\ncpu: 6311.104913726306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 33120.45554294333,
            "unit": "ns/iter",
            "extra": "iterations: 21144\ncpu: 33119.78811956137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26795.443905048392,
            "unit": "ns/iter",
            "extra": "iterations: 26161\ncpu: 26794.740262222822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26796.639224533556,
            "unit": "ns/iter",
            "extra": "iterations: 26152\ncpu: 26795.79382074036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27369.96823474123,
            "unit": "ns/iter",
            "extra": "iterations: 25594\ncpu: 27369.69602250548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58153.843441464116,
            "unit": "ns/iter",
            "extra": "iterations: 12053\ncpu: 58152.07832075009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 216437.956170339,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 216433.2608019869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186275.47226666744,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 186269.06666666706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 185721.9581124017,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 185715.37645811428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 187667.17904864033,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 187662.10582576288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110171.4353901703,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 110170.02669178921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 183450.5688748711,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 183448.317560462 ns\nthreads: 1"
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
        "date": 1702388107307,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1844.9398567014514,
            "unit": "ns/iter",
            "extra": "iterations: 380325\ncpu: 1844.9047525142967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26933.139151019743,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 26932.11077601583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55154.680370196955,
            "unit": "ns/iter",
            "extra": "iterations: 14911\ncpu: 55152.15612634967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69142.81784677989,
            "unit": "ns/iter",
            "extra": "iterations: 12753\ncpu: 69139.86512977337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97214.44777532354,
            "unit": "ns/iter",
            "extra": "iterations: 9507\ncpu: 97210.80256652998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121488.5123851966,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 121482.20150292235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 147913.81047173368,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 147905.92171294743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 170709.62066917925,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 170702.47475747377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 193714.72901520113,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193707.11610486903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1620.1015939115455,
            "unit": "ns/iter",
            "extra": "iterations: 431768\ncpu: 1619.217496433269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1235.2716074380137,
            "unit": "ns/iter",
            "extra": "iterations: 572893\ncpu: 1235.2109381682099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1246.5990952830043,
            "unit": "ns/iter",
            "extra": "iterations: 563049\ncpu: 1246.5410648096356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1259.4696145418354,
            "unit": "ns/iter",
            "extra": "iterations: 555858\ncpu: 1259.4338841934432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2315.4796836448018,
            "unit": "ns/iter",
            "extra": "iterations: 295870\ncpu: 2315.3942609930023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10145.871158989801,
            "unit": "ns/iter",
            "extra": "iterations: 81131\ncpu: 10145.714954826137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52461.92265298303,
            "unit": "ns/iter",
            "extra": "iterations: 15786\ncpu: 52459.71113644994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38998.17339892288,
            "unit": "ns/iter",
            "extra": "iterations: 21142\ncpu: 38996.357960457826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40919.57924500339,
            "unit": "ns/iter",
            "extra": "iterations: 20159\ncpu: 40917.92747656118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39006.629157819814,
            "unit": "ns/iter",
            "extra": "iterations: 21195\ncpu: 39005.40693559805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 107796.23345117629,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 107791.14957942237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 830844.445422535,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 830800.6161971842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 685353.0051057608,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 685333.4062727926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 685099.3529839882,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 685073.2896652109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 687520.9918759154,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 687493.1314623326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 481773.49002216535,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 481756.65188470006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 680866.936635107,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 680846.3947560078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3626494.8223937475,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3626319.3050193028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1568097.7287854017,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1568051.9134775384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4687244.084577182,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4687046.766169157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12468.770331348072,
            "unit": "ns/iter",
            "extra": "iterations: 66818\ncpu: 12468.390254123136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53056.01830000057,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53053.97999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47872.58668515856,
            "unit": "ns/iter",
            "extra": "iterations: 17304\ncpu: 47871.02404068417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 49608.89043228482,
            "unit": "ns/iter",
            "extra": "iterations: 16702\ncpu: 49607.67572745767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 48773.49325913527,
            "unit": "ns/iter",
            "extra": "iterations: 17431\ncpu: 48771.56789627668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114834.53708609169,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 114830.39735099288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 877489.6054614071,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 877439.9246704341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 716486.7490465128,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 716465.9801678101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 713699.8928571527,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 713663.2978723379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 707516.772075485,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 707491.4716981165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 495525.1814628965,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 495504.35510887916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 698445.5623616191,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 698425.1660516596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3773479.473469316,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3773219.5918367524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1625691.3679727162,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1625639.8637137897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8958.767468894257,
            "unit": "ns/iter",
            "extra": "iterations: 92908\ncpu: 8958.412623240194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51541.18724877949,
            "unit": "ns/iter",
            "extra": "iterations: 16171\ncpu: 51539.52136540749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41081.72070245136,
            "unit": "ns/iter",
            "extra": "iterations: 20215\ncpu: 41080.796438288424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41465.621187961005,
            "unit": "ns/iter",
            "extra": "iterations: 20068\ncpu: 41463.46920470376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41480.770530313166,
            "unit": "ns/iter",
            "extra": "iterations: 20007\ncpu: 41479.51217074038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103299.01797191567,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 103294.09664365627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 848778.1015273844,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 848757.4123989242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 694581.6770908922,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 694542.1090909102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693613.6029304053,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 693598.6813186829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 694956.3200882855,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 694919.6467991135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 491470.54124861944,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 491454.5707915239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 682569.2015953619,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 682532.0522117504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 650.19673649125,
            "unit": "ns/iter",
            "extra": "iterations: 1069156\ncpu: 650.1740625315682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4926.241971136886,
            "unit": "ns/iter",
            "extra": "iterations: 142050\ncpu: 4925.983104540657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3904.0663518760366,
            "unit": "ns/iter",
            "extra": "iterations: 178955\ncpu: 3903.9015394931366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3865.9962261017354,
            "unit": "ns/iter",
            "extra": "iterations: 180715\ncpu: 3865.840688376733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2866.756262775425,
            "unit": "ns/iter",
            "extra": "iterations: 243143\ncpu: 2866.655424996819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25725.025726079642,
            "unit": "ns/iter",
            "extra": "iterations: 27132\ncpu: 25723.997493734107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47478.53004527282,
            "unit": "ns/iter",
            "extra": "iterations: 14578\ncpu: 47475.833447660334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11150.331342665544,
            "unit": "ns/iter",
            "extra": "iterations: 62793\ncpu: 11149.906836749235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11104.622952390104,
            "unit": "ns/iter",
            "extra": "iterations: 62634\ncpu: 11104.152696618481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11169.219028915264,
            "unit": "ns/iter",
            "extra": "iterations: 62631\ncpu: 11168.755089332759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21566.106551344103,
            "unit": "ns/iter",
            "extra": "iterations: 32604\ncpu: 21565.688259109626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22108.728049434034,
            "unit": "ns/iter",
            "extra": "iterations: 31719\ncpu: 22107.70200826009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6802.858238142901,
            "unit": "ns/iter",
            "extra": "iterations: 103039\ncpu: 6802.68053843695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 33626.87217324658,
            "unit": "ns/iter",
            "extra": "iterations: 20872\ncpu: 33624.894595630416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26849.4343732053,
            "unit": "ns/iter",
            "extra": "iterations: 26125\ncpu: 26848.459330143884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27166.201230363087,
            "unit": "ns/iter",
            "extra": "iterations: 25846\ncpu: 27164.880445717205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27768.097326201798,
            "unit": "ns/iter",
            "extra": "iterations: 25245\ncpu: 27767.344028520227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58680.17533282796,
            "unit": "ns/iter",
            "extra": "iterations: 11943\ncpu: 58676.67252783989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 217576.0288461532,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 217570.65756823725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186732.77060549302,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 186725.9269138433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 185486.57582241055,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 185478.81786573902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 184683.84042552268,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 184672.44680851116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110029.78450172389,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 110023.4360264052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 183414.55564305471,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 183412.88713910556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6099.24153741954,
            "unit": "ns/iter",
            "extra": "iterations: 115154\ncpu: 6098.8788926134375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32237.68534701904,
            "unit": "ns/iter",
            "extra": "iterations: 21627\ncpu: 32236.870578443486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25901.844161608675,
            "unit": "ns/iter",
            "extra": "iterations: 27028\ncpu: 25900.369986680555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26297.62396864041,
            "unit": "ns/iter",
            "extra": "iterations: 26785\ncpu: 26296.960985626523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26790.712710990043,
            "unit": "ns/iter",
            "extra": "iterations: 26127\ncpu: 26789.424733034746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57650.020656734974,
            "unit": "ns/iter",
            "extra": "iterations: 12151\ncpu: 57647.78207554868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 213431.46985384173,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 213422.2289890365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 181786.71767184697,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 181777.0608375032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 180463.52015503967,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 180453.15245477995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 182883.5619295944,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 182874.18513689417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 108270.02295082338,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 108268.04059328536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 180350.1781176974,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 180338.42364532346 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390834603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1821.2116354396323,
            "unit": "ns/iter",
            "extra": "iterations: 382521\ncpu: 1821.0270808661485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27340.91974856999,
            "unit": "ns/iter",
            "extra": "iterations: 30068\ncpu: 27339.696687508316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56186.71104931102,
            "unit": "ns/iter",
            "extra": "iterations: 14743\ncpu: 56186.56311469848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70064.27374526787,
            "unit": "ns/iter",
            "extra": "iterations: 12413\ncpu: 70061.33891887538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98706.56503630722,
            "unit": "ns/iter",
            "extra": "iterations: 9364\ncpu: 98701.73002990181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 122922.79329293931,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 122916.37311540094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149123.844556117,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 149114.07035175877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 171811.15655853672,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 171799.77835986286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 197814.52777158245,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 197810.48405085874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1642.2006372794622,
            "unit": "ns/iter",
            "extra": "iterations: 425559\ncpu: 1642.1906245667485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1319.6642249518895,
            "unit": "ns/iter",
            "extra": "iterations: 530638\ncpu: 1319.0574365198122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1241.8050438175792,
            "unit": "ns/iter",
            "extra": "iterations: 562788\ncpu: 1241.7551546941284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1248.6356710089185,
            "unit": "ns/iter",
            "extra": "iterations: 560842\ncpu: 1248.5519986021022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2303.277509414682,
            "unit": "ns/iter",
            "extra": "iterations: 304314\ncpu: 2303.177967494096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10092.382405372131,
            "unit": "ns/iter",
            "extra": "iterations: 81900\ncpu: 10091.919413919417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52449.922495748666,
            "unit": "ns/iter",
            "extra": "iterations: 15883\ncpu: 52448.44173015174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38802.42710152456,
            "unit": "ns/iter",
            "extra": "iterations: 21187\ncpu: 38800.77405956476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 41157.81739562659,
            "unit": "ns/iter",
            "extra": "iterations: 20120\ncpu: 41156.88866799201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 40921.42253724989,
            "unit": "ns/iter",
            "extra": "iterations: 20739\ncpu: 40915.709532764326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106997.81670334892,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 106995.1455123501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 818990.7381370935,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 818969.6836555375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 681876.1748353969,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 681856.6934893936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 672681.7700730225,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 672679.927007301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 680994.873980722,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 680960.3409933269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 488026.5422297374,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 488025.56306306366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 682960.5856515158,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 682935.2122986809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3653561.768339929,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3653515.0579150715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1581498.6767168574,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1581415.2428810708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4704769.73134341,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4704581.094527365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13004.750143765625,
            "unit": "ns/iter",
            "extra": "iterations: 64341\ncpu: 13004.57095786514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55844.245900004804,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55844.57 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50170.260446859575,
            "unit": "ns/iter",
            "extra": "iterations: 16560\ncpu: 50169.57729468598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 51997.144145269864,
            "unit": "ns/iter",
            "extra": "iterations: 15970\ncpu: 51996.08015028198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50250.57047343661,
            "unit": "ns/iter",
            "extra": "iterations: 16602\ncpu: 50250.87941211878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115132.65982249247,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 115124.63902503625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 877836.8007483763,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 877796.4452759632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720562.4560185083,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 720528.1635802476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716806.6412795039,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 716773.8766184335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 715458.8396656298,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 715410.3343465035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498043.7799773728,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 498029.01583710354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 698111.7802523907,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 698081.514476615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3792707.5843622745,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3792485.5967078176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1641593.6030927736,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1641547.9381443325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9010.378566155574,
            "unit": "ns/iter",
            "extra": "iterations: 92116\ncpu: 9010.306569976978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51746.21500748276,
            "unit": "ns/iter",
            "extra": "iterations: 16032\ncpu: 51744.22405189651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41343.08901777129,
            "unit": "ns/iter",
            "extra": "iterations: 18794\ncpu: 41340.981164201454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41465.66129435839,
            "unit": "ns/iter",
            "extra": "iterations: 19979\ncpu: 41464.517743631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41439.14626224101,
            "unit": "ns/iter",
            "extra": "iterations: 20012\ncpu: 41437.62242654399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 104254.87421159455,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 104252.11234083051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 857235.4415231496,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 857188.9392565697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 701277.5911078713,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 701260.8600583095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 700097.0862832182,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 700065.5604719757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 695736.6979320513,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 695719.4977843424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 488342.42785232817,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 488322.20357941906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 684403.2293178532,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 684374.0928882475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 633.9540920170707,
            "unit": "ns/iter",
            "extra": "iterations: 1103991\ncpu: 633.9517260557384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4907.779215587304,
            "unit": "ns/iter",
            "extra": "iterations: 142578\ncpu: 4907.466088737371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3757.3949387102434,
            "unit": "ns/iter",
            "extra": "iterations: 192283\ncpu: 3757.267673169257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3887.865865826747,
            "unit": "ns/iter",
            "extra": "iterations: 179395\ncpu: 3887.703670670872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2808.6518774339706,
            "unit": "ns/iter",
            "extra": "iterations: 249596\ncpu: 2808.66961008993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25519.36155756944,
            "unit": "ns/iter",
            "extra": "iterations: 27376\ncpu: 25518.10344827609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49222.87845926162,
            "unit": "ns/iter",
            "extra": "iterations: 14201\ncpu: 49222.57587493831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11509.321864211464,
            "unit": "ns/iter",
            "extra": "iterations: 60830\ncpu: 11509.059674502649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11412.189694020808,
            "unit": "ns/iter",
            "extra": "iterations: 61246\ncpu: 11412.265290794583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11455.3817364284,
            "unit": "ns/iter",
            "extra": "iterations: 61160\ncpu: 11455.174950948302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22547.86751066002,
            "unit": "ns/iter",
            "extra": "iterations: 30727\ncpu: 22546.13206626132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21901.117518431016,
            "unit": "ns/iter",
            "extra": "iterations: 32012\ncpu: 21899.86255154342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6905.899564963386,
            "unit": "ns/iter",
            "extra": "iterations: 100911\ncpu: 6905.509805670298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 36179.817909438876,
            "unit": "ns/iter",
            "extra": "iterations: 20693\ncpu: 36178.65945005608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26780.36653261954,
            "unit": "ns/iter",
            "extra": "iterations: 25613\ncpu: 26779.80322492478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 26863.440422498472,
            "unit": "ns/iter",
            "extra": "iterations: 25941\ncpu: 26862.96596122005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27505.506636731017,
            "unit": "ns/iter",
            "extra": "iterations: 25389\ncpu: 27504.773720902253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58399.56314390025,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 58398.18876703227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 213885.63402693317,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 213843.8800489586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 185645.86721441481,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 185635.88656241563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 185348.7544276995,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 185336.21464445977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183090.01132175827,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 183034.4918378101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 109270.23316708363,
            "unit": "ns/iter",
            "extra": "iterations: 6416\ncpu: 109261.2687032413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 183407.98979323872,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183397.67076681397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6002.11440924944,
            "unit": "ns/iter",
            "extra": "iterations: 114947\ncpu: 6002.073999321349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32204.671993735603,
            "unit": "ns/iter",
            "extra": "iterations: 21713\ncpu: 32204.52724174433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25824.18833351851,
            "unit": "ns/iter",
            "extra": "iterations: 27069\ncpu: 25823.550925413318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26117.787143179583,
            "unit": "ns/iter",
            "extra": "iterations: 26694\ncpu: 26116.92515171951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26811.784396070576,
            "unit": "ns/iter",
            "extra": "iterations: 25955\ncpu: 26811.56231939856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58179.801652895476,
            "unit": "ns/iter",
            "extra": "iterations: 12100\ncpu: 58176.04958677703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 210207.74136377795,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 210196.99609492408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 180967.372287585,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 180959.42483660183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 179441.2010758105,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 179440.62499999686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 181127.2615344626,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 181124.85743908834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 107724.26331179023,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 107724.88457986998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 179830.3769943387,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 179827.61194029925 ns\nthreads: 1"
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
        "date": 1702391766675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1844.6380847589182,
            "unit": "ns/iter",
            "extra": "iterations: 378981\ncpu: 1844.5848208749255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26681.94033015762,
            "unit": "ns/iter",
            "extra": "iterations: 30652\ncpu: 26681.678193918833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54991.48780002672,
            "unit": "ns/iter",
            "extra": "iterations: 15082\ncpu: 54988.25089510675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68530.45548670462,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 68528.95913404971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99488.17791922974,
            "unit": "ns/iter",
            "extra": "iterations: 9583\ncpu: 99485.24470416366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120134.48432774466,
            "unit": "ns/iter",
            "extra": "iterations: 7274\ncpu: 120130.02474566946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145236.86564204263,
            "unit": "ns/iter",
            "extra": "iterations: 6051\ncpu: 145232.3582878863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 168121.51077460955,
            "unit": "ns/iter",
            "extra": "iterations: 5151\ncpu: 168115.66686080396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 191383.6808093979,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 191375.23933855517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1585.4932267864879,
            "unit": "ns/iter",
            "extra": "iterations: 441371\ncpu: 1585.4385539602704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1210.1746281316625,
            "unit": "ns/iter",
            "extra": "iterations: 580044\ncpu: 1210.1092330926629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1272.8008039785332,
            "unit": "ns/iter",
            "extra": "iterations: 546532\ncpu: 1272.719804146874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1263.7733222938123,
            "unit": "ns/iter",
            "extra": "iterations: 554373\ncpu: 1263.7426425890144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2355.198664671441,
            "unit": "ns/iter",
            "extra": "iterations: 296706\ncpu: 2355.1593159558606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10166.074004026717,
            "unit": "ns/iter",
            "extra": "iterations: 81955\ncpu: 10165.900799219087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52175.31421022861,
            "unit": "ns/iter",
            "extra": "iterations: 15897\ncpu: 52172.87538529277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39104.89897752498,
            "unit": "ns/iter",
            "extra": "iterations: 21223\ncpu: 39104.12759741794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40847.1872225816,
            "unit": "ns/iter",
            "extra": "iterations: 20051\ncpu: 40846.05755323922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38988.21290957692,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 38987.71855810258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 108310.02017501369,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 108307.49878463756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 822100.1754850217,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 822085.0970017633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 677725.6707759176,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 677717.7664974631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 683257.6823785439,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 683257.650471357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 682678.2441348876,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 682664.369501465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 481018.20099118864,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 481003.0286343611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 676347.982507303,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 676316.9825072886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3642570.2068966525,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3642434.0996168596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1624025.5719177856,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1623972.6027397253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4663441.232673257,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4663258.415841572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13134.821290661099,
            "unit": "ns/iter",
            "extra": "iterations: 64742\ncpu: 13134.606592320279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55114.40239999956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55114.239999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50196.898587621276,
            "unit": "ns/iter",
            "extra": "iterations: 16497\ncpu: 50195.85379159875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52143.39180665759,
            "unit": "ns/iter",
            "extra": "iterations: 16013\ncpu: 52143.22113282949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50282.7869625691,
            "unit": "ns/iter",
            "extra": "iterations: 16537\ncpu: 50282.2458728909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115242.21228392012,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 115239.02566788906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 871814.103738318,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 871799.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 711280.9848942551,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 711286.0271903315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 710422.082644614,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 710386.1758076627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 708764.7725225249,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 708731.68168168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 494660.4789680336,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 494636.9040942236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 696101.6949778512,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 696077.3264401814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3810758.7673469624,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810587.7551020384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1625888.326460431,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1625817.525773197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9057.850713215395,
            "unit": "ns/iter",
            "extra": "iterations: 92118\ncpu: 9057.378579647853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 52677.601641536814,
            "unit": "ns/iter",
            "extra": "iterations: 15717\ncpu: 52676.36953617093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41287.52340740768,
            "unit": "ns/iter",
            "extra": "iterations: 20250\ncpu: 41287.209876542984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41271.23794435001,
            "unit": "ns/iter",
            "extra": "iterations: 20198\ncpu: 41271.22487375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41756.750212785344,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 41756.43618885481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 104615.42787662818,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 104615.19572953759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 862994.5337591141,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 862978.832116792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 693033.5021961929,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 693030.6734992675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 696595.113886848,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 696586.8479059516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 694175.5889212794,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 694172.5218658858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 490586.1620111841,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 490576.4804469272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 677749.1989906441,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 677742.3936553707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 649.9070686800916,
            "unit": "ns/iter",
            "extra": "iterations: 1081390\ncpu: 649.9017005890558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4891.847872141207,
            "unit": "ns/iter",
            "extra": "iterations: 143971\ncpu: 4891.765702815155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3680.1832573936467,
            "unit": "ns/iter",
            "extra": "iterations: 189624\ncpu: 3680.128570223181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3430.785434558914,
            "unit": "ns/iter",
            "extra": "iterations: 205047\ncpu: 3430.759289333676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2834.180555049645,
            "unit": "ns/iter",
            "extra": "iterations: 247077\ncpu: 2834.136321875378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25640.142888579798,
            "unit": "ns/iter",
            "extra": "iterations: 27266\ncpu: 25640.119562825745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49394.831613405564,
            "unit": "ns/iter",
            "extra": "iterations: 14051\ncpu: 49394.740587858614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11574.687988886415,
            "unit": "ns/iter",
            "extra": "iterations: 60469\ncpu: 11574.679587888037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11552.153088541241,
            "unit": "ns/iter",
            "extra": "iterations: 60514\ncpu: 11552.021019929363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11428.334706200789,
            "unit": "ns/iter",
            "extra": "iterations: 60943\ncpu: 11428.173867384288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22714.642694878865,
            "unit": "ns/iter",
            "extra": "iterations: 30814\ncpu: 22714.17537482961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21824.985650559127,
            "unit": "ns/iter",
            "extra": "iterations: 32057\ncpu: 21824.656081355264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6749.488950329275,
            "unit": "ns/iter",
            "extra": "iterations: 103442\ncpu: 6749.400630304914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 33883.538689035544,
            "unit": "ns/iter",
            "extra": "iterations: 20626\ncpu: 33883.38019974792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27231.02884090854,
            "unit": "ns/iter",
            "extra": "iterations: 25658\ncpu: 27230.48561852029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27472.01037230031,
            "unit": "ns/iter",
            "extra": "iterations: 25356\ncpu: 27471.963243414106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28040.66381104908,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 28039.971977582234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58745.23206928484,
            "unit": "ns/iter",
            "extra": "iterations: 11893\ncpu: 58745.11056924199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 216427.81023256812,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 216425.95348837387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 185825.47898936755,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 185825.58510638532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 184815.22985468805,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 184815.29722589106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 185357.63370548017,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 185355.92769803407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110481.74317540377,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 110481.7853780996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 183547.86764704902,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 183541.93802520973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6272.191443507057,
            "unit": "ns/iter",
            "extra": "iterations: 112289\ncpu: 6272.184274505902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32460.120211975733,
            "unit": "ns/iter",
            "extra": "iterations: 21512\ncpu: 32459.748047600962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25983.320903536664,
            "unit": "ns/iter",
            "extra": "iterations: 27005\ncpu: 25983.317904092262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26103.847147349203,
            "unit": "ns/iter",
            "extra": "iterations: 26712\ncpu: 26103.36927223712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26781.028436379176,
            "unit": "ns/iter",
            "extra": "iterations: 26234\ncpu: 26780.7882900055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57323.187080187956,
            "unit": "ns/iter",
            "extra": "iterations: 12059\ncpu: 57322.638693091474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 212049.71059037003,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 212049.75654290724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 181063.11142931308,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 181061.20801874544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 180496.1927867147,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 180494.47327451833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 182523.3601462449,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182520.8670671191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 108605.11756483969,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 108604.22425842457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 181410.6831913249,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 181411.43816163225 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396468919,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1845.762333047924,
            "unit": "ns/iter",
            "extra": "iterations: 381921\ncpu: 1845.6691305269942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27244.624575310165,
            "unit": "ns/iter",
            "extra": "iterations: 30022\ncpu: 27243.125041636133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55919.62712321408,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 55916.230789970345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69853.483773227,
            "unit": "ns/iter",
            "extra": "iterations: 12541\ncpu: 69850.69771150625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95788.70628059826,
            "unit": "ns/iter",
            "extra": "iterations: 9601\ncpu: 95783.87667951257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120598.61145447152,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 120368.5894794671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 144976.41862388107,
            "unit": "ns/iter",
            "extra": "iterations: 6046\ncpu: 144966.5564009263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 167850.07829804078,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 167843.44278220326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 191258.09980473804,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 191246.3224126708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1619.7303699182426,
            "unit": "ns/iter",
            "extra": "iterations: 432474\ncpu: 1619.661528785544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1302.3738328197537,
            "unit": "ns/iter",
            "extra": "iterations: 537085\ncpu: 1302.2992636174909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1272.7655890778906,
            "unit": "ns/iter",
            "extra": "iterations: 544147\ncpu: 1272.718217687499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1287.7322049272634,
            "unit": "ns/iter",
            "extra": "iterations: 544603\ncpu: 1287.6763440524576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2348.197429279822,
            "unit": "ns/iter",
            "extra": "iterations: 296415\ncpu: 2348.1692896783247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10199.509564789876,
            "unit": "ns/iter",
            "extra": "iterations: 81340\ncpu: 10199.086550282767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52246.91606653322,
            "unit": "ns/iter",
            "extra": "iterations: 15691\ncpu: 52245.656745905326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39393.797706837264,
            "unit": "ns/iter",
            "extra": "iterations: 21019\ncpu: 39391.63613873169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40884.17142857015,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 40881.53237765683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38878.78551597763,
            "unit": "ns/iter",
            "extra": "iterations: 21251\ncpu: 38876.46698978871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106970.32406959435,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 106966.81971967139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 823619.1378091683,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 823562.6325088347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 688024.91733723,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 687996.0497439652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 687640.733823509,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 687590.4411764712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 685956.2329169848,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 685933.2108743568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 481929.68569845485,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 481900.2217294893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678598.4985549328,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 678560.2601156071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3639321.0267175524,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3639034.7328244234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1594269.522765523,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1594181.112984819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4667967.368159248,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4667731.343283593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13071.843418406235,
            "unit": "ns/iter",
            "extra": "iterations: 64650\ncpu: 13071.186388244414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56395.14900000222,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56391.29999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50690.0631655802,
            "unit": "ns/iter",
            "extra": "iterations: 16433\ncpu: 50686.770522728664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52564.36116382077,
            "unit": "ns/iter",
            "extra": "iterations: 15810\ncpu: 52562.049335863514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50188.46373293065,
            "unit": "ns/iter",
            "extra": "iterations: 16475\ncpu: 50186.89529590274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115550.04945054761,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 115547.84240150171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 864467.5820204209,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 864420.6672845217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 712921.7353383667,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 712908.2706766936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 714048.9210925845,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 714024.658573598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 711224.6712121319,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 711212.2727272749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 500055.85346308455,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 500052.8906697194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699376.9611650167,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 699350.8588498908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3824281.2307691053,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3824214.9797570873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1636473.975609748,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1636372.6480836244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8961.797669709398,
            "unit": "ns/iter",
            "extra": "iterations: 92349\ncpu: 8961.497146693473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51827.638587470625,
            "unit": "ns/iter",
            "extra": "iterations: 15943\ncpu: 51824.14225678988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 42181.1241774675,
            "unit": "ns/iter",
            "extra": "iterations: 20060\ncpu: 42180.543369890176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41219.40092717363,
            "unit": "ns/iter",
            "extra": "iterations: 20061\ncpu: 41217.25238024003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41410.05906242157,
            "unit": "ns/iter",
            "extra": "iterations: 19945\ncpu: 41407.485585359755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103444.56955692559,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 103440.519294902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 864630.5928961389,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 864558.0145719488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 697367.0553914396,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 697351.6248153645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 695545.0616287792,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 695462.1423330893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 698033.6150442273,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 698021.8289085546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 492307.34641254216,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 492304.5964125576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 687490.7754952131,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 687466.7644900951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 645.3157568891593,
            "unit": "ns/iter",
            "extra": "iterations: 1082206\ncpu: 645.2951656154125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4912.637535310562,
            "unit": "ns/iter",
            "extra": "iterations: 141600\ncpu: 4912.559322033903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3734.1287270473563,
            "unit": "ns/iter",
            "extra": "iterations: 187179\ncpu: 3734.079143493662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3772.062459032144,
            "unit": "ns/iter",
            "extra": "iterations: 186122\ncpu: 3771.936686689383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2815.643724696565,
            "unit": "ns/iter",
            "extra": "iterations: 248729\ncpu: 2815.627851999547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25542.772162598696,
            "unit": "ns/iter",
            "extra": "iterations: 27208\ncpu: 25542.142017053757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 51916.36524649351,
            "unit": "ns/iter",
            "extra": "iterations: 14341\ncpu: 51916.08674430023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11499.36484975973,
            "unit": "ns/iter",
            "extra": "iterations: 60836\ncpu: 11499.099217568479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11508.06527117973,
            "unit": "ns/iter",
            "extra": "iterations: 60624\ncpu: 11508.059514383676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11477.267717187771,
            "unit": "ns/iter",
            "extra": "iterations: 60351\ncpu: 11477.138738380385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22736.21805197669,
            "unit": "ns/iter",
            "extra": "iterations: 30667\ncpu: 22736.107216226046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21826.84399395561,
            "unit": "ns/iter",
            "extra": "iterations: 31768\ncpu: 21826.54872828008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6769.753851783593,
            "unit": "ns/iter",
            "extra": "iterations: 103848\ncpu: 6769.594984978048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 33721.3536343881,
            "unit": "ns/iter",
            "extra": "iterations: 20705\ncpu: 33721.17362955804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26883.611376599656,
            "unit": "ns/iter",
            "extra": "iterations: 25948\ncpu: 26883.231848312127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 26960.62062586819,
            "unit": "ns/iter",
            "extra": "iterations: 25948\ncpu: 26960.232002466604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27615.208515843893,
            "unit": "ns/iter",
            "extra": "iterations: 25341\ncpu: 27614.50613630065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58379.85765183394,
            "unit": "ns/iter",
            "extra": "iterations: 12069\ncpu: 58379.5592012587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 211457.4317287327,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 211452.22524977257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 183096.7225554105,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 183095.77574967427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 183550.30903410414,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 183543.00963290842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 184123.77407504182,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 184122.85489372778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 109115.462484436,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 109114.91282689886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 182089.8915474648,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 182088.94668400797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6157.364007045698,
            "unit": "ns/iter",
            "extra": "iterations: 113550\ncpu: 6157.332452664042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32304.072797999495,
            "unit": "ns/iter",
            "extra": "iterations: 21594\ncpu: 32303.22774844853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26078.542976551078,
            "unit": "ns/iter",
            "extra": "iterations: 27038\ncpu: 26078.426658776854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25992.040747789863,
            "unit": "ns/iter",
            "extra": "iterations: 26799\ncpu: 25991.68252546766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26829.86275637499,
            "unit": "ns/iter",
            "extra": "iterations: 26085\ncpu: 26829.710561625085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57197.86131566243,
            "unit": "ns/iter",
            "extra": "iterations: 12222\ncpu: 57196.309932908094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 208364.58029850238,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 208363.40298507395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 180305.52622107512,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 180299.1516709516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 178100.01095820358,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178098.9806320084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 179766.1695134549,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 179763.69047618957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106286.04216775775,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 106284.12239305803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178258.4938713005,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178257.50766087812 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}