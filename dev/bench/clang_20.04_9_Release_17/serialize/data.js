window.BENCHMARK_DATA = {
  "lastUpdate": 1705962491983,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 20.04 Release c++-17": [
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
        "date": 1702490938697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 873.2938776374846,
            "unit": "ns/iter",
            "extra": "iterations: 802174\ncpu: 873.217282036067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14023.742304831283,
            "unit": "ns/iter",
            "extra": "iterations: 59128\ncpu: 14023.62163442024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29809.337659558383,
            "unit": "ns/iter",
            "extra": "iterations: 28046\ncpu: 29807.594665906017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46670.508712333234,
            "unit": "ns/iter",
            "extra": "iterations: 18250\ncpu: 46668.70684931509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50826.57780000091,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50822.260000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59435.26038842515,
            "unit": "ns/iter",
            "extra": "iterations: 13645\ncpu: 59431.57200439718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 71134.26613359786,
            "unit": "ns/iter",
            "extra": "iterations: 12381\ncpu: 71132.52564413208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 82462.41002144535,
            "unit": "ns/iter",
            "extra": "iterations: 10258\ncpu: 82460.2846558783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 95152.28583654897,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 95149.86093281991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 663.7497866511545,
            "unit": "ns/iter",
            "extra": "iterations: 1055783\ncpu: 663.7314675458873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 576.3919419153858,
            "unit": "ns/iter",
            "extra": "iterations: 1203487\ncpu: 576.3718262016962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 572.063172650565,
            "unit": "ns/iter",
            "extra": "iterations: 1223425\ncpu: 572.0612215705903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 571.0987921173382,
            "unit": "ns/iter",
            "extra": "iterations: 1194073\ncpu: 571.103441749374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 990.3946059039212,
            "unit": "ns/iter",
            "extra": "iterations: 696391\ncpu: 990.3331605376866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3061.1124438715865,
            "unit": "ns/iter",
            "extra": "iterations: 257444\ncpu: 3061.112319572417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15700.313506171293,
            "unit": "ns/iter",
            "extra": "iterations: 53731\ncpu: 15700.424336044367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12208.586782148408,
            "unit": "ns/iter",
            "extra": "iterations: 67197\ncpu: 12208.22358140989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11590.09402310445,
            "unit": "ns/iter",
            "extra": "iterations: 69685\ncpu: 11589.587429145455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12223.189400667741,
            "unit": "ns/iter",
            "extra": "iterations: 65306\ncpu: 12222.631917434857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35292.50453082731,
            "unit": "ns/iter",
            "extra": "iterations: 23616\ncpu: 35291.18394308938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 548755.9930335495,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 548755.6048131719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 446232.81364830217,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 446224.6194225719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 438486.15585079655,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 438475.0127746544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 445722.89315351745,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 445714.41908713756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267449.4948549931,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 267443.46741502895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 436710.03933136,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 436686.3323500494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2144640.6507179113,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2144590.9090909027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 866714.6458149862,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 866705.7268722462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2909091.1388891526,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2909038.8888888867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3334.967646899886,
            "unit": "ns/iter",
            "extra": "iterations: 240317\ncpu: 3334.8631182979034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14235.900604293372,
            "unit": "ns/iter",
            "extra": "iterations: 57588\ncpu: 14235.814753073557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11709.388059908633,
            "unit": "ns/iter",
            "extra": "iterations: 71909\ncpu: 11709.196345380991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11178.803779127415,
            "unit": "ns/iter",
            "extra": "iterations: 76261\ncpu: 11178.703400165166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11990.803533618582,
            "unit": "ns/iter",
            "extra": "iterations: 71315\ncpu: 11990.511112669088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34579.73258343905,
            "unit": "ns/iter",
            "extra": "iterations: 24359\ncpu: 34579.51065314665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 556077.7845952497,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 556059.5953002638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 448705.38829515886,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 448703.0025445278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 457160.4663608508,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 457155.65749235515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 451641.5482866201,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 451631.6718587775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 261992.7339003508,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 261987.97083839623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 438953.655068081,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 438936.76248108776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2186340.0353772854,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2186229.4811320803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 859428.4656134426,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 859406.9702602245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3218.2270540328996,
            "unit": "ns/iter",
            "extra": "iterations: 254402\ncpu: 3218.0957696873315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 13923.506836021332,
            "unit": "ns/iter",
            "extra": "iterations: 57709\ncpu: 13922.906305775543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11523.132265928954,
            "unit": "ns/iter",
            "extra": "iterations: 73012\ncpu: 11522.777077740666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11207.386003673824,
            "unit": "ns/iter",
            "extra": "iterations: 72419\ncpu: 11207.166627542516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12045.92661634612,
            "unit": "ns/iter",
            "extra": "iterations: 67699\ncpu: 12045.842626922115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34528.51927988391,
            "unit": "ns/iter",
            "extra": "iterations: 23885\ncpu: 34528.306468494615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 538146.7911353485,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 538137.8870673925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 438930.241573003,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 438917.211440245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 444448.44461938477,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 444438.32020997285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 462189.852941148,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 462170.2332657185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 272224.1667711287,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 272215.4545454554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 447540.7025773086,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 447528.1443298962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 392.0735661777027,
            "unit": "ns/iter",
            "extra": "iterations: 1865137\ncpu: 392.0683574450556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1723.3977348368842,
            "unit": "ns/iter",
            "extra": "iterations: 401119\ncpu: 1723.3556625340711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1417.0089286436587,
            "unit": "ns/iter",
            "extra": "iterations: 494476\ncpu: 1416.9965781959033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1399.612991743754,
            "unit": "ns/iter",
            "extra": "iterations: 498532\ncpu: 1399.590798584641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1227.10392932988,
            "unit": "ns/iter",
            "extra": "iterations: 584349\ncpu: 1227.10503483363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6929.66534061127,
            "unit": "ns/iter",
            "extra": "iterations: 99292\ncpu: 6929.717399186244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24466.66060145675,
            "unit": "ns/iter",
            "extra": "iterations: 28963\ncpu: 24466.453751337816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5781.345288774152,
            "unit": "ns/iter",
            "extra": "iterations: 120977\ncpu: 5781.239409143926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5770.476044388619,
            "unit": "ns/iter",
            "extra": "iterations: 120932\ncpu: 5770.313895412285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5773.796545248048,
            "unit": "ns/iter",
            "extra": "iterations: 120877\ncpu: 5773.836213671753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11887.08338611532,
            "unit": "ns/iter",
            "extra": "iterations: 58415\ncpu: 11887.1745270906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10924.100772411657,
            "unit": "ns/iter",
            "extra": "iterations: 64085\ncpu: 10923.696652883065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3706.938691180219,
            "unit": "ns/iter",
            "extra": "iterations: 188521\ncpu: 3706.923897072515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17876.339214821535,
            "unit": "ns/iter",
            "extra": "iterations: 38539\ncpu: 17875.764809673456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14325.341867658399,
            "unit": "ns/iter",
            "extra": "iterations: 47846\ncpu: 14325.19541863488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14145.371114456315,
            "unit": "ns/iter",
            "extra": "iterations: 48481\ncpu: 14144.928941234675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14802.85467286755,
            "unit": "ns/iter",
            "extra": "iterations: 47947\ncpu: 14802.667528729678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29857.36920910942,
            "unit": "ns/iter",
            "extra": "iterations: 23442\ncpu: 29856.33051787388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 122010.26208695903,
            "unit": "ns/iter",
            "extra": "iterations: 5750\ncpu: 122006.31304347841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 102607.55990041026,
            "unit": "ns/iter",
            "extra": "iterations: 6828\ncpu: 102608.28939660083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101970.65860097259,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 101967.26792784948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 101385.37148652773,
            "unit": "ns/iter",
            "extra": "iterations: 6902\ncpu: 101383.07736887925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64470.25385681224,
            "unit": "ns/iter",
            "extra": "iterations: 10825\ncpu: 64468.95150115459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 101584.30111902348,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 101582.98212469158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3614.22268461234,
            "unit": "ns/iter",
            "extra": "iterations: 193920\ncpu: 3614.1496493399004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18245.02536260106,
            "unit": "ns/iter",
            "extra": "iterations: 38403\ncpu: 18244.78816759126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14492.783991045784,
            "unit": "ns/iter",
            "extra": "iterations: 48248\ncpu: 14492.478444702387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14327.541403228104,
            "unit": "ns/iter",
            "extra": "iterations: 48873\ncpu: 14326.894195159106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14820.972371596654,
            "unit": "ns/iter",
            "extra": "iterations: 47234\ncpu: 14820.178261421888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29243.26823181191,
            "unit": "ns/iter",
            "extra": "iterations: 23640\ncpu: 29241.594754652993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 117983.78564137855,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 117983.5828513092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99556.89747948163,
            "unit": "ns/iter",
            "extra": "iterations: 7062\ncpu: 99553.28518833184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99468.71244635488,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 99462.40343347576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99981.48557143135,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 99976.70000000118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64882.336367858734,
            "unit": "ns/iter",
            "extra": "iterations: 10765\ncpu: 64879.27542963221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100810.39669063862,
            "unit": "ns/iter",
            "extra": "iterations: 6950\ncpu: 100809.23741007093 ns\nthreads: 1"
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
        "date": 1702493611214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 815.9812992653525,
            "unit": "ns/iter",
            "extra": "iterations: 857346\ncpu: 815.941871776389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13766.291135867928,
            "unit": "ns/iter",
            "extra": "iterations: 60051\ncpu: 13765.902316364423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29737.80677455111,
            "unit": "ns/iter",
            "extra": "iterations: 27869\ncpu: 29735.243460475784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46181.17347106917,
            "unit": "ns/iter",
            "extra": "iterations: 18199\ncpu: 46179.91098412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51403.139699993975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51400.84000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61212.713187459376,
            "unit": "ns/iter",
            "extra": "iterations: 13528\ncpu: 61210.43761088116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73960.24154262176,
            "unit": "ns/iter",
            "extra": "iterations: 11824\ncpu: 73957.34945872801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84885.19510510829,
            "unit": "ns/iter",
            "extra": "iterations: 10133\ncpu: 84881.95006414683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97236.68898776596,
            "unit": "ns/iter",
            "extra": "iterations: 8990\ncpu: 97235.73971078967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 672.9005307407813,
            "unit": "ns/iter",
            "extra": "iterations: 1041940\ncpu: 672.8929688849645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 560.6165601390682,
            "unit": "ns/iter",
            "extra": "iterations: 1244748\ncpu: 560.6109027690752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 554.82998282657,
            "unit": "ns/iter",
            "extra": "iterations: 1265331\ncpu: 554.8106384811557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 559.4474555204857,
            "unit": "ns/iter",
            "extra": "iterations: 1253557\ncpu: 559.4303250669892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1004.2620968086155,
            "unit": "ns/iter",
            "extra": "iterations: 700722\ncpu: 1004.2516147630604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3348.3555984955137,
            "unit": "ns/iter",
            "extra": "iterations: 243235\ncpu: 3348.2862252554096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14765.980953633647,
            "unit": "ns/iter",
            "extra": "iterations: 45678\ncpu: 14765.769079206617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11621.270277639223,
            "unit": "ns/iter",
            "extra": "iterations: 69695\ncpu: 11620.87093765695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12013.285334742395,
            "unit": "ns/iter",
            "extra": "iterations: 68127\ncpu: 12013.282545833526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12454.081930621129,
            "unit": "ns/iter",
            "extra": "iterations: 65409\ncpu: 12453.85803176934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36217.48807589159,
            "unit": "ns/iter",
            "extra": "iterations: 22769\ncpu: 36216.89138741283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 556945.8868285931,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 556931.6496163679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 449877.08250655554,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 449866.37075717916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 453233.82386657473,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 453234.445023449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 456559.92575043655,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 456541.44286466524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 276050.0245591874,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 276049.6851385391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 449595.8537344803,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 449595.6431535278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2232366.81884061,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2232179.2270531384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 886822.7098299155,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 886790.1701323268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2965241.7339743576,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2965105.769230768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3355.094887246898,
            "unit": "ns/iter",
            "extra": "iterations: 243763\ncpu: 3355.006297100043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15239.998842310542,
            "unit": "ns/iter",
            "extra": "iterations: 53555\ncpu: 15239.305386985376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12017.921469984129,
            "unit": "ns/iter",
            "extra": "iterations: 67783\ncpu: 12017.305224023705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.483182142216,
            "unit": "ns/iter",
            "extra": "iterations: 71323\ncpu: 11406.979515724166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12130.605982479641,
            "unit": "ns/iter",
            "extra": "iterations: 66327\ncpu: 12130.280278016462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35210.57512776536,
            "unit": "ns/iter",
            "extra": "iterations: 23480\ncpu: 35208.63713798989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 576679.3840579536,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 576674.7035573124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 467821.5414660474,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 467806.52755484113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 462679.55396065675,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 462647.95321637683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 465556.227127647,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 465543.93617021316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 270512.91975117644,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 270507.58942457114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 455462.9707266369,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 455445.37375849613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2241405.416666611,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2241272.794117642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 874870.1447124225,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 874841.9294990698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3264.5936570498984,
            "unit": "ns/iter",
            "extra": "iterations: 245091\ncpu: 3264.4446348499137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14826.277850664295,
            "unit": "ns/iter",
            "extra": "iterations: 54119\ncpu: 14825.467950257806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11740.228909353682,
            "unit": "ns/iter",
            "extra": "iterations: 68739\ncpu: 11739.890018766646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11127.656104291018,
            "unit": "ns/iter",
            "extra": "iterations: 72490\ncpu: 11127.366533314933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11962.730261891029,
            "unit": "ns/iter",
            "extra": "iterations: 67547\ncpu: 11962.236664840744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35538.68338748236,
            "unit": "ns/iter",
            "extra": "iterations: 23085\ncpu: 35536.71648256428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 561731.025674002,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 561711.4249037262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 459745.71158886945,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 459726.3765076035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 456799.82864583004,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 456784.11458333436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 457896.6872689,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 457885.1030110936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 275862.1884963945,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 275852.6101906844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 448642.6522634127,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 448627.26337448595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 372.52920940219667,
            "unit": "ns/iter",
            "extra": "iterations: 1876074\ncpu: 372.52139307937585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1771.4533480387402,
            "unit": "ns/iter",
            "extra": "iterations: 394410\ncpu: 1771.450774574681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1393.2061784405605,
            "unit": "ns/iter",
            "extra": "iterations: 503428\ncpu: 1393.1475801902143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1354.8772694964553,
            "unit": "ns/iter",
            "extra": "iterations: 517736\ncpu: 1354.8393389681187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1212.8486810766947,
            "unit": "ns/iter",
            "extra": "iterations: 575242\ncpu: 1212.7654100361171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6932.9096956913945,
            "unit": "ns/iter",
            "extra": "iterations: 105222\ncpu: 6932.573036057106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24167.98371369572,
            "unit": "ns/iter",
            "extra": "iterations: 28920\ncpu: 24167.268326417918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5766.9383359007525,
            "unit": "ns/iter",
            "extra": "iterations: 121351\ncpu: 5766.844937412951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5696.826670800402,
            "unit": "ns/iter",
            "extra": "iterations: 122576\ncpu: 5696.657583866328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5712.715991272344,
            "unit": "ns/iter",
            "extra": "iterations: 122373\ncpu: 5712.352397996216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11960.060761397168,
            "unit": "ns/iter",
            "extra": "iterations: 58524\ncpu: 11959.705419998747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10886.930192135582,
            "unit": "ns/iter",
            "extra": "iterations: 64434\ncpu: 10886.594034205413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3660.7309918326164,
            "unit": "ns/iter",
            "extra": "iterations: 191615\ncpu: 3660.6001617827615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18203.176070947116,
            "unit": "ns/iter",
            "extra": "iterations: 38564\ncpu: 18202.476402863038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14597.14809307367,
            "unit": "ns/iter",
            "extra": "iterations: 47747\ncpu: 14596.806082057397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14448.591708905884,
            "unit": "ns/iter",
            "extra": "iterations: 48534\ncpu: 14448.586557877166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 15005.641513073555,
            "unit": "ns/iter",
            "extra": "iterations: 46660\ncpu: 15005.167166738327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29368.59878069698,
            "unit": "ns/iter",
            "extra": "iterations: 23456\ncpu: 29367.78649386134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 120993.32457656287,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 120984.70445903929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 102059.52286718828,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 102054.52946350143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 102069.37193459806,
            "unit": "ns/iter",
            "extra": "iterations: 6606\ncpu: 102065.3950953681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 102439.7200760969,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 102438.55721393084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64850.61218452053,
            "unit": "ns/iter",
            "extra": "iterations: 10817\ncpu: 64848.673384487345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100763.24294354636,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 100755.93317972498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3603.5951225037247,
            "unit": "ns/iter",
            "extra": "iterations: 194239\ncpu: 3603.490545153176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18314.91312093742,
            "unit": "ns/iter",
            "extra": "iterations: 38168\ncpu: 18314.07461748076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14505.663461137616,
            "unit": "ns/iter",
            "extra": "iterations: 47938\ncpu: 14505.290166465053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14436.90287977464,
            "unit": "ns/iter",
            "extra": "iterations: 48476\ncpu: 14436.123029952894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14847.275217086777,
            "unit": "ns/iter",
            "extra": "iterations: 47101\ncpu: 14846.655060402034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29078.488282224687,
            "unit": "ns/iter",
            "extra": "iterations: 24066\ncpu: 29077.212665170708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 120072.26113881184,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 120070.08429382594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99187.97987528957,
            "unit": "ns/iter",
            "extra": "iterations: 7056\ncpu: 99187.8968253971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99811.8501568314,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99805.36070715674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 98690.61890673355,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 98687.58805297292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64804.40594059224,
            "unit": "ns/iter",
            "extra": "iterations: 10807\ncpu: 64802.12825020892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100239.46278270581,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100238.37675350675 ns\nthreads: 1"
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
        "date": 1702504015538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 816.3919035533983,
            "unit": "ns/iter",
            "extra": "iterations: 858673\ncpu: 816.3730547018481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14133.471261639395,
            "unit": "ns/iter",
            "extra": "iterations: 58963\ncpu: 14133.103810864442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30520.46067785612,
            "unit": "ns/iter",
            "extra": "iterations: 27351\ncpu: 30519.809147745975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 47183.64117744139,
            "unit": "ns/iter",
            "extra": "iterations: 18243\ncpu: 47182.6563613441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51501.84919999674,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51501.17000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61674.70701766576,
            "unit": "ns/iter",
            "extra": "iterations: 13523\ncpu: 61672.20291355469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 74313.2888681401,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 74310.936571283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85467.28691440566,
            "unit": "ns/iter",
            "extra": "iterations: 10118\ncpu: 85463.07570666136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97753.9406922992,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 97750.94148156489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 687.1418067671423,
            "unit": "ns/iter",
            "extra": "iterations: 1014331\ncpu: 687.1164343789164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 561.8461175580846,
            "unit": "ns/iter",
            "extra": "iterations: 1220997\ncpu: 561.8049839598299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 552.9943700989273,
            "unit": "ns/iter",
            "extra": "iterations: 1264143\ncpu: 552.9830090424899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 558.6042666903724,
            "unit": "ns/iter",
            "extra": "iterations: 1258868\ncpu: 558.5701598579046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1006.0536671603089,
            "unit": "ns/iter",
            "extra": "iterations: 696888\ncpu: 1006.0062736049412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3302.882779647242,
            "unit": "ns/iter",
            "extra": "iterations: 240419\ncpu: 3302.737304455968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15310.015219925564,
            "unit": "ns/iter",
            "extra": "iterations: 53154\ncpu: 15309.346427362007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12120.432036954122,
            "unit": "ns/iter",
            "extra": "iterations: 67110\ncpu: 12119.649828639545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10835.368991548732,
            "unit": "ns/iter",
            "extra": "iterations: 75373\ncpu: 10834.906398843073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11817.636848411534,
            "unit": "ns/iter",
            "extra": "iterations: 68448\ncpu: 11817.119565217385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37348.703019539986,
            "unit": "ns/iter",
            "extra": "iterations: 22520\ncpu: 37346.563055062164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 574749.1343187253,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 574700.3213367616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 458220.10623682896,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458200.8985200851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 454264.24791231786,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 454244.57202505093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 457883.86008445494,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457857.44456177385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 276639.95259306754,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 276630.1622653522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 450460.3038501668,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450448.75130072783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2231442.5776699507,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2231232.0388349546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 911482.3509615524,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 911427.3076923073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2964927.144694668,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2964787.781350475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3210.5967189738453,
            "unit": "ns/iter",
            "extra": "iterations: 241266\ncpu: 3210.4092578316026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15029.594521980296,
            "unit": "ns/iter",
            "extra": "iterations: 55458\ncpu: 15028.40347650474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12129.598467432843,
            "unit": "ns/iter",
            "extra": "iterations: 67860\ncpu: 12129.086354258747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11436.997266120039,
            "unit": "ns/iter",
            "extra": "iterations: 71693\ncpu: 11436.682800273396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12232.604915327864,
            "unit": "ns/iter",
            "extra": "iterations: 67259\ncpu: 12232.077491488139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34968.92735204059,
            "unit": "ns/iter",
            "extra": "iterations: 23841\ncpu: 34966.39822155121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 576565.524252554,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 576540.3322259123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 469083.09729729267,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 469073.02702702646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 465302.5701284457,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 465288.7580299791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 468115.99412710173,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 468104.32461291907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 271256.7153102663,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 271249.36077330785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 460715.0189473798,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 460705.31578947126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2256337.975308674,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2256217.5308642117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 884209.5560882477,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 884192.5215723913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3312.264321110255,
            "unit": "ns/iter",
            "extra": "iterations: 244377\ncpu: 3312.1594912778255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14895.064460213145,
            "unit": "ns/iter",
            "extra": "iterations: 55383\ncpu: 14894.718595959086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11749.563857341724,
            "unit": "ns/iter",
            "extra": "iterations: 70266\ncpu: 11749.156064099241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11143.492823488543,
            "unit": "ns/iter",
            "extra": "iterations: 73434\ncpu: 11143.349129830893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11832.433471694074,
            "unit": "ns/iter",
            "extra": "iterations: 69384\ncpu: 11831.978554133568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35617.364327509866,
            "unit": "ns/iter",
            "extra": "iterations: 23413\ncpu: 35616.089352069444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 563306.6353092856,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 563275.5154639138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 458876.93130575254,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 458856.89564761386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 458711.22955978854,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 458702.8825995819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 460013.85044758924,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 459998.3149025785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 271259.09032060136,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 271246.5474722565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 449635.0991313064,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 449617.06693919224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 367.69504935777337,
            "unit": "ns/iter",
            "extra": "iterations: 1896966\ncpu: 367.66473410699115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1744.5351029360158,
            "unit": "ns/iter",
            "extra": "iterations: 401220\ncpu: 1744.4554109964613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1347.4671505780645,
            "unit": "ns/iter",
            "extra": "iterations: 520481\ncpu: 1347.3817488054378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1392.8061410081787,
            "unit": "ns/iter",
            "extra": "iterations: 503077\ncpu: 1392.7398787859559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1212.4202893033469,
            "unit": "ns/iter",
            "extra": "iterations: 577940\ncpu: 1212.3640862373184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6620.235359063184,
            "unit": "ns/iter",
            "extra": "iterations: 105970\ncpu: 6620.0047183165325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24266.361756031747,
            "unit": "ns/iter",
            "extra": "iterations: 28815\ncpu: 24266.08710740898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5728.884242240709,
            "unit": "ns/iter",
            "extra": "iterations: 122143\ncpu: 5728.558329171512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5721.220216902097,
            "unit": "ns/iter",
            "extra": "iterations: 122452\ncpu: 5720.951883186871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5731.089541125487,
            "unit": "ns/iter",
            "extra": "iterations: 122212\ncpu: 5730.8103950512905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11201.809354762092,
            "unit": "ns/iter",
            "extra": "iterations: 62535\ncpu: 11201.608699128552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10796.819628891582,
            "unit": "ns/iter",
            "extra": "iterations: 64833\ncpu: 10796.693042123477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3635.231881040865,
            "unit": "ns/iter",
            "extra": "iterations: 192133\ncpu: 3635.122545320218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18172.06798697082,
            "unit": "ns/iter",
            "extra": "iterations: 38375\ncpu: 18171.528338762044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14742.368394688907,
            "unit": "ns/iter",
            "extra": "iterations: 47916\ncpu: 14741.10526755141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14446.173609962565,
            "unit": "ns/iter",
            "extra": "iterations: 48344\ncpu: 14445.48651332134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 15026.659439542,
            "unit": "ns/iter",
            "extra": "iterations: 46676\ncpu: 15025.79912588898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29635.356348094105,
            "unit": "ns/iter",
            "extra": "iterations: 23637\ncpu: 29634.230232262686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 120404.61334473993,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 120395.70573139424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101701.27185594472,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 101697.2262561715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101801.93770154608,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 101800.64497214933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 101082.1565040725,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 101075.82752613095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64227.430570799224,
            "unit": "ns/iter",
            "extra": "iterations: 10932\ncpu: 64225.62202707716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100039.1462196781,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 100035.90584878749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3561.7292130489213,
            "unit": "ns/iter",
            "extra": "iterations: 196734\ncpu: 3561.6568564660924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18153.095876801865,
            "unit": "ns/iter",
            "extra": "iterations: 38247\ncpu: 18152.252464245397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14506.787077218334,
            "unit": "ns/iter",
            "extra": "iterations: 48163\ncpu: 14506.504993459734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14236.21955497525,
            "unit": "ns/iter",
            "extra": "iterations: 49031\ncpu: 14235.911974057331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14758.49717824685,
            "unit": "ns/iter",
            "extra": "iterations: 47311\ncpu: 14757.644099680712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29261.425155708137,
            "unit": "ns/iter",
            "extra": "iterations: 23923\ncpu: 29261.075115997242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119035.53735925921,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 119032.87273967799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99353.8322214336,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99352.7892122056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99694.93759795534,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 99690.01282234018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99813.70540424206,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99811.64979324216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64460.93321665697,
            "unit": "ns/iter",
            "extra": "iterations: 10856\ncpu: 64460.33529845173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 99942.76918678211,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 99940.80320137179 ns\nthreads: 1"
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
        "date": 1705576266005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 815.0022704394871,
            "unit": "ns/iter",
            "extra": "iterations: 859305\ncpu: 814.9776854551062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14147.736417069886,
            "unit": "ns/iter",
            "extra": "iterations: 58695\ncpu: 14147.448675355654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30431.988765691665,
            "unit": "ns/iter",
            "extra": "iterations: 27327\ncpu: 30431.423134628752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46905.222487767875,
            "unit": "ns/iter",
            "extra": "iterations: 17992\ncpu: 46903.11249444197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51219.278100006704,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51215.23000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60448.50806981511,
            "unit": "ns/iter",
            "extra": "iterations: 13693\ncpu: 60443.394435112816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 74147.39594503857,
            "unit": "ns/iter",
            "extra": "iterations: 11936\ncpu: 74142.48491957107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85192.89731360774,
            "unit": "ns/iter",
            "extra": "iterations: 10274\ncpu: 85190.71442476149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97671.03268482254,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 97667.71539744307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 677.2811071585794,
            "unit": "ns/iter",
            "extra": "iterations: 1037864\ncpu: 677.2659038178411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 563.4104119263396,
            "unit": "ns/iter",
            "extra": "iterations: 1245975\ncpu: 563.4031982985225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 558.6842838602608,
            "unit": "ns/iter",
            "extra": "iterations: 1255970\ncpu: 558.6656528420268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 558.5205019920918,
            "unit": "ns/iter",
            "extra": "iterations: 1246952\ncpu: 558.519493934008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 996.5894349319916,
            "unit": "ns/iter",
            "extra": "iterations: 702712\ncpu: 996.5745568597105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3306.8666802125854,
            "unit": "ns/iter",
            "extra": "iterations: 241157\ncpu: 3306.8221117363323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15220.155484717821,
            "unit": "ns/iter",
            "extra": "iterations: 53330\ncpu: 15219.84436527283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12272.943722076823,
            "unit": "ns/iter",
            "extra": "iterations: 69832\ncpu: 12266.840417000816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11302.142515536883,
            "unit": "ns/iter",
            "extra": "iterations: 74020\ncpu: 11301.740070251259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12212.283430297277,
            "unit": "ns/iter",
            "extra": "iterations: 66863\ncpu: 12211.75238921375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36228.31380134628,
            "unit": "ns/iter",
            "extra": "iterations: 23005\ncpu: 36228.23299282759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 568548.0904977199,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 568513.574660633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 458664.3542435475,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 458630.57459146075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 456602.1857519834,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 456589.7625329817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 457119.15335460193,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 457100.79872204474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 277722.07375479507,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 277701.4687100884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 450604.13005182263,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 450581.1398963742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2243267.9217604734,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2243114.914425428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 913585.8166023635,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 913538.5135135148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2969778.445161307,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2969514.516129032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3303.0914220034683,
            "unit": "ns/iter",
            "extra": "iterations: 247960\ncpu: 3303.085981609936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15290.280893624891,
            "unit": "ns/iter",
            "extra": "iterations: 53490\ncpu: 15289.650401944242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12086.320895083232,
            "unit": "ns/iter",
            "extra": "iterations: 68016\ncpu: 12085.86656080917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11474.40376288532,
            "unit": "ns/iter",
            "extra": "iterations: 71594\ncpu: 11473.650026538513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11818.788397839307,
            "unit": "ns/iter",
            "extra": "iterations: 67022\ncpu: 11818.385007907873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36991.088381688984,
            "unit": "ns/iter",
            "extra": "iterations: 22301\ncpu: 36990.21120129132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 577005.0602249996,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 576994.8378557272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 469663.05339807505,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 469651.4023732483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 465614.9434876233,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 465609.20344456355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 461182.3578224282,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 461169.97885835316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 270763.9341859309,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 270763.34996880847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 454225.53814222454,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 454220.91333679145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2243085.644607845,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2243009.5588235143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 889687.0324428033,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 889670.8015267178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3282.642460686403,
            "unit": "ns/iter",
            "extra": "iterations: 244127\ncpu: 3282.575462771428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15423.123286647555,
            "unit": "ns/iter",
            "extra": "iterations: 53550\ncpu: 15422.954248366052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12136.354022277284,
            "unit": "ns/iter",
            "extra": "iterations: 67959\ncpu: 12135.97904618957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11523.691497261383,
            "unit": "ns/iter",
            "extra": "iterations: 71377\ncpu: 11523.546800790107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12328.208582624546,
            "unit": "ns/iter",
            "extra": "iterations: 66856\ncpu: 12328.036376690192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35860.51461588044,
            "unit": "ns/iter",
            "extra": "iterations: 23365\ncpu: 35860.16263642193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 566398.6521172116,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 566385.7980456001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 462750.07688229403,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 462749.04559915076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 459012.75343186693,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 459007.8669482559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 463024.00423054775,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 463015.2300370174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 275397.4558869714,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 275391.45996860205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 451284.00208223064,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 451277.8240499735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 371.098203569947,
            "unit": "ns/iter",
            "extra": "iterations: 1886408\ncpu: 371.0977688813878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1732.9727936545237,
            "unit": "ns/iter",
            "extra": "iterations: 403178\ncpu: 1732.9680686942324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1391.443484680157,
            "unit": "ns/iter",
            "extra": "iterations: 512047\ncpu: 1391.440629473464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1379.947216901802,
            "unit": "ns/iter",
            "extra": "iterations: 507492\ncpu: 1379.931112214582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1202.2463105146976,
            "unit": "ns/iter",
            "extra": "iterations: 581924\ncpu: 1202.2277823220911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6693.58048757315,
            "unit": "ns/iter",
            "extra": "iterations: 105215\ncpu: 6693.366915363785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 23102.37673805691,
            "unit": "ns/iter",
            "extra": "iterations: 30350\ncpu: 23102.10214168035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5716.296027025128,
            "unit": "ns/iter",
            "extra": "iterations: 122553\ncpu: 5716.218289230025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5731.575793453039,
            "unit": "ns/iter",
            "extra": "iterations: 122471\ncpu: 5731.49072025222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5701.057927623058,
            "unit": "ns/iter",
            "extra": "iterations: 122912\ncpu: 5700.988512106187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11738.394543811253,
            "unit": "ns/iter",
            "extra": "iterations: 59712\ncpu: 11738.139737406149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10760.396734117334,
            "unit": "ns/iter",
            "extra": "iterations: 65036\ncpu: 10760.178977796892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3654.642027918191,
            "unit": "ns/iter",
            "extra": "iterations: 191487\ncpu: 3654.590651062486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18248.271514048152,
            "unit": "ns/iter",
            "extra": "iterations: 38440\ncpu: 18248.04370447433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14602.29274146599,
            "unit": "ns/iter",
            "extra": "iterations: 47916\ncpu: 14602.256031388248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14441.90024038609,
            "unit": "ns/iter",
            "extra": "iterations: 48256\ncpu: 14441.866296419088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 15018.505768569501,
            "unit": "ns/iter",
            "extra": "iterations: 46632\ncpu: 15018.315748842133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29680.2039663686,
            "unit": "ns/iter",
            "extra": "iterations: 23548\ncpu: 29679.31034482764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121231.06469374085,
            "unit": "ns/iter",
            "extra": "iterations: 5812\ncpu: 121228.47556779058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 100562.83048211306,
            "unit": "ns/iter",
            "extra": "iterations: 6430\ncpu: 100560.03110419968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 100735.24499926099,
            "unit": "ns/iter",
            "extra": "iterations: 6849\ncpu: 100733.90275952673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100884.29192457678,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 100882.9278825398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64004.85143800184,
            "unit": "ns/iter",
            "extra": "iterations: 10918\ncpu: 64003.883495146656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 99018.53390666204,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 99016.66431693277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3632.8524649636865,
            "unit": "ns/iter",
            "extra": "iterations: 192944\ncpu: 3632.7763496143757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18036.728097299787,
            "unit": "ns/iter",
            "extra": "iterations: 38808\ncpu: 18036.502782931282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14342.564049036519,
            "unit": "ns/iter",
            "extra": "iterations: 48861\ncpu: 14342.385542661788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14245.94265043566,
            "unit": "ns/iter",
            "extra": "iterations: 49207\ncpu: 14245.76584632281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14728.507395172117,
            "unit": "ns/iter",
            "extra": "iterations: 47531\ncpu: 14728.343607330013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29222.063746352538,
            "unit": "ns/iter",
            "extra": "iterations: 23970\ncpu: 29221.64372131851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119698.97074922454,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 119698.68286007553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 100029.69448819578,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 100028.2748747328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99667.604932992,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99664.75620188161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99918.76117059548,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 99916.41684511144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64513.60698489264,
            "unit": "ns/iter",
            "extra": "iterations: 10852\ncpu: 64511.103943973416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 102486.03580053999,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 102476.04773405359 ns\nthreads: 1"
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
        "date": 1705774042222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 821.6366307679772,
            "unit": "ns/iter",
            "extra": "iterations: 852491\ncpu: 821.6209907201367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14168.232642020608,
            "unit": "ns/iter",
            "extra": "iterations: 58777\ncpu: 14168.06574000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30234.51083862427,
            "unit": "ns/iter",
            "extra": "iterations: 27402\ncpu: 30234.150791913013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46662.98138205099,
            "unit": "ns/iter",
            "extra": "iterations: 17134\ncpu: 46662.14544181158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52020.77559999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52020.48000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 62256.377711072186,
            "unit": "ns/iter",
            "extra": "iterations: 13325\ncpu: 62255.024390243874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73868.39148422708,
            "unit": "ns/iter",
            "extra": "iterations: 11602\ncpu: 73865.85933459748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84747.27923861693,
            "unit": "ns/iter",
            "extra": "iterations: 10192\ncpu: 84744.0247252747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96769.35184979849,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 96765.23719586708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 659.0847052080501,
            "unit": "ns/iter",
            "extra": "iterations: 1039818\ncpu: 659.0718760398441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 549.7623604478271,
            "unit": "ns/iter",
            "extra": "iterations: 1276673\ncpu: 549.7548706677442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 545.455985959426,
            "unit": "ns/iter",
            "extra": "iterations: 1282568\ncpu: 545.446245345275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 548.8168638238908,
            "unit": "ns/iter",
            "extra": "iterations: 1274871\ncpu: 548.8093305126558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1016.0338420799967,
            "unit": "ns/iter",
            "extra": "iterations: 687310\ncpu: 1016.0077694199117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3341.4621265234523,
            "unit": "ns/iter",
            "extra": "iterations: 238201\ncpu: 3341.4188017682586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15091.35218580228,
            "unit": "ns/iter",
            "extra": "iterations: 54122\ncpu: 15090.744983555676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12322.531618677645,
            "unit": "ns/iter",
            "extra": "iterations: 66369\ncpu: 12322.292033931499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10997.298465736249,
            "unit": "ns/iter",
            "extra": "iterations: 74042\ncpu: 10996.927419572692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12123.189885721162,
            "unit": "ns/iter",
            "extra": "iterations: 67904\ncpu: 12122.754182375102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35290.00334605868,
            "unit": "ns/iter",
            "extra": "iterations: 23311\ncpu: 35288.92797391801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 573533.4231266407,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 573506.3953488368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 456943.5129287548,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 456926.3852242751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 454793.4691744679,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 454774.8171368848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 455981.93287525116,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 455963.8477801271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 275638.67518940894,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 275634.69065656496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 451883.00156169164,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 451869.96356064436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2247441.9346245355,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2247374.8184019336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 881088.6275797358,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 881074.3902439028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2972480.581993617,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2972437.9421221907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3238.6430856355755,
            "unit": "ns/iter",
            "extra": "iterations: 242271\ncpu: 3238.5035765733487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15264.764706968663,
            "unit": "ns/iter",
            "extra": "iterations: 54209\ncpu: 15264.457931339799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12432.140259191243,
            "unit": "ns/iter",
            "extra": "iterations: 66206\ncpu: 12431.773555266835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11816.494668406862,
            "unit": "ns/iter",
            "extra": "iterations: 69679\ncpu: 11816.337777522707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12571.170250563797,
            "unit": "ns/iter",
            "extra": "iterations: 64734\ncpu: 12571.002873296862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35856.706140918825,
            "unit": "ns/iter",
            "extra": "iterations: 23205\ncpu: 35856.23357035131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 582342.6904602677,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 582323.8158772505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 478417.65731246414,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 478411.87263896427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 463182.6689728018,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 463168.7067589149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 463745.2920871222,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 463727.5092936795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 270191.02533992595,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 270187.6081582207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 454234.55170628254,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 454211.47880041326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2250389.830466838,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2250335.13513513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 869369.6642133904,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 869338.6384544587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3378.4546914850084,
            "unit": "ns/iter",
            "extra": "iterations: 241544\ncpu: 3378.3923425959465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14781.3655139122,
            "unit": "ns/iter",
            "extra": "iterations: 55924\ncpu: 14781.269222516328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12424.727034696305,
            "unit": "ns/iter",
            "extra": "iterations: 68364\ncpu: 12424.647475279397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11807.048519209915,
            "unit": "ns/iter",
            "extra": "iterations: 70199\ncpu: 11806.60550720093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12522.659495660993,
            "unit": "ns/iter",
            "extra": "iterations: 66146\ncpu: 12522.503250385513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35724.351410254894,
            "unit": "ns/iter",
            "extra": "iterations: 23400\ncpu: 35723.94444444463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 562865.8420711819,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 562849.1909385116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 459943.479581162,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 459937.6439790573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 456823.17398122733,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 456809.66562173516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 461535.4169311979,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 461522.59259259526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 272185.85175960645,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 272182.49766427936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 450794.89927307883,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 450774.5067497388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 376.40729691905915,
            "unit": "ns/iter",
            "extra": "iterations: 1859086\ncpu: 376.3997469724364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1757.363896561412,
            "unit": "ns/iter",
            "extra": "iterations: 399696\ncpu: 1757.3005484167893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1394.5003246433978,
            "unit": "ns/iter",
            "extra": "iterations: 500549\ncpu: 1394.4804604544154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1379.1292815392894,
            "unit": "ns/iter",
            "extra": "iterations: 507265\ncpu: 1379.0762224872597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1214.667397832244,
            "unit": "ns/iter",
            "extra": "iterations: 575793\ncpu: 1214.6521406130228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6901.347368111652,
            "unit": "ns/iter",
            "extra": "iterations: 102056\ncpu: 6901.308105353868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24068.91815327096,
            "unit": "ns/iter",
            "extra": "iterations: 28981\ncpu: 24068.482799075482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5735.474543842216,
            "unit": "ns/iter",
            "extra": "iterations: 121778\ncpu: 5735.400482845829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5732.664351814087,
            "unit": "ns/iter",
            "extra": "iterations: 122110\ncpu: 5732.435508967276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5753.014365141472,
            "unit": "ns/iter",
            "extra": "iterations: 121405\ncpu: 5752.940158972073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11678.271304203152,
            "unit": "ns/iter",
            "extra": "iterations: 59730\ncpu: 11678.20525698993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10707.344763159883,
            "unit": "ns/iter",
            "extra": "iterations: 65297\ncpu: 10706.859426926048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3644.482017347448,
            "unit": "ns/iter",
            "extra": "iterations: 192074\ncpu: 3644.467757218562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18047.310304932525,
            "unit": "ns/iter",
            "extra": "iterations: 38894\ncpu: 18046.752712500715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14533.337515579053,
            "unit": "ns/iter",
            "extra": "iterations: 48140\ncpu: 14533.186539260478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14359.31112798018,
            "unit": "ns/iter",
            "extra": "iterations: 48742\ncpu: 14358.815805670492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14956.972244150482,
            "unit": "ns/iter",
            "extra": "iterations: 46873\ncpu: 14956.759755083072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29877.91699418995,
            "unit": "ns/iter",
            "extra": "iterations: 23408\ncpu: 29876.65328092984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121068.12677521304,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 121066.38378939839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 102226.54318646237,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 102225.94105631778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101522.8047681299,
            "unit": "ns/iter",
            "extra": "iterations: 6879\ncpu: 101520.48262828914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 102002.50181764747,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 102001.22146284672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64744.309181421755,
            "unit": "ns/iter",
            "extra": "iterations: 10848\ncpu: 64741.64823008834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100801.06324909755,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 100799.8555956691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3557.3434165882277,
            "unit": "ns/iter",
            "extra": "iterations: 195704\ncpu: 3557.218043576006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18155.448997587373,
            "unit": "ns/iter",
            "extra": "iterations: 38557\ncpu: 18155.074305573744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14358.180860043485,
            "unit": "ns/iter",
            "extra": "iterations: 48579\ncpu: 14357.893328393033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14291.438197432033,
            "unit": "ns/iter",
            "extra": "iterations: 49019\ncpu: 14291.236051327178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14748.656913828903,
            "unit": "ns/iter",
            "extra": "iterations: 47405\ncpu: 14748.568716379998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29386.439661673376,
            "unit": "ns/iter",
            "extra": "iterations: 23882\ncpu: 29385.65865505359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119749.83250641727,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 119748.14371257585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99498.2785714293,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 99493.97142857005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99608.18112938236,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 99605.83273766913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99418.77587925573,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 99418.154634773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64582.05483900213,
            "unit": "ns/iter",
            "extra": "iterations: 10777\ncpu: 64580.18929201009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100511.85327412224,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 100510.41696518048 ns\nthreads: 1"
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
        "date": 1705775530391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 812.0260336419774,
            "unit": "ns/iter",
            "extra": "iterations: 850246\ncpu: 811.9735935246977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13899.528086321467,
            "unit": "ns/iter",
            "extra": "iterations: 59869\ncpu: 13898.358081811955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30109.18670576789,
            "unit": "ns/iter",
            "extra": "iterations: 27621\ncpu: 30116.903805075854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46764.79400466117,
            "unit": "ns/iter",
            "extra": "iterations: 17180\ncpu: 46763.090803259605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51650.395599995136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51646.98999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61285.40444908791,
            "unit": "ns/iter",
            "extra": "iterations: 13396\ncpu: 61281.4347566438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73511.92153391856,
            "unit": "ns/iter",
            "extra": "iterations: 11865\ncpu: 73508.66413822168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85194.83632793285,
            "unit": "ns/iter",
            "extra": "iterations: 10185\ncpu: 85193.18605792831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97248.71558917844,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 97247.30165795037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 675.9360585848885,
            "unit": "ns/iter",
            "extra": "iterations: 1036308\ncpu: 675.9149789444839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 565.2955689079669,
            "unit": "ns/iter",
            "extra": "iterations: 1236896\ncpu: 565.2626413215008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 555.8249588576789,
            "unit": "ns/iter",
            "extra": "iterations: 1260258\ncpu: 555.8329326217333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 558.4803438686696,
            "unit": "ns/iter",
            "extra": "iterations: 1254316\ncpu: 558.4847837387068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1012.6893112372807,
            "unit": "ns/iter",
            "extra": "iterations: 692793\ncpu: 1012.6466347090694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3414.447140897551,
            "unit": "ns/iter",
            "extra": "iterations: 238379\ncpu: 3414.353193863558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15736.781706186892,
            "unit": "ns/iter",
            "extra": "iterations: 51788\ncpu: 15736.512319456244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12433.252873564408,
            "unit": "ns/iter",
            "extra": "iterations: 65598\ncpu: 12432.64886124578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11836.3064289139,
            "unit": "ns/iter",
            "extra": "iterations: 68923\ncpu: 11835.757294371968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12459.903962088265,
            "unit": "ns/iter",
            "extra": "iterations: 64360\ncpu: 12459.429770043474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36085.424101169396,
            "unit": "ns/iter",
            "extra": "iterations: 23169\ncpu: 36083.72825758544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 558103.9072889793,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 558099.808184142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457476.105845196,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 457470.87941021495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 465875.9610666796,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 465875.19999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 459656.437072175,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 459650.3422854123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273620.5274102245,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 273607.6874606171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 449790.7692307889,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 449774.0644490648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2245262.516908042,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2245107.004830924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 876170.8356675722,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 876122.6890756289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2946811.605095712,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2946635.9872611444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3199.3730658810937,
            "unit": "ns/iter",
            "extra": "iterations: 243134\ncpu: 3199.2448608586274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14824.671290700024,
            "unit": "ns/iter",
            "extra": "iterations: 55435\ncpu: 14824.055199783541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11687.260082233926,
            "unit": "ns/iter",
            "extra": "iterations: 69801\ncpu: 11686.944313118753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11101.21154239435,
            "unit": "ns/iter",
            "extra": "iterations: 73347\ncpu: 11100.655786876143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12081.8838877908,
            "unit": "ns/iter",
            "extra": "iterations: 67874\ncpu: 12072.270678021061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35686.35801251737,
            "unit": "ns/iter",
            "extra": "iterations: 23326\ncpu: 35685.97273428794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 574161.8550724094,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 574152.2397891936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 468457.30294909596,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 468455.54959785496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 466160.78829787695,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 466145.8510638306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 465126.4802561506,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 465133.03094984236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 270781.25933933153,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 270784.96449521586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 453839.4726704951,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 453818.06350858766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2248584.2352943015,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2248501.715686283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 898029.9769452134,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 897985.7829010611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3235.9227774304563,
            "unit": "ns/iter",
            "extra": "iterations: 244773\ncpu: 3235.758028867572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14873.98561582679,
            "unit": "ns/iter",
            "extra": "iterations: 54991\ncpu: 14872.9701223836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11737.210064517078,
            "unit": "ns/iter",
            "extra": "iterations: 69750\ncpu: 11737.273118279623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11109.880205432466,
            "unit": "ns/iter",
            "extra": "iterations: 73601\ncpu: 11109.934647627078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11888.68892183688,
            "unit": "ns/iter",
            "extra": "iterations: 68793\ncpu: 11888.750308897714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36111.77635659247,
            "unit": "ns/iter",
            "extra": "iterations: 23220\ncpu: 36111.614987080015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 565052.5358758735,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 565055.7207498364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 459134.08027280873,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 459131.899265475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 469344.8913043827,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 469342.7889713702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 455172.43387349474,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 455174.9607945622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 271767.78765430226,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 271766.82098765427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 448154.21826622274,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 448150.4643962859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 370.0353388414744,
            "unit": "ns/iter",
            "extra": "iterations: 1884244\ncpu: 370.03869987113956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1693.9840815009516,
            "unit": "ns/iter",
            "extra": "iterations: 409712\ncpu: 1693.9511168821055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1362.1204625979974,
            "unit": "ns/iter",
            "extra": "iterations: 514226\ncpu: 1362.0904038302217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1358.1430788852128,
            "unit": "ns/iter",
            "extra": "iterations: 516687\ncpu: 1358.111971077257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1206.434609511437,
            "unit": "ns/iter",
            "extra": "iterations: 580222\ncpu: 1206.339642412727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6921.3987017589825,
            "unit": "ns/iter",
            "extra": "iterations: 101522\ncpu: 6920.9235436654335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 23856.431911919524,
            "unit": "ns/iter",
            "extra": "iterations: 29337\ncpu: 23855.039710945348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5658.1013179178235,
            "unit": "ns/iter",
            "extra": "iterations: 123680\ncpu: 5657.969760672691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5695.12924963262,
            "unit": "ns/iter",
            "extra": "iterations: 121687\ncpu: 5694.97645598962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5665.434378902646,
            "unit": "ns/iter",
            "extra": "iterations: 123314\ncpu: 5665.235901844052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11771.097701438062,
            "unit": "ns/iter",
            "extra": "iterations: 59733\ncpu: 11771.09303065322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10779.258978070491,
            "unit": "ns/iter",
            "extra": "iterations: 64936\ncpu: 10779.216459283127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3625.3910955394226,
            "unit": "ns/iter",
            "extra": "iterations: 193229\ncpu: 3625.4035367362103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18056.048181890514,
            "unit": "ns/iter",
            "extra": "iterations: 38749\ncpu: 18055.547239928976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14521.206872881134,
            "unit": "ns/iter",
            "extra": "iterations: 48073\ncpu: 14521.400786304108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14230.730781745553,
            "unit": "ns/iter",
            "extra": "iterations: 49172\ncpu: 14230.928170503386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14908.356490408332,
            "unit": "ns/iter",
            "extra": "iterations: 47185\ncpu: 14908.341633993807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29634.143232256316,
            "unit": "ns/iter",
            "extra": "iterations: 23612\ncpu: 29633.96578011159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121931.51565763018,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 121929.2971468358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101223.58479363464,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 101223.66401158633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 100010.24766690053,
            "unit": "ns/iter",
            "extra": "iterations: 6965\ncpu: 100008.1837760248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100846.95355190051,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 100848.2743744604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64097.70646720644,
            "unit": "ns/iter",
            "extra": "iterations: 10963\ncpu: 64097.24527957604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 101275.60891590422,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 101273.83123462097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3584.639167321001,
            "unit": "ns/iter",
            "extra": "iterations: 194841\ncpu: 3584.642862641888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18217.14755253955,
            "unit": "ns/iter",
            "extra": "iterations: 38305\ncpu: 18217.214462863714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14341.21991361392,
            "unit": "ns/iter",
            "extra": "iterations: 48851\ncpu: 14341.270393645867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14139.632827669047,
            "unit": "ns/iter",
            "extra": "iterations: 49440\ncpu: 14139.146440129525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14650.421633046913,
            "unit": "ns/iter",
            "extra": "iterations: 47788\ncpu: 14650.28668284908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29308.056948183854,
            "unit": "ns/iter",
            "extra": "iterations: 23776\ncpu: 29307.827220726223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119697.0331737426,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119698.51231190187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 100367.2878181177,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 100366.71432656547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99948.56263150323,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 99947.32781596307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 98887.54173139285,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 98887.95367885836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64319.54002576669,
            "unit": "ns/iter",
            "extra": "iterations: 10868\ncpu: 64319.52521162929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 99508.6846219355,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 99509.9914724274 ns\nthreads: 1"
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
        "date": 1705779061536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 787.0904904057014,
            "unit": "ns/iter",
            "extra": "iterations: 888713\ncpu: 787.063315153486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13836.536169646248,
            "unit": "ns/iter",
            "extra": "iterations: 60078\ncpu: 13836.162988115451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29584.739722626036,
            "unit": "ns/iter",
            "extra": "iterations: 28193\ncpu: 29583.949916645975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 47224.34269167155,
            "unit": "ns/iter",
            "extra": "iterations: 18130\ncpu: 47222.5758411473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51368.61810000255,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51367.470000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60442.722742350605,
            "unit": "ns/iter",
            "extra": "iterations: 13565\ncpu: 60441.444894950255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 74377.6550328724,
            "unit": "ns/iter",
            "extra": "iterations: 11862\ncpu: 74374.97892429605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84911.39468820748,
            "unit": "ns/iter",
            "extra": "iterations: 10279\ncpu: 84906.6543438078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96806.54103479415,
            "unit": "ns/iter",
            "extra": "iterations: 8968\ncpu: 96800.81400535234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 666.0833851262574,
            "unit": "ns/iter",
            "extra": "iterations: 1057095\ncpu: 666.0688017633232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 550.1477638583735,
            "unit": "ns/iter",
            "extra": "iterations: 1268815\ncpu: 550.1270082714975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 550.0305358167275,
            "unit": "ns/iter",
            "extra": "iterations: 1276108\ncpu: 550.010187225532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 554.6594673376673,
            "unit": "ns/iter",
            "extra": "iterations: 1265905\ncpu: 554.6446218318122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1012.0188320337776,
            "unit": "ns/iter",
            "extra": "iterations: 694455\ncpu: 1011.9876737873601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3329.7000786444482,
            "unit": "ns/iter",
            "extra": "iterations: 237779\ncpu: 3329.6556886857147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14267.708712820071,
            "unit": "ns/iter",
            "extra": "iterations: 56985\ncpu: 14267.333508818116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11930.981949561718,
            "unit": "ns/iter",
            "extra": "iterations: 70026\ncpu: 11930.277325564783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11441.82523661926,
            "unit": "ns/iter",
            "extra": "iterations: 71634\ncpu: 11441.037775358058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12059.875237134356,
            "unit": "ns/iter",
            "extra": "iterations: 67472\ncpu: 12059.457256343336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35859.15237339167,
            "unit": "ns/iter",
            "extra": "iterations: 22668\ncpu: 35817.00635256735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 572756.2112402808,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 572725.6459948327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457459.9984152282,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 457444.3740095083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 457246.5158562178,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 457227.27272727265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 459760.58527543757,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 459747.13983050874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 275204.65580510674,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 275197.24770642247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 450358.1940841088,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 450339.6990140112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2237060.6908211177,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2236842.7536231847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 877357.6903647968,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 877327.8765201111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2957238.881410335,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2957153.205128198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3326.485508434962,
            "unit": "ns/iter",
            "extra": "iterations: 243866\ncpu: 3326.276725742817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15012.105073061626,
            "unit": "ns/iter",
            "extra": "iterations: 54543\ncpu: 15011.684359129471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12394.557212729254,
            "unit": "ns/iter",
            "extra": "iterations: 66244\ncpu: 12394.04625324558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11759.301815312823,
            "unit": "ns/iter",
            "extra": "iterations: 69685\ncpu: 11759.098801750753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12543.830366799186,
            "unit": "ns/iter",
            "extra": "iterations: 64722\ncpu: 12543.434998918481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35013.84992564451,
            "unit": "ns/iter",
            "extra": "iterations: 23535\ncpu: 35013.14637773508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 579535.1714285641,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 579518.6710963445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 471087.5217859631,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 471061.00053792447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 467253.54521130375,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 467237.56019261555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 466192.5058448305,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 466166.5781083941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 268977.8221049343,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 268974.8835765298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 456250.4374675483,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 456239.0243902423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2243103.1277640923,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2242841.2776412857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 886310.0218423002,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 886258.4045584074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3258.622217113529,
            "unit": "ns/iter",
            "extra": "iterations: 243587\ncpu: 3258.4587847463154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14763.92671082559,
            "unit": "ns/iter",
            "extra": "iterations: 56011\ncpu: 14763.275070968179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12100.088124017066,
            "unit": "ns/iter",
            "extra": "iterations: 67927\ncpu: 12099.238888807033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11504.445572019298,
            "unit": "ns/iter",
            "extra": "iterations: 71737\ncpu: 11503.834841155844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12267.578488937716,
            "unit": "ns/iter",
            "extra": "iterations: 66933\ncpu: 12266.544156096492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35727.50059798577,
            "unit": "ns/iter",
            "extra": "iterations: 23412\ncpu: 35725.76883649408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 565035.9158031218,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564991.7746113952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 462112.6846846443,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 462086.00953895116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 458698.64850710024,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 458674.9607124151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 462695.8133616145,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 462653.0752916228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 275643.1829613263,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 275630.5564287956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 448898.87100107176,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 448866.46026831947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 376.21787762125695,
            "unit": "ns/iter",
            "extra": "iterations: 1868347\ncpu: 376.191574691426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1722.6688921025645,
            "unit": "ns/iter",
            "extra": "iterations: 400371\ncpu: 1722.5887988890215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1342.4008646933605,
            "unit": "ns/iter",
            "extra": "iterations: 522266\ncpu: 1342.3856808599394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1356.616756419829,
            "unit": "ns/iter",
            "extra": "iterations: 526258\ncpu: 1356.5085946436886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1210.4416067650313,
            "unit": "ns/iter",
            "extra": "iterations: 575666\ncpu: 1210.4056866307897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7019.364531389342,
            "unit": "ns/iter",
            "extra": "iterations: 101673\ncpu: 7019.124054567096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21821.644908778067,
            "unit": "ns/iter",
            "extra": "iterations: 32065\ncpu: 21821.03227818513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5732.0654791153065,
            "unit": "ns/iter",
            "extra": "iterations: 122100\ncpu: 5732.0073710073075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5741.221805004411,
            "unit": "ns/iter",
            "extra": "iterations: 121972\ncpu: 5740.965139540233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5709.2449949685115,
            "unit": "ns/iter",
            "extra": "iterations: 122227\ncpu: 5709.114189172612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11700.373933268362,
            "unit": "ns/iter",
            "extra": "iterations: 59762\ncpu: 11700.030119473788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10735.92199451371,
            "unit": "ns/iter",
            "extra": "iterations: 65239\ncpu: 10735.613666671943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3614.277116074945,
            "unit": "ns/iter",
            "extra": "iterations: 193944\ncpu: 3614.1638823578405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18118.577676055324,
            "unit": "ns/iter",
            "extra": "iterations: 38667\ncpu: 18117.764502030295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14496.772878830501,
            "unit": "ns/iter",
            "extra": "iterations: 48287\ncpu: 14496.466957980472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14391.359519466165,
            "unit": "ns/iter",
            "extra": "iterations: 48779\ncpu: 14390.700916377737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14822.066559539604,
            "unit": "ns/iter",
            "extra": "iterations: 47296\ncpu: 14821.908829499178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29839.98797339177,
            "unit": "ns/iter",
            "extra": "iterations: 23448\ncpu: 29837.79853292388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 122436.59380467834,
            "unit": "ns/iter",
            "extra": "iterations: 5714\ncpu: 122434.02170108355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 103041.28525169696,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 103035.5755078014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 102758.30229140875,
            "unit": "ns/iter",
            "extra": "iterations: 6808\ncpu: 102755.02350176313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 102819.44627128693,
            "unit": "ns/iter",
            "extra": "iterations: 6812\ncpu: 102818.33529066437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 65269.56743970503,
            "unit": "ns/iter",
            "extra": "iterations: 10780\ncpu: 65144.63821892397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 101474.25924315734,
            "unit": "ns/iter",
            "extra": "iterations: 6897\ncpu: 101471.75583587051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3573.4342213395407,
            "unit": "ns/iter",
            "extra": "iterations: 195907\ncpu: 3573.181152281397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18163.316841449676,
            "unit": "ns/iter",
            "extra": "iterations: 38524\ncpu: 18162.93219811017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14263.555721322291,
            "unit": "ns/iter",
            "extra": "iterations: 48931\ncpu: 14263.278902944778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14273.276520539004,
            "unit": "ns/iter",
            "extra": "iterations: 49226\ncpu: 14272.35607199431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14720.316183134035,
            "unit": "ns/iter",
            "extra": "iterations: 47463\ncpu: 14719.46779596744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29405.46536150721,
            "unit": "ns/iter",
            "extra": "iterations: 23803\ncpu: 29403.98689240853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119950.9264705885,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119942.40766073762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99689.79862799661,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 99682.53537230109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 100573.82042456951,
            "unit": "ns/iter",
            "extra": "iterations: 6972\ncpu: 100566.63798049213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 100377.51832611783,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 100374.45887445848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 65007.5391820488,
            "unit": "ns/iter",
            "extra": "iterations: 10783\ncpu: 65004.30306964712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100672.36173887926,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 100664.83374118296 ns\nthreads: 1"
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
        "date": 1705954209250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 810.7964626467866,
            "unit": "ns/iter",
            "extra": "iterations: 859965\ncpu: 810.790787997186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13828.668531539897,
            "unit": "ns/iter",
            "extra": "iterations: 59164\ncpu: 13828.429450341424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29696.56815033216,
            "unit": "ns/iter",
            "extra": "iterations: 28151\ncpu: 29695.847394408727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46852.12772083489,
            "unit": "ns/iter",
            "extra": "iterations: 17366\ncpu: 46850.547045951884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51482.428999997865,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51481.46000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60840.335276968995,
            "unit": "ns/iter",
            "extra": "iterations: 13720\ncpu: 60838.746355685114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73045.79382830184,
            "unit": "ns/iter",
            "extra": "iterations: 11893\ncpu: 73043.83250651644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84593.44446619072,
            "unit": "ns/iter",
            "extra": "iterations: 10219\ncpu: 84591.39837557488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97060.01783326073,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 97056.41997325013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 675.2862818972644,
            "unit": "ns/iter",
            "extra": "iterations: 1035668\ncpu: 675.2712259140947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 562.2305981092912,
            "unit": "ns/iter",
            "extra": "iterations: 1246528\ncpu: 562.1940301381112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 550.3127334143359,
            "unit": "ns/iter",
            "extra": "iterations: 1275361\ncpu: 550.3150088484753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 551.1712265765836,
            "unit": "ns/iter",
            "extra": "iterations: 1270895\ncpu: 551.1537145082794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1003.641493437717,
            "unit": "ns/iter",
            "extra": "iterations: 697103\ncpu: 1003.6013329450597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3310.936891062813,
            "unit": "ns/iter",
            "extra": "iterations: 240378\ncpu: 3310.809225469889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15462.353045755273,
            "unit": "ns/iter",
            "extra": "iterations: 53435\ncpu: 15461.80218957613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13116.569297056396,
            "unit": "ns/iter",
            "extra": "iterations: 62665\ncpu: 13115.983403813927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11807.063270824656,
            "unit": "ns/iter",
            "extra": "iterations: 69163\ncpu: 11806.640833971916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12784.943075575442,
            "unit": "ns/iter",
            "extra": "iterations: 62785\ncpu: 12784.445329298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36002.493322923925,
            "unit": "ns/iter",
            "extra": "iterations: 23064\ncpu: 36000.52462712456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 565911.8083601252,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 565897.4276527325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457481.84330336115,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 457470.51349920675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 451783.53910325037,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 451768.66527632996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 458808.0612460469,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 458792.02745512215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273380.6105860293,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 273376.43352236843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 451419.80509355996,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 451405.45738045697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2243227.2815535725,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2243129.368932045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 898960.9097889176,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 898949.8080614213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2961431.677316325,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2961379.872204474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3323.9724188827604,
            "unit": "ns/iter",
            "extra": "iterations: 239838\ncpu: 3323.9565873631445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15306.893466093443,
            "unit": "ns/iter",
            "extra": "iterations: 54133\ncpu: 15306.847948571103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12033.071732504004,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 12033.145364331012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11493.20141184921,
            "unit": "ns/iter",
            "extra": "iterations: 71679\ncpu: 11493.258834526092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12108.784287474107,
            "unit": "ns/iter",
            "extra": "iterations: 65731\ncpu: 12108.852748322694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35465.32974434163,
            "unit": "ns/iter",
            "extra": "iterations: 23312\ncpu: 35464.885037748725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 574186.2677988274,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 574189.0267798817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 466489.76066100766,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 466487.366737741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 464149.7377048914,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 464142.72871496785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 462908.1379673666,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 462910.5845181683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 271688.8964982935,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 271685.34242330334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 455525.73883700836,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 455523.8317757036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2251215.4240196063,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2251180.392156862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 896832.3624999314,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 896820.9615384641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3275.991252697856,
            "unit": "ns/iter",
            "extra": "iterations: 246476\ncpu: 3275.8840617342125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15227.025450846415,
            "unit": "ns/iter",
            "extra": "iterations: 54065\ncpu: 15226.610561361444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12018.021692006605,
            "unit": "ns/iter",
            "extra": "iterations: 68274\ncpu: 12018.085947798563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11418.497697774346,
            "unit": "ns/iter",
            "extra": "iterations: 71887\ncpu: 11418.32041954726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12088.184419901276,
            "unit": "ns/iter",
            "extra": "iterations: 67997\ncpu: 12088.1744782858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35259.93124199502,
            "unit": "ns/iter",
            "extra": "iterations: 23430\ncpu: 35259.231754161236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 564071.005161285,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 564050.5806451623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 460479.66771988355,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 460466.0347551317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 467178.2871391197,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 467160.20997375227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 458591.483649744,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 458569.83122363035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 272483.8449660162,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 272472.42124768527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 451543.4068930152,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 451527.3662551456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 370.63110827688064,
            "unit": "ns/iter",
            "extra": "iterations: 1881750\ncpu: 370.6124086621499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1737.9030548449982,
            "unit": "ns/iter",
            "extra": "iterations: 402279\ncpu: 1737.8148001760119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1373.0188597170804,
            "unit": "ns/iter",
            "extra": "iterations: 510347\ncpu: 1372.9495813632675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1379.708207841553,
            "unit": "ns/iter",
            "extra": "iterations: 508002\ncpu: 1379.6530328620825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1199.1669737010004,
            "unit": "ns/iter",
            "extra": "iterations: 584625\ncpu: 1199.1013042548586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6928.835490343157,
            "unit": "ns/iter",
            "extra": "iterations: 101684\ncpu: 6928.797057550846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24155.361821499155,
            "unit": "ns/iter",
            "extra": "iterations: 29053\ncpu: 24155.467593707905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5736.257266203765,
            "unit": "ns/iter",
            "extra": "iterations: 122072\ncpu: 5735.98859689371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5715.467236723033,
            "unit": "ns/iter",
            "extra": "iterations: 122561\ncpu: 5715.203041750672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5737.405994951721,
            "unit": "ns/iter",
            "extra": "iterations: 122036\ncpu: 5737.060375626849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10611.592033612404,
            "unit": "ns/iter",
            "extra": "iterations: 65927\ncpu: 10611.520317927407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10694.392309339015,
            "unit": "ns/iter",
            "extra": "iterations: 65456\ncpu: 10694.214434123709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3633.4932072537376,
            "unit": "ns/iter",
            "extra": "iterations: 193000\ncpu: 3633.4860103626684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18191.405705232504,
            "unit": "ns/iter",
            "extra": "iterations: 38491\ncpu: 18191.018679691486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14532.791595978511,
            "unit": "ns/iter",
            "extra": "iterations: 48334\ncpu: 14532.06024744478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14320.45035721465,
            "unit": "ns/iter",
            "extra": "iterations: 48990\ncpu: 14319.734639722183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14893.43748273128,
            "unit": "ns/iter",
            "extra": "iterations: 47051\ncpu: 14892.59314361019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29749.311245318182,
            "unit": "ns/iter",
            "extra": "iterations: 23512\ncpu: 29747.745831915403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 120046.12281303569,
            "unit": "ns/iter",
            "extra": "iterations: 5830\ncpu: 120040.27444253945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101225.47209804773,
            "unit": "ns/iter",
            "extra": "iterations: 6935\ncpu: 101221.78803172162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101075.69992770541,
            "unit": "ns/iter",
            "extra": "iterations: 6915\ncpu: 101073.94070860399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100991.77097146033,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 100986.43701354694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 63807.137310171944,
            "unit": "ns/iter",
            "extra": "iterations: 10997\ncpu: 63803.00991179378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100469.71551353611,
            "unit": "ns/iter",
            "extra": "iterations: 6981\ncpu: 100462.89929809613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3553.87223140992,
            "unit": "ns/iter",
            "extra": "iterations: 197122\ncpu: 3553.6733596452445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18232.805845674302,
            "unit": "ns/iter",
            "extra": "iterations: 38490\ncpu: 18231.945959989724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14456.812989690137,
            "unit": "ns/iter",
            "extra": "iterations: 48500\ncpu: 14456.342268041115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14107.39959403136,
            "unit": "ns/iter",
            "extra": "iterations: 49265\ncpu: 14107.333806962264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14737.460698965635,
            "unit": "ns/iter",
            "extra": "iterations: 47556\ncpu: 14737.385398267183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29238.693330554277,
            "unit": "ns/iter",
            "extra": "iterations: 23990\ncpu: 29238.63693205483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119876.92426320087,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 119874.82864975798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 100468.13735485043,
            "unit": "ns/iter",
            "extra": "iterations: 7062\ncpu: 100462.85754743729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99181.30007066434,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 99174.81272084756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 98711.86877637956,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 98706.28691982983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 63894.1854170558,
            "unit": "ns/iter",
            "extra": "iterations: 10862\ncpu: 63892.39550727245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 99518.70308720165,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 99518.55171432557 ns\nthreads: 1"
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
        "date": 1705955638443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 818.1376697155241,
            "unit": "ns/iter",
            "extra": "iterations: 852308\ncpu: 818.1211486927263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13877.976522763816,
            "unit": "ns/iter",
            "extra": "iterations: 55245\ncpu: 13877.887591637254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30138.56524302593,
            "unit": "ns/iter",
            "extra": "iterations: 27137\ncpu: 30138.674134944908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46839.9262314226,
            "unit": "ns/iter",
            "extra": "iterations: 17094\ncpu: 46840.06669006668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51822.4866999958,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51821.870000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61117.5722176655,
            "unit": "ns/iter",
            "extra": "iterations: 13397\ncpu: 61115.22728969175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73064.48533088106,
            "unit": "ns/iter",
            "extra": "iterations: 11998\ncpu: 73064.60243373894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84225.43423475165,
            "unit": "ns/iter",
            "extra": "iterations: 10317\ncpu: 84222.56469904038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97842.77482639825,
            "unit": "ns/iter",
            "extra": "iterations: 9073\ncpu: 97839.47977515716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 672.5425204400854,
            "unit": "ns/iter",
            "extra": "iterations: 1030328\ncpu: 672.5168101808353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 564.8867258121321,
            "unit": "ns/iter",
            "extra": "iterations: 1228497\ncpu: 564.8568128371504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 556.389107705607,
            "unit": "ns/iter",
            "extra": "iterations: 1255236\ncpu: 556.3683641960541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 562.3188448739287,
            "unit": "ns/iter",
            "extra": "iterations: 1255482\ncpu: 562.3036411513657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1009.5566579432291,
            "unit": "ns/iter",
            "extra": "iterations: 695057\ncpu: 1009.5400808854545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.7825195625987,
            "unit": "ns/iter",
            "extra": "iterations: 239994\ncpu: 3258.797719943003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15809.332521975457,
            "unit": "ns/iter",
            "extra": "iterations: 51765\ncpu: 15809.303583502355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12477.80414936607,
            "unit": "ns/iter",
            "extra": "iterations: 65504\ncpu: 12477.740290669253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11955.170750628908,
            "unit": "ns/iter",
            "extra": "iterations: 68316\ncpu: 11955.20375900231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12455.232538538838,
            "unit": "ns/iter",
            "extra": "iterations: 65258\ncpu: 12455.275981488852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35807.17754546264,
            "unit": "ns/iter",
            "extra": "iterations: 22383\ncpu: 35806.826609480486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 561563.143984214,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 561557.133464826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 456026.619275856,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 456022.31096911564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 458384.53616348025,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 458385.48218029283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 463820.52547770087,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 463817.9936305745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 278350.6442092055,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 278349.11774141865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 456622.65491843666,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 456617.1488690156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2231450.5975904777,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2231360.9638554235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 899556.7622242697,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 899513.422818795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2959662.223641959,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2959565.4952076683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3310.9900395414697,
            "unit": "ns/iter",
            "extra": "iterations: 239748\ncpu: 3310.8401321387414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15467.124915611115,
            "unit": "ns/iter",
            "extra": "iterations: 53324\ncpu: 15466.90420823645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12346.429634527583,
            "unit": "ns/iter",
            "extra": "iterations: 65039\ncpu: 12345.723335229592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10923.260368693276,
            "unit": "ns/iter",
            "extra": "iterations: 75781\ncpu: 10922.917353954119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11842.788694127128,
            "unit": "ns/iter",
            "extra": "iterations: 68460\ncpu: 11842.512416009322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35733.19988972473,
            "unit": "ns/iter",
            "extra": "iterations: 23578\ncpu: 35733.33191958602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 582535.1878746873,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 582532.5782811488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 469448.7504042813,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 469449.2183288406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 465677.36260772694,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 465678.9870689668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 464155.3479656814,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 464149.41113490274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 273471.77462181274,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 273470.85520222195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 463041.0753637896,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 463042.4116424108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2254401.7058823095,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2254382.107843127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 879432.3282732707,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 879424.7628083492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3282.9689525381195,
            "unit": "ns/iter",
            "extra": "iterations: 243627\ncpu: 3282.958785356311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15481.821184998442,
            "unit": "ns/iter",
            "extra": "iterations: 53519\ncpu: 15481.869990096946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12048.441989845514,
            "unit": "ns/iter",
            "extra": "iterations: 67945\ncpu: 12048.468614320416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11356.249605356712,
            "unit": "ns/iter",
            "extra": "iterations: 73484\ncpu: 11356.22040172016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12098.758043510663,
            "unit": "ns/iter",
            "extra": "iterations: 67570\ncpu: 12098.780523901074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35585.337637266646,
            "unit": "ns/iter",
            "extra": "iterations: 23312\ncpu: 35585.706932052206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 564652.3151476574,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 564654.364569965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 459840.5578124816,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 459839.3229166664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 458694.9123173428,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 458696.97286012536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 461119.3515957056,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 461116.3297872341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 271658.5379548253,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 271655.5520702641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 450886.8168137032,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 450888.2719252743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 367.5748767456112,
            "unit": "ns/iter",
            "extra": "iterations: 1903989\ncpu: 367.5710311351576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1743.581938093619,
            "unit": "ns/iter",
            "extra": "iterations: 399991\ncpu: 1743.5714803582985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1372.9157653003683,
            "unit": "ns/iter",
            "extra": "iterations: 509042\ncpu: 1372.9199162348143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1427.9442049406534,
            "unit": "ns/iter",
            "extra": "iterations: 494309\ncpu: 1427.946891519284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1179.0331193005788,
            "unit": "ns/iter",
            "extra": "iterations: 585580\ncpu: 1179.035315413773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7043.370438780213,
            "unit": "ns/iter",
            "extra": "iterations: 99617\ncpu: 7043.371111356483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24204.50908590438,
            "unit": "ns/iter",
            "extra": "iterations: 29056\ncpu: 24204.553276431536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5779.543115535051,
            "unit": "ns/iter",
            "extra": "iterations: 121963\ncpu: 5779.466723514579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5810.1166037388375,
            "unit": "ns/iter",
            "extra": "iterations: 119979\ncpu: 5810.175947457494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5737.597490838826,
            "unit": "ns/iter",
            "extra": "iterations: 121714\ncpu: 5737.615229143764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11843.9727000995,
            "unit": "ns/iter",
            "extra": "iterations: 60220\ncpu: 11843.985386914617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10811.361461565284,
            "unit": "ns/iter",
            "extra": "iterations: 64123\ncpu: 10811.378132651313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3638.7747657899877,
            "unit": "ns/iter",
            "extra": "iterations: 193523\ncpu: 3638.786604176202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18037.1121856374,
            "unit": "ns/iter",
            "extra": "iterations: 38570\ncpu: 18037.311381903004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14770.050675674247,
            "unit": "ns/iter",
            "extra": "iterations: 47952\ncpu: 14769.97205538864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14474.489345793549,
            "unit": "ns/iter",
            "extra": "iterations: 48150\ncpu: 14474.51921079959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 15108.4625695932,
            "unit": "ns/iter",
            "extra": "iterations: 46700\ncpu: 15108.276231263386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29691.17109816865,
            "unit": "ns/iter",
            "extra": "iterations: 23694\ncpu: 29691.53372161704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121954.50373717253,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 121954.6323657199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101096.34774409763,
            "unit": "ns/iter",
            "extra": "iterations: 6893\ncpu: 101096.25707239164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101010.12702546231,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 101009.12905092596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 102826.70214958077,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 102826.72261484145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64197.008012980616,
            "unit": "ns/iter",
            "extra": "iterations: 10483\ncpu: 64197.10960602851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100782.26534859532,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 100782.51821019813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3533.07274581883,
            "unit": "ns/iter",
            "extra": "iterations: 198032\ncpu: 3533.1198998142063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18353.694986289072,
            "unit": "ns/iter",
            "extra": "iterations: 38654\ncpu: 18353.694313654323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14557.128347319034,
            "unit": "ns/iter",
            "extra": "iterations: 47426\ncpu: 14557.105806941396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14435.061032962147,
            "unit": "ns/iter",
            "extra": "iterations: 48056\ncpu: 14435.208922923306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14780.762953282929,
            "unit": "ns/iter",
            "extra": "iterations: 46687\ncpu: 14780.726968963401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29286.980830667835,
            "unit": "ns/iter",
            "extra": "iterations: 23475\ncpu: 29286.990415335127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119528.76483667197,
            "unit": "ns/iter",
            "extra": "iterations: 5847\ncpu: 119528.3222165223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 100593.39214011468,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 100594.48953438785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 100623.0860073149,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 100623.45787545775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 100949.26221843253,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 100949.2987675309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64652.246416442926,
            "unit": "ns/iter",
            "extra": "iterations: 10604\ncpu: 64652.09354960465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 99752.27916842779,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 99752.38297270634 ns\nthreads: 1"
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
        "date": 1705957475475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 807.7922530978966,
            "unit": "ns/iter",
            "extra": "iterations: 865120\ncpu: 807.7791520251526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14049.196694102238,
            "unit": "ns/iter",
            "extra": "iterations: 59046\ncpu: 14048.875453036613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30550.175064266306,
            "unit": "ns/iter",
            "extra": "iterations: 27230\ncpu: 30549.078222548666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 47089.20234142103,
            "unit": "ns/iter",
            "extra": "iterations: 17767\ncpu: 47087.64563516634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52317.71669999716,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52316.81999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 62025.46605190046,
            "unit": "ns/iter",
            "extra": "iterations: 13447\ncpu: 62023.30631367592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 75178.6356982939,
            "unit": "ns/iter",
            "extra": "iterations: 11614\ncpu: 75177.81126226965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 86720.23598199953,
            "unit": "ns/iter",
            "extra": "iterations: 10005\ncpu: 86716.76161919034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 99463.51505168872,
            "unit": "ns/iter",
            "extra": "iterations: 8803\ncpu: 99461.03601045108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 684.9603604361388,
            "unit": "ns/iter",
            "extra": "iterations: 1023094\ncpu: 684.9380408838272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 575.2382771823986,
            "unit": "ns/iter",
            "extra": "iterations: 1213872\ncpu: 575.2236644390842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 562.4392138044165,
            "unit": "ns/iter",
            "extra": "iterations: 1246204\ncpu: 562.4252530083359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 568.4447157986822,
            "unit": "ns/iter",
            "extra": "iterations: 1232911\ncpu: 568.4381922133881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1022.5386909362728,
            "unit": "ns/iter",
            "extra": "iterations: 685742\ncpu: 1022.4827996535138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3345.5144285550873,
            "unit": "ns/iter",
            "extra": "iterations: 237827\ncpu: 3345.471708426716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15300.15965102693,
            "unit": "ns/iter",
            "extra": "iterations: 54331\ncpu: 15299.747841931872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12724.7548961888,
            "unit": "ns/iter",
            "extra": "iterations: 64540\ncpu: 12724.411217849422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12118.250641990804,
            "unit": "ns/iter",
            "extra": "iterations: 67758\ncpu: 12117.767643673094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12717.512403872108,
            "unit": "ns/iter",
            "extra": "iterations: 63327\ncpu: 12717.136450487156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36052.31267691441,
            "unit": "ns/iter",
            "extra": "iterations: 22963\ncpu: 36051.52201367418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 558522.4420243725,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 558501.4093529793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457532.01695814956,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 457521.40964493866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 459177.8188976156,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 459164.5669291342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 458002.6364116525,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 457990.44854881265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 272517.3751568224,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 272512.9234629866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 449118.2718346057,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 449100.46511628065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2233344.738499041,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2233277.723970942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 904069.1323671917,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 904037.4879227035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2945776.3662419426,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2945694.2675159257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3391.408453807945,
            "unit": "ns/iter",
            "extra": "iterations: 240507\ncpu: 3391.28798745982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14697.150206427032,
            "unit": "ns/iter",
            "extra": "iterations: 55710\ncpu: 14696.573326153266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12174.025799598341,
            "unit": "ns/iter",
            "extra": "iterations: 68722\ncpu: 12173.648904281015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11644.0351752275,
            "unit": "ns/iter",
            "extra": "iterations: 69367\ncpu: 11643.638906108066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12611.21823587332,
            "unit": "ns/iter",
            "extra": "iterations: 64916\ncpu: 12610.465832768505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35321.80856658349,
            "unit": "ns/iter",
            "extra": "iterations: 23580\ncpu: 35319.58015267192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 573330.7094017084,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 573327.4819197903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 468307.1669341441,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 468296.36169074156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 463463.54734038305,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 463432.6063829783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 461920.97840969986,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 461902.4223275389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 272016.77147285966,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 272002.3255813945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 453164.20125131897,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 453147.28884254233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2241146.7635468873,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2241070.68965518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 889920.3142856918,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 889904.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3354.6292827159555,
            "unit": "ns/iter",
            "extra": "iterations: 241815\ncpu: 3354.4821454417893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14864.056191466774,
            "unit": "ns/iter",
            "extra": "iterations: 55738\ncpu: 14863.507840252558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12136.912202052501,
            "unit": "ns/iter",
            "extra": "iterations: 68259\ncpu: 12136.645717048234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11517.348364181371,
            "unit": "ns/iter",
            "extra": "iterations: 72074\ncpu: 11517.167078280654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12175.962639144733,
            "unit": "ns/iter",
            "extra": "iterations: 67825\ncpu: 12175.683007740505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35962.64291467043,
            "unit": "ns/iter",
            "extra": "iterations: 23591\ncpu: 35961.83714128262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 561438.7241157192,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 561416.0128617353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 457598.0820271378,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 457593.2601880871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 454772.2943925456,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 454766.40706126863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 457329.63251439086,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 457307.57971772243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 270848.8965730096,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 270841.9573942579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 448584.187371663,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 448579.72279260843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 376.8869937329102,
            "unit": "ns/iter",
            "extra": "iterations: 1860357\ncpu: 376.8787926188376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1769.7734520222346,
            "unit": "ns/iter",
            "extra": "iterations: 394870\ncpu: 1769.7601742345623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1354.1113030325164,
            "unit": "ns/iter",
            "extra": "iterations: 516994\ncpu: 1354.0899894389374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1393.5183067886078,
            "unit": "ns/iter",
            "extra": "iterations: 502737\ncpu: 1393.478299786967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1214.1010700905113,
            "unit": "ns/iter",
            "extra": "iterations: 575185\ncpu: 1214.0627798012697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6971.653553167162,
            "unit": "ns/iter",
            "extra": "iterations: 105413\ncpu: 6971.445647121336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 23017.341604686404,
            "unit": "ns/iter",
            "extra": "iterations: 30386\ncpu: 23016.945303758526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5724.629682867799,
            "unit": "ns/iter",
            "extra": "iterations: 122441\ncpu: 5724.5751014775005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5712.4098451737345,
            "unit": "ns/iter",
            "extra": "iterations: 122395\ncpu: 5712.340373381207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5711.106626002889,
            "unit": "ns/iter",
            "extra": "iterations: 122306\ncpu: 5710.938138766687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11730.31781623474,
            "unit": "ns/iter",
            "extra": "iterations: 59805\ncpu: 11729.751693002232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10789.219677942134,
            "unit": "ns/iter",
            "extra": "iterations: 64895\ncpu: 10789.123969489163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3675.5899771849563,
            "unit": "ns/iter",
            "extra": "iterations: 190665\ncpu: 3675.4852752209285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18009.521786156274,
            "unit": "ns/iter",
            "extra": "iterations: 38832\ncpu: 18009.157395962295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14458.173887055318,
            "unit": "ns/iter",
            "extra": "iterations: 48520\ncpu: 14457.858615004221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14344.709875025264,
            "unit": "ns/iter",
            "extra": "iterations: 48810\ncpu: 14344.298299528671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14867.68881148718,
            "unit": "ns/iter",
            "extra": "iterations: 47084\ncpu: 14867.470903066753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29971.36713943792,
            "unit": "ns/iter",
            "extra": "iterations: 23408\ncpu: 29970.920198222808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 120201.53225806919,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 120198.09540150945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101449.01395550722,
            "unit": "ns/iter",
            "extra": "iterations: 6879\ncpu: 101442.46256723408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101502.33613567418,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 101501.29004203687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100934.03134523946,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 100932.08532868879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 63927.04570283837,
            "unit": "ns/iter",
            "extra": "iterations: 10984\ncpu: 63926.32920611803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100611.98877697902,
            "unit": "ns/iter",
            "extra": "iterations: 6950\ncpu: 100609.59712230218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3634.3607981022656,
            "unit": "ns/iter",
            "extra": "iterations: 193108\ncpu: 3634.2937630756296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18182.315476653937,
            "unit": "ns/iter",
            "extra": "iterations: 38529\ncpu: 18181.686521840922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14441.463895373314,
            "unit": "ns/iter",
            "extra": "iterations: 48401\ncpu: 14441.07972975756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14439.905305838387,
            "unit": "ns/iter",
            "extra": "iterations: 48588\ncpu: 14439.30805960337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14738.237054982666,
            "unit": "ns/iter",
            "extra": "iterations: 47470\ncpu: 14737.739625026385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29435.065172601237,
            "unit": "ns/iter",
            "extra": "iterations: 23783\ncpu: 29434.59193541604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119286.61714871983,
            "unit": "ns/iter",
            "extra": "iterations: 5843\ncpu: 119282.3720691437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99137.50979001269,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 99136.01021566379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 100172.99842766944,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 100167.85305888965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99841.82738862622,
            "unit": "ns/iter",
            "extra": "iterations: 6981\ncpu: 99837.75963329115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64438.83592670984,
            "unit": "ns/iter",
            "extra": "iterations: 10861\ncpu: 64437.97072092904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100322.6853448208,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 100320.93390804641 ns\nthreads: 1"
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
        "date": 1705959086187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 797.2645627111606,
            "unit": "ns/iter",
            "extra": "iterations: 877395\ncpu: 797.2621225331808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13756.473380699459,
            "unit": "ns/iter",
            "extra": "iterations: 60520\ncpu: 13755.961665565103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 30098.731994085032,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 30096.768492804847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 47657.74423479834,
            "unit": "ns/iter",
            "extra": "iterations: 15741\ncpu: 47655.42214598819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51448.350799989836,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51448.209999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60898.68124817686,
            "unit": "ns/iter",
            "extra": "iterations: 13716\ncpu: 60897.06182560518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 74086.36728972157,
            "unit": "ns/iter",
            "extra": "iterations: 11770\ncpu: 74081.73322005104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84794.0973042113,
            "unit": "ns/iter",
            "extra": "iterations: 10164\ncpu: 84788.41991341987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97938.7764455461,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 97931.14074406099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 709.0928615070754,
            "unit": "ns/iter",
            "extra": "iterations: 1032753\ncpu: 709.0518255575154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 566.199077650697,
            "unit": "ns/iter",
            "extra": "iterations: 1227084\ncpu: 566.15602517839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 559.4688430656789,
            "unit": "ns/iter",
            "extra": "iterations: 1255162\ncpu: 559.4547158056093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 561.3147354406307,
            "unit": "ns/iter",
            "extra": "iterations: 1246790\ncpu: 561.2751144940199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1023.636943546872,
            "unit": "ns/iter",
            "extra": "iterations: 686940\ncpu: 1023.580516493435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3312.475117355311,
            "unit": "ns/iter",
            "extra": "iterations: 240509\ncpu: 3312.345899737641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15210.533301024721,
            "unit": "ns/iter",
            "extra": "iterations: 53647\ncpu: 15209.256808395605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12142.974679405552,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12141.94392023421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11461.333196547897,
            "unit": "ns/iter",
            "extra": "iterations: 70670\ncpu: 11460.307060987683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12074.886278041235,
            "unit": "ns/iter",
            "extra": "iterations: 66645\ncpu: 12074.239627879042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36027.79323617427,
            "unit": "ns/iter",
            "extra": "iterations: 23123\ncpu: 36025.0486528565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 578403.045747443,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 578303.3505154648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 455911.0190174705,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 455876.7564712091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 459979.1866104166,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 459891.30205587787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 455196.26478283247,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 455172.42281527974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273963.49890382274,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 273955.12057626114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 449232.8225220436,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 449209.39283860987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2250724.3009709404,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2250570.3883495135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 884602.582625131,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 884548.9140698779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2983369.819354897,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2983198.7096774275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3215.269841073484,
            "unit": "ns/iter",
            "extra": "iterations: 242124\ncpu: 3215.1191125208643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14867.59997088583,
            "unit": "ns/iter",
            "extra": "iterations: 54956\ncpu: 14866.89169517432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11722.974454235771,
            "unit": "ns/iter",
            "extra": "iterations: 69444\ncpu: 11722.562064397192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11117.528694639217,
            "unit": "ns/iter",
            "extra": "iterations: 73742\ncpu: 11117.310352309403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11890.23764484746,
            "unit": "ns/iter",
            "extra": "iterations: 68089\ncpu: 11889.919076502765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35561.43001105332,
            "unit": "ns/iter",
            "extra": "iterations: 23518\ncpu: 35559.460838506515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 580329.1712010757,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 580304.3132050444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 470217.5809575225,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 470189.77945131605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 467035.70506670076,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 467006.5066666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 468088.9194666937,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 468069.3333333352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 269325.50416537427,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 269309.3798210426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 457305.61502103304,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 457296.79621848575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2275502.9029852594,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2275378.1094527324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 884814.5592417935,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 884773.4597156402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3268.1802554604565,
            "unit": "ns/iter",
            "extra": "iterations: 247005\ncpu: 3268.069877127991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14784.147228056847,
            "unit": "ns/iter",
            "extra": "iterations: 54745\ncpu: 14783.227692026654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11680.991062289531,
            "unit": "ns/iter",
            "extra": "iterations: 69369\ncpu: 11680.625351381723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11046.26655071273,
            "unit": "ns/iter",
            "extra": "iterations: 73018\ncpu: 11045.861294475313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11967.57453332862,
            "unit": "ns/iter",
            "extra": "iterations: 67178\ncpu: 11967.587603084257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35729.90314158732,
            "unit": "ns/iter",
            "extra": "iterations: 23364\ncpu: 35727.96610169491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 565845.4440853305,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 565823.8526179699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 460857.50576519285,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 460849.16142557806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 457394.3058455151,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 457377.87056367163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 459832.535189061,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 459815.86134453746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 274069.9590443548,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 274060.13031337236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 449817.1322696475,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 449796.5002573364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 370.90883695964664,
            "unit": "ns/iter",
            "extra": "iterations: 1889066\ncpu: 370.89487609220663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1717.7815194758975,
            "unit": "ns/iter",
            "extra": "iterations: 407272\ncpu: 1717.7564379579392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1400.6620031267976,
            "unit": "ns/iter",
            "extra": "iterations: 499549\ncpu: 1400.6229619116411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1392.1433395001018,
            "unit": "ns/iter",
            "extra": "iterations: 500518\ncpu: 1392.0989854510742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1210.0779312096806,
            "unit": "ns/iter",
            "extra": "iterations: 578831\ncpu: 1210.027797405459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6964.409762828756,
            "unit": "ns/iter",
            "extra": "iterations: 100729\ncpu: 6964.188068977181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24135.62558083419,
            "unit": "ns/iter",
            "extra": "iterations: 29053\ncpu: 24134.90173131855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5697.018209037847,
            "unit": "ns/iter",
            "extra": "iterations: 122906\ncpu: 5696.992010154177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5679.1723599577945,
            "unit": "ns/iter",
            "extra": "iterations: 122981\ncpu: 5678.991063660245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5684.70361682416,
            "unit": "ns/iter",
            "extra": "iterations: 123202\ncpu: 5684.52216684794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11678.362877424124,
            "unit": "ns/iter",
            "extra": "iterations: 60012\ncpu: 11677.797773778495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10734.213187621343,
            "unit": "ns/iter",
            "extra": "iterations: 65243\ncpu: 10734.074153549034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3635.4722796892083,
            "unit": "ns/iter",
            "extra": "iterations: 191899\ncpu: 3635.3472399543602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18028.927048461414,
            "unit": "ns/iter",
            "extra": "iterations: 38834\ncpu: 18028.402945872458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14544.379820908893,
            "unit": "ns/iter",
            "extra": "iterations: 48020\ncpu: 14544.025406080898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14453.565524483649,
            "unit": "ns/iter",
            "extra": "iterations: 48562\ncpu: 14452.784069848865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14903.210277980983,
            "unit": "ns/iter",
            "extra": "iterations: 46838\ncpu: 14902.997566078948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29745.203546976165,
            "unit": "ns/iter",
            "extra": "iterations: 23513\ncpu: 29744.209586186204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 120167.40909091503,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 120163.79132231425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101336.53946416559,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 101333.42505430848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101595.5637788502,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101591.71382963292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100906.47564676702,
            "unit": "ns/iter",
            "extra": "iterations: 6919\ncpu: 100906.17141205409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64258.83111763559,
            "unit": "ns/iter",
            "extra": "iterations: 10907\ncpu: 64256.92674429257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100983.21759929502,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 100979.3998260355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3544.2671400316754,
            "unit": "ns/iter",
            "extra": "iterations: 197170\ncpu: 3544.133996043976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18130.142091638812,
            "unit": "ns/iter",
            "extra": "iterations: 38630\ncpu: 18129.642764690638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14410.680599840898,
            "unit": "ns/iter",
            "extra": "iterations: 48613\ncpu: 14410.050809454075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14373.653824235716,
            "unit": "ns/iter",
            "extra": "iterations: 49134\ncpu: 14341.118166646447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14703.45196790939,
            "unit": "ns/iter",
            "extra": "iterations: 47614\ncpu: 14702.776494308664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29408.570222239978,
            "unit": "ns/iter",
            "extra": "iterations: 23803\ncpu: 29407.734319203682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119573.60833190585,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 119573.09202663349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99559.91817019513,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 99555.0646398643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 99103.28214641656,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 99098.60139860216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99849.45078459635,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 99846.31954350954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64266.02184889511,
            "unit": "ns/iter",
            "extra": "iterations: 10893\ncpu: 64263.83916276453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 99790.01695398106,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 99789.58541102849 ns\nthreads: 1"
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
        "date": 1705960581863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 816.0762697517212,
            "unit": "ns/iter",
            "extra": "iterations: 856447\ncpu: 816.072915194986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13763.740811472662,
            "unit": "ns/iter",
            "extra": "iterations: 59694\ncpu: 13763.306194927465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29509.12989463137,
            "unit": "ns/iter",
            "extra": "iterations: 28092\ncpu: 29508.95984621956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 46626.44685028565,
            "unit": "ns/iter",
            "extra": "iterations: 17827\ncpu: 46625.7418522466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51048.14259999557,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51048.80999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60548.897564890714,
            "unit": "ns/iter",
            "extra": "iterations: 13716\ncpu: 60547.6450860309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73093.38737301686,
            "unit": "ns/iter",
            "extra": "iterations: 11911\ncpu: 73091.88145411808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84395.60532237981,
            "unit": "ns/iter",
            "extra": "iterations: 10221\ncpu: 84392.39800410924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97146.78749024439,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 97144.54231240944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 683.103245053748,
            "unit": "ns/iter",
            "extra": "iterations: 1024359\ncpu: 683.0817125636626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 548.4914168655386,
            "unit": "ns/iter",
            "extra": "iterations: 1234048\ncpu: 548.308655741106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 549.5880596231904,
            "unit": "ns/iter",
            "extra": "iterations: 1295872\ncpu: 549.3995548943103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 545.8131064157267,
            "unit": "ns/iter",
            "extra": "iterations: 1275940\ncpu: 545.7898490524634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1003.603924370733,
            "unit": "ns/iter",
            "extra": "iterations: 699730\ncpu: 1003.6149657725126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3357.5164274499034,
            "unit": "ns/iter",
            "extra": "iterations: 238138\ncpu: 3357.429725621278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14183.491658709656,
            "unit": "ns/iter",
            "extra": "iterations: 57605\ncpu: 14183.52573561324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11577.016222957072,
            "unit": "ns/iter",
            "extra": "iterations: 70579\ncpu: 11576.91664659459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12059.189948263152,
            "unit": "ns/iter",
            "extra": "iterations: 67650\ncpu: 12059.025868440483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12297.246236126617,
            "unit": "ns/iter",
            "extra": "iterations: 64694\ncpu: 12297.372244721299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35063.81391253463,
            "unit": "ns/iter",
            "extra": "iterations: 23849\ncpu: 35063.20600444465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 560208.5748387253,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 560173.6129032274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 456350.50342285266,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 456348.65718799474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 454751.98529416014,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 454725.9978991605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 461799.48124671,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 461759.95773903804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 274772.95875312237,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 274752.1725440806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 449867.78794178384,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 449844.126819126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2241166.718446608,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2241132.038834951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 897137.6510962042,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 897080.2669208773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2973774.8193548624,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2973712.5806451584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3399.1387574779014,
            "unit": "ns/iter",
            "extra": "iterations: 242877\ncpu: 3398.9616143150624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14791.902548725451,
            "unit": "ns/iter",
            "extra": "iterations: 55361\ncpu: 14790.876248622668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12017.49246164486,
            "unit": "ns/iter",
            "extra": "iterations: 67853\ncpu: 12016.61680397335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11746.66453434891,
            "unit": "ns/iter",
            "extra": "iterations: 69408\ncpu: 11745.99037574916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12492.636907336846,
            "unit": "ns/iter",
            "extra": "iterations: 64708\ncpu: 12492.126166779994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35590.81255348256,
            "unit": "ns/iter",
            "extra": "iterations: 23372\ncpu: 35588.64025329469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 579155.4149433036,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 579117.2781854593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 470869.41351350304,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 470847.67567567754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 467360.00854702183,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 467329.1132478633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 467472.6975013747,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 467464.8059542767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 275123.703517582,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 275118.65577889263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 454497.40587311744,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 454497.2732039834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2273042.303482472,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2272897.5124378055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 887968.6360189216,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 887938.672985776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3339.810878169107,
            "unit": "ns/iter",
            "extra": "iterations: 241548\ncpu: 3339.6952158577315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14895.977740887762,
            "unit": "ns/iter",
            "extra": "iterations: 56022\ncpu: 14896.015850915757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12084.354952760268,
            "unit": "ns/iter",
            "extra": "iterations: 68164\ncpu: 12083.774426383512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11486.71250017382,
            "unit": "ns/iter",
            "extra": "iterations: 72167\ncpu: 11486.680892928916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12151.122373412461,
            "unit": "ns/iter",
            "extra": "iterations: 66436\ncpu: 12150.788729002365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35746.63112073779,
            "unit": "ns/iter",
            "extra": "iterations: 23547\ncpu: 35746.75330190706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 564131.7092198267,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 564120.5673758885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 458931.4079916404,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 458921.7665615124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 455963.07235815475,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 455964.60176990915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 456840.9225130881,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 456831.3089005233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 276371.859676909,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 276374.75451377925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 451526.74922763044,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 451528.8877445934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 374.87258109807044,
            "unit": "ns/iter",
            "extra": "iterations: 1869495\ncpu: 374.86385360752564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1742.08439743811,
            "unit": "ns/iter",
            "extra": "iterations: 402216\ncpu: 1742.0808719692873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1420.9125065585056,
            "unit": "ns/iter",
            "extra": "iterations: 493637\ncpu: 1420.8985550110604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1328.5449558592597,
            "unit": "ns/iter",
            "extra": "iterations: 526839\ncpu: 1328.5588196773606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1212.5026887954664,
            "unit": "ns/iter",
            "extra": "iterations: 577954\ncpu: 1212.515874965823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6809.325323139692,
            "unit": "ns/iter",
            "extra": "iterations: 104908\ncpu: 6809.025050520461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24432.358976148105,
            "unit": "ns/iter",
            "extra": "iterations: 28637\ncpu: 24432.304361490184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5799.799847837579,
            "unit": "ns/iter",
            "extra": "iterations: 120923\ncpu: 5799.641093919326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5725.365014348372,
            "unit": "ns/iter",
            "extra": "iterations: 122313\ncpu: 5725.374244765512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5750.2664140384295,
            "unit": "ns/iter",
            "extra": "iterations: 122182\ncpu: 5750.33638342801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11207.49669536048,
            "unit": "ns/iter",
            "extra": "iterations: 62034\ncpu: 11206.875261953006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10312.383903612412,
            "unit": "ns/iter",
            "extra": "iterations: 66897\ncpu: 10312.377236647393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3644.2641886531446,
            "unit": "ns/iter",
            "extra": "iterations: 191632\ncpu: 3644.1351131334895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18332.830630490564,
            "unit": "ns/iter",
            "extra": "iterations: 38478\ncpu: 18332.904516866936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14604.792856099613,
            "unit": "ns/iter",
            "extra": "iterations: 47957\ncpu: 14604.376837583644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14363.15780424944,
            "unit": "ns/iter",
            "extra": "iterations: 48858\ncpu: 14362.716443571107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14928.066965047075,
            "unit": "ns/iter",
            "extra": "iterations: 46920\ncpu: 14927.81756180733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29395.15002519643,
            "unit": "ns/iter",
            "extra": "iterations: 23816\ncpu: 29395.14612025512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121510.11591424029,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 121511.36482482064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101944.17358270707,
            "unit": "ns/iter",
            "extra": "iterations: 6844\ncpu: 101940.31268264064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101012.16558111546,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 101011.24620060761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 101390.13173912921,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101387.34782608761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64534.48012969487,
            "unit": "ns/iter",
            "extra": "iterations: 10795\ncpu: 64534.5715609071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 101313.14234104665,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 101313.04913294797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3654.8866639506914,
            "unit": "ns/iter",
            "extra": "iterations: 191466\ncpu: 3654.8311449551966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18247.907681098393,
            "unit": "ns/iter",
            "extra": "iterations: 38432\ncpu: 18247.92880932551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14467.840759603165,
            "unit": "ns/iter",
            "extra": "iterations: 48499\ncpu: 14467.655003195903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14260.713888490249,
            "unit": "ns/iter",
            "extra": "iterations: 48911\ncpu: 14260.714358733247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14717.33161660799,
            "unit": "ns/iter",
            "extra": "iterations: 47377\ncpu: 14716.814065896899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29237.01092030707,
            "unit": "ns/iter",
            "extra": "iterations: 23992\ncpu: 29236.987329109535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 119601.28766189242,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 119592.46762099666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 99831.74479907905,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 99824.46565973184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 98978.32266741688,
            "unit": "ns/iter",
            "extra": "iterations: 7063\ncpu: 98971.62678748398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 99289.66614619791,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99282.5550035492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64867.902755865995,
            "unit": "ns/iter",
            "extra": "iterations: 10777\ncpu: 64866.73471281359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100220.78705159327,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 100213.64870658917 ns\nthreads: 1"
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
        "date": 1705962491081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 806.911680648908,
            "unit": "ns/iter",
            "extra": "iterations: 867409\ncpu: 806.90931267718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13693.276900714362,
            "unit": "ns/iter",
            "extra": "iterations: 59162\ncpu: 13692.135154322032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29617.63032603872,
            "unit": "ns/iter",
            "extra": "iterations: 28187\ncpu: 29615.76968105864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 45643.23532629476,
            "unit": "ns/iter",
            "extra": "iterations: 18281\ncpu: 45638.52086866145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50789.02970000172,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50788.09 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60424.26956900891,
            "unit": "ns/iter",
            "extra": "iterations: 13759\ncpu: 60419.61625118106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72990.46555621314,
            "unit": "ns/iter",
            "extra": "iterations: 11947\ncpu: 72984.95856700427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84838.859813074,
            "unit": "ns/iter",
            "extra": "iterations: 10272\ncpu: 84834.4431464175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97850.36746111789,
            "unit": "ns/iter",
            "extra": "iterations: 8937\ncpu: 97847.76770728426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 681.6102916042212,
            "unit": "ns/iter",
            "extra": "iterations: 1029752\ncpu: 681.6007155120853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 575.1019333657855,
            "unit": "ns/iter",
            "extra": "iterations: 1222014\ncpu: 575.0926748793387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 567.8034255047602,
            "unit": "ns/iter",
            "extra": "iterations: 1232052\ncpu: 567.7955151243615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 569.4006028056697,
            "unit": "ns/iter",
            "extra": "iterations: 1232238\ncpu: 569.3856219334265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1011.248534363571,
            "unit": "ns/iter",
            "extra": "iterations: 691679\ncpu: 1011.2344020853595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3273.159054054059,
            "unit": "ns/iter",
            "extra": "iterations: 244200\ncpu: 3272.9250614250627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15388.359441899176,
            "unit": "ns/iter",
            "extra": "iterations: 53252\ncpu: 15387.26996169158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12133.519777209774,
            "unit": "ns/iter",
            "extra": "iterations: 67148\ncpu: 12133.019598498859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11407.13900289102,
            "unit": "ns/iter",
            "extra": "iterations: 70905\ncpu: 11406.256258373898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12419.400759967342,
            "unit": "ns/iter",
            "extra": "iterations: 65266\ncpu: 12418.423068672811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36354.418237345286,
            "unit": "ns/iter",
            "extra": "iterations: 22920\ncpu: 36351.500872600314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 576996.3764940023,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 576938.977423638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 462116.97013332014,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 462088.9599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 461195.2506680674,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 461154.62319615134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 465497.10838224797,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 465457.87506673904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 277168.01280821103,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 277149.2154979186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 457310.3741424616,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 457268.44327176694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2249542.7359410967,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2249389.9755501235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 904534.9218900055,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 904502.6036644179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2964104.8612905163,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2964062.2580645084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3203.1504301735035,
            "unit": "ns/iter",
            "extra": "iterations: 237346\ncpu: 3203.0668307028523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14871.586535668204,
            "unit": "ns/iter",
            "extra": "iterations: 55064\ncpu: 14871.393287810595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11747.302602349231,
            "unit": "ns/iter",
            "extra": "iterations: 69322\ncpu: 11747.149534058446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11073.58364423205,
            "unit": "ns/iter",
            "extra": "iterations: 73711\ncpu: 11073.23465968443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11726.990882834545,
            "unit": "ns/iter",
            "extra": "iterations: 68552\ncpu: 11726.80592834639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35729.54298992986,
            "unit": "ns/iter",
            "extra": "iterations: 23238\ncpu: 35729.42594027023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 591901.3010899177,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 591885.4223433264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 469652.01464206557,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 469588.9913232098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 467046.54278073576,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 467035.5080213935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 465857.1436141765,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 465815.26232114783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 274770.5101330083,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 274751.58328055765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 462308.8112705752,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 462278.09675704216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2257359.3832925195,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2257204.9140049177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 874368.6922357241,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 874345.6501403156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3256.18221356229,
            "unit": "ns/iter",
            "extra": "iterations: 243264\ncpu: 3256.1250328860942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14888.98565103312,
            "unit": "ns/iter",
            "extra": "iterations: 55335\ncpu: 14888.57142857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11746.422347403837,
            "unit": "ns/iter",
            "extra": "iterations: 70120\ncpu: 11746.0196805476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11130.727012541684,
            "unit": "ns/iter",
            "extra": "iterations: 74073\ncpu: 11130.594143615122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11878.681449566362,
            "unit": "ns/iter",
            "extra": "iterations: 68931\ncpu: 11878.269573921767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35356.27676682495,
            "unit": "ns/iter",
            "extra": "iterations: 23630\ncpu: 35355.34490055014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 567735.6260586322,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567722.0846905537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 462722.5475810836,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 462700.47846890014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 461723.3476645051,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 461717.88747345895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 460633.0795333936,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460614.8992576881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 276160.51745834795,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 276156.4642969484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 452251.4555844294,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 452246.12987013115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 373.4605022456572,
            "unit": "ns/iter",
            "extra": "iterations: 1872271\ncpu: 373.4482882018673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1770.993117990798,
            "unit": "ns/iter",
            "extra": "iterations: 397413\ncpu: 1770.9699984650701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1344.1621274360257,
            "unit": "ns/iter",
            "extra": "iterations: 521454\ncpu: 1344.1245057090382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1346.1717184521624,
            "unit": "ns/iter",
            "extra": "iterations: 520707\ncpu: 1346.1422642676175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1213.4787319135703,
            "unit": "ns/iter",
            "extra": "iterations: 576333\ncpu: 1213.460100323945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6871.166686227388,
            "unit": "ns/iter",
            "extra": "iterations: 102246\ncpu: 6870.928936095243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 24331.242967284386,
            "unit": "ns/iter",
            "extra": "iterations: 28794\ncpu: 24330.88837952332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5769.811384904632,
            "unit": "ns/iter",
            "extra": "iterations: 121178\ncpu: 5769.518394428081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5770.799056011557,
            "unit": "ns/iter",
            "extra": "iterations: 121188\ncpu: 5770.7223487475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5760.0787946816745,
            "unit": "ns/iter",
            "extra": "iterations: 121163\ncpu: 5760.062890486268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11210.416527411327,
            "unit": "ns/iter",
            "extra": "iterations: 62236\ncpu: 11210.084195642352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10835.13211520587,
            "unit": "ns/iter",
            "extra": "iterations: 64580\ncpu: 10835.003096934066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3675.3638542841863,
            "unit": "ns/iter",
            "extra": "iterations: 190645\ncpu: 3675.2587269531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18097.29093299485,
            "unit": "ns/iter",
            "extra": "iterations: 38789\ncpu: 18097.058444404185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14473.228296020041,
            "unit": "ns/iter",
            "extra": "iterations: 48240\ncpu: 14472.713515754456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14333.60389129104,
            "unit": "ns/iter",
            "extra": "iterations: 48570\ncpu: 14333.409512044529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14987.890448958577,
            "unit": "ns/iter",
            "extra": "iterations: 46864\ncpu: 14987.40184363258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29570.11838993406,
            "unit": "ns/iter",
            "extra": "iterations: 23676\ncpu: 29569.665484034682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 121567.48314215815,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 121567.24018074335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101474.89602668822,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 101470.85266821316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 101316.42185905116,
            "unit": "ns/iter",
            "extra": "iterations: 6853\ncpu: 101316.16810156258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 102650.66373108962,
            "unit": "ns/iter",
            "extra": "iterations: 6813\ncpu: 102647.394686629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64669.975697654845,
            "unit": "ns/iter",
            "extra": "iterations: 10822\ncpu: 64669.866937719926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 101594.07905424538,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 101593.89324049902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3594.6861966744254,
            "unit": "ns/iter",
            "extra": "iterations: 194982\ncpu: 3594.6364279779373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18140.910139741078,
            "unit": "ns/iter",
            "extra": "iterations: 38571\ncpu: 18140.665266650914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 14322.547584965487,
            "unit": "ns/iter",
            "extra": "iterations: 48902\ncpu: 14322.338554660264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14239.464459036408,
            "unit": "ns/iter",
            "extra": "iterations: 49042\ncpu: 14239.431507687308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14699.875315337995,
            "unit": "ns/iter",
            "extra": "iterations: 47568\ncpu: 14699.40295997302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29105.69211924989,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 29105.663511044528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 120891.20449436702,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 120886.65514261059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 100568.00086319099,
            "unit": "ns/iter",
            "extra": "iterations: 6951\ncpu: 100567.84635304291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 100209.28638832571,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 100209.10780669138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 100989.45870633032,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 100985.8792954086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 65473.465050997365,
            "unit": "ns/iter",
            "extra": "iterations: 10687\ncpu: 65473.31337138571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 100960.3416630792,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 100957.63320407848 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}