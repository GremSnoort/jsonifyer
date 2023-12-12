window.BENCHMARK_DATA = {
  "lastUpdate": 1702409146489,
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
      }
    ]
  }
}