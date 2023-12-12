window.BENCHMARK_DATA = {
  "lastUpdate": 1702394223507,
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
        "date": 1702394223117,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9373.757254561591,
            "unit": "ns/iter",
            "extra": "iterations: 74815\ncpu: 9372.501503709149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106998.33205207447,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 106992.99442033477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 204802.20899719038,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 204793.72071227746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 305627.72009906877,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 305619.4621372967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 396163.97770551627,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 396147.8866697632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 492863.4397283768,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 492837.9173740803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 590427.2210169839,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 590400.1355932204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 551056.9169999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551022.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 628178.0760000402,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628165.6000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7472.796758450328,
            "unit": "ns/iter",
            "extra": "iterations: 93844\ncpu: 7472.75904692895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6064.771189091185,
            "unit": "ns/iter",
            "extra": "iterations: 115130\ncpu: 6064.443672370364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6072.772276624747,
            "unit": "ns/iter",
            "extra": "iterations: 114986\ncpu: 6072.457516567237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6291.384803371107,
            "unit": "ns/iter",
            "extra": "iterations: 111301\ncpu: 6291.22290006379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10869.290407724524,
            "unit": "ns/iter",
            "extra": "iterations: 64406\ncpu: 10869.099152252902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55895.79645597195,
            "unit": "ns/iter",
            "extra": "iterations: 14729\ncpu: 55893.31930205724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 229828.75308313387,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 229817.4262734586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 186330.16409138203,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 186325.20130576746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 183045.14000857537,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 183035.89193824984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 183029.80465216108,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 183022.4208485893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 409700.25199810235,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 409678.3262811466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3373559.805755403,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3373440.287769781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2722054.5889212303,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2721932.944606416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2731409.078947173,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2731271.0526315873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2749644.6205883357,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2749600.294117643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1638976.332743465,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1638903.8938053038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2655874.794871635,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2655779.4871794884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11257838.414893923,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11257035.106383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6478145.853147144,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6477988.111888121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13284554.349999666,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13284298.749999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 56335.54362142639,
            "unit": "ns/iter",
            "extra": "iterations: 14729\ncpu: 56334.56446466158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 226861.77288405955,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 226852.5603608395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 183612.07289638722,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 183606.98680510404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 182306.52898394165,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 182301.4973262037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 190168.33734671978,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 190160.5351170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 410410.54237286875,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 410400.3766478336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3364918.6498194844,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364738.6281588427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2751407.542772658,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2751270.2064896687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2748486.241176472,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2748390.5882353014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2790676.607142743,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2790561.904761901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1650621.428063894,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1650591.4742451122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2675022.5099716345,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2674824.21652422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11475109.9893612,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11474681.914893636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6614660.042553347,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6614331.914893633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 53473.38236055583,
            "unit": "ns/iter",
            "extra": "iterations: 15454\ncpu: 53469.46421638392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 236239.97353913894,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 236225.22050716684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 187591.5536301822,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 187578.04343057744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 185584.36937134102,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 185577.42005655816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183352.65751352996,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 183347.02702702698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 417076.5178486203,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 417048.45311756147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3375161.740072496,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3375008.6642599455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2757904.9442815534,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2757775.9530791827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2740906.523391999,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2740804.0935672624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2775443.8343192535,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2775291.715976337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1648966.398230122,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1648878.761061954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2678571.810888323,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2678561.3180515724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3364.2707814237137,
            "unit": "ns/iter",
            "extra": "iterations: 208696\ncpu: 3364.0625598957317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23524.531256315262,
            "unit": "ns/iter",
            "extra": "iterations: 29690\ncpu: 23524.294375210422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17585.79569028403,
            "unit": "ns/iter",
            "extra": "iterations: 39817\ncpu: 17585.905517743664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17625.028116899077,
            "unit": "ns/iter",
            "extra": "iterations: 39727\ncpu: 17625.146625720507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13640.727719501252,
            "unit": "ns/iter",
            "extra": "iterations: 51480\ncpu: 13639.947552447578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 92987.64584442764,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 92979.781566328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 216666.6845035677,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 216657.59356634942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52719.12629274429,
            "unit": "ns/iter",
            "extra": "iterations: 13247\ncpu: 52716.76606024038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52960.09588937976,
            "unit": "ns/iter",
            "extra": "iterations: 13234\ncpu: 52960.44279885158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53210.59587581404,
            "unit": "ns/iter",
            "extra": "iterations: 13142\ncpu: 53208.59077765852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 113013.4493927,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 113007.40080971563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 99654.78652481662,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 99648.25531914823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28549.018662646962,
            "unit": "ns/iter",
            "extra": "iterations: 24541\ncpu: 28547.337109326854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 142034.6767512511,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 142029.0152284255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 114037.80136651029,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 114035.25296892847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 115492.71283062983,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 115490.99720716404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 115850.37953904795,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 115845.97910794374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 210150.29256594248,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 210139.38848920903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 908284.2308689744,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908250.9727626411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 766132.5203072898,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 766085.9495060268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 774647.5603543597,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 774644.0753045403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 778802.4760844873,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 778776.4182424898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 490675.7882188177,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 490672.23001402867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 753447.1883745623,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 753443.4876210866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28649.95651461875,
            "unit": "ns/iter",
            "extra": "iterations: 24422\ncpu: 28649.639669150638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 139698.81095122502,
            "unit": "ns/iter",
            "extra": "iterations: 5004\ncpu: 139693.60511590698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 113277.09479675417,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 113271.21951219525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 115224.13746099493,
            "unit": "ns/iter",
            "extra": "iterations: 6089\ncpu: 115220.80801445364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 116085.6953927585,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 116077.94166390311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 209388.53028019943,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 209379.72280807266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 909077.7610389843,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909068.0519480469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 765589.4857142621,
            "unit": "ns/iter",
            "extra": "iterations: 910\ncpu: 765538.9010989086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 768646.4762430795,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 768616.3535911463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 772029.388520997,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 771991.2803531871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 487602.1184302535,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 487573.37070778274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 753965.226049532,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 753916.0387513497 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}