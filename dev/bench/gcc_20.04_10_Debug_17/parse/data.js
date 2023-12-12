window.BENCHMARK_DATA = {
  "lastUpdate": 1702418402297,
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
      }
    ]
  }
}