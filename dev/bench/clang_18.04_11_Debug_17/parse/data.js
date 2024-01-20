window.BENCHMARK_DATA = {
  "lastUpdate": 1705772691196,
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
        "date": 1702503234463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8396.165167719506,
            "unit": "ns/iter",
            "extra": "iterations: 83503\ncpu: 8396.106726704431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61264.903267975205,
            "unit": "ns/iter",
            "extra": "iterations: 13770\ncpu: 61264.35003631082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112805.21273819002,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 112801.68363351605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 163477.45577325075,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 163472.83621837548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 215133.49291574777,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 215131.66790952027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 265408.45384851337,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 265397.6694265563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 315950.69989045063,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 315939.53997809417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 367782.90809442394,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 367762.5210792578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 418252.8317307707,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 418229.567307693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7119.319716168373,
            "unit": "ns/iter",
            "extra": "iterations: 98650\ncpu: 7119.252914343651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5825.344161981708,
            "unit": "ns/iter",
            "extra": "iterations: 120606\ncpu: 5825.279836824045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5790.313148387482,
            "unit": "ns/iter",
            "extra": "iterations: 120684\ncpu: 5790.156938782275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5801.327205244549,
            "unit": "ns/iter",
            "extra": "iterations: 120973\ncpu: 5801.353194514478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10072.668948852133,
            "unit": "ns/iter",
            "extra": "iterations: 69524\ncpu: 10072.248432196071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29949.00095381282,
            "unit": "ns/iter",
            "extra": "iterations: 27259\ncpu: 29949.037015297672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142960.97798688847,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 142956.46109897492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113987.98767911273,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 113987.90678987572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114651.51938610311,
            "unit": "ns/iter",
            "extra": "iterations: 7428\ncpu: 114646.00161550894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108121.12876572393,
            "unit": "ns/iter",
            "extra": "iterations: 7867\ncpu: 108121.39316130645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 369627.63013696234,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 369618.31702543976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1973981.7063828981,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1973971.4893616983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1545964.3866667724,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1545908.1666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1563764.1307301235,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1563748.8964346352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1532795.3151815545,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1532774.7524752475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 859973.5362453967,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 859960.9665427483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1515371.1307189295,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1515320.9150326797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38093.44079556104,
            "unit": "ns/iter",
            "extra": "iterations: 21620\ncpu: 38093.21461609629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182211.3634826647,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 182204.07861369438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 144109.40514791937,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 144103.45980277454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143816.01930501222,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 143807.722007722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135545.06110848664,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 135537.1545870834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338391.49980478175,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 338369.7383834454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2027600.4415584544,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2027446.5367965347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1630665.442307658,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1630586.5384615406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1623447.1623035665,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1623364.7469458883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1582236.0546075965,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1582154.9488054584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 910367.1511285154,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 910305.2011776278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1560371.2777778073,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1560296.8013468112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5512214.110000286,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5511760.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3312478.4555160836,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3312308.540925261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27042.234951328213,
            "unit": "ns/iter",
            "extra": "iterations: 30202\ncpu: 27040.239057016122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138446.98223227507,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138439.70279437987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105751.62510747311,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 105744.71195184867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110789.06946770697,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 110783.65768784672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105054.16111179879,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 105046.83310785814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287841.70768206357,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 287829.2317924836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2045441.9257641635,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2045365.5021833994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1560799.8506711754,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1560734.8993288542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1596650.8671210352,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1596567.1209540006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1525612.2873564104,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1525541.5435139504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 853628.6406249992,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 853601.2867647046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1516663.4471545957,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1516535.6097561005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3174.576644415613,
            "unit": "ns/iter",
            "extra": "iterations: 221112\ncpu: 3174.487137740136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20746.01029853889,
            "unit": "ns/iter",
            "extra": "iterations: 33597\ncpu: 20746.0725660029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16126.09493335626,
            "unit": "ns/iter",
            "extra": "iterations: 43441\ncpu: 16125.266453350514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15630.712037677933,
            "unit": "ns/iter",
            "extra": "iterations: 44801\ncpu: 15629.856476417926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12213.783770548698,
            "unit": "ns/iter",
            "extra": "iterations: 57180\ncpu: 12212.87688002793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104343.85983264634,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 104338.65809922338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139408.75029892812,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139402.1921084087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34482.641277764145,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 34480.613442911475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33929.470640349944,
            "unit": "ns/iter",
            "extra": "iterations: 20317\ncpu: 33927.04631589292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33572.59644159122,
            "unit": "ns/iter",
            "extra": "iterations: 20852\ncpu: 33570.410512181144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67282.9471251127,
            "unit": "ns/iter",
            "extra": "iterations: 10383\ncpu: 67280.5836463447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62653.597636318395,
            "unit": "ns/iter",
            "extra": "iterations: 11169\ncpu: 62652.87850299882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22833.473367752347,
            "unit": "ns/iter",
            "extra": "iterations: 30602\ncpu: 22833.25272857992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116652.15774601916,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 116642.88563829688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94532.22364865379,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94526.52702702604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94476.0944722265,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 94470.25273685605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92895.79615281356,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 92890.80951108642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171294.72129946772,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 171292.2813873964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 587006.5404040725,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 586968.2659932713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 487113.2270833319,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 487107.63888888154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 494477.39179635386,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494449.15134371206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 479161.6764705905,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 479122.43502052425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 297760.06146672997,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297745.6549385333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470307.1169709607,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 470287.7620013466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23016.13363827973,
            "unit": "ns/iter",
            "extra": "iterations: 30388\ncpu: 23015.04541266305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114254.45513548562,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 114247.60668505679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92789.98794063008,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92785.06493506319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95569.14902866393,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 95563.42888194541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93908.42158969046,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 93907.74704618836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167131.27080361848,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 167129.64812172874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 591175.5824175051,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 591136.1792054059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 482538.620427907,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482534.5065562424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 494551.0006973373,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 494519.0376569048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475572.19429342815,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475537.6358695664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302679.2166017982,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 302664.15910073713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470350.8831429977,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470325.7891202131 ns\nthreads: 1"
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
        "date": 1705574925009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8440.42968731143,
            "unit": "ns/iter",
            "extra": "iterations: 83086\ncpu: 8440.34012950437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59784.636000006234,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59782.84 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110186.71878601727,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 110185.01728774492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161603.72773298714,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 161600.6375398463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213637.39679803548,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 213634.21182266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264068.3393884473,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 264063.1547078414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 313962.2255149864,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 313955.5836646188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 365192.607966446,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 365177.31656184484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416153.07725947764,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 416132.70165209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6954.855257548404,
            "unit": "ns/iter",
            "extra": "iterations: 100855\ncpu: 6954.867879629174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5742.540307180096,
            "unit": "ns/iter",
            "extra": "iterations: 121492\ncpu: 5742.244756856417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5602.896357708677,
            "unit": "ns/iter",
            "extra": "iterations: 124235\ncpu: 5602.563689781459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5679.241100060539,
            "unit": "ns/iter",
            "extra": "iterations: 122866\ncpu: 5678.9697719466685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10340.283541047684,
            "unit": "ns/iter",
            "extra": "iterations: 67641\ncpu: 10339.873745213714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28558.86869574561,
            "unit": "ns/iter",
            "extra": "iterations: 28453\ncpu: 28557.326116753924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150035.84108868602,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 150025.54872695328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117097.75968141729,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 117090.29112881082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118214.29204765678,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118214.32529786686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109530.23218420126,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 109528.55672755346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 380903.72130490106,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 380885.3000402742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1980771.9978587953,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1980695.2890792359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550611.2173913128,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1550552.5083612027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1554192.105704646,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1554120.6375838944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1517307.0424143472,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1517215.1712887434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 838634.9105023004,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 838604.2009132425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1491430.4476650176,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1491381.1594202863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37328.52440403697,
            "unit": "ns/iter",
            "extra": "iterations: 22107\ncpu: 37326.534581806714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186004.50335425968,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 185996.77558969913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146831.8420782728,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 146826.26901384396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146656.2191920912,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 146651.45730356235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140318.90728909217,
            "unit": "ns/iter",
            "extra": "iterations: 6105\ncpu: 140313.9230139232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 341889.02647176065,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 341875.9383642828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2010348.4741379272,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2010276.0775862082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1595321.3773585283,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1595311.3207547087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1576023.6203391287,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1575960 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1555239.6488294296,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1555174.5819398083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 879398.7601896621,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 879370.8056872021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1518536.4819079288,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1518464.1447368455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5471374.850000075,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5471241.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3301006.567375764,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300965.248226961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27174.01331114851,
            "unit": "ns/iter",
            "extra": "iterations: 30050\ncpu: 27173.394342761872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143505.70962342393,
            "unit": "ns/iter",
            "extra": "iterations: 5975\ncpu: 143500.3514644361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109031.99834774638,
            "unit": "ns/iter",
            "extra": "iterations: 7868\ncpu: 109030.55414336537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114377.92522739217,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 114377.2338148743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107381.70031465846,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 107380.55380742605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 293250.9453924998,
            "unit": "ns/iter",
            "extra": "iterations: 2930\ncpu: 293237.30375426624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1983944.528784554,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1983824.520255869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1542475.3013245368,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1542387.08609272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1550562.9599999792,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1550515.833333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1520532.293637791,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520480.5872756946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821470.5736981017,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 821442.1888790844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490335.3071998935,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490294.5599999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3195.194228445493,
            "unit": "ns/iter",
            "extra": "iterations: 216822\ncpu: 3195.0627703830733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20858.325247643475,
            "unit": "ns/iter",
            "extra": "iterations: 33516\ncpu: 20857.596371882228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16205.553549911008,
            "unit": "ns/iter",
            "extra": "iterations: 43156\ncpu: 16204.750208545755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17008.40180222318,
            "unit": "ns/iter",
            "extra": "iterations: 42725\ncpu: 17007.779988297265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12254.453518617582,
            "unit": "ns/iter",
            "extra": "iterations: 57281\ncpu: 12254.337389361246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103812.43496233757,
            "unit": "ns/iter",
            "extra": "iterations: 6773\ncpu: 103812.69747526984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138380.2384432894,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 138372.3034373766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33941.0248816292,
            "unit": "ns/iter",
            "extra": "iterations: 20698\ncpu: 33940.40970142069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33656.62518048081,
            "unit": "ns/iter",
            "extra": "iterations: 20778\ncpu: 33656.246992010696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33413.626653297215,
            "unit": "ns/iter",
            "extra": "iterations: 20943\ncpu: 33413.684763405494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67027.26591344007,
            "unit": "ns/iter",
            "extra": "iterations: 9913\ncpu: 67023.56501563649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56062.60682872382,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 56058.20406205031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23916.5255956418,
            "unit": "ns/iter",
            "extra": "iterations: 29380\ncpu: 23915.296119809438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117026.82721020891,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117019.8456634777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94829.66941479412,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 94828.46330585095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95050.46218487537,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 95046.43534833338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94256.93191030026,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94251.01323966576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169784.2412959404,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 169773.28336557158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596785.8548522787,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 596763.2911392445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 481005.5284327255,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 480980.0970873865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 485510.80707841984,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485500.7633587855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475748.38555853453,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 475749.11444141413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 295468.23976361396,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 295468.63655550615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 468294.1510312594,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 468252.2954091841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24107.267720272597,
            "unit": "ns/iter",
            "extra": "iterations: 29486\ncpu: 24105.779013769465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113812.83187561552,
            "unit": "ns/iter",
            "extra": "iterations: 6174\ncpu: 113806.8351149983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92811.47295496582,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 92809.24593658368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94016.6344661578,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 94011.09178485372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93199.8895248253,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 93194.7291361633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168805.93653472996,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 168788.99613899426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585581.1078595367,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585574.2474916315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476459.35483872046,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 476449.8284145533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 484525.42600271193,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 484510.0276625206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 471723.42076875595,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471711.46325016936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 297408.5132139536,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 297404.56095481943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 463565.4575696014,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 463542.90563475376 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772690093,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8439.205645259208,
            "unit": "ns/iter",
            "extra": "iterations: 82866\ncpu: 8439.183742427535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61517.121402941666,
            "unit": "ns/iter",
            "extra": "iterations: 13657\ncpu: 61515.17902906934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114118.73652774154,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 114114.16246349875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166931.53779070676,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 166925.46511627903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216183.53356711875,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 216171.99398797602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 269662.33821694844,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 269648.4413965087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 320767.93417158944,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 320754.88165680476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 376064.5313304908,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 376037.76824034366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 421924.8781676684,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 421893.03118908417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7052.74517452336,
            "unit": "ns/iter",
            "extra": "iterations: 99213\ncpu: 7052.265328132397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5756.347307110635,
            "unit": "ns/iter",
            "extra": "iterations: 121728\ncpu: 5755.844177181923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5742.4312069166745,
            "unit": "ns/iter",
            "extra": "iterations: 120986\ncpu: 5742.42391681683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5804.798631712099,
            "unit": "ns/iter",
            "extra": "iterations: 120004\ncpu: 5804.3848538381935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10375.743806072689,
            "unit": "ns/iter",
            "extra": "iterations: 67324\ncpu: 10375.317865842777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29486.931743838064,
            "unit": "ns/iter",
            "extra": "iterations: 27514\ncpu: 29486.25063603983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148408.9778745676,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 148407.02090592327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115756.51380764929,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 115752.9315739356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116389.66948113925,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116388.00217894567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109394.64709661572,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 109390.09506680358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 388721.962825281,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 388712.4328789759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1990287.066810481,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1990235.129310349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1547084.181364375,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1547066.3893510813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1551486.2871453585,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1551426.2103505875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1544632.0830564175,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1544595.3488372073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 842739.1945205061,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 842717.7168949784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1506754.9886362916,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1506700.6493506492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38214.17262153059,
            "unit": "ns/iter",
            "extra": "iterations: 21579\ncpu: 38212.887529542706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191217.88595517093,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 191213.66762813376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145060.1243033252,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 145059.85475426423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142636.90660251843,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 142634.8706038486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137080.5760102619,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 137075.6895445801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344446.3669579081,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 344434.31294678274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2039704.6973685243,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2039660.745614039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1585029.518835573,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1584934.075342464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1591596.0154373588,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1591478.7307032647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565837.6040609642,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1565739.424703886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 865324.6441947721,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 865269.3820224723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1545037.6932006537,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1544914.92537313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5507925.48000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5507348.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3343179.669064598,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3342982.3741007308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27247.318826522012,
            "unit": "ns/iter",
            "extra": "iterations: 29894\ncpu: 27245.594433665647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138985.1648261116,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 138977.40234053167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109396.6246803098,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 109387.22506393839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112124.46246402577,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 112113.90269421967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104727.3506127557,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 104718.54166666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 300149.6897746916,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 300130.4679376075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1993101.4197000961,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1992931.2633832889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531529.584307204,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1531351.5859766286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1550027.2524916176,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1549994.186046508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1538139.9074381867,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538091.0743801708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 828199.8464991102,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 828183.9317773806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1500634.8951612469,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1500565.806451612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3181.338513424628,
            "unit": "ns/iter",
            "extra": "iterations: 220009\ncpu: 3181.284856528581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20269.931085340922,
            "unit": "ns/iter",
            "extra": "iterations: 34579\ncpu: 20268.868388328196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16928.37875876748,
            "unit": "ns/iter",
            "extra": "iterations: 44762\ncpu: 16928.151110316834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17023.33020980544,
            "unit": "ns/iter",
            "extra": "iterations: 41086\ncpu: 17022.835028963626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12249.07230583166,
            "unit": "ns/iter",
            "extra": "iterations: 57077\ncpu: 12248.867319585852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108844.05397022434,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 108840.95843672402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 133818.71823414622,
            "unit": "ns/iter",
            "extra": "iterations: 5210\ncpu: 133812.39923224677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34131.24472388653,
            "unit": "ns/iter",
            "extra": "iterations: 20517\ncpu: 34130.6721255542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33637.12671117848,
            "unit": "ns/iter",
            "extra": "iterations: 20819\ncpu: 33636.26495028581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33852.764871014886,
            "unit": "ns/iter",
            "extra": "iterations: 20661\ncpu: 33852.30143749073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67538.93938224675,
            "unit": "ns/iter",
            "extra": "iterations: 10360\ncpu: 67536.4478764473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62654.34068977546,
            "unit": "ns/iter",
            "extra": "iterations: 11192\ncpu: 62654.2172980699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23544.813894029157,
            "unit": "ns/iter",
            "extra": "iterations: 29725\ncpu: 23544.14802354905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119404.88629389727,
            "unit": "ns/iter",
            "extra": "iterations: 5866\ncpu: 119403.23900443253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97310.51667820598,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 97306.7266435996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97392.58373871462,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97387.8109798465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95161.99293766478,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 95159.55452940529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 175665.60589269802,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 175661.14328884342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597267.1529914603,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 597258.1196581174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485772.3840830022,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 485756.7474048379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 488019.59666205454,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 488012.6564673189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 480945.37688102433,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 480933.99452804285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 301740.8194324902,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 301723.2588134119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475056.1960916437,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 475047.8436657685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23465.107291947155,
            "unit": "ns/iter",
            "extra": "iterations: 29704\ncpu: 23464.328036628238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117020.11256282496,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117018.30820770486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94418.32515254276,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 94414.12881355933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95781.91641587614,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 95774.18604651275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95261.3226071355,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 95261.0160208132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175409.96477641823,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175400.84936297935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 587939.0234309221,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 587896.6527196718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478922.11202750495,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 478888.59106529364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 486292.89550171647,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 486269.96539792576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474901.389680952,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474840.19008825877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 300618.04168460355,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 300595.8315427554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 468272.3258807487,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 468236.7886178891 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}