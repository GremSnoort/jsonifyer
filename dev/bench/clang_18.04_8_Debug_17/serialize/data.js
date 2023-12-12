window.BENCHMARK_DATA = {
  "lastUpdate": 1702392464807,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-8 18.04 Debug c++-17": [
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
        "date": 1702392463121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9688.824259512256,
            "unit": "ns/iter",
            "extra": "iterations: 72351\ncpu: 9688.653923235339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 110469.02404965137,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110467.23558313938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 213069.97353726425,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 213059.96601116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 322350.382621405,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 322342.57028112456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 412229.17831326043,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 412211.1807228917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 514174.59588238294,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 514147.2352941179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 611656.1745249974,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 611633.1456720622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 571417.9179999519,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571412.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 652654.2830000608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652618.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7650.5405287210715,
            "unit": "ns/iter",
            "extra": "iterations: 91466\ncpu: 7650.23396671987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6323.655619206006,
            "unit": "ns/iter",
            "extra": "iterations: 110674\ncpu: 6323.466216094126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6144.052773816369,
            "unit": "ns/iter",
            "extra": "iterations: 113598\ncpu: 6143.984929312127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6563.347127210627,
            "unit": "ns/iter",
            "extra": "iterations: 109928\ncpu: 6562.875700458493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 11166.113891106295,
            "unit": "ns/iter",
            "extra": "iterations: 62630\ncpu: 11165.203576560762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55737.63852740565,
            "unit": "ns/iter",
            "extra": "iterations: 14831\ncpu: 55734.178410086904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219500.1997426078,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219490.52767052743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 184212.63693169164,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 184201.3359189827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 181494.9419175719,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 181487.50800768676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181239.79656707772,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 181232.42212333178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 430746.1568530809,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 430742.60267194506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3431781.536496568,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3431551.459854022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2812151.933933986,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2812087.3873873902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2803712.7597598783,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2803630.3303303286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2840855.2454545153,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2840837.8787878756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1682975.202898489,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682942.7536231836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2730113.538235494,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2730037.352941175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11542327.82608643,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11542013.043478258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6671970.8071429655,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6671769.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13922416.42307623,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13921978.20512819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53269.20585195101,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 53267.56878956188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 223945.96576953836,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 223938.98615103168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 181007.94619782997,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 181004.36348231268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181428.06451615132,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 181422.11066011558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 190464.78587294315,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 190461.48378498523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 422791.41927710624,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 422777.5903614448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3444118.7195571694,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3444008.856088582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2822908.9939575884,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2822827.4924471295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2815597.2960726474,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2815522.0543806646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2857393.8532110406,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2857368.5015290496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1681081.469314039,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681026.714801439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2752020.1147059626,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2751981.1764705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11681883.902173487,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11681223.913043473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5038826.830000289,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5038514.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52022.78098911673,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 52020.01644320784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 227857.61422126406,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 227845.66197930594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 181533.36755951133,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 181524.55357142922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 178457.3115062938,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 178449.47698744666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183207.0643425798,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 183199.76328814207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 413010.90090089414,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412988.66761498665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3448315.9926198437,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3448242.8044280414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2834065.2054380663,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2833893.6555891293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2798696.464071918,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2798579.9401197643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2848483.8079268048,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2848339.9390243874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1698194.5309089497,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1698127.0909090799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2748655.8872402324,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748552.5222551823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3364.825655791897,
            "unit": "ns/iter",
            "extra": "iterations: 208031\ncpu: 3364.673534232902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 24191.922561481108,
            "unit": "ns/iter",
            "extra": "iterations: 28952\ncpu: 24191.07833655719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18444.50714210832,
            "unit": "ns/iter",
            "extra": "iterations: 38084\ncpu: 18443.304274761067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18436.56138637534,
            "unit": "ns/iter",
            "extra": "iterations: 37883\ncpu: 18436.04519177464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13956.604944420778,
            "unit": "ns/iter",
            "extra": "iterations: 50198\ncpu: 13955.812980596891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 100755.0025836132,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 100748.94502655347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 221768.83898572254,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 221757.93977812922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 54574.642946120504,
            "unit": "ns/iter",
            "extra": "iterations: 12844\ncpu: 54573.1469947053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 54346.403671851396,
            "unit": "ns/iter",
            "extra": "iterations: 12909\ncpu: 54343.210163452706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 55078.91216747923,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 55075.5312450808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 114806.11236321868,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 114800.8982524924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 102140.41899195874,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102139.51789627486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28812.089434931037,
            "unit": "ns/iter",
            "extra": "iterations: 24174\ncpu: 28810.37064614828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144679.65451174002,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 144678.32715286288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 117474.74247265123,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117468.84777123571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 117808.38889823512,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117803.59966358468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 117369.85427135884,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117362.04355108846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 217085.32807669727,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 217072.3562152166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 942190.0349461648,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 942134.2741935521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 792811.0962627184,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 792798.8674971727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 786827.2542372206,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 786795.3672316462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 799847.8465063096,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 799793.1271477655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 509239.56477438996,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509213.10043668764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 775555.8481153608,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 775523.3924611927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29069.78107491574,
            "unit": "ns/iter",
            "extra": "iterations: 24095\ncpu: 29068.68229923266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143806.3319655169,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 143805.0266721364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 117166.67019134144,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 117164.0819066797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115563.79016013605,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 115559.13818722083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 116937.44689011727,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 116930.84875771149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 218077.94183515816,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 218064.0746500779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 932377.6764313576,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932326.7643142493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 791874.3740113104,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 791852.8813559271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 784630.1883407991,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 784632.5112107712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 801290.7908045204,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 801258.2758620619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 507856.9880952429,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 507827.9761904807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 771641.6865342163,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 771608.388520961 ns\nthreads: 1"
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
        "date": 1702392463121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9688.824259512256,
            "unit": "ns/iter",
            "extra": "iterations: 72351\ncpu: 9688.653923235339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 110469.02404965137,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110467.23558313938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 213069.97353726425,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 213059.96601116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 322350.382621405,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 322342.57028112456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 412229.17831326043,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 412211.1807228917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 514174.59588238294,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 514147.2352941179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 611656.1745249974,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 611633.1456720622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 571417.9179999519,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571412.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 652654.2830000608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652618.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7650.5405287210715,
            "unit": "ns/iter",
            "extra": "iterations: 91466\ncpu: 7650.23396671987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6323.655619206006,
            "unit": "ns/iter",
            "extra": "iterations: 110674\ncpu: 6323.466216094126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6144.052773816369,
            "unit": "ns/iter",
            "extra": "iterations: 113598\ncpu: 6143.984929312127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6563.347127210627,
            "unit": "ns/iter",
            "extra": "iterations: 109928\ncpu: 6562.875700458493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 11166.113891106295,
            "unit": "ns/iter",
            "extra": "iterations: 62630\ncpu: 11165.203576560762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55737.63852740565,
            "unit": "ns/iter",
            "extra": "iterations: 14831\ncpu: 55734.178410086904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219500.1997426078,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219490.52767052743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 184212.63693169164,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 184201.3359189827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 181494.9419175719,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 181487.50800768676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181239.79656707772,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 181232.42212333178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 430746.1568530809,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 430742.60267194506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3431781.536496568,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3431551.459854022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2812151.933933986,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2812087.3873873902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2803712.7597598783,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2803630.3303303286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2840855.2454545153,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2840837.8787878756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1682975.202898489,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682942.7536231836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2730113.538235494,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2730037.352941175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11542327.82608643,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11542013.043478258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6671970.8071429655,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6671769.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13922416.42307623,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13921978.20512819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53269.20585195101,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 53267.56878956188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 223945.96576953836,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 223938.98615103168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 181007.94619782997,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 181004.36348231268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181428.06451615132,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 181422.11066011558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 190464.78587294315,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 190461.48378498523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 422791.41927710624,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 422777.5903614448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3444118.7195571694,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3444008.856088582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2822908.9939575884,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2822827.4924471295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2815597.2960726474,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2815522.0543806646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2857393.8532110406,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2857368.5015290496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1681081.469314039,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681026.714801439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2752020.1147059626,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2751981.1764705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11681883.902173487,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11681223.913043473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5038826.830000289,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5038514.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52022.78098911673,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 52020.01644320784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 227857.61422126406,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 227845.66197930594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 181533.36755951133,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 181524.55357142922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 178457.3115062938,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 178449.47698744666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183207.0643425798,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 183199.76328814207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 413010.90090089414,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412988.66761498665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3448315.9926198437,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3448242.8044280414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2834065.2054380663,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2833893.6555891293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2798696.464071918,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2798579.9401197643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2848483.8079268048,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2848339.9390243874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1698194.5309089497,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1698127.0909090799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2748655.8872402324,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748552.5222551823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3364.825655791897,
            "unit": "ns/iter",
            "extra": "iterations: 208031\ncpu: 3364.673534232902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 24191.922561481108,
            "unit": "ns/iter",
            "extra": "iterations: 28952\ncpu: 24191.07833655719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18444.50714210832,
            "unit": "ns/iter",
            "extra": "iterations: 38084\ncpu: 18443.304274761067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18436.56138637534,
            "unit": "ns/iter",
            "extra": "iterations: 37883\ncpu: 18436.04519177464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13956.604944420778,
            "unit": "ns/iter",
            "extra": "iterations: 50198\ncpu: 13955.812980596891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 100755.0025836132,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 100748.94502655347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 221768.83898572254,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 221757.93977812922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 54574.642946120504,
            "unit": "ns/iter",
            "extra": "iterations: 12844\ncpu: 54573.1469947053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 54346.403671851396,
            "unit": "ns/iter",
            "extra": "iterations: 12909\ncpu: 54343.210163452706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 55078.91216747923,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 55075.5312450808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 114806.11236321868,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 114800.8982524924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 102140.41899195874,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102139.51789627486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28812.089434931037,
            "unit": "ns/iter",
            "extra": "iterations: 24174\ncpu: 28810.37064614828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144679.65451174002,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 144678.32715286288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 117474.74247265123,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117468.84777123571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 117808.38889823512,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117803.59966358468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 117369.85427135884,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117362.04355108846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 217085.32807669727,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 217072.3562152166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 942190.0349461648,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 942134.2741935521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 792811.0962627184,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 792798.8674971727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 786827.2542372206,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 786795.3672316462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 799847.8465063096,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 799793.1271477655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 509239.56477438996,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509213.10043668764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 775555.8481153608,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 775523.3924611927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29069.78107491574,
            "unit": "ns/iter",
            "extra": "iterations: 24095\ncpu: 29068.68229923266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143806.3319655169,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 143805.0266721364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 117166.67019134144,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 117164.0819066797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115563.79016013605,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 115559.13818722083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 116937.44689011727,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 116930.84875771149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 218077.94183515816,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 218064.0746500779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 932377.6764313576,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932326.7643142493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 791874.3740113104,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 791852.8813559271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 784630.1883407991,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 784632.5112107712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 801290.7908045204,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 801258.2758620619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 507856.9880952429,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 507827.9761904807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 771641.6865342163,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 771608.388520961 ns\nthreads: 1"
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
        "date": 1702392463121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9688.824259512256,
            "unit": "ns/iter",
            "extra": "iterations: 72351\ncpu: 9688.653923235339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 110469.02404965137,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110467.23558313938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 213069.97353726425,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 213059.96601116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 322350.382621405,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 322342.57028112456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 412229.17831326043,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 412211.1807228917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 514174.59588238294,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 514147.2352941179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 611656.1745249974,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 611633.1456720622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 571417.9179999519,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571412.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 652654.2830000608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652618.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7650.5405287210715,
            "unit": "ns/iter",
            "extra": "iterations: 91466\ncpu: 7650.23396671987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6323.655619206006,
            "unit": "ns/iter",
            "extra": "iterations: 110674\ncpu: 6323.466216094126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6144.052773816369,
            "unit": "ns/iter",
            "extra": "iterations: 113598\ncpu: 6143.984929312127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6563.347127210627,
            "unit": "ns/iter",
            "extra": "iterations: 109928\ncpu: 6562.875700458493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 11166.113891106295,
            "unit": "ns/iter",
            "extra": "iterations: 62630\ncpu: 11165.203576560762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55737.63852740565,
            "unit": "ns/iter",
            "extra": "iterations: 14831\ncpu: 55734.178410086904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219500.1997426078,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219490.52767052743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 184212.63693169164,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 184201.3359189827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 181494.9419175719,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 181487.50800768676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181239.79656707772,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 181232.42212333178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 430746.1568530809,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 430742.60267194506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3431781.536496568,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3431551.459854022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2812151.933933986,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2812087.3873873902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2803712.7597598783,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2803630.3303303286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2840855.2454545153,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2840837.8787878756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1682975.202898489,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682942.7536231836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2730113.538235494,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2730037.352941175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11542327.82608643,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11542013.043478258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6671970.8071429655,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6671769.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13922416.42307623,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13921978.20512819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53269.20585195101,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 53267.56878956188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 223945.96576953836,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 223938.98615103168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 181007.94619782997,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 181004.36348231268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181428.06451615132,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 181422.11066011558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 190464.78587294315,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 190461.48378498523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 422791.41927710624,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 422777.5903614448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3444118.7195571694,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3444008.856088582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2822908.9939575884,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2822827.4924471295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2815597.2960726474,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2815522.0543806646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2857393.8532110406,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2857368.5015290496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1681081.469314039,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681026.714801439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2752020.1147059626,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2751981.1764705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11681883.902173487,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11681223.913043473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5038826.830000289,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5038514.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52022.78098911673,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 52020.01644320784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 227857.61422126406,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 227845.66197930594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 181533.36755951133,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 181524.55357142922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 178457.3115062938,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 178449.47698744666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183207.0643425798,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 183199.76328814207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 413010.90090089414,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412988.66761498665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3448315.9926198437,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3448242.8044280414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2834065.2054380663,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2833893.6555891293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2798696.464071918,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2798579.9401197643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2848483.8079268048,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2848339.9390243874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1698194.5309089497,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1698127.0909090799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2748655.8872402324,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748552.5222551823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3364.825655791897,
            "unit": "ns/iter",
            "extra": "iterations: 208031\ncpu: 3364.673534232902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 24191.922561481108,
            "unit": "ns/iter",
            "extra": "iterations: 28952\ncpu: 24191.07833655719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18444.50714210832,
            "unit": "ns/iter",
            "extra": "iterations: 38084\ncpu: 18443.304274761067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18436.56138637534,
            "unit": "ns/iter",
            "extra": "iterations: 37883\ncpu: 18436.04519177464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13956.604944420778,
            "unit": "ns/iter",
            "extra": "iterations: 50198\ncpu: 13955.812980596891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 100755.0025836132,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 100748.94502655347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 221768.83898572254,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 221757.93977812922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 54574.642946120504,
            "unit": "ns/iter",
            "extra": "iterations: 12844\ncpu: 54573.1469947053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 54346.403671851396,
            "unit": "ns/iter",
            "extra": "iterations: 12909\ncpu: 54343.210163452706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 55078.91216747923,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 55075.5312450808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 114806.11236321868,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 114800.8982524924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 102140.41899195874,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102139.51789627486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28812.089434931037,
            "unit": "ns/iter",
            "extra": "iterations: 24174\ncpu: 28810.37064614828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144679.65451174002,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 144678.32715286288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 117474.74247265123,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117468.84777123571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 117808.38889823512,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 117803.59966358468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 117369.85427135884,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117362.04355108846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 217085.32807669727,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 217072.3562152166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 942190.0349461648,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 942134.2741935521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 792811.0962627184,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 792798.8674971727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 786827.2542372206,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 786795.3672316462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 799847.8465063096,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 799793.1271477655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 509239.56477438996,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509213.10043668764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 775555.8481153608,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 775523.3924611927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29069.78107491574,
            "unit": "ns/iter",
            "extra": "iterations: 24095\ncpu: 29068.68229923266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 143806.3319655169,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 143805.0266721364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 117166.67019134144,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 117164.0819066797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115563.79016013605,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 115559.13818722083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 116937.44689011727,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 116930.84875771149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 218077.94183515816,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 218064.0746500779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 932377.6764313576,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932326.7643142493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 791874.3740113104,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 791852.8813559271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 784630.1883407991,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 784632.5112107712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 801290.7908045204,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 801258.2758620619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 507856.9880952429,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 507827.9761904807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 771641.6865342163,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 771608.388520961 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}