window.BENCHMARK_DATA = {
  "lastUpdate": 1705573980303,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702398833759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6896.150260190525,
            "unit": "ns/iter",
            "extra": "iterations: 101464\ncpu: 6895.583655286604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58184.725491588375,
            "unit": "ns/iter",
            "extra": "iterations: 14087\ncpu: 58183.36764392703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91611.86527392648,
            "unit": "ns/iter",
            "extra": "iterations: 9382\ncpu: 91607.74888083561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136158.82072267067,
            "unit": "ns/iter",
            "extra": "iterations: 6476\ncpu: 136149.47498455836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175790.6122983923,
            "unit": "ns/iter",
            "extra": "iterations: 4960\ncpu: 175782.01612903213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216391.14238994053,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 216379.52201257867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258845.71033045748,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 258830.7829711225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300631.2379143665,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 300605.3867403314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341404.43779526005,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 341391.7322834643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5719.401375115528,
            "unit": "ns/iter",
            "extra": "iterations: 122317\ncpu: 5719.164956629093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4636.60927463387,
            "unit": "ns/iter",
            "extra": "iterations: 151165\ncpu: 4636.502497271199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4665.77762191297,
            "unit": "ns/iter",
            "extra": "iterations: 150415\ncpu: 4665.716850048206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4656.446631677156,
            "unit": "ns/iter",
            "extra": "iterations: 150520\ncpu: 4656.388519798036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7187.429552491602,
            "unit": "ns/iter",
            "extra": "iterations: 75574\ncpu: 7187.307804271326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25591.330667921437,
            "unit": "ns/iter",
            "extra": "iterations: 31890\ncpu: 25590.00313577926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126840.97931136886,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 126837.69765036214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98885.72675697098,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 98884.42746323952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98313.00448275937,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 98310.89655172401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95935.66692878501,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 95931.61087396072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200833.40265287168,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 200827.9226618703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1618325.019130482,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1618261.7391304362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1267754.60109287,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1267720.7650273263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1272127.3657533645,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1272076.0273972594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1261129.2048846511,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1261091.044776122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 690414.2645305337,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 690401.0432190762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1227239.9324503255,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1227201.8543046322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32458.784946657965,
            "unit": "ns/iter",
            "extra": "iterations: 25403\ncpu: 32457.60343266537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159916.74930517373,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 159907.61534185612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123261.034403674,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123257.25344036703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121805.48058733332,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 121797.21869264446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120531.10672821142,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 120523.10812701056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217140.68286573657,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 217126.17735470954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1656746.3048128656,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1656683.2442067736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1301928.8433565793,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1301832.5874125836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1307150.4151473136,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1307072.5105189348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1281183.4146005013,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1281119.6969696945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 718389.245341606,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 718353.7267080727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1258724.2496608319,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1258636.7706920032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5901864.303797526,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5901467.088607616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2664093.42816097,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2663964.080459766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24507.3997976294,
            "unit": "ns/iter",
            "extra": "iterations: 33602\ncpu: 24506.859710731438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124558.93540463074,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 124555.7947976886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96108.00582436903,
            "unit": "ns/iter",
            "extra": "iterations: 8928\ncpu: 96105.98118279556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96717.47063464632,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 96715.96212377393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92534.61828189569,
            "unit": "ns/iter",
            "extra": "iterations: 9266\ncpu: 92532.23613209573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 183072.05557893642,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 183065.49473684328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1623216.7456447782,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1623174.2160278768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1268995.8843538433,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1268980.9523809447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1272356.7847411274,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1272332.2888283366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1255688.1024258994,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1255596.7654986454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 688695.882656845,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 688655.2029520251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1228350.8208169672,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1228332.0158102794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2592.5276274712555,
            "unit": "ns/iter",
            "extra": "iterations: 269080\ncpu: 2592.4784450720986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17205.570976059684,
            "unit": "ns/iter",
            "extra": "iterations: 40725\ncpu: 17204.741559238795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14180.549021990124,
            "unit": "ns/iter",
            "extra": "iterations: 49386\ncpu: 14180.231239622546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14007.044084966341,
            "unit": "ns/iter",
            "extra": "iterations: 49949\ncpu: 14006.664798094002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10080.636557681144,
            "unit": "ns/iter",
            "extra": "iterations: 69337\ncpu: 10080.447668632929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64533.734349029655,
            "unit": "ns/iter",
            "extra": "iterations: 10830\ncpu: 64532.973222530185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112202.96598202585,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 112199.0693196407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27450.1942607464,
            "unit": "ns/iter",
            "extra": "iterations: 25404\ncpu: 27449.874035584944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27414.966134211118,
            "unit": "ns/iter",
            "extra": "iterations: 25542\ncpu: 27414.58382272354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27156.31328622199,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 27155.99860226737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54553.352368335814,
            "unit": "ns/iter",
            "extra": "iterations: 12836\ncpu: 54552.516360236674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51350.06815502594,
            "unit": "ns/iter",
            "extra": "iterations: 13572\ncpu: 51349.38107869122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20860.388296606645,
            "unit": "ns/iter",
            "extra": "iterations: 33580\ncpu: 20860.139964264145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100557.0400344532,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 100555.76122829765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83321.85510349259,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83320.79467047464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84115.54823613733,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84111.43508519395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82764.8474375687,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 82762.8240028401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124140.27230878176,
            "unit": "ns/iter",
            "extra": "iterations: 5648\ncpu: 124138.54461756535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 504120.67000002024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504119.90000000625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 397838.6850483171,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397833.37123365636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 395114.4136568411,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395105.3047404088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 387981.3364744652,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 387975.88691795577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253043.5316914387,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 253040.56501267623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 389909.57985529426,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389896.1046188068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21531.960074221555,
            "unit": "ns/iter",
            "extra": "iterations: 32335\ncpu: 21531.6128034638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105037.03288288358,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 105032.9729729733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87739.21932573483,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 87736.34540669332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87975.71792939182,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 87968.63927629153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87054.35739981741,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 87049.24947277094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127602.63181067657,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 127598.67914144431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 488155.2379958557,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 488139.1092553926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 398911.1542401297,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 398880.76266363217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 400512.69828570314,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 400491.0285714232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 395298.94297006977,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395276.34105025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259837.18171725323,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 259823.16802368392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 395731.52542367246,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 395717.0621468921 ns\nthreads: 1"
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
        "date": 1702409145810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6684.9349626106505,
            "unit": "ns/iter",
            "extra": "iterations: 104709\ncpu: 6684.895281207919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56330.54270352156,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 56328.68959812506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89610.04753747139,
            "unit": "ns/iter",
            "extra": "iterations: 9340\ncpu: 89609.11134903641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 129268.85119494997,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 129268.1046144596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171880.26564975464,
            "unit": "ns/iter",
            "extra": "iterations: 5048\ncpu: 171875.95087163243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 212336.88113947882,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 212334.77406679766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253293.63404630328,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 253283.18195136244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 295016.94363329717,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 295004.61799660424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 335160.7234368959,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 335146.06827771413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5588.327984225759,
            "unit": "ns/iter",
            "extra": "iterations: 124756\ncpu: 5588.010997467052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4579.762010917386,
            "unit": "ns/iter",
            "extra": "iterations: 152965\ncpu: 4579.592063543945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4574.491105576217,
            "unit": "ns/iter",
            "extra": "iterations: 152961\ncpu: 4574.198651943959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4619.734998744907,
            "unit": "ns/iter",
            "extra": "iterations: 151354\ncpu: 4619.691583968715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7037.923040647118,
            "unit": "ns/iter",
            "extra": "iterations: 99663\ncpu: 7037.627805705212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25733.515197520515,
            "unit": "ns/iter",
            "extra": "iterations: 31617\ncpu: 25731.818325584307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127152.25417961163,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 127153.06998076614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98083.26599288455,
            "unit": "ns/iter",
            "extra": "iterations: 8707\ncpu: 98078.25887217163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98459.10320572063,
            "unit": "ns/iter",
            "extra": "iterations: 8672\ncpu: 98457.0802583026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94142.81074817695,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 94141.99955859635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201069.3635749768,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 201053.1292210714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1580753.6559323433,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1580681.8644067782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1244968.5494652293,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1244914.8395721924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1244102.6599463515,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1244017.6075268835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1230921.128170908,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1230869.9599465968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 694220.7863568374,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 694175.337331334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1244424.6553524933,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1244367.2323759762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33010.12138404841,
            "unit": "ns/iter",
            "extra": "iterations: 25028\ncpu: 33009.38149272808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157548.7232061273,
            "unit": "ns/iter",
            "extra": "iterations: 5477\ncpu: 157536.6441482562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125988.17782577449,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 125983.34053275721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120749.66078126083,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 120745.70312500032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118780.26000554331,
            "unit": "ns/iter",
            "extra": "iterations: 7196\ncpu: 118776.63979988894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 212826.14556183064,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 212817.85099581964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1608662.8339100091,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1608561.2456747426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1275649.6447187522,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1275588.6145404687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1268955.7244202797,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1268902.1828103699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1254426.7892618158,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1254360.2684563696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 716634.4251543335,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 716594.9845679044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1228985.4417990646,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1228974.2063492078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5913736.797468354,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5913525.949367092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2677934.8879310926,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2677761.2068965626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24862.0706831683,
            "unit": "ns/iter",
            "extra": "iterations: 32964\ncpu: 24861.136391214597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122034.00753054864,
            "unit": "ns/iter",
            "extra": "iterations: 7038\ncpu: 122032.52344416032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94786.38367977782,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 94786.27819548897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94125.46021977944,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 94123.8241758239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92358.20224718784,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 92358.03802938647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187276.1649506238,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 187273.04055473985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1581344.8830507218,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1581343.8983050883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1238540.5670650702,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1238509.8273572344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1242084.660904229,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1242081.3829787232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1216931.2293577022,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1216925.9501965998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 687253.960914496,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 687252.5073746287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1204004.3427471216,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1203932.092426189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2609.442738579902,
            "unit": "ns/iter",
            "extra": "iterations: 267248\ncpu: 2609.347871639812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16984.36671213282,
            "unit": "ns/iter",
            "extra": "iterations: 41054\ncpu: 16983.609392507515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12542.46370410384,
            "unit": "ns/iter",
            "extra": "iterations: 55695\ncpu: 12541.987611096169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12226.774494556756,
            "unit": "ns/iter",
            "extra": "iterations: 57227\ncpu: 12226.331976165098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10020.829205586895,
            "unit": "ns/iter",
            "extra": "iterations: 70014\ncpu: 10020.660153683515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62696.25203107198,
            "unit": "ns/iter",
            "extra": "iterations: 11201\ncpu: 62696.68779573288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 108085.58620158008,
            "unit": "ns/iter",
            "extra": "iterations: 6479\ncpu: 108086.29418120098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27125.588312949145,
            "unit": "ns/iter",
            "extra": "iterations: 25755\ncpu: 27125.75422248107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26820.55147706958,
            "unit": "ns/iter",
            "extra": "iterations: 26099\ncpu: 26820.173186712138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26870.26391451523,
            "unit": "ns/iter",
            "extra": "iterations: 26016\ncpu: 26870.122232472342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51596.853627993696,
            "unit": "ns/iter",
            "extra": "iterations: 13575\ncpu: 51596.139963167705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50692.772743668094,
            "unit": "ns/iter",
            "extra": "iterations: 13861\ncpu: 50692.244426808466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20512.751984999257,
            "unit": "ns/iter",
            "extra": "iterations: 34131\ncpu: 20512.381705780917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100230.89415640208,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 100230.43540532708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81201.02850521365,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 81201.68018539864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81218.0878661119,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 81216.93398419354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80471.29500460137,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 80470.95994475084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121750.73838120463,
            "unit": "ns/iter",
            "extra": "iterations: 5745\ncpu: 121745.97040905124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 473838.62997977424,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 473836.5293720397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 386934.30535612535,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 386931.5847598056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392330.86176139204,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 392328.4838350076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 385509.1459251029,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 385507.3788546266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247871.83864117783,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 247873.31917904736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 382521.31038253073,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 382517.540983603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21428.130707742595,
            "unit": "ns/iter",
            "extra": "iterations: 32653\ncpu: 21427.991302483606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102906.00500073026,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 102902.94160906074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85146.96234461793,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85146.53911771864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85372.27324732748,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85371.32424537376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83808.43034795662,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83807.86798995598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122182.57115451555,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 122181.89745378247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 474615.97216563055,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474613.8492871709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 393641.4034792715,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 393636.13916946837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 392423.3028603867,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 392421.4245653404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 385001.5536692005,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 384993.7568455645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253251.0050651379,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 253250.03617944903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 387363.5124377928,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 387361.80210060946 ns\nthreads: 1"
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
        "date": 1702412533033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7044.4115157662345,
            "unit": "ns/iter",
            "extra": "iterations: 99481\ncpu: 7044.013429700144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50734.071599993054,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50730.98 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92813.2432344633,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 92807.44749945878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136028.4435674787,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 136017.25335438043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177282.32232252808,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 177272.99958965945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220327.04846483018,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 220313.98122303988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261673.30072462995,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261656.2198067633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304595.05678234284,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 304582.5797406239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344947.3713717778,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 344930.1391650101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6086.734490430458,
            "unit": "ns/iter",
            "extra": "iterations: 117766\ncpu: 6086.361088939076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5022.467629700893,
            "unit": "ns/iter",
            "extra": "iterations: 145720\ncpu: 5022.09854515509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4804.881866352002,
            "unit": "ns/iter",
            "extra": "iterations: 146639\ncpu: 4804.642012015901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4807.917301489523,
            "unit": "ns/iter",
            "extra": "iterations: 145710\ncpu: 4807.768169652053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7220.7642744251,
            "unit": "ns/iter",
            "extra": "iterations: 96799\ncpu: 7220.299796485503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25327.3062342446,
            "unit": "ns/iter",
            "extra": "iterations: 32129\ncpu: 25326.988079305305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126008.7558037029,
            "unit": "ns/iter",
            "extra": "iterations: 6806\ncpu: 126000.7934175727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96761.04688735658,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 96761.03265167742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 97833.02284147865,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 97830.43627227041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94633.7910662857,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 94633.71757925068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196971.66548751912,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 196967.72053946514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1679558.6216215082,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679503.2432432463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1335660.8235294274,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1335598.5652797727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1335240.7227011486,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1335188.7931034437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1300239.4313725515,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1300202.380952383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 706660.5229357996,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 706653.6697247721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1271898.6923077877,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1271808.1043956075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32873.74442013265,
            "unit": "ns/iter",
            "extra": "iterations: 25135\ncpu: 32873.387706385496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156853.93112849118,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 156850.62693076505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121880.6598523663,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 121880.57921635432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121226.86703405755,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 121222.60844990777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118803.4089510451,
            "unit": "ns/iter",
            "extra": "iterations: 7150\ncpu: 118803.3286713286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 210929.3523949207,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 210916.22678396828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1722687.2634507895,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1722557.8849721712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1374435.6242604072,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1374407.9881656745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1375067.8176471773,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1375044.5588235206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1329851.5759313179,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1329804.2979942607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 736094.1632329904,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 736081.7749603788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1306467.8408451509,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1306451.830985907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6021765.825806641,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6021565.161290297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2739723.3647059905,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2739654.7058823393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24480.4446592708,
            "unit": "ns/iter",
            "extra": "iterations: 33619\ncpu: 24479.77036794671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121707.93197278566,
            "unit": "ns/iter",
            "extra": "iterations: 7056\ncpu: 121704.76190476201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93594.89751958477,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 93593.41818973013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94653.28122242105,
            "unit": "ns/iter",
            "extra": "iterations: 9064\ncpu: 94653.32082965587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90310.83691756216,
            "unit": "ns/iter",
            "extra": "iterations: 9486\ncpu: 90307.32658654859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 179414.26377294227,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 179414.19031719584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1682340.0882882392,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1682307.7477477563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1321890.2019774192,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1321891.242937862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1329508.957446899,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1329469.5035461052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1302590.3226704886,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1302591.376912381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 702014.2308271229,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 702000.8270676706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1271287.0068028115,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1271286.258503401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2569.0689403481388,
            "unit": "ns/iter",
            "extra": "iterations: 264417\ncpu: 2569.071201927251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16675.399559660116,
            "unit": "ns/iter",
            "extra": "iterations: 41786\ncpu: 16675.41760398216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14089.662195641788,
            "unit": "ns/iter",
            "extra": "iterations: 51666\ncpu: 14089.356636859786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13134.470403997577,
            "unit": "ns/iter",
            "extra": "iterations: 53639\ncpu: 13134.504744682057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10728.467628243874,
            "unit": "ns/iter",
            "extra": "iterations: 67528\ncpu: 10728.095012439324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62829.39164420634,
            "unit": "ns/iter",
            "extra": "iterations: 11130\ncpu: 62826.14555256072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115248.24575853128,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115237.1602701372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28687.178847174462,
            "unit": "ns/iter",
            "extra": "iterations: 24479\ncpu: 28685.583561419837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28224.121514104492,
            "unit": "ns/iter",
            "extra": "iterations: 24886\ncpu: 28221.747167082056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28138.198289704127,
            "unit": "ns/iter",
            "extra": "iterations: 24908\ncpu: 28136.835554841895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54692.66335316798,
            "unit": "ns/iter",
            "extra": "iterations: 12776\ncpu: 54689.738572322996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52685.786705903796,
            "unit": "ns/iter",
            "extra": "iterations: 13254\ncpu: 52685.83823751284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20728.565351161815,
            "unit": "ns/iter",
            "extra": "iterations: 33802\ncpu: 20728.063428199395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104599.20248242647,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 104598.02602063588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83569.57279464707,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 83568.38393497629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84184.46235137925,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84179.30827428855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83376.22598669339,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83373.8349976211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124692.88468373318,
            "unit": "ns/iter",
            "extra": "iterations: 5628\ncpu: 124688.50390902688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 496054.8754423791,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 496027.74239207135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410539.49882217543,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 410512.073027094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 405555.2160278785,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 405544.48315912037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 404247.0628967161,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 404236.00692440924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258797.66322006358,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 258788.77400295457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 399798.8107489954,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 399793.0817610076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21575.466553689454,
            "unit": "ns/iter",
            "extra": "iterations: 32455\ncpu: 21575.17793868437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106580.25236210013,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 106577.46113989741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88089.8483663459,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 88085.7701526419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88362.30803232991,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 88356.9840868906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87449.04984423358,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 87449.20872274034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125137.86156877916,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 125135.9240687671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 499645.79556826176,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 499607.5768405961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409370.1354348903,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 409351.0215995293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410315.9104829635,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 410309.59952885483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 407202.3989577288,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 407183.90272147494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259118.7840236665,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 259119.04585798667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 404449.1114318768,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404430.13856813073 ns\nthreads: 1"
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
        "date": 1702416010570,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7082.928262188688,
            "unit": "ns/iter",
            "extra": "iterations: 98860\ncpu: 7082.919279789603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51449.3965999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51445.84999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94797.86313466067,
            "unit": "ns/iter",
            "extra": "iterations: 9060\ncpu: 94791.88741721855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139053.35792000187,
            "unit": "ns/iter",
            "extra": "iterations: 6250\ncpu: 139046.76800000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181250.62520937738,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 181239.55192629815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223864.05060676698,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 223853.91169635928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266076.2515375207,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 266056.61131611303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311391.4445632867,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 311367.5579322638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351851.5655704452,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 351829.23264311824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5949.568360651682,
            "unit": "ns/iter",
            "extra": "iterations: 117809\ncpu: 5949.210162211705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4902.208100754491,
            "unit": "ns/iter",
            "extra": "iterations: 142604\ncpu: 4902.202603012547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4917.521953272968,
            "unit": "ns/iter",
            "extra": "iterations: 142530\ncpu: 4917.3472251455805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4928.190089226646,
            "unit": "ns/iter",
            "extra": "iterations: 141886\ncpu: 4927.915368676263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7378.858472292353,
            "unit": "ns/iter",
            "extra": "iterations: 94992\ncpu: 7378.065521307055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25106.432963569496,
            "unit": "ns/iter",
            "extra": "iterations: 32363\ncpu: 25104.91919784939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132152.59532023504,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 132142.1628918552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100622.99269212826,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100618.51720886344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101073.30890176095,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 101065.66970091022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97276.61893370106,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 97275.0512645251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197755.40292553848,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 197745.52304964472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1688385.752727196,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1688319.454545454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1353488.5863570725,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1353377.9390420897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1333250.8249641184,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1333163.8450502174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1315928.897872306,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1315821.7021276602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 724125.6692728631,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 724096.2470680199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1295776.382681514,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1295668.0167597758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32717.46427447191,
            "unit": "ns/iter",
            "extra": "iterations: 25416\ncpu: 32715.509915014165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158594.3812580275,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 158580.41445076108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123537.009194076,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 123527.62534118626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124956.98754706272,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 124947.55285259236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121071.12373168151,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 121063.8810597517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 212722.7668304598,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 212708.1326781325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1721271.8814813907,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1721177.4074074079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1387906.7019373379,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1387769.5976155067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1364307.5549048341,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1364225.7686676404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1349160.2826086595,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1349079.4202898578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 754131.2469635317,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 754084.6963562762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1323389.082503496,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1323311.806543385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6035876.499999909,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6035633.11688312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2720929.730994034,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2720902.9239766197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24356.80008280607,
            "unit": "ns/iter",
            "extra": "iterations: 33814\ncpu: 24356.26367776669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125549.90611353656,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 125546.97234352284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97626.37535523488,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 97623.68989428222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97352.20922513043,
            "unit": "ns/iter",
            "extra": "iterations: 8737\ncpu: 97352.05448094333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93521.75683358849,
            "unit": "ns/iter",
            "extra": "iterations: 9146\ncpu: 93517.82199868794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178710.97813079876,
            "unit": "ns/iter",
            "extra": "iterations: 4847\ncpu: 178704.93088508295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1693861.6472727766,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1693805.9999999923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381288.206395358,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1381286.3372093015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1333575.6805754958,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1333534.964028779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1317447.3878702805,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1317425.3878702442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 717356.4183359287,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 717341.7565485355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1295957.6180555308,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1295941.5277777787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2554.794450348686,
            "unit": "ns/iter",
            "extra": "iterations: 274756\ncpu: 2554.736202303138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17386.530894735806,
            "unit": "ns/iter",
            "extra": "iterations: 40023\ncpu: 17386.352847112837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13521.616808704388,
            "unit": "ns/iter",
            "extra": "iterations: 51747\ncpu: 13521.446653912253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13495.916562096048,
            "unit": "ns/iter",
            "extra": "iterations: 51799\ncpu: 13495.712272437779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10232.817515685238,
            "unit": "ns/iter",
            "extra": "iterations: 68373\ncpu: 10232.56109867934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63278.188341614965,
            "unit": "ns/iter",
            "extra": "iterations: 11065\ncpu: 63276.47537279712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116163.63173653356,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 116161.32734530969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28588.96880225276,
            "unit": "ns/iter",
            "extra": "iterations: 24521\ncpu: 28587.9817299457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28332.209144517394,
            "unit": "ns/iter",
            "extra": "iterations: 24758\ncpu: 28331.84829146122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28025.40478759545,
            "unit": "ns/iter",
            "extra": "iterations: 25023\ncpu: 28024.66930424005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55256.65174560645,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 55253.589723382785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53084.55224332251,
            "unit": "ns/iter",
            "extra": "iterations: 13217\ncpu: 53084.55020049952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20918.81438217175,
            "unit": "ns/iter",
            "extra": "iterations: 33472\ncpu: 20918.448255258387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104672.87867921636,
            "unit": "ns/iter",
            "extra": "iterations: 6693\ncpu: 104671.55236814736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84741.51635570222,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84739.37484855777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84286.24754516354,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84283.58588919863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83499.26355276084,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 83497.04743465627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121839.01720243314,
            "unit": "ns/iter",
            "extra": "iterations: 5755\ncpu: 121837.44569939315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 502387.39454806404,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 502380.34433285374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 407850.47371495084,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 407833.8785046773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 407882.22687611764,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407881.79173938255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399824.98685714876,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 399824.5714285693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262465.3752817454,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 262460.3681442502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 399325.0718768075,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 399324.52937820693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21587.89052019959,
            "unit": "ns/iter",
            "extra": "iterations: 32353\ncpu: 21587.605477080964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109399.87404281834,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 109398.2028441941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91125.54470177318,
            "unit": "ns/iter",
            "extra": "iterations: 7729\ncpu: 91123.1077759088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89772.83314110064,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89769.65269768007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89451.50778855958,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 89450.51072523018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124966.17343107233,
            "unit": "ns/iter",
            "extra": "iterations: 5593\ncpu: 124963.16824601992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 500590.0890000135,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500589.80000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 411734.453419828,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 411728.4787735827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 411107.70664316026,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411098.5302763078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 410216.8181283219,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 410201.5303119449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262960.4553672284,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 262960.4143126151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408316.8158971446,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 408302.33781414205 ns\nthreads: 1"
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
        "date": 1702418401183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7129.835833333594,
            "unit": "ns/iter",
            "extra": "iterations: 98400\ncpu: 7129.3506097560985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50781.65470000045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50779.399999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98363.77291231212,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 98363.97843547148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136448.5398258166,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 136445.98574821858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179164.8346129851,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 179166.69433492416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221829.83068647716,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 221816.3934426231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263217.68488161237,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 263210.5950212509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306066.95953554776,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 306053.9408866993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349245.7077974321,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 349225.2411575559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5903.724177405688,
            "unit": "ns/iter",
            "extra": "iterations: 118801\ncpu: 5903.542057726789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4762.81866663031,
            "unit": "ns/iter",
            "extra": "iterations: 147011\ncpu: 4762.738162450431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4821.932900074417,
            "unit": "ns/iter",
            "extra": "iterations: 144948\ncpu: 4821.929933493397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4829.120897898031,
            "unit": "ns/iter",
            "extra": "iterations: 145139\ncpu: 4828.919863027862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7269.497174674844,
            "unit": "ns/iter",
            "extra": "iterations: 96980\ncpu: 7269.587543823456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25277.569039478072,
            "unit": "ns/iter",
            "extra": "iterations: 32170\ncpu: 25276.776499844564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130370.88522588398,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 130369.82600732632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101572.68220989231,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 101569.23621768368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100551.70998471376,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 100551.79348465268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96987.3326136327,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 96986.034090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200205.5918458896,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 200195.94534050138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1670436.3225225944,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670350.0900900876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1344224.4458874261,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1344227.5613275585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1329371.7604017714,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1329322.812051651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1305309.9690577001,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1305292.9676511928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 711723.598613241,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 711677.9661016945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1271480.3941908553,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1271452.0055325069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32837.12516887737,
            "unit": "ns/iter",
            "extra": "iterations: 25166\ncpu: 32835.667169991175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160088.3311688308,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 160087.03153988888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125061.03744014107,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 125055.66681178373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126961.5027370907,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 126958.67731913012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121696.0144251177,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 121692.44802715302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 213104.95009832844,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 213107.4975417899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1706870.5769230917,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1706759.3406593455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1369374.3685755704,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369335.9765051387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1392495.3685756593,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1392315.5653450761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1332905.882352987,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1332886.944045909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 737967.1104050814,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 737924.305003972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1309675.2098591314,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1309672.112676052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6038211.538961011,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6038000.649350637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2728268.813411231,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2728166.1807580157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24126.73740404205,
            "unit": "ns/iter",
            "extra": "iterations: 33999\ncpu: 24127.003735403894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126678.66666666251,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 126675.02612330207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97409.2629423136,
            "unit": "ns/iter",
            "extra": "iterations: 8789\ncpu: 97408.27170326523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99201.69988452458,
            "unit": "ns/iter",
            "extra": "iterations: 8660\ncpu: 99198.47575057733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93620.9109267512,
            "unit": "ns/iter",
            "extra": "iterations: 9161\ncpu: 93620.00873267165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181367.60961337047,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 181362.50783699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1685633.908108037,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1685600.5405405443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1327295.422475194,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1327233.4281649985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1323819.0454545934,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1323766.3352272692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1296530.0486110703,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1296478.4722222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 704463.5503406309,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 704450.0378501103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1273106.998630208,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1273048.7671232955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2661.4801052537314,
            "unit": "ns/iter",
            "extra": "iterations: 262984\ncpu: 2661.5124874517037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17421.7427513734,
            "unit": "ns/iter",
            "extra": "iterations: 40249\ncpu: 17421.27754726824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14191.323592853665,
            "unit": "ns/iter",
            "extra": "iterations: 49142\ncpu: 14190.804200073384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13743.286169962023,
            "unit": "ns/iter",
            "extra": "iterations: 50788\ncpu: 13742.79751122318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10296.240674456432,
            "unit": "ns/iter",
            "extra": "iterations: 67610\ncpu: 10295.975447419032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62572.20374518002,
            "unit": "ns/iter",
            "extra": "iterations: 11161\ncpu: 62570.22668219732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116376.10437093614,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 116374.05683895589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28112.770139417386,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 28112.439230182114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28406.558204369532,
            "unit": "ns/iter",
            "extra": "iterations: 24749\ncpu: 28406.028526405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29164.051774852,
            "unit": "ns/iter",
            "extra": "iterations: 24819\ncpu: 29164.418389137278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55644.19728161512,
            "unit": "ns/iter",
            "extra": "iterations: 12581\ncpu: 55643.208012081726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53341.58389108838,
            "unit": "ns/iter",
            "extra": "iterations: 13148\ncpu: 53340.424399148265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20687.694383683833,
            "unit": "ns/iter",
            "extra": "iterations: 33830\ncpu: 20687.407626367534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105156.48030667697,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 105152.85628382431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85501.46114443117,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 85500.52473763032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87368.82870766519,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 87367.1475730529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84326.39983011544,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84325.26392428092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121646.0919360537,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 121644.42127215727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 503346.0732758238,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 503336.2787356257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409749.41314554564,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 409741.60798122274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 418163.1967799705,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 418150.7453786516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 405559.1579559065,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 405548.7804878087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255913.34489051712,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 255909.74452554484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401633.8899769916,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 401623.2718894047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21409.55592950622,
            "unit": "ns/iter",
            "extra": "iterations: 32684\ncpu: 21409.42357116632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106320.29650986043,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 106314.46130500805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88797.76269679633,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88795.96241746978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89499.79191121322,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89497.6397040058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89166.3045241337,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 89164.49119249804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122625.8469066858,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 122625.76022369815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 504950.3599712179,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504928.0057595315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 420990.58861886297,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 420999.7628927081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 413336.92717581044,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 413329.9585553584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406418.9547038152,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406398.1416957044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257902.1882136216,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 257886.48250460537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406503.2965116395,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 406483.9534883654 ns\nthreads: 1"
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
        "date": 1702420971070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7006.250935915045,
            "unit": "ns/iter",
            "extra": "iterations: 99368\ncpu: 7005.813742854843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51235.78299999849,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51235.27 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94152.99681038543,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 94148.88913330401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136698.03698412073,
            "unit": "ns/iter",
            "extra": "iterations: 6300\ncpu: 136689.47619047618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179528.58006229886,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 179515.36863966763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223010.55001285882,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 222997.4286448957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265204.03353658726,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 265200.274390244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307093.10706714855,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 307078.6925795053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 350808.7269432196,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 350789.2871526381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5850.370924505037,
            "unit": "ns/iter",
            "extra": "iterations: 119372\ncpu: 5850.175920651414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4808.993412683826,
            "unit": "ns/iter",
            "extra": "iterations: 145431\ncpu: 4808.658401578765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4804.06817714823,
            "unit": "ns/iter",
            "extra": "iterations: 146002\ncpu: 4803.751318475088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4848.5045757590715,
            "unit": "ns/iter",
            "extra": "iterations: 144894\ncpu: 4848.345687192008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7248.101396572986,
            "unit": "ns/iter",
            "extra": "iterations: 96522\ncpu: 7247.680321584715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26107.629744705402,
            "unit": "ns/iter",
            "extra": "iterations: 31219\ncpu: 26105.656811557088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131402.11707017873,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 131394.02390438254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101743.74133839295,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 101737.8262933081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102687.81005653295,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 102682.40105858298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98275.98116695511,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98270.60658578842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198698.6927724208,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 198687.02170508006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1714561.5767097427,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1714462.8465804055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1345070.3227206564,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1345003.3285094036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1341607.123919257,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1341537.319884725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319462.1303116633,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1319384.98583569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 723421.2720875567,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 723368.3346364346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1300538.1974790094,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1300486.694677872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34134.33945368752,
            "unit": "ns/iter",
            "extra": "iterations: 24345\ncpu: 34132.87738755397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161734.19351209977,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 161725.76411025686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125466.13403570368,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 125458.56014047423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127456.67810337526,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 127449.75703136473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121738.4943278546,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 121732.17526942701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211853.46536586212,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 211415.19512195204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1749849.9775280515,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1749750.7490636716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1369149.8525074378,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1369090.7079646029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1368672.131964834,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1368563.1964809408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1346021.9638205257,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1345983.2127351698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 749322.9708265591,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 749295.380875202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1322173.3499288743,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1322143.2432432417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6092436.241829834,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6092088.235294094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2734616.6363636553,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2734445.747800583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25345.057027294904,
            "unit": "ns/iter",
            "extra": "iterations: 32388\ncpu: 25343.94837594176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127771.45914570872,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127763.95296919195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99200.37531895448,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 99194.79239155653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99341.09603800016,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 99331.92771084287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93115.30623158411,
            "unit": "ns/iter",
            "extra": "iterations: 9163\ncpu: 93110.57513914691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178939.904288369,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 178927.2840273456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1712454.3589743753,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1712364.4688644654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1340699.7334293898,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1340633.5734870352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1343465.3342898295,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1343392.2525107544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1325781.0311615274,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1325712.3229461708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 716091.0022970722,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 716046.1715160818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1324849.359331429,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1324748.6072423384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2584.2526308396023,
            "unit": "ns/iter",
            "extra": "iterations: 270541\ncpu: 2584.1783685282526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17612.693511066755,
            "unit": "ns/iter",
            "extra": "iterations: 39760\ncpu: 17611.177062374223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13134.110481585963,
            "unit": "ns/iter",
            "extra": "iterations: 53303\ncpu: 13133.480291916034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13687.358016012682,
            "unit": "ns/iter",
            "extra": "iterations: 51210\ncpu: 13686.801405975313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10198.848577770268,
            "unit": "ns/iter",
            "extra": "iterations: 68484\ncpu: 10198.655160329465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61831.48884725483,
            "unit": "ns/iter",
            "extra": "iterations: 11208\ncpu: 61829.398643825974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117434.90605603221,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117431.38735111484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28546.689249856936,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 28546.094196392267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28299.535014119007,
            "unit": "ns/iter",
            "extra": "iterations: 24790\ncpu: 28298.48729326355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28072.466924672128,
            "unit": "ns/iter",
            "extra": "iterations: 25064\ncpu: 28071.784232365073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55654.048615533065,
            "unit": "ns/iter",
            "extra": "iterations: 12568\ncpu: 55652.1960534692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53255.78821376651,
            "unit": "ns/iter",
            "extra": "iterations: 13117\ncpu: 53254.059617290266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20957.2367540757,
            "unit": "ns/iter",
            "extra": "iterations: 33482\ncpu: 20956.47512096079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108357.95502318196,
            "unit": "ns/iter",
            "extra": "iterations: 6470\ncpu: 108356.16692426693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85771.44347719196,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 85770.14467876496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85536.57106195537,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 85533.7651228151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84394.49885555459,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84392.15757137726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123776.09624911625,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 123770.7183297932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 503094.5613783254,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 503083.77602297236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413586.3790849876,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 413566.3695781371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 418926.98566307616,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418913.7395460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407773.2244897837,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 407760.64139941585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262566.4280359948,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 262561.91904047906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 407493.4900932244,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 407472.9603729665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21990.252230664984,
            "unit": "ns/iter",
            "extra": "iterations: 31717\ncpu: 21989.844562852417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107181.03535894136,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 107175.89162712339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90047.3318788494,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 90045.12320328529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89620.55887252191,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 89618.6418962199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88677.74892486657,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 88674.1841639258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125863.94133476845,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 125861.5536419094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 510470.67956205766,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510449.99999999616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 418100.3464990908,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418096.70855774556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 420247.4461167891,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 420225.7074051762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 413437.382613857,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 413426.0792430471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 265631.9177095098,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 265623.8907849852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 414168.0808561243,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 414147.62187872187 ns\nthreads: 1"
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
        "date": 1702421384589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6965.959711698591,
            "unit": "ns/iter",
            "extra": "iterations: 91987\ncpu: 6965.65710372118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50699.21559999671,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50698.02 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93062.28313972062,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 93061.53512105091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135781.3066289673,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 135779.4847628024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178668.78018576602,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 178665.57275541802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220872.3475393237,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 220861.2125824454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262493.2028985501,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262483.39371980674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305968.1074815604,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 305962.416578855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347369.5961768208,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 347362.0071684586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5839.143265924093,
            "unit": "ns/iter",
            "extra": "iterations: 119519\ncpu: 5838.92268174934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4780.6956981449885,
            "unit": "ns/iter",
            "extra": "iterations: 147541\ncpu: 4780.530157718869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4758.040769262449,
            "unit": "ns/iter",
            "extra": "iterations: 146998\ncpu: 4757.883100450344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4783.119345754691,
            "unit": "ns/iter",
            "extra": "iterations: 146306\ncpu: 4782.9261957814415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7157.711013872558,
            "unit": "ns/iter",
            "extra": "iterations: 96669\ncpu: 7157.441372104811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25063.089502081086,
            "unit": "ns/iter",
            "extra": "iterations: 32435\ncpu: 25061.945429320207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128309.08202364421,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 128305.68777129176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100601.36026817311,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 100598.02399435452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100736.29551920627,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 100733.93788525349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97295.33519489413,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 97291.18987918862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198001.57139679865,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 197995.06227758035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1683665.4728260955,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1683622.1014492803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1317447.2500000028,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1317421.285714287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1331793.6714082982,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1331706.8278805101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1369811.645251379,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1369762.569832403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704479.2532221028,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 704433.73768006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1268936.8224043273,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1268886.8852458997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32679.04245133693,
            "unit": "ns/iter",
            "extra": "iterations: 25276\ncpu: 32677.89998417461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159564.47002398808,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 159563.5860542332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125039.64904893715,
            "unit": "ns/iter",
            "extra": "iterations: 6887\ncpu: 125036.21315522018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124435.55693821827,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 124434.84300390657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123449.46386676363,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 123445.79290369322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 212805.7215407294,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 212804.31795878347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1730640.8872457794,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1730559.3345656132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1351092.306801752,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1351069.7539797397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1351169.31159422,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1351120.724637679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1323462.638176622,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1323438.7464387475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729639.5676309745,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 729610.3987490247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1299056.055865867,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1299024.7206703932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5950253.538461407,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5950142.948717914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2678545.7873562593,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2678437.6436781543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24105.986296120773,
            "unit": "ns/iter",
            "extra": "iterations: 33932\ncpu: 24105.743840622315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125506.91045427647,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 125503.82935352356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97059.4552854734,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 97057.47880158214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97354.97967153264,
            "unit": "ns/iter",
            "extra": "iterations: 8707\ncpu: 97351.17721373636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95086.95130086383,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 95085.05670446908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180074.30844630118,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 180068.98852971767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1687719.8285198733,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1687682.6714801467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1319880.9217638592,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1319835.846372689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1311477.4199438128,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1311420.7865168562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1307083.133704726,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1307043.871866293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 695552.9642324538,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 695542.846497766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1266202.2285714438,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1266142.3129251678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2618.042479459543,
            "unit": "ns/iter",
            "extra": "iterations: 266058\ncpu: 2618.027272248922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17130.04997917528,
            "unit": "ns/iter",
            "extra": "iterations: 40817\ncpu: 17129.522012886733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13095.137139857192,
            "unit": "ns/iter",
            "extra": "iterations: 53347\ncpu: 13094.807580557534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14150.918203883273,
            "unit": "ns/iter",
            "extra": "iterations: 53560\ncpu: 14150.416355489146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10330.62708210255,
            "unit": "ns/iter",
            "extra": "iterations: 67720\ncpu: 10330.091553455462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61779.917627386094,
            "unit": "ns/iter",
            "extra": "iterations: 11363\ncpu: 61778.579600457815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115153.28242264099,
            "unit": "ns/iter",
            "extra": "iterations: 6076\ncpu: 115149.16063199437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28414.45426866374,
            "unit": "ns/iter",
            "extra": "iterations: 24633\ncpu: 28414.22482036302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28099.49168797929,
            "unit": "ns/iter",
            "extra": "iterations: 25024\ncpu: 28098.361572889975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27997.047184109048,
            "unit": "ns/iter",
            "extra": "iterations: 25072\ncpu: 27996.370453095195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51990.61339976053,
            "unit": "ns/iter",
            "extra": "iterations: 13448\ncpu: 51989.3069601428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52770.757770066484,
            "unit": "ns/iter",
            "extra": "iterations: 13256\ncpu: 52768.27851538925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21620.215252456215,
            "unit": "ns/iter",
            "extra": "iterations: 32362\ncpu: 21618.463012174772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104324.40293808733,
            "unit": "ns/iter",
            "extra": "iterations: 6671\ncpu: 104319.32244041224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85594.264504287,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 85591.37086903279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84444.31490645686,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 84442.93301146606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84404.25256178236,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84400.66305002982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122506.13758271815,
            "unit": "ns/iter",
            "extra": "iterations: 5742\ncpu: 122501.81121560578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 504475.5489208694,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 504460.647482022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409379.8968951565,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 409372.8763913339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 411268.3186360882,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411254.7912992403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407464.4775247879,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 407453.00642148603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256837.53560940406,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 256833.9574155689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401311.57955197233,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 401300.4595060322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22119.427474160366,
            "unit": "ns/iter",
            "extra": "iterations: 31637\ncpu: 22119.423459873076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107734.29039703927,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 107731.82517697588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89801.83098951951,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89798.29966760273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89893.96268656857,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 89891.9325784858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89814.29020664941,
            "unit": "ns/iter",
            "extra": "iterations: 7791\ncpu: 89810.56347067238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126300.37898720588,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 126300.34240403537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 499888.9430000304,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500133.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 411630.3313713846,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 411685.9917598597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 409137.8225995377,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 409121.77985948435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406524.86337209406,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 406525.6395348808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258243.64298926535,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 258237.14391416873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 404643.7947826287,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 404637.1594202922 ns\nthreads: 1"
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
        "date": 1702422474164,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6981.243822908047,
            "unit": "ns/iter",
            "extra": "iterations: 100897\ncpu: 6981.443452233466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50787.607800003796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50787.09 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93415.49493408875,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 93412.14729273344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135794.15775400816,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 135791.72695816297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177671.153593433,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 177668.21355236144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221068.73114169072,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 221085.70336391433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262876.8860951216,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262924.871251136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304994.5287719374,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 304996.8421052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347475.24572127673,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 347472.8198859006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5845.709482279489,
            "unit": "ns/iter",
            "extra": "iterations: 120509\ncpu: 5845.691193188891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4709.681413650086,
            "unit": "ns/iter",
            "extra": "iterations: 147533\ncpu: 4709.592430168166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4696.947766762069,
            "unit": "ns/iter",
            "extra": "iterations: 148775\ncpu: 4696.9712653335555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4677.232592454689,
            "unit": "ns/iter",
            "extra": "iterations: 150452\ncpu: 4677.235929067071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7212.016030062622,
            "unit": "ns/iter",
            "extra": "iterations: 97130\ncpu: 7212.112632554313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25357.989424425265,
            "unit": "ns/iter",
            "extra": "iterations: 32055\ncpu: 25358.009670878186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130821.50106351104,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 130820.98146460054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101714.40759252856,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 101713.07866238242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101581.92652287167,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 101581.48850438511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97108.55227273187,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 97107.67045454534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199878.41828750167,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 199873.93248379184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1665434.974683532,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1665426.9439421382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1319065.3826458529,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1319070.9815078205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1316243.39630676,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1316201.1363636341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1289599.7023644664,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1289593.3240611944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713571.8516228492,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 713563.0602782093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1271697.434065911,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1271676.7857142817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32984.02220538958,
            "unit": "ns/iter",
            "extra": "iterations: 25084\ncpu: 32983.53930792547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162123.35532234402,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 162122.43253373323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125869.80356360918,
            "unit": "ns/iter",
            "extra": "iterations: 6847\ncpu: 125867.57704103987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126055.1200058527,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 126057.19303380679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121233.1868271991,
            "unit": "ns/iter",
            "extra": "iterations: 7060\ncpu: 121234.05099150157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 213277.8515509621,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 213281.58542589901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1694839.9598540377,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1694808.9416058504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1356947.7910015034,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1356941.7997097238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1357133.56413992,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1357116.1807580232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1323809.7528409653,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1323796.022727273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 740106.6828298795,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 740112.8775834636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1295271.1295264708,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1295246.3788300778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6025057.361290281,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6025081.290322571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2772127.8898809147,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2772159.523809513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24487.592514907446,
            "unit": "ns/iter",
            "extra": "iterations: 33373\ncpu: 24487.9962844216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127867.02140309046,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 127864.72948870329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98219.99508346614,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 98221.36976903709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98452.28201587762,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 98453.02036589588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92362.75446817421,
            "unit": "ns/iter",
            "extra": "iterations: 9176\ncpu: 92363.82955536156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180828.8739302864,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 180827.71863911554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1750552.878354239,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1750559.7495527728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1321043.4844192571,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1321040.509915013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1328762.4336157932,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1328771.6101694973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1290995.3814146724,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290980.99861304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 706337.655041705,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 706349.5830174371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1270873.615595008,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1270867.9890560943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2589.450154109202,
            "unit": "ns/iter",
            "extra": "iterations: 271236\ncpu: 2589.4822221239106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17365.328228549133,
            "unit": "ns/iter",
            "extra": "iterations: 40289\ncpu: 17365.350343766317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13581.687382078244,
            "unit": "ns/iter",
            "extra": "iterations: 51411\ncpu: 13581.98829044376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14201.39064063606,
            "unit": "ns/iter",
            "extra": "iterations: 50965\ncpu: 14201.414696360198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10175.559057870523,
            "unit": "ns/iter",
            "extra": "iterations: 68653\ncpu: 10175.680596623604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62955.72852788372,
            "unit": "ns/iter",
            "extra": "iterations: 11154\ncpu: 62955.8812981896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 103621.95665680357,
            "unit": "ns/iter",
            "extra": "iterations: 6760\ncpu: 103622.10059171673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27935.923426475758,
            "unit": "ns/iter",
            "extra": "iterations: 25087\ncpu: 27935.476541634995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27890.629617822164,
            "unit": "ns/iter",
            "extra": "iterations: 25093\ncpu: 27890.288128163047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27835.16151339192,
            "unit": "ns/iter",
            "extra": "iterations: 25162\ncpu: 27834.154677688697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 52764.35078849853,
            "unit": "ns/iter",
            "extra": "iterations: 13253\ncpu: 52763.20078472795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 49986.035268820386,
            "unit": "ns/iter",
            "extra": "iterations: 13950\ncpu: 49983.813620071865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20827.65130971012,
            "unit": "ns/iter",
            "extra": "iterations: 33557\ncpu: 20827.579938612023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104017.58581644444,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 104012.45530393271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84749.64343618488,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84747.68300060616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84428.74078995384,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84429.79828481644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83126.48452506891,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83125.17490809929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122402.71201537855,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122402.23541739411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 497323.72901842603,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497325.675675672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404274.0559399663,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 404275.605536336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 406901.5171411781,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 406888.03021498985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407321.0761627844,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 407317.73255813954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258491.76278042438,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 258481.68444280914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 400365.5489410265,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 400365.1402404159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21569.144677316282,
            "unit": "ns/iter",
            "extra": "iterations: 32493\ncpu: 21568.87021820095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105454.63403614341,
            "unit": "ns/iter",
            "extra": "iterations: 6640\ncpu: 105452.9668674688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87897.33091273118,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 87896.74471015419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88829.96491450524,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 88829.6121459557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87435.38720160504,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 87434.4706911636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122687.90923510745,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 122686.53507226027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 493054.31051518174,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 493059.70359915186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 407215.20406978385,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 407210.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407249.0924955954,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407246.0732984314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404343.9474898729,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 404340.39238315343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258643.5237919582,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 258645.2969384025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400240.60986802075,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 400235.3413654617 ns\nthreads: 1"
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
        "date": 1702453372434,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7011.69946348848,
            "unit": "ns/iter",
            "extra": "iterations: 100091\ncpu: 7011.7113426781625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50711.210999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50711.840000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93159.7494553386,
            "unit": "ns/iter",
            "extra": "iterations: 9180\ncpu: 93152.75599128538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135258.54465409165,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 135253.53773584904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176618.71559819684,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 176611.2903225806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219524.16124937442,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 219515.13458608423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261621.43308270027,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 261613.53383458644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 302918.10619777057,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 302904.42200557113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346213.7175815422,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 346214.75735879084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5774.792486375834,
            "unit": "ns/iter",
            "extra": "iterations: 120927\ncpu: 5774.8087689267095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4703.520235745702,
            "unit": "ns/iter",
            "extra": "iterations: 147956\ncpu: 4703.576739030526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4687.52810011229,
            "unit": "ns/iter",
            "extra": "iterations: 150551\ncpu: 4687.29334245539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4727.581320666115,
            "unit": "ns/iter",
            "extra": "iterations: 149470\ncpu: 4727.539305546268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7224.958170300158,
            "unit": "ns/iter",
            "extra": "iterations: 96606\ncpu: 7224.780034366396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26447.992902974886,
            "unit": "ns/iter",
            "extra": "iterations: 30858\ncpu: 26447.20979972778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131712.7216431598,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 131708.76762722258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100852.59230045044,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 100850.95361431605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100860.44672082855,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 100857.07052867081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96149.20978469036,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 96145.54165257576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196509.55577601233,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 196495.61287477938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1700157.0385320869,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1700121.2844036673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1333702.0457796901,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1333682.6895565086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320794.504992861,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1320773.7517831717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1312107.552112667,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1312032.8169014102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 699921.7647951262,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 699905.9939301979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1283415.6809985864,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1283349.098474344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33097.394464489225,
            "unit": "ns/iter",
            "extra": "iterations: 25219\ncpu: 33096.201276815125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159558.9080438404,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 159551.99702768013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122885.6509272466,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 122879.90014265374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125895.10599619056,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 125887.8903386601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120937.37644732847,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 120932.22253600646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 210642.3391642331,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210629.39747327482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1731125.9033457725,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1731003.3457249177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1356333.4248175144,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1356294.8905109514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1363352.4237536709,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1363280.64516129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1325118.6949153284,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1325059.887005655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 728576.0845732169,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 728542.8347689915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1304937.363507782,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1304860.9618104696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5910496.216560781,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5910049.044585964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2681440.8882520953,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2681310.315186241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24273.800306856177,
            "unit": "ns/iter",
            "extra": "iterations: 33892\ncpu: 24272.2795940046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127414.23584346213,
            "unit": "ns/iter",
            "extra": "iterations: 6746\ncpu: 127410.2431070266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97283.91339925771,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 97280.94101602465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95301.4600642482,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 95294.06225767138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92989.34286952976,
            "unit": "ns/iter",
            "extra": "iterations: 9228\ncpu: 92984.90463805807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 177685.79799425494,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 177679.3491608688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1704148.8761383344,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1704037.887067399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1328426.5495751367,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1328352.4079320116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1328760.5948645845,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328652.924393723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1312666.2250352176,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1312581.9971870629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 695313.9783420468,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 695249.0664675157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1281385.64883402,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1281336.2139917735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2583.207912693387,
            "unit": "ns/iter",
            "extra": "iterations: 271412\ncpu: 2583.05712348753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17348.372296946738,
            "unit": "ns/iter",
            "extra": "iterations: 40371\ncpu: 17348.30447598529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13609.32098573002,
            "unit": "ns/iter",
            "extra": "iterations: 51292\ncpu: 13608.77329798018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13642.254761118216,
            "unit": "ns/iter",
            "extra": "iterations: 51511\ncpu: 13642.053153695328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10185.819357747852,
            "unit": "ns/iter",
            "extra": "iterations: 68727\ncpu: 10185.77123983297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62126.70641549695,
            "unit": "ns/iter",
            "extra": "iterations: 11254\ncpu: 62124.151412830695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117449.5063099459,
            "unit": "ns/iter",
            "extra": "iterations: 5943\ncpu: 117446.15514050175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27935.903242530952,
            "unit": "ns/iter",
            "extra": "iterations: 25073\ncpu: 27934.802377058862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27810.967881872104,
            "unit": "ns/iter",
            "extra": "iterations: 25126\ncpu: 27810.085170739407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27657.44302842777,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27656.49515642367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51859.57512915046,
            "unit": "ns/iter",
            "extra": "iterations: 13550\ncpu: 51859.055350553455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53323.04330678827,
            "unit": "ns/iter",
            "extra": "iterations: 13185\ncpu: 53322.684869169745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21805.07062076943,
            "unit": "ns/iter",
            "extra": "iterations: 32186\ncpu: 21804.567203131744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107696.82171973232,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 107698.09260113869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84415.52858176046,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84410.69705740476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84502.85514244715,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84502.30564944432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82975.3009973884,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 82971.09950130456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121462.9055459268,
            "unit": "ns/iter",
            "extra": "iterations: 5770\ncpu: 121460.25996533723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 504085.91241930914,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 504092.1033740138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410858.3450497692,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 410851.55243116285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 412220.48411769076,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 412201.7058823581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398738.8030910069,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 398725.7584430476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252096.06229743033,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 252081.81490817355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 399402.2964020304,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399393.889206167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21518.70023693356,
            "unit": "ns/iter",
            "extra": "iterations: 32499\ncpu: 21517.597464537324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107028.54562156195,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 107025.61236987237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90054.27492949729,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 90054.11432965922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90204.67739858168,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90201.23631680709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88976.9715157776,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 88973.88097660181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124723.24968765282,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 124716.99089773362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 503050.3952654434,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 503034.0028694423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 408110.0336622327,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 408091.7005223446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 409099.260641411,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 409095.9766763899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 403909.79896610486,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 403883.2280298667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256617.2780219835,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 256614.98168497806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 402104.1418684713,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 402084.1407151062 ns\nthreads: 1"
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
        "date": 1702479553792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6940.535866860869,
            "unit": "ns/iter",
            "extra": "iterations: 100887\ncpu: 6940.512652769932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50474.504200002455,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50470.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93706.6923582995,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 93702.81767350069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136408.60066529398,
            "unit": "ns/iter",
            "extra": "iterations: 6313\ncpu: 136402.53445271662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183767.5767790168,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 183765.10611735328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220893.49045073029,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 220874.48433919024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263777.06498634705,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 263772.73003340425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307047.2895385663,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 307028.88340965146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351931.3254032348,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 351920.2822580648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5827.754649649415,
            "unit": "ns/iter",
            "extra": "iterations: 119095\ncpu: 5827.40753180234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4763.134517058104,
            "unit": "ns/iter",
            "extra": "iterations: 146881\ncpu: 4763.060572844678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4754.258669598389,
            "unit": "ns/iter",
            "extra": "iterations: 147354\ncpu: 4754.1627644990895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4760.559344360464,
            "unit": "ns/iter",
            "extra": "iterations: 147276\ncpu: 4760.3791520682225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7123.98607148704,
            "unit": "ns/iter",
            "extra": "iterations: 98144\ncpu: 7123.934219106611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25407.599121139323,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 25406.102159753187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126237.54875716807,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 126230.79864686014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98897.16983962015,
            "unit": "ns/iter",
            "extra": "iterations: 8667\ncpu: 98897.23087573549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99090.54583673608,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 99090.6107672544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93412.2489871842,
            "unit": "ns/iter",
            "extra": "iterations: 9133\ncpu: 93408.31052228149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199801.73239436778,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 199796.98189134736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1703117.864716638,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1703091.7733089575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1350012.4362318881,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1349966.3768115924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1346628.716353079,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1346566.2807525322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319879.0099291336,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319796.8794326216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 714293.5023147943,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 714266.0493827157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1290765.426388971,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1290705.1388888874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32919.100963836994,
            "unit": "ns/iter",
            "extra": "iterations: 25108\ncpu: 32917.67165843551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157198.81996372057,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 157191.34301270402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122017.06752913857,
            "unit": "ns/iter",
            "extra": "iterations: 7034\ncpu: 122012.12681262469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122656.85748999879,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 122653.83076043439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120028.1411318766,
            "unit": "ns/iter",
            "extra": "iterations: 7121\ncpu: 120024.01348125248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222163.90092166464,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 222155.14592933928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1736630.7429644465,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1736549.9061913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1381267.5347120727,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1381206.4992614437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1376490.8921712856,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1376388.3308714905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1348404.07959469,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1348335.8900144622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 738734.8469469172,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 738695.7176843733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1318343.1359773816,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1318264.8725212466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6004569.329032224,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6004217.419354796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2652947.9857550343,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2652826.4957265025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24359.341209298516,
            "unit": "ns/iter",
            "extra": "iterations: 33689\ncpu: 24358.499807058695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123839.89696359703,
            "unit": "ns/iter",
            "extra": "iterations: 6949\ncpu: 123835.63102604676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96362.3364121969,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 96356.93300689907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95155.82429596671,
            "unit": "ns/iter",
            "extra": "iterations: 9055\ncpu: 95155.0414135836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90957.05909914248,
            "unit": "ns/iter",
            "extra": "iterations: 9391\ncpu: 90957.0226812911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180387.74636778227,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 180385.67870485748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1700967.4772313281,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1700855.7377049187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1336445.1600000393,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1336391.2857142931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1339941.1420373542,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1339891.6786226644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1314034.0378681896,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1313990.4628331035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 704904.3456603579,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 704869.3584905636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1283158.1489656635,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283115.034482758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2548.5777710674015,
            "unit": "ns/iter",
            "extra": "iterations: 274858\ncpu: 2548.4559299711304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17198.730754028194,
            "unit": "ns/iter",
            "extra": "iterations: 40476\ncpu: 17198.25328589787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12949.336436812247,
            "unit": "ns/iter",
            "extra": "iterations: 53918\ncpu: 12949.473274231234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14173.51269127955,
            "unit": "ns/iter",
            "extra": "iterations: 49404\ncpu: 14173.117561331159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10195.243013913974,
            "unit": "ns/iter",
            "extra": "iterations: 68708\ncpu: 10195.245095185459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62786.95889307246,
            "unit": "ns/iter",
            "extra": "iterations: 11166\ncpu: 62784.98119290703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115944.11812458886,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 115941.56726308788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28060.970435622396,
            "unit": "ns/iter",
            "extra": "iterations: 24861\ncpu: 28060.41993483764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28421.35609537924,
            "unit": "ns/iter",
            "extra": "iterations: 24617\ncpu: 28420.82707072346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27732.486417892906,
            "unit": "ns/iter",
            "extra": "iterations: 25217\ncpu: 27732.137050402554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55667.56615310946,
            "unit": "ns/iter",
            "extra": "iterations: 12592\ncpu: 55666.979034307486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52936.297689165316,
            "unit": "ns/iter",
            "extra": "iterations: 13242\ncpu: 52936.18788702603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20775.90051315603,
            "unit": "ns/iter",
            "extra": "iterations: 33713\ncpu: 20775.911369501457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106491.52507598237,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 106491.39817629149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84575.50313630376,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84574.11338962558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84386.11252858494,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84384.10157660254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83136.35721062635,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 83136.12428842616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121844.42309032848,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 121843.26822462498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 498982.985632207,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 498982.47126436885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409433.97479485936,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 409428.54630715074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 411186.0985337158,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411185.6891495552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 405183.119930467,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 405178.04171495396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256626.28340082965,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 256625.3956569734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 400738.3963344776,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 400723.88316150644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21755.91215481747,
            "unit": "ns/iter",
            "extra": "iterations: 32193\ncpu: 21755.64874351539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106543.65479452169,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 106540.57838660546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88469.35629005248,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 88469.08382556184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89397.84674329081,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 89396.50063857017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88724.60561412151,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 88721.91032643201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126610.21132621822,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 126608.8112900308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 500347.1272337413,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 500332.1658327343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 410617.6613942928,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 410621.55828939495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407288.1555037646,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 407276.9947583004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 407955.8806057214,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 407944.96214327123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260112.05447758388,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 260103.6567164188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 403434.08106541896,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 403427.09901564056 ns\nthreads: 1"
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
        "date": 1702488581524,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7014.136646958601,
            "unit": "ns/iter",
            "extra": "iterations: 99790\ncpu: 7013.778935765106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50131.60569999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50127.17 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92292.92857142742,
            "unit": "ns/iter",
            "extra": "iterations: 9324\ncpu: 92288.2453882454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134061.37457311,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 134058.1185967091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175226.44439951592,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 175220.46097856865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217406.7236545652,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 217401.5269086359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258722.24329158667,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 258708.52713178287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299388.6091597744,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 299377.37603305787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344032.4363922688,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 344015.08467900736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5789.456105237689,
            "unit": "ns/iter",
            "extra": "iterations: 120413\ncpu: 5789.190535905601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4717.116104263425,
            "unit": "ns/iter",
            "extra": "iterations: 148470\ncpu: 4716.921263554919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4744.259824723723,
            "unit": "ns/iter",
            "extra": "iterations: 148223\ncpu: 4744.325104740836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4746.329147429492,
            "unit": "ns/iter",
            "extra": "iterations: 147718\ncpu: 4746.338293234407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7102.585098612023,
            "unit": "ns/iter",
            "extra": "iterations: 98568\ncpu: 7102.592119146165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25107.272273413164,
            "unit": "ns/iter",
            "extra": "iterations: 32449\ncpu: 25106.64427255076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127698.61128433279,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 127695.60504825549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98569.70513706584,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 98564.97350840854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98278.37670996862,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 98273.85906426006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94800.55651787539,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 94798.48989562535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 195694.65003296296,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 195691.05297867698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1650999.3921569493,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1650935.2941176484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1306875.792134848,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1306823.7359550516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1312697.3658191701,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1312656.214689264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1280284.0662983556,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1280250.2762430934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 722947.687793422,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 722915.9624413141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1259844.7547425276,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1259776.9647696465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32866.81274001689,
            "unit": "ns/iter",
            "extra": "iterations: 25259\ncpu: 32865.80228829327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157560.0301259806,
            "unit": "ns/iter",
            "extra": "iterations: 5477\ncpu: 157552.40094942463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121494.37567185535,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 121491.18811881189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124271.6001164998,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 124269.30246104543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117976.48710878428,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 117976.49248586812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 208380.53291537028,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 208378.1769954191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1687218.8840579838,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1687154.1666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1332372.373390588,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1332307.8683833987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1347394.1224783917,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1347382.132564843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1307128.5895627376,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1307117.6304654428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 748330.4235104122,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 748317.8743961347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1289301.2506925738,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1289240.1662049894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6127507.361841971,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6127533.552631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2797903.3051361563,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2797836.8580060513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24143.939912524547,
            "unit": "ns/iter",
            "extra": "iterations: 34067\ncpu: 24143.969237091496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123969.53161458446,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 123969.00475298843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94691.93905938813,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 94693.1773018325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94174.6065231779,
            "unit": "ns/iter",
            "extra": "iterations: 9106\ncpu: 94173.96222271057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90605.21937261794,
            "unit": "ns/iter",
            "extra": "iterations: 9436\ncpu: 90605.33064858025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 176593.85991736193,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 176592.43801652943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1667313.5953654696,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1667336.3636363663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1314856.8244381817,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1314822.050561799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1312628.0532959108,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1312618.232819077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1282998.8271603747,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1282985.5967078186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718148.9004594103,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 718158.2695252682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1264317.0311232617,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1264283.8971583277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2602.1178743889413,
            "unit": "ns/iter",
            "extra": "iterations: 269626\ncpu: 2602.124795086546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17106.216272978545,
            "unit": "ns/iter",
            "extra": "iterations: 40472\ncpu: 17106.13510575221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13566.548129483308,
            "unit": "ns/iter",
            "extra": "iterations: 51590\ncpu: 13566.720294630826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14167.06435102853,
            "unit": "ns/iter",
            "extra": "iterations: 49432\ncpu: 14166.853455251667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10188.796698738483,
            "unit": "ns/iter",
            "extra": "iterations: 68701\ncpu: 10188.800745258419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62427.65248290517,
            "unit": "ns/iter",
            "extra": "iterations: 11257\ncpu: 62426.348050102126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114396.02194407197,
            "unit": "ns/iter",
            "extra": "iterations: 6152\ncpu: 114396.1313394025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27871.627678213506,
            "unit": "ns/iter",
            "extra": "iterations: 25110\ncpu: 27872.003185981685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27773.843660631974,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 27773.29996822358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27764.88730775639,
            "unit": "ns/iter",
            "extra": "iterations: 25228\ncpu: 27764.49183446945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53309.73607729659,
            "unit": "ns/iter",
            "extra": "iterations: 13144\ncpu: 53309.99695678665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52258.90834453172,
            "unit": "ns/iter",
            "extra": "iterations: 13398\ncpu: 52258.14300641869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21266.3743103111,
            "unit": "ns/iter",
            "extra": "iterations: 32986\ncpu: 21265.42775723032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104789.21498126123,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 104789.34831460666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83576.45871121495,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83575.23866348475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83425.68928911898,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83425.8826335875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82771.45316007212,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82772.53396337904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122110.34847423778,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 122109.1196071548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 494331.0446491224,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 494330.9000708778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 402303.1671486502,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 402300.5205321036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 410943.68947667186,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 410937.0902817746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399390.7839681684,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 399377.94201250555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258105.9864070709,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 258093.05657604508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395753.7664399408,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 395724.2630385479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21182.88131888219,
            "unit": "ns/iter",
            "extra": "iterations: 32937\ncpu: 21181.589094331724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104995.56020393295,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104996.97106012909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86323.24201307095,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86324.42333785552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86746.15444733867,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86739.27552412885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86032.76988741447,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86028.2568353331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122904.30324846519,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 122896.92712906137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496399.42775800696,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 496382.7046263364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 407950.0490653998,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 407923.24766354606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 402368.12334293034,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 402372.39193083165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405052.248839892,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 405053.7122969804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259364.92433231705,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 259364.79970326353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 401944.58928569756,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 401930.9331797249 ns\nthreads: 1"
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
        "date": 1702490744723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7097.256168287484,
            "unit": "ns/iter",
            "extra": "iterations: 98974\ncpu: 7096.895144179281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51398.05339999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51398.55 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95033.203789896,
            "unit": "ns/iter",
            "extra": "iterations: 9024\ncpu: 95031.41622340425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136677.11074144824,
            "unit": "ns/iter",
            "extra": "iterations: 6312\ncpu: 136673.16223067176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180476.80992080542,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 180465.86077532315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224198.07576933186,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 224184.40651667982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265780.6980092033,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 265769.4946401226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 308653.88695957663,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 308644.47200566967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349988.3945139388,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 349962.2831787008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6013.734555288707,
            "unit": "ns/iter",
            "extra": "iterations: 116480\ncpu: 6013.540521978028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4963.264737798716,
            "unit": "ns/iter",
            "extra": "iterations: 141914\ncpu: 4962.959961666934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4823.732211522538,
            "unit": "ns/iter",
            "extra": "iterations: 145895\ncpu: 4823.266732924367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4927.2200118215405,
            "unit": "ns/iter",
            "extra": "iterations: 142106\ncpu: 4927.050933809963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7351.857904774398,
            "unit": "ns/iter",
            "extra": "iterations: 95436\ncpu: 7351.258434972129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25405.661409699365,
            "unit": "ns/iter",
            "extra": "iterations: 32021\ncpu: 25403.463352175095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134121.66804028724,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 134113.99572649604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100469.88173933719,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 100463.25597749666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100893.26434208406,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100886.54729650152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96518.27383780148,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 96509.46725483565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199427.41532618387,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 199413.49419124183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1697974.0254545172,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1697868.363636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1338857.0957142422,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1338764.1428571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1326954.947142797,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1326849.2857142887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1298639.563814884,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1298519.4950911629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716845.099301744,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 716835.1435221116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1281576.6657458553,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1281549.1712707144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33397.437484785965,
            "unit": "ns/iter",
            "extra": "iterations: 24650\ncpu: 33396.74645030426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159914.4896296265,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 159909.59259259285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123833.01322790534,
            "unit": "ns/iter",
            "extra": "iterations: 6955\ncpu: 123827.89360172523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125899.97141181663,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 125893.65195719128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119209.1266545871,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119204.19395290538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 212983.54155430372,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 212533.78278989994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1741386.31471132,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1741317.5046554967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1365656.0058394382,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1365632.5547445263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1359068.3442135237,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1358982.4925816047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1334227.8099998694,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1334162.2857142913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 740148.9512390627,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 740095.7633892867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1317455.222694939,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1317376.7375886536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6110620.712418352,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6110241.1764706075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2759794.4821427707,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2759620.5357142715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24697.80512604673,
            "unit": "ns/iter",
            "extra": "iterations: 33242\ncpu: 24695.99602911981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127433.75993476338,
            "unit": "ns/iter",
            "extra": "iterations: 6744\ncpu: 127425.74139976277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97453.23059464342,
            "unit": "ns/iter",
            "extra": "iterations: 8812\ncpu: 97446.41398093446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98105.88219835953,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 98100.12568555743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93958.60988225167,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 93953.31792670846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180886.75363825564,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 180875.8004157995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1709349.747252684,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1709292.8571428498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1328678.3636363707,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1328628.9772727257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1332043.041193064,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1332019.4602272678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1297584.73221755,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297544.3514644352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 707857.0584662339,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 707836.8261199692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1277117.226337503,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1277026.8861454015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2657.0328081598577,
            "unit": "ns/iter",
            "extra": "iterations: 263532\ncpu: 2657.0192614179446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17679.255329845804,
            "unit": "ns/iter",
            "extra": "iterations: 39776\ncpu: 17678.54485116643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14377.641830333114,
            "unit": "ns/iter",
            "extra": "iterations: 48625\ncpu: 14377.46838046279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14344.200462479865,
            "unit": "ns/iter",
            "extra": "iterations: 48867\ncpu: 14342.349642908348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10441.09099985173,
            "unit": "ns/iter",
            "extra": "iterations: 67110\ncpu: 10440.731634629678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62591.92286995127,
            "unit": "ns/iter",
            "extra": "iterations: 11150\ncpu: 62590.52914798202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113027.604751969,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 113022.82870444655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28768.967102819646,
            "unit": "ns/iter",
            "extra": "iterations: 24227\ncpu: 28768.881826062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28393.931394449668,
            "unit": "ns/iter",
            "extra": "iterations: 24619\ncpu: 28392.725130996256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28310.31756374107,
            "unit": "ns/iter",
            "extra": "iterations: 24710\ncpu: 28309.307972481034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55937.68260938946,
            "unit": "ns/iter",
            "extra": "iterations: 12524\ncpu: 55934.29415522166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53615.59513952804,
            "unit": "ns/iter",
            "extra": "iterations: 13044\ncpu: 53611.10088929797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21372.69714664382,
            "unit": "ns/iter",
            "extra": "iterations: 33224\ncpu: 21371.358054418535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105894.93292200255,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 105893.05489637627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85584.81700306221,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 85585.7003058098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85711.79407444311,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85710.06366307511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84906.91347088234,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 84905.8373786418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123740.71549743648,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123737.2857395306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 508579.2080291641,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 508576.7153284587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411242.009384181,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411229.4428152473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 411369.7266230209,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 411355.2114353784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 405574.10848242644,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 405551.12521638593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258720.00480058583,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 258714.10635154985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406234.6376811521,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 406215.13043478003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21354.640328312067,
            "unit": "ns/iter",
            "extra": "iterations: 32652\ncpu: 21354.26620115158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107130.83781718148,
            "unit": "ns/iter",
            "extra": "iterations: 6542\ncpu: 107126.87251604971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89604.94113899702,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 89603.18511912368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90337.15562145153,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90336.73285198485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88615.23267013454,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 88610.44227601045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125066.52963228563,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 125058.05069617793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 508533.3499999851,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 508506.15942029323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 411161.08766803,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 411137.5803623572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407963.0280537267,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 407954.6464056115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405235.38202896947,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405225.913043482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258332.25545284225,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 258322.92051755945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405519.2299184864,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 405501.4551804433 ns\nthreads: 1"
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
        "date": 1705573975666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7203.929611751815,
            "unit": "ns/iter",
            "extra": "iterations: 96536\ncpu: 7203.553078644238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51955.98269999664,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51952.62999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96308.00392420522,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 96304.73147213811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141155.33092105703,
            "unit": "ns/iter",
            "extra": "iterations: 6080\ncpu: 141148.38815789472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187570.05059523936,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 187561.3520408163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228095.0515382604,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 228080.30502235066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270341.60960397637,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270322.2326161522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315083.1901484675,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 315068.018833756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359687.09506171505,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 359661.72839506215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6069.984953402371,
            "unit": "ns/iter",
            "extra": "iterations: 115242\ncpu: 6069.638673400322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4920.059262007121,
            "unit": "ns/iter",
            "extra": "iterations: 142874\ncpu: 4919.8237607962365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4899.345469442131,
            "unit": "ns/iter",
            "extra": "iterations: 142797\ncpu: 4899.175052697184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4860.3146463384255,
            "unit": "ns/iter",
            "extra": "iterations: 144432\ncpu: 4859.997092057166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7373.099041702352,
            "unit": "ns/iter",
            "extra": "iterations: 94334\ncpu: 7372.95354803147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25604.41771081389,
            "unit": "ns/iter",
            "extra": "iterations: 31924\ncpu: 25604.075303846614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129574.0003020215,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 129569.37481123542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99640.45304317295,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 99635.5871057838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99633.21614068076,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 99629.66111564002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95171.80332440526,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 95167.81570727343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198913.28163355732,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 198900.9819236778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1727797.5785581747,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1727724.9537892805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1346753.3719247712,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1346712.8798842265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1342804.926512911,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1342744.8126801164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1312837.5190946616,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1312731.4002828845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 717712.4801864885,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 717679.0209790213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1291282.8509749242,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1291206.406685239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33219.51142467589,
            "unit": "ns/iter",
            "extra": "iterations: 24946\ncpu: 33217.962799647285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159184.0533702626,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 159170.8771929821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122791.33242779307,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 122787.78953388598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124972.46544181583,
            "unit": "ns/iter",
            "extra": "iterations: 6858\ncpu: 124964.24613589948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119495.47277054712,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 119489.82220355546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 214366.00816427026,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 214349.65363681252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1755277.4661654318,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1755136.8421052657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1380354.6320474003,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380272.9970326403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1375840.8035449937,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1375773.264401773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1340047.9798560778,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1339945.179856119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 750129.8678484989,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 750087.3489121662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1315779.9532577768,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1315692.6345608993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6091547.130718859,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6091160.130718953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2851762.4573171167,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2851628.963414615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24706.960087691066,
            "unit": "ns/iter",
            "extra": "iterations: 33298\ncpu: 24705.808156646046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126847.37500000396,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 126840.96403301922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96441.95067011628,
            "unit": "ns/iter",
            "extra": "iterations: 8879\ncpu: 96437.33528550554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97195.43002257487,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 97195.18058690756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90953.02983152927,
            "unit": "ns/iter",
            "extra": "iterations: 9319\ncpu: 90951.71155703436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180840.2850301892,
            "unit": "ns/iter",
            "extra": "iterations: 4803\ncpu: 180831.37622319395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1735133.0391791316,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735009.8880597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1346811.768786142,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1346763.150289014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1347021.5942029294,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1346953.0434782528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1316498.6260623275,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1316420.963172804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713967.3897002514,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 713918.0630284426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1302556.6270948856,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1302446.0893854764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2637.856737450224,
            "unit": "ns/iter",
            "extra": "iterations: 266399\ncpu: 2637.700216592412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17600.08188236302,
            "unit": "ns/iter",
            "extra": "iterations: 39801\ncpu: 17599.386950076572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12606.948850948274,
            "unit": "ns/iter",
            "extra": "iterations: 55524\ncpu: 12606.669188098904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13016.324935904679,
            "unit": "ns/iter",
            "extra": "iterations: 53826\ncpu: 13015.641139969552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10230.166877719783,
            "unit": "ns/iter",
            "extra": "iterations: 68703\ncpu: 10229.612971777056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64034.34068448017,
            "unit": "ns/iter",
            "extra": "iterations: 10928\ncpu: 64030.17020497783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112065.15001601208,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 112059.57412744222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28789.84840644203,
            "unit": "ns/iter",
            "extra": "iterations: 24348\ncpu: 28787.25562674567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28451.659229454282,
            "unit": "ns/iter",
            "extra": "iterations: 24606\ncpu: 28450.170690075374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28264.644705504288,
            "unit": "ns/iter",
            "extra": "iterations: 24771\ncpu: 28262.976868111757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55574.95161034832,
            "unit": "ns/iter",
            "extra": "iterations: 12606\ncpu: 55573.917182294324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53370.81976053331,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 53367.08429149183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21370.018631074396,
            "unit": "ns/iter",
            "extra": "iterations: 32741\ncpu: 21368.44323630929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106319.44225223115,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 106312.99134922017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86129.15739600403,
            "unit": "ns/iter",
            "extra": "iterations: 8126\ncpu: 86123.01255230127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86311.87472201778,
            "unit": "ns/iter",
            "extra": "iterations: 8094\ncpu: 86308.87076847008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85597.80046544972,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85595.99461048433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126733.27689242939,
            "unit": "ns/iter",
            "extra": "iterations: 5522\ncpu: 126725.80586743858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510450.74546771194,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 510422.91515590256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 415780.12932066334,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 415744.04052443645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 417705.0382318179,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 417688.11230585404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408728.5718440932,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 408720.1279813884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260957.71780514022,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 260956.77491601201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 407364.149505537,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407352.7050610778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22058.877630211,
            "unit": "ns/iter",
            "extra": "iterations: 31699\ncpu: 22057.651660935833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109487.92361872154,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 109485.60025043134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90953.51403326685,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 90944.59459459619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90657.43269853522,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 90653.37478947942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90493.72953782722,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 90482.53292021774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129046.94855662018,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 129043.68985936405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 514124.63909228577,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 514110.5417276722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 418613.9969879397,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 418605.9638554233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418358.00776587636,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418303.1660692921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412092.44870282244,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412066.9221698093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261227.86584454725,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 261196.48729446647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 411023.8747795694,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411006.1728395085 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}