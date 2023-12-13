window.BENCHMARK_DATA = {
  "lastUpdate": 1702492180734,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489571797,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8543.310164341603,
            "unit": "ns/iter",
            "extra": "iterations: 81963\ncpu: 8543.186559789174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61644.901322043785,
            "unit": "ns/iter",
            "extra": "iterations: 13691\ncpu: 61640.6763567307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114708.02738997251,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 114698.81664672251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167058.04544570908,
            "unit": "ns/iter",
            "extra": "iterations: 5149\ncpu: 167049.6989706739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 220052.26082553685,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 220028.05773613573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 270492.7739320202,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270479.6694730276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324379.4475158651,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 324371.79678744875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 376045.75540188246,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376033.8375108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 423975.21984439145,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 423970.0875486383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7080.637724950189,
            "unit": "ns/iter",
            "extra": "iterations: 97633\ncpu: 7080.1624450749305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5926.627205814285,
            "unit": "ns/iter",
            "extra": "iterations: 118607\ncpu: 5926.250558567379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5769.366456919092,
            "unit": "ns/iter",
            "extra": "iterations: 121575\ncpu: 5769.021591610111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5868.0264387526795,
            "unit": "ns/iter",
            "extra": "iterations: 118992\ncpu: 5868.033145085389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10635.569071915466,
            "unit": "ns/iter",
            "extra": "iterations: 65953\ncpu: 10635.573817718665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29025.552871597985,
            "unit": "ns/iter",
            "extra": "iterations: 28068\ncpu: 29025.163887701317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149360.42069086767,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 149348.88967218896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118334.86616687241,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 118330.39011523005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117679.3062068884,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 117675.95862068972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113443.23834886425,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 113436.45805592534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378637.0031974207,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 378622.18225419713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2036408.1150442425,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2035051.5486725667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1590143.1030927275,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1590113.0584192416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1582197.08376054,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1582135.042735043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1589081.9305085088,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1589037.6271186436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 866823.630495836,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 866763.704396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1541236.030050091,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1541168.6143572668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37398.5690184782,
            "unit": "ns/iter",
            "extra": "iterations: 21813\ncpu: 37396.28203364973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 199409.4694770736,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 199398.31835982495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153991.0708437293,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 153979.7614809543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143666.15098761735,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 143656.00937395397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137704.741151869,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 137696.3481338481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 343119.78150929563,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 343085.61833267607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2060514.276169056,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2060368.8195991137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1651853.486678507,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651686.5008880952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1614510.2243478463,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1614392.17391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1622091.3449478124,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622078.2229965099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 893869.8604427052,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 893857.8440808469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1580945.0711864913,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1580834.2372881444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5502652.299999226,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5502381.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3390160.8472727025,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3389966.181818187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27323.345418766192,
            "unit": "ns/iter",
            "extra": "iterations: 29981\ncpu: 27322.664354090884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146654.59527882468,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 146652.5829627099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111089.43299637135,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 111082.28356661511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113565.37380574239,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113558.08121019113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109279.82643251946,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 109273.83668760392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289577.0213832242,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 289567.8917474104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2044813.1494506695,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2044761.3186813118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1588320.0547944254,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1588282.5342465758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1598131.029109517,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1598033.0479451967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1570829.1491526295,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1570790.338983058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 849562.2701465455,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 849526.7399267372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1546033.9850993487,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545967.3841059604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3212.0155364786265,
            "unit": "ns/iter",
            "extra": "iterations: 213755\ncpu: 3211.8691960422198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21136.323621666397,
            "unit": "ns/iter",
            "extra": "iterations: 33156\ncpu: 21134.376885028418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16849.684313253518,
            "unit": "ns/iter",
            "extra": "iterations: 41500\ncpu: 16849.13253012045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17002.09753366073,
            "unit": "ns/iter",
            "extra": "iterations: 41073\ncpu: 17001.20030190158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12279.275320743369,
            "unit": "ns/iter",
            "extra": "iterations: 56821\ncpu: 12279.306946375542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103484.70202392254,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 103480.89821243861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141544.18540235373,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 141535.20016174662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35695.36646464808,
            "unit": "ns/iter",
            "extra": "iterations: 19800\ncpu: 35693.39898989895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34388.59842944854,
            "unit": "ns/iter",
            "extra": "iterations: 20375\ncpu: 34387.411042945045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34435.46031120798,
            "unit": "ns/iter",
            "extra": "iterations: 20308\ncpu: 34434.808942288604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67667.88691453091,
            "unit": "ns/iter",
            "extra": "iterations: 10355\ncpu: 67663.901496861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63791.087603159125,
            "unit": "ns/iter",
            "extra": "iterations: 11027\ncpu: 63787.48526344424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23623.844083119147,
            "unit": "ns/iter",
            "extra": "iterations: 29644\ncpu: 23622.136014032985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120527.78313050915,
            "unit": "ns/iter",
            "extra": "iterations: 5916\ncpu: 120522.3968897897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95310.66097759941,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 95299.89077007123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96359.27585259284,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96354.22167216602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94976.1069336642,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 94966.50320119933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176466.6080161412,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176449.6849004281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 603520.1120689517,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 603478.6206896569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 501407.79369628575,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 501357.5931232093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 496643.0647687291,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 496617.5088967968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 494375.30600708304,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 494331.73144875414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 303191.24750758556,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303175.9861291721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 484111.8193103441,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 484080.7586206916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23510.183277997417,
            "unit": "ns/iter",
            "extra": "iterations: 29518\ncpu: 23508.753980622365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116706.9718428637,
            "unit": "ns/iter",
            "extra": "iterations: 5931\ncpu: 116702.0064070158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95169.65784113402,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 95160.71961982318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95486.12259911305,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95482.22313036387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95078.9461621891,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 95072.40303769922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 176387.8479679016,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 176374.66131459892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 597433.367884444,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 597383.6873406892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 488911.3401265405,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 488865.0035137091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 495116.43847237097,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495100.4243281512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485155.74930555595,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485099.72222221777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308661.3800705213,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 308618.8271604909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482973.3526569364,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482918.84057971137 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489571797,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8543.310164341603,
            "unit": "ns/iter",
            "extra": "iterations: 81963\ncpu: 8543.186559789174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61644.901322043785,
            "unit": "ns/iter",
            "extra": "iterations: 13691\ncpu: 61640.6763567307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114708.02738997251,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 114698.81664672251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167058.04544570908,
            "unit": "ns/iter",
            "extra": "iterations: 5149\ncpu: 167049.6989706739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 220052.26082553685,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 220028.05773613573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 270492.7739320202,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270479.6694730276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324379.4475158651,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 324371.79678744875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 376045.75540188246,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376033.8375108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 423975.21984439145,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 423970.0875486383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7080.637724950189,
            "unit": "ns/iter",
            "extra": "iterations: 97633\ncpu: 7080.1624450749305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5926.627205814285,
            "unit": "ns/iter",
            "extra": "iterations: 118607\ncpu: 5926.250558567379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5769.366456919092,
            "unit": "ns/iter",
            "extra": "iterations: 121575\ncpu: 5769.021591610111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5868.0264387526795,
            "unit": "ns/iter",
            "extra": "iterations: 118992\ncpu: 5868.033145085389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10635.569071915466,
            "unit": "ns/iter",
            "extra": "iterations: 65953\ncpu: 10635.573817718665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29025.552871597985,
            "unit": "ns/iter",
            "extra": "iterations: 28068\ncpu: 29025.163887701317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149360.42069086767,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 149348.88967218896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118334.86616687241,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 118330.39011523005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117679.3062068884,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 117675.95862068972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113443.23834886425,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 113436.45805592534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378637.0031974207,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 378622.18225419713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2036408.1150442425,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2035051.5486725667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1590143.1030927275,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1590113.0584192416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1582197.08376054,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1582135.042735043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1589081.9305085088,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1589037.6271186436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 866823.630495836,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 866763.704396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1541236.030050091,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1541168.6143572668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37398.5690184782,
            "unit": "ns/iter",
            "extra": "iterations: 21813\ncpu: 37396.28203364973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 199409.4694770736,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 199398.31835982495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153991.0708437293,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 153979.7614809543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143666.15098761735,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 143656.00937395397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137704.741151869,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 137696.3481338481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 343119.78150929563,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 343085.61833267607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2060514.276169056,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2060368.8195991137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1651853.486678507,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651686.5008880952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1614510.2243478463,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1614392.17391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1622091.3449478124,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622078.2229965099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 893869.8604427052,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 893857.8440808469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1580945.0711864913,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1580834.2372881444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5502652.299999226,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5502381.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3390160.8472727025,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3389966.181818187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27323.345418766192,
            "unit": "ns/iter",
            "extra": "iterations: 29981\ncpu: 27322.664354090884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146654.59527882468,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 146652.5829627099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111089.43299637135,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 111082.28356661511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113565.37380574239,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113558.08121019113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109279.82643251946,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 109273.83668760392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289577.0213832242,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 289567.8917474104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2044813.1494506695,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2044761.3186813118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1588320.0547944254,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1588282.5342465758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1598131.029109517,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1598033.0479451967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1570829.1491526295,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1570790.338983058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 849562.2701465455,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 849526.7399267372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1546033.9850993487,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545967.3841059604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3212.0155364786265,
            "unit": "ns/iter",
            "extra": "iterations: 213755\ncpu: 3211.8691960422198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21136.323621666397,
            "unit": "ns/iter",
            "extra": "iterations: 33156\ncpu: 21134.376885028418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16849.684313253518,
            "unit": "ns/iter",
            "extra": "iterations: 41500\ncpu: 16849.13253012045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17002.09753366073,
            "unit": "ns/iter",
            "extra": "iterations: 41073\ncpu: 17001.20030190158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12279.275320743369,
            "unit": "ns/iter",
            "extra": "iterations: 56821\ncpu: 12279.306946375542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103484.70202392254,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 103480.89821243861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141544.18540235373,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 141535.20016174662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35695.36646464808,
            "unit": "ns/iter",
            "extra": "iterations: 19800\ncpu: 35693.39898989895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34388.59842944854,
            "unit": "ns/iter",
            "extra": "iterations: 20375\ncpu: 34387.411042945045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34435.46031120798,
            "unit": "ns/iter",
            "extra": "iterations: 20308\ncpu: 34434.808942288604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67667.88691453091,
            "unit": "ns/iter",
            "extra": "iterations: 10355\ncpu: 67663.901496861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63791.087603159125,
            "unit": "ns/iter",
            "extra": "iterations: 11027\ncpu: 63787.48526344424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23623.844083119147,
            "unit": "ns/iter",
            "extra": "iterations: 29644\ncpu: 23622.136014032985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120527.78313050915,
            "unit": "ns/iter",
            "extra": "iterations: 5916\ncpu: 120522.3968897897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95310.66097759941,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 95299.89077007123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96359.27585259284,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96354.22167216602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94976.1069336642,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 94966.50320119933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176466.6080161412,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176449.6849004281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 603520.1120689517,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 603478.6206896569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 501407.79369628575,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 501357.5931232093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 496643.0647687291,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 496617.5088967968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 494375.30600708304,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 494331.73144875414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 303191.24750758556,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303175.9861291721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 484111.8193103441,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 484080.7586206916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23510.183277997417,
            "unit": "ns/iter",
            "extra": "iterations: 29518\ncpu: 23508.753980622365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116706.9718428637,
            "unit": "ns/iter",
            "extra": "iterations: 5931\ncpu: 116702.0064070158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95169.65784113402,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 95160.71961982318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95486.12259911305,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95482.22313036387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95078.9461621891,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 95072.40303769922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 176387.8479679016,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 176374.66131459892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 597433.367884444,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 597383.6873406892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 488911.3401265405,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 488865.0035137091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 495116.43847237097,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495100.4243281512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485155.74930555595,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485099.72222221777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308661.3800705213,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 308618.8271604909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 482973.3526569364,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482918.84057971137 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492179356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8636.549258141353,
            "unit": "ns/iter",
            "extra": "iterations: 81215\ncpu: 8636.128793942007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 64200.8796213454,
            "unit": "ns/iter",
            "extra": "iterations: 13416\ncpu: 64200.78264758497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115626.43034557349,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 115620.6938444924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168339.30204876838,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 168336.81951219513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 221030.26205663313,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 221024.1132942076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273693.5461999447,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 273687.00725323247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 329144.76060605666,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 329136.6287878789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 381073.2370953536,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 381059.4925634294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 433233.5169323074,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 433220.2689243029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7067.730849825417,
            "unit": "ns/iter",
            "extra": "iterations: 98785\ncpu: 7067.517335627874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5875.732579641588,
            "unit": "ns/iter",
            "extra": "iterations: 118970\ncpu: 5875.591325544249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5865.655079832334,
            "unit": "ns/iter",
            "extra": "iterations: 119187\ncpu: 5865.397232919687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5822.861680175237,
            "unit": "ns/iter",
            "extra": "iterations: 121154\ncpu: 5822.6595902735335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10498.753384362355,
            "unit": "ns/iter",
            "extra": "iterations: 66630\ncpu: 10498.509680324165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29444.32599645203,
            "unit": "ns/iter",
            "extra": "iterations: 27623\ncpu: 29443.0764218224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149916.89894735938,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 149913.0877192983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115400.97771474598,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 115397.39330091821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116495.7323232211,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 116492.51979251968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111658.19264725687,
            "unit": "ns/iter",
            "extra": "iterations: 7589\ncpu: 111654.40769534861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 372165.55612646946,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 372149.96047430823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2016708.5733042168,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2016611.378555792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1585887.3104631242,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1585823.6706689496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1609790.4236112016,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1609726.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1569680.7094592778,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1569598.310810809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 874285.3721590627,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 874242.9924242437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1541842.188019892,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1541768.5524126438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38424.84189907619,
            "unit": "ns/iter",
            "extra": "iterations: 21442\ncpu: 38423.76643969773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187234.7067538129,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 187229.9782135075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146996.71843499283,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 146990.96189988038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140617.4588292711,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 140610.38643404545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139121.4891570152,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 139116.04435023587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 332620.80998079496,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 332613.51247600775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2071933.253897565,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2071861.9153674901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1639192.6666666435,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1639118.694885371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1650746.3327433977,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650742.4778760988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1592722.7350426293,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1592654.358974365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 900688.0165368896,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 900654.8638132277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1582535.1465076152,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1582439.0119250447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5524484.899999606,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5524520.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3420558.379561754,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3420296.350364958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27668.068391993595,
            "unit": "ns/iter",
            "extra": "iterations: 29521\ncpu: 27667.348667050606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142512.5053191542,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 142506.53257978728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108273.91893258684,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 108269.90008852952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113973.22916390227,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 113966.75528379688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109726.79402333594,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 109723.66294728762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 286581.63356275694,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 286572.17305801343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2043409.1685143749,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2043351.2195122074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1585322.5195911252,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1585279.2163543461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1621638.879790872,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1621571.951219507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1559822.9816054753,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1559770.5685618725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 860942.8351852094,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 860916.7592592576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1533834.1854304352,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1533767.0529801256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3189.5946410468027,
            "unit": "ns/iter",
            "extra": "iterations: 219931\ncpu: 3189.531716765694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20016.49373584442,
            "unit": "ns/iter",
            "extra": "iterations: 34881\ncpu: 20015.598750035824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16778.465972221737,
            "unit": "ns/iter",
            "extra": "iterations: 41760\ncpu: 16777.56226053643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16242.360236768413,
            "unit": "ns/iter",
            "extra": "iterations: 43080\ncpu: 16241.578458681515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12277.184222049016,
            "unit": "ns/iter",
            "extra": "iterations: 57105\ncpu: 12276.585237720057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102194.06324512727,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102193.61733061908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141022.82842741482,
            "unit": "ns/iter",
            "extra": "iterations: 4960\ncpu: 141020.44354838794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34653.13553858095,
            "unit": "ns/iter",
            "extra": "iterations: 20164\ncpu: 34652.90121007733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34191.01275597289,
            "unit": "ns/iter",
            "extra": "iterations: 20461\ncpu: 34190.108010361175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33851.43134040194,
            "unit": "ns/iter",
            "extra": "iterations: 20740\ncpu: 33850.178399228345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68339.07971013474,
            "unit": "ns/iter",
            "extra": "iterations: 10212\ncpu: 68338.70936153566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63023.51526406501,
            "unit": "ns/iter",
            "extra": "iterations: 11039\ncpu: 63020.73557387452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23070.302967497053,
            "unit": "ns/iter",
            "extra": "iterations: 30396\ncpu: 23069.032109488413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118612.36389781878,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 118603.4681103018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95824.63407286226,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 95820.35058888019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94686.70994850702,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94686.45974518785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94005.17146314909,
            "unit": "ns/iter",
            "extra": "iterations: 7436\ncpu: 94004.58579881513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172060.33842363657,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 172056.33004926195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596944.2446898525,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 596913.5938827634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 489049.92992294376,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 489030.90399439674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 494879.45968882856,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494910.7496463918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475877.5605958051,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 475868.8557887628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304237.07220531243,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 304222.1835580649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 477337.4029749665,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 477305.3414469278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23507.33648779872,
            "unit": "ns/iter",
            "extra": "iterations: 29799\ncpu: 23506.315648176038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119213.80730050932,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 119208.4719864171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94132.43096965816,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 94129.35804458726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95097.77633183841,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 95098.38687813522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95353.36918883296,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 95348.12542604074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170151.42397663117,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 170144.8586744631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 598043.6339590761,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 598022.0989761082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 485277.8713490765,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 485260.8484005638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 496489.11016345397,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496486.9936034088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 477534.1283459534,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 477517.29581332253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303514.82503244723,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 303501.429190123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 477627.2999999467,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477611.4965986344 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}