window.BENCHMARK_DATA = {
  "lastUpdate": 1702490939474,
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
      }
    ]
  }
}