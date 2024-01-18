window.BENCHMARK_DATA = {
  "lastUpdate": 1705576266441,
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
      }
    ]
  }
}