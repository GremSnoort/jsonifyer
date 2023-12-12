window.BENCHMARK_DATA = {
  "lastUpdate": 1702398834480,
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
      }
    ]
  }
}