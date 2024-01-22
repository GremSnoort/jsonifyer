window.BENCHMARK_DATA = {
  "lastUpdate": 1705957711649,
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
        "date": 1705774102160,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8651.141670483781,
            "unit": "ns/iter",
            "extra": "iterations: 80779\ncpu: 8650.618353780066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 63137.958364369326,
            "unit": "ns/iter",
            "extra": "iterations: 13426\ncpu: 63125.10799940414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 116970.19177895712,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116946.01878317681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 170640.15460851532,
            "unit": "ns/iter",
            "extra": "iterations: 5045\ncpu: 170606.7789890981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222151.5475519058,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 222108.1004870546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 277662.5312000033,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 277603.71200000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 328846.22546422377,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 328844.63812050025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 387889.04931744013,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 387467.01893439045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 435869.1377065798,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 435216.52478718077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7250.4845345933345,
            "unit": "ns/iter",
            "extra": "iterations: 96926\ncpu: 7249.116852031441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5885.448397858992,
            "unit": "ns/iter",
            "extra": "iterations: 118997\ncpu: 5885.3996319234875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5834.885274200805,
            "unit": "ns/iter",
            "extra": "iterations: 119912\ncpu: 5834.543665354583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5829.413865318401,
            "unit": "ns/iter",
            "extra": "iterations: 119853\ncpu: 5829.169065438495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10208.343459509557,
            "unit": "ns/iter",
            "extra": "iterations: 68634\ncpu: 10207.962525861827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31757.214349638707,
            "unit": "ns/iter",
            "extra": "iterations: 25701\ncpu: 31755.49589510136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155442.1076698822,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 155433.08435051946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 122683.97114556706,
            "unit": "ns/iter",
            "extra": "iterations: 6966\ncpu: 122678.5242606948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122889.98852059,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 122825.42689051518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116318.34242465174,
            "unit": "ns/iter",
            "extra": "iterations: 7333\ncpu: 116296.54984317474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 388326.8598437978,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 388290.34114262153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2040155.2281877762,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2039951.6778523487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1624721.0506991406,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624557.1678321683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1632151.642105216,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1632010.5263157901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1579446.3560477316,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1579275.97955707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 872458.5146919017,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 872379.8104265401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1561934.6812815436,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1561727.318718385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41127.175960097666,
            "unit": "ns/iter",
            "extra": "iterations: 20050\ncpu: 41123.20698254363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 193272.5150089475,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 193251.29928315405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153959.87484378408,
            "unit": "ns/iter",
            "extra": "iterations: 5601\ncpu: 153942.26031065886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148219.3071379526,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 148201.5614275909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142015.53164348225,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 142000.92776673273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 350992.6557443623,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 350953.8430420732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2115617.749999966,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2115419.0909090913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1657669.992844429,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1657505.545617181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1660866.4865832888,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1660708.7656529588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1614375.883680531,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1614251.5624999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897667.7098646559,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 897613.8297872331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1600535.5481099484,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1600387.285223371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5525142.619999315,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5524787.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3672678.4193548467,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3672370.250896048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29815.083336345324,
            "unit": "ns/iter",
            "extra": "iterations: 27659\ncpu: 29813.04457861814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150725.56291739212,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 150713.55008787356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116409.78991596936,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 116401.68067226929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118525.59936429343,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 118517.50967385365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111934.38145539531,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 111926.2258737613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298846.7037677141,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 298822.2260629103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2089105.3497758352,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2088963.4529147858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1609215.1076389565,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1609109.2013888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1637418.4024603374,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637385.0615114237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1571112.8141890487,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1571046.7905405425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 859948.3098982332,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 859879.6484736342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1559357.5939598603,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1559216.1073825606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.096660441607,
            "unit": "ns/iter",
            "extra": "iterations: 215807\ncpu: 3240.7498366596064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21654.958846974994,
            "unit": "ns/iter",
            "extra": "iterations: 32367\ncpu: 21653.18688787968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15866.083102869801,
            "unit": "ns/iter",
            "extra": "iterations: 44114\ncpu: 15864.798023303203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16574.722053737692,
            "unit": "ns/iter",
            "extra": "iterations: 42206\ncpu: 16573.757285693944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12399.497975779605,
            "unit": "ns/iter",
            "extra": "iterations: 56318\ncpu: 12398.602578216565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105050.55187969905,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 105041.96992481229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 143566.66322739725,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 143552.76516714832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34848.034280021406,
            "unit": "ns/iter",
            "extra": "iterations: 20070\ncpu: 34843.90134529122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34755.459884039716,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 34751.59324049761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34259.54385450185,
            "unit": "ns/iter",
            "extra": "iterations: 20454\ncpu: 34256.32639092597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68275.28087258045,
            "unit": "ns/iter",
            "extra": "iterations: 10681\ncpu: 68268.5329089041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64351.388996405025,
            "unit": "ns/iter",
            "extra": "iterations: 10851\ncpu: 64347.27674868683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22981.457911798287,
            "unit": "ns/iter",
            "extra": "iterations: 30543\ncpu: 22980.240971744854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120316.2208662676,
            "unit": "ns/iter",
            "extra": "iterations: 5818\ncpu: 120308.33619800811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96223.35237440253,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 96217.10942876726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95205.68773790685,
            "unit": "ns/iter",
            "extra": "iterations: 7356\ncpu: 95200.84284937421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94803.81764469329,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 94797.99919430527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 177244.55991123215,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 177235.40433925067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605493.4579358038,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 605449.869904595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 499688.085000035,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 499661.28571428824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 500722.79928316735,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 500681.218637986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 490955.41316523653,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490926.54061624134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302067.90838038235,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 302049.9782891866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 484950.2751212942,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 484925.433125428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23303.547664425532,
            "unit": "ns/iter",
            "extra": "iterations: 29907\ncpu: 23301.902564616852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113667.9747885571,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 113662.24788548936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93169.2268068763,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 93164.16877412453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93741.38838745079,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 93732.7630338139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93749.41372337217,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 93743.9201941228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169500.32622393116,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 169490.23267086697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 605726.3560933869,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 605693.4312878149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490755.03160111746,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 490726.8258426995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 497867.47226176976,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497844.0256045515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485590.0020876785,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 485561.79540710145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301909.2836787509,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 301891.5803108816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 480365.4472777586,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 480337.9048931798 ns\nthreads: 1"
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
        "date": 1705777734312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8663.547056777017,
            "unit": "ns/iter",
            "extra": "iterations: 80456\ncpu: 8663.253206721687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61256.216419529155,
            "unit": "ns/iter",
            "extra": "iterations: 13825\ncpu: 61255.0307414105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114328.78473863663,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 114321.73627528243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164990.83496637293,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 164985.8981748319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216039.1750186943,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 216037.04811767652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 269367.44382197154,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 269362.7450980394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 319411.4278350662,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 319410.19882179674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 371796.86357785243,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 371779.40797940845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 423823.4464459485,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 423816.6017526776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7051.166363097002,
            "unit": "ns/iter",
            "extra": "iterations: 99373\ncpu: 7050.9162448552415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5989.778261459843,
            "unit": "ns/iter",
            "extra": "iterations: 117846\ncpu: 5989.7374539653465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5746.931938299797,
            "unit": "ns/iter",
            "extra": "iterations: 116174\ncpu: 5746.7961850328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5767.550794719609,
            "unit": "ns/iter",
            "extra": "iterations: 121804\ncpu: 5767.409116285173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10245.899318763973,
            "unit": "ns/iter",
            "extra": "iterations: 67818\ncpu: 10245.807897608296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 35965.437915400995,
            "unit": "ns/iter",
            "extra": "iterations: 22719\ncpu: 35964.22817905719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158906.96013897593,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 158900.78624977136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120044.47061310516,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 120038.09725158567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118162.54336061963,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 118159.02594699626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113856.79957214653,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 113854.0713999195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376792.74004778406,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 376782.4044585984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1988069.4353447394,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1988033.836206895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1584150.4776632327,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1584084.192439862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1557248.3377926585,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1557181.103678932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1527615.876441423,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1527560.461285007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 855625.4893221385,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 855564.3454039008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503725.23252043,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1503627.1544715413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40804.77492849512,
            "unit": "ns/iter",
            "extra": "iterations: 20278\ncpu: 40802.62353289275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 190009.66328109452,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 190004.01854714006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 147567.48456096707,
            "unit": "ns/iter",
            "extra": "iterations: 5797\ncpu: 147560.34155597715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143328.80481283096,
            "unit": "ns/iter",
            "extra": "iterations: 5984\ncpu: 143324.41510695172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141292.9297119285,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 141286.61728395076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 346029.12833796436,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 346011.3591072145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2046670.1142855268,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2046553.4065934008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1613598.3819444515,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1613509.2013888815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1592603.3972602861,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1592535.7876712356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1563266.9496644605,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1563210.7382550274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 893675.1519231533,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 893634.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1545983.8702161706,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1545924.958402653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5553616.600000168,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553282.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3300306.8758866,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300163.4751772946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30910.003834154093,
            "unit": "ns/iter",
            "extra": "iterations: 26603\ncpu: 30909.878585121813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146462.55287976505,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 146412.91680700533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110757.65108055319,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 110752.63916175575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 117401.0882232305,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 117395.75981397869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110152.65564527569,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 110146.72561835128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288065.31913479575,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 288058.4026622286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2021671.5367965873,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2021640.0432900412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1581899.6298811384,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1581834.295415954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1585037.5127767227,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1584978.5349233376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1519702.409165308,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1519628.3142389557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 853230.2753888365,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 853192.223238792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1515387.0702615187,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1515304.901960783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3214.2935249019033,
            "unit": "ns/iter",
            "extra": "iterations: 217433\ncpu: 3214.164363275135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19287.665690771595,
            "unit": "ns/iter",
            "extra": "iterations: 36206\ncpu: 19286.81434016458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16122.470901542505,
            "unit": "ns/iter",
            "extra": "iterations: 43370\ncpu: 16121.713165782885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16985.599074546135,
            "unit": "ns/iter",
            "extra": "iterations: 41277\ncpu: 16985.25086609974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12163.72147418166,
            "unit": "ns/iter",
            "extra": "iterations: 57632\ncpu: 12163.626110494202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103202.29095175538,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 103196.3631030944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141455.50151791726,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 141448.35053632892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34743.252420919256,
            "unit": "ns/iter",
            "extra": "iterations: 20137\ncpu: 34741.843372895935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33498.68020132989,
            "unit": "ns/iter",
            "extra": "iterations: 20663\ncpu: 33496.95591153262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33349.35016418444,
            "unit": "ns/iter",
            "extra": "iterations: 21013\ncpu: 33348.50330747611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67389.0357898816,
            "unit": "ns/iter",
            "extra": "iterations: 10394\ncpu: 67384.5680200118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62754.87491007256,
            "unit": "ns/iter",
            "extra": "iterations: 11120\ncpu: 62751.14208633101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23196.260971889562,
            "unit": "ns/iter",
            "extra": "iterations: 30168\ncpu: 23195.007955449553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122229.15807860653,
            "unit": "ns/iter",
            "extra": "iterations: 5725\ncpu: 122227.10917030514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 99235.95771073831,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 99231.26585847321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 99201.26640158183,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 99200.63902300585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96913.45264180901,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 96909.36069893301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 173401.25428356612,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 173399.5033523737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597667.0884120436,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 597662.1459227486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 492712.56850283925,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 492695.62146893126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 495125.4272598677,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 495105.50847458234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 484074.6269070821,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 484070.1803051272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304984.944202293,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 304973.32170880254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478799.1117203667,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478787.1144619616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23978.872134645986,
            "unit": "ns/iter",
            "extra": "iterations: 29054\ncpu: 23976.42321195031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118135.55005055433,
            "unit": "ns/iter",
            "extra": "iterations: 5934\ncpu: 118135.82743511806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94770.98403464373,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94771.23528615828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96326.03782669311,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 96320.6602475924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95865.06380066302,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 95862.03450164231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175747.01475735882,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 175738.76938468963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 594634.6924369622,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 594611.9327731003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 490222.20210525504,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490198.1052631555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 493573.3729767822,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493552.0760028106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475993.79237580136,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 475984.4792375743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305291.41681188,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 305292.02961672057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 475743.47479563806,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 475725.1362397798 ns\nthreads: 1"
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
        "date": 1705954271690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8459.713187105375,
            "unit": "ns/iter",
            "extra": "iterations: 82702\ncpu: 8459.615245096853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62823.532150610954,
            "unit": "ns/iter",
            "extra": "iterations: 13810\ncpu: 62820.74583635046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112851.72822803045,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 112850.5845264679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164074.60331680137,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 164070.39649256578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216921.28753434905,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216919.63527354487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267669.2614197635,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 267656.0802469137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 322137.53545321437,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 322130.3362573099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 376644.55923568853,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 376639.49044585996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 417046.9918190932,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 417039.7016361886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7086.090088179888,
            "unit": "ns/iter",
            "extra": "iterations: 99003\ncpu: 7085.97921275113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5840.354062866452,
            "unit": "ns/iter",
            "extra": "iterations: 119620\ncpu: 5840.358635679657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5794.948543696943,
            "unit": "ns/iter",
            "extra": "iterations: 120957\ncpu: 5794.951098324197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5699.409250700184,
            "unit": "ns/iter",
            "extra": "iterations: 122888\ncpu: 5699.36202070177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10265.069151357044,
            "unit": "ns/iter",
            "extra": "iterations: 68097\ncpu: 10264.740003230678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28545.36287471844,
            "unit": "ns/iter",
            "extra": "iterations: 28288\ncpu: 28544.842335972848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147176.4213966205,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 147175.5073959409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115844.0367647058,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 115841.87091503263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114805.43033009351,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 114801.88041125555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109044.80665467143,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 109044.06474820139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378045.44837279554,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 378041.5829650468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1996690.7260867548,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1996664.3478260892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1597062.0206185482,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1597030.0687285194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1595032.1701030694,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1595012.02749141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1520692.0065575328,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1520674.26229508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884191.9990449799,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884180.324737344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1528940.1828664131,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1528894.0691927485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37643.04865136173,
            "unit": "ns/iter",
            "extra": "iterations: 21911\ncpu: 37642.544840491115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188400.07591047708,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 188400.43878894232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145003.13215190344,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 144999.7637130796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142027.60173303727,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 142025.71238126964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138560.46551445746,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138559.0050072687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 346768.9084732101,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 346762.2701838532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2068122.0969163305,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2067997.7973568258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1644245.9911815373,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1644215.3439153507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1633576.9245613033,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1633514.561403503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1564978.2500001062,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1564944.1275167738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 910490.0078277565,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 910444.2270058746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1559487.8451177294,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1559465.4882154963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5557754.479999631,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5557544.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3343076.2050360655,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3343016.187050357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26973.755659537193,
            "unit": "ns/iter",
            "extra": "iterations: 30347\ncpu: 26972.722180116605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145474.691523687,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 145472.15899439348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107595.11977856576,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 107593.36940110695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108368.98585086364,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 108367.35500318727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101735.81566985477,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 101733.06220095733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 296612.3845891697,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 296602.6252983283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2018046.6142242646,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2017972.8448275893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1575480.925675694,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1575459.7972972954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1596201.215753363,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1596125.5136986317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1536340.1520661765,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1536329.5867768566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 873991.1271185743,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 873970.9981167618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522009.7103109558,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1521989.5253682493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3185.1910959001575,
            "unit": "ns/iter",
            "extra": "iterations: 218843\ncpu: 3185.0550394575034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20805.722809307845,
            "unit": "ns/iter",
            "extra": "iterations: 33688\ncpu: 20805.705295654214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16472.471635884915,
            "unit": "ns/iter",
            "extra": "iterations: 42448\ncpu: 16471.930361854418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16126.217184978712,
            "unit": "ns/iter",
            "extra": "iterations: 43410\ncpu: 16126.037779313503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12145.571705765957,
            "unit": "ns/iter",
            "extra": "iterations: 57206\ncpu: 12145.199804216269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104127.41338290268,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104125.72490706337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132713.5488935133,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132712.35104974388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34149.14432636493,
            "unit": "ns/iter",
            "extra": "iterations: 20419\ncpu: 34148.009207110845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34501.20578952558,
            "unit": "ns/iter",
            "extra": "iterations: 20278\ncpu: 34500.37479041334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33469.99899159634,
            "unit": "ns/iter",
            "extra": "iterations: 20825\ncpu: 33469.73829531792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68743.75978752923,
            "unit": "ns/iter",
            "extra": "iterations: 10166\ncpu: 68743.79303560892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63293.58815526947,
            "unit": "ns/iter",
            "extra": "iterations: 11026\ncpu: 63290.99401414812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23253.932375825374,
            "unit": "ns/iter",
            "extra": "iterations: 30078\ncpu: 23253.454352017667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117496.93380259813,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 117492.4920395507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95700.80880142032,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95694.20527538734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96137.92129439561,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 96132.5791855205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95302.1030253471,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95301.03570455202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176230.5875251545,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 176224.34607645703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 591648.1899488694,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 591614.3100511043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491610.1779183825,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 491600.9142053428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 492782.03370785544,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 492746.55898876314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474914.13590267487,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 474881.7444219093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302723.06236469164,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 302704.0277176235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474236.99320657476,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 474206.86141304113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23287.88099986826,
            "unit": "ns/iter",
            "extra": "iterations: 30084\ncpu: 23286.035766520115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116688.70166390351,
            "unit": "ns/iter",
            "extra": "iterations: 6010\ncpu: 116680.43261231192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93623.86243315403,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 93618.58288770009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95306.85591836445,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 95302.23129251672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94822.57396129674,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 94819.82676952147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172733.67612937142,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 172728.9311281182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 594205.7807986592,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 594169.9235344194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 481140.5683701952,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 481137.2928176858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 490616.2133333406,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490594.3157894742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475681.73207034206,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 475644.3843031141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303101.6526634849,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 303082.54655695235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 474128.3947190701,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474094.1096817787 ns\nthreads: 1"
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
        "date": 1705956112225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8614.284941543907,
            "unit": "ns/iter",
            "extra": "iterations: 81343\ncpu: 8613.478725889137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61612.97056030064,
            "unit": "ns/iter",
            "extra": "iterations: 13689\ncpu: 61609.635473738046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114569.34420772018,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 114561.0652463382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166644.20729590292,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 166639.62555491223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 217840.2582514539,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 217826.17787855884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 270426.9363462731,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 270413.74920432846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 321009.14543444937,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 320995.8394698087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 372431.27428327873,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 372425.8878904577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 422104.5661298008,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 422091.2152269394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7139.683775978561,
            "unit": "ns/iter",
            "extra": "iterations: 98348\ncpu: 7139.497498678157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5832.3789235789145,
            "unit": "ns/iter",
            "extra": "iterations: 119470\ncpu: 5832.304344186836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5745.123763229272,
            "unit": "ns/iter",
            "extra": "iterations: 121991\ncpu: 5744.874621898335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5867.116035651434,
            "unit": "ns/iter",
            "extra": "iterations: 119041\ncpu: 5866.909720180429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10466.473649734253,
            "unit": "ns/iter",
            "extra": "iterations: 67172\ncpu: 10466.130232835108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29308.454574961514,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 29306.66498359001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145527.70509108432,
            "unit": "ns/iter",
            "extra": "iterations: 5873\ncpu: 145521.93087008334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112918.23211912578,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 112914.969423026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113015.48839982765,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 113012.44862786682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108790.31995911314,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 108789.11321236881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376545.01995210524,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 376521.58818834746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1987277.2012987295,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1987190.6926406913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1536726.2695507333,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1536677.7038269585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1563397.7487436784,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1563337.01842546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1542538.7790698393,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542481.561461794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 855730.2936802557,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 855695.4460966546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1511459.433224685,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1511391.69381107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38078.557765063815,
            "unit": "ns/iter",
            "extra": "iterations: 21674\ncpu: 38077.17541755103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186302.26876091628,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 186296.88045375227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142735.93022482403,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 142726.9775187345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140880.94615891043,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 140881.04070912648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134897.39204545697,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 134891.71401515123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 341780.5365756931,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 341767.37841043714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2035298.0967033177,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2035252.7472527483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1656208.4956821888,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1656146.4594127862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1592620.231958884,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1592564.4329896816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1582092.5340134942,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1582002.7210884455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 895339.3590733506,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 895304.8262548273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1540936.5726210158,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1540847.4123539228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5542994.219999854,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5542826.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3386750.16727269,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3386549.454545476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27477.91825923699,
            "unit": "ns/iter",
            "extra": "iterations: 29826\ncpu: 27477.026755179977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136456.767933824,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 136450.453316367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104177.36639453356,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 104173.91251370785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108827.93146337412,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 108824.29242289587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101548.59100131092,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 101545.68564267838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290868.9986581597,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290858.83931566635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2023287.4242425244,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2023251.0822510822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1556181.8449998554,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1556113.4999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1583630.5738540587,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1583586.587436333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1549137.1953254894,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1549064.7746243784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 854904.4907918705,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 854890.6998158384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1512313.039151726,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1512255.7911908645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3184.7972457223086,
            "unit": "ns/iter",
            "extra": "iterations: 220094\ncpu: 3184.7174389124575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20743.200616645496,
            "unit": "ns/iter",
            "extra": "iterations: 33731\ncpu: 20742.435741602745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16680.95424836687,
            "unit": "ns/iter",
            "extra": "iterations: 41922\ncpu: 16680.87400410284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15450.041554604259,
            "unit": "ns/iter",
            "extra": "iterations: 45362\ncpu: 15449.669326749265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12264.411475783176,
            "unit": "ns/iter",
            "extra": "iterations: 57007\ncpu: 12264.12545827713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103090.1950573681,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 103089.79111503423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 140100.87343293155,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 140094.36716469206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34271.40397350982,
            "unit": "ns/iter",
            "extra": "iterations: 20385\ncpu: 34271.699779249415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34250.364517075206,
            "unit": "ns/iter",
            "extra": "iterations: 20438\ncpu: 34249.672179273846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33873.98956874699,
            "unit": "ns/iter",
            "extra": "iterations: 20707\ncpu: 33873.91220360248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67882.64777604987,
            "unit": "ns/iter",
            "extra": "iterations: 10252\ncpu: 67881.26219274288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63390.62664250745,
            "unit": "ns/iter",
            "extra": "iterations: 11035\ncpu: 63390.29451744426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24658.835950151646,
            "unit": "ns/iter",
            "extra": "iterations: 28406\ncpu: 24657.846933746125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120955.80547112256,
            "unit": "ns/iter",
            "extra": "iterations: 5593\ncpu: 120953.10209190099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98913.79151342793,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 98909.42008486565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98807.08405018998,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 98806.09222958592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96839.49875691031,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 96839.36464088349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 181098.05732817,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181094.42282749817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 612132.042794763,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 612112.8384279473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 494618.5099573003,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 494605.9032716931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 500458.24607703695,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 500462.4821683283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 491408.56594550586,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 491392.53314723505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 308561.5672101932,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 308545.65888056904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 482048.9427585675,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482023.17241379566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24682.306179184467,
            "unit": "ns/iter",
            "extra": "iterations: 28418\ncpu: 24680.582729256155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120260.23257810946,
            "unit": "ns/iter",
            "extra": "iterations: 5826\ncpu: 120255.21798832763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97548.52201171544,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 97543.68904987432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99326.21618168804,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99322.89567068845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98570.19009426895,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 98569.8747713513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 181267.12480700604,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 181251.62120432052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 605614.6396551005,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 605612.6724137972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 488830.9313244427,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 488796.91660827125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 510356.8513301976,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 510354.14710485516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 486004.89715081645,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 485979.0826963141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307824.7166739666,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 307823.53717553854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 481501.9241902151,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481494.96898690937 ns\nthreads: 1"
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
        "date": 1705957710726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8482.50814411049,
            "unit": "ns/iter",
            "extra": "iterations: 82575\ncpu: 8482.13987284287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61163.19360440572,
            "unit": "ns/iter",
            "extra": "iterations: 13822\ncpu: 61161.63362755029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113337.07911017444,
            "unit": "ns/iter",
            "extra": "iterations: 7597\ncpu: 113329.53797551664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166211.52476006854,
            "unit": "ns/iter",
            "extra": "iterations: 5210\ncpu: 166200.53742802303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 217305.71553883835,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 217289.1729323308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 268089.6078735374,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 268077.4643521389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 320508.63303813705,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 320492.9919137467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 373527.8182208928,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 373516.1151697464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 422952.54465592053,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 422941.72767203517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7052.731291691426,
            "unit": "ns/iter",
            "extra": "iterations: 98940\ncpu: 7052.534869617941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5754.179472533249,
            "unit": "ns/iter",
            "extra": "iterations: 120804\ncpu: 5753.786298466939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5792.164446649265,
            "unit": "ns/iter",
            "extra": "iterations: 120945\ncpu: 5792.010417958586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5791.013190518613,
            "unit": "ns/iter",
            "extra": "iterations: 120996\ncpu: 5790.811266488155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10214.622768926909,
            "unit": "ns/iter",
            "extra": "iterations: 68857\ncpu: 10214.2033489696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29173.014896513676,
            "unit": "ns/iter",
            "extra": "iterations: 27926\ncpu: 29171.69304590708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145614.23999999708,
            "unit": "ns/iter",
            "extra": "iterations: 5775\ncpu: 145606.28571428565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115289.27508004119,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 115284.0715048023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113224.098921589,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113218.75915324164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109423.92683240204,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 109418.98750483073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376468.40834336105,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 376440.59366225405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981281.8787877937,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1981165.8008658006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550084.2036728123,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1550029.2153589316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1591901.9743152326,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1591826.1986301332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1534494.919141922,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534434.6534653453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 855024.6263940713,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 854978.6245353161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1508683.5573504101,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1508645.5573505664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37874.36581565247,
            "unit": "ns/iter",
            "extra": "iterations: 21817\ncpu: 37872.09973873583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186323.8288444771,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 186319.15725456155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143038.74219536706,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 143031.1681772408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140296.9011419306,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 140294.17618270783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137208.61404070188,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 137200.11219746724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 345409.791914354,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 345394.2528735633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2035120.452538553,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2035033.112582778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1606513.0418118369,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1606461.4982578482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1622206.7312390169,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622111.8673647526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1578723.1833615676,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578661.2903225785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897002.6276595066,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 896975.1450676963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557472.0438449273,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1557411.973018551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5554748.380000092,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5554340.000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3300638.6971828444,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3300516.1971830917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27407.98511995271,
            "unit": "ns/iter",
            "extra": "iterations: 29637\ncpu: 27407.278064581413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135943.59298636077,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 135938.33703586186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106083.46085983043,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 106076.42892644097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110227.92296811004,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 110213.13014403325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105547.70267603369,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 105542.0150450112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 291663.17081373924,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 291650.43712172285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1980577.4051723962,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1980485.7758620654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1542156.066225078,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1542089.9006622538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1602686.189328727,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1602641.1359724593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1535304.238486795,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1535246.710526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 830214.6276978075,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 830175.0899280619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1504087.8220063986,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1504006.4724919111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3215.099817038741,
            "unit": "ns/iter",
            "extra": "iterations: 218079\ncpu: 3214.997776035296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20996.52223444818,
            "unit": "ns/iter",
            "extra": "iterations: 33619\ncpu: 20995.490645170772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15554.675541946663,
            "unit": "ns/iter",
            "extra": "iterations: 45069\ncpu: 15554.026048947217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16393.359548191886,
            "unit": "ns/iter",
            "extra": "iterations: 42673\ncpu: 16392.906521688154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12271.571572013821,
            "unit": "ns/iter",
            "extra": "iterations: 56768\ncpu: 12271.217939684338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105238.01724139457,
            "unit": "ns/iter",
            "extra": "iterations: 6670\ncpu: 105235.84707646206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139947.5517310468,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 139941.18471082687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34095.483596184036,
            "unit": "ns/iter",
            "extra": "iterations: 20544\ncpu: 34094.48500778791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34028.01123869035,
            "unit": "ns/iter",
            "extra": "iterations: 20554\ncpu: 34026.534981025594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33732.63045885172,
            "unit": "ns/iter",
            "extra": "iterations: 20769\ncpu: 33731.88405797074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68421.29760366272,
            "unit": "ns/iter",
            "extra": "iterations: 10057\ncpu: 68417.52013522897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62646.23352590807,
            "unit": "ns/iter",
            "extra": "iterations: 11078\ncpu: 62644.376241198945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22799.76197599814,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 22798.751178900333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118576.83869873187,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 118573.2463571673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97074.08175242529,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 97070.4381056381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95726.4195196027,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 95719.94754279486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93718.16376539801,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 93715.1713979658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 173482.05139609586,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 173472.72053372744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597222.3048264046,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 597208.8060965228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491573.81411600707,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 491542.06848357717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 496306.70951706823,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 496287.3579545441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 484623.5796398233,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484599.9307479247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304072.4126845934,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 304059.5134665507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 476740.12517102173,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 476720.7934336532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23391.704625261315,
            "unit": "ns/iter",
            "extra": "iterations: 29901\ncpu: 23390.512023009287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117222.44121149968,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 117216.11366343271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93463.49591426119,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93459.15606162146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95468.28672954282,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95460.48927155913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94639.21498106336,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 94634.27528393704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170859.64900340856,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 170851.65289255878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 592425.4078498032,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 592412.96928327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 481840.792181068,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 481811.4540466392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 491078.37094502413,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 491050.6346967521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 478494.49174690846,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 478468.56946355023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301800.5672159215,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 301780.39895923814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 476185.86160108313,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 476166.1465400326 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}