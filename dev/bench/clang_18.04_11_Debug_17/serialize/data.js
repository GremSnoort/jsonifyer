window.BENCHMARK_DATA = {
  "lastUpdate": 1705957708814,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 18.04 Debug c++-17": [
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
        "date": 1702489569210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8913.149998085346,
            "unit": "ns/iter",
            "extra": "iterations: 78361\ncpu: 8913.157055167749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79915.62994642643,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 79911.1570636338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 152677.89542826908,
            "unit": "ns/iter",
            "extra": "iterations: 5709\ncpu: 152670.53774741638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 226863.99172913807,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 226853.76066166972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 298698.41522491904,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 298691.384083045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 366394.9130805103,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 366395.05752023857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 438729.388300553,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 438705.14372163365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 510047.2147454497,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 510027.0918665889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584138.6190794377,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584109.5396931287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6770.4137871195635,
            "unit": "ns/iter",
            "extra": "iterations: 103720\ncpu: 6770.327805630539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5689.372848638219,
            "unit": "ns/iter",
            "extra": "iterations: 123294\ncpu: 5689.204665271619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5688.004684200666,
            "unit": "ns/iter",
            "extra": "iterations: 123607\ncpu: 5687.668983148197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5685.721303074569,
            "unit": "ns/iter",
            "extra": "iterations: 122940\ncpu: 5685.554742150644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9770.981506571878,
            "unit": "ns/iter",
            "extra": "iterations: 71593\ncpu: 9770.69126869944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38214.91908559532,
            "unit": "ns/iter",
            "extra": "iterations: 21566\ncpu: 38212.67736251509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146321.18211353396,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 146316.0567715458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120851.63927968476,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 120848.73382104661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116356.01158512644,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 116354.65449093614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 123760.25400489818,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 123759.04170876044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 287984.5555189364,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 287971.3344316317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2397833.6683937977,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2397758.2901554406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1975786.7606837598,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1975710.6837606814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1988830.6279568418,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1988783.8709677372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1996734.0668103888,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1996665.9482758667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1185436.4705882606,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1185407.544757032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1919722.253112053,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1919644.190871365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7950082.8814818505,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7949923.703703692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4562736.878640805,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4562581.553398049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9871986.49549559,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9871520.72072075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37679.74555757017,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 37678.363553943855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 152652.87183147843,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 152646.10853266713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121226.9336351954,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 121224.01301825407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 124458.54150648293,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 124453.0684892497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 126523.16711111982,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 126518.9185185178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 294381.79973162746,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 294371.9892653456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2405072.148052001,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2405016.3636363503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1999413.98924747,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1999324.086021506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2010190.6637932118,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2010145.4741379297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2015154.6436284527,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2015097.1922246302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1191800.012787824,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1191771.9948849187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1932228.7027027693,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932160.2910602961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7927053.17647012,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7926485.294117631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4419930.061611431,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4419781.990521305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35644.97978314361,
            "unit": "ns/iter",
            "extra": "iterations: 23149\ncpu: 35643.43600155519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144796.19803155772,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 144791.0571864918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 121489.02273048689,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 121483.43514703798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116205.64808031969,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 116201.56016822708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 123112.31248198546,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 123107.9705967141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 287315.9911359163,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 287308.7655942228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2392475.186046647,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2392398.449612404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1989711.2878464374,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1989640.0852878494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1994706.3648069864,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1994546.3519313387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2007593.373649921,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2007550.1079913692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1195077.4125963356,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1195043.9588688877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1929216.3333332988,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929159.0062111763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3442.245617748538,
            "unit": "ns/iter",
            "extra": "iterations: 203149\ncpu: 3442.1350831163227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17498.318411445867,
            "unit": "ns/iter",
            "extra": "iterations: 39986\ncpu: 17498.349422297786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13416.864236317768,
            "unit": "ns/iter",
            "extra": "iterations: 52201\ncpu: 13416.886649681039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14085.439128403672,
            "unit": "ns/iter",
            "extra": "iterations: 51354\ncpu: 14085.044981890373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10954.42453487965,
            "unit": "ns/iter",
            "extra": "iterations: 63102\ncpu: 10953.792272828061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67182.58053950821,
            "unit": "ns/iter",
            "extra": "iterations: 10380\ncpu: 67177.70712909465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 158047.03111613038,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 158043.04396843127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40411.11799953909,
            "unit": "ns/iter",
            "extra": "iterations: 17356\ncpu: 40408.97096105099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40985.17023767664,
            "unit": "ns/iter",
            "extra": "iterations: 17082\ncpu: 40984.188034188264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40476.96036514404,
            "unit": "ns/iter",
            "extra": "iterations: 17308\ncpu: 40475.82620753416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80324.21930828858,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80323.32798900634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73396.52279380755,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 73393.29778335379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22274.61366313295,
            "unit": "ns/iter",
            "extra": "iterations: 31413\ncpu: 22274.32909941738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103318.21796195768,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103313.11016074284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84428.71930459714,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 84428.74562356673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84288.79954166559,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84285.33349415007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85088.0710182206,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85085.61300574517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156299.42643446615,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156297.05291359525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 678315.9495144786,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 678292.3300970905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 572095.3712183383,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 572078.4137367066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 575719.5238095075,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 575714.4499178937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 572618.2801972247,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 572592.1939194739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 373871.190705134,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 373865.91880341916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 557579.1833332496,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 557556.6666666626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22594.61377816541,
            "unit": "ns/iter",
            "extra": "iterations: 30933\ncpu: 22594.416965700017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 106507.94993151206,
            "unit": "ns/iter",
            "extra": "iterations: 6571\ncpu: 106505.46339978633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84450.95791124749,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84449.15581283123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83945.67333973004,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 83942.79549268837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84856.94364319835,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84853.13295358054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155991.28255526064,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 155989.39021666223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 677762.3724539382,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 677747.8176527623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 572843.0596892511,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 572828.2093213471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 570341.3417618462,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 570326.6721044009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 570293.60702615,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 570261.3562091497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 374947.7241563701,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 374942.26031065383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 559117.9728867608,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 559094.0988835732 ns\nthreads: 1"
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
        "date": 1702489569210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8913.149998085346,
            "unit": "ns/iter",
            "extra": "iterations: 78361\ncpu: 8913.157055167749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79915.62994642643,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 79911.1570636338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 152677.89542826908,
            "unit": "ns/iter",
            "extra": "iterations: 5709\ncpu: 152670.53774741638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 226863.99172913807,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 226853.76066166972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 298698.41522491904,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 298691.384083045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 366394.9130805103,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 366395.05752023857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 438729.388300553,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 438705.14372163365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 510047.2147454497,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 510027.0918665889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584138.6190794377,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584109.5396931287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6770.4137871195635,
            "unit": "ns/iter",
            "extra": "iterations: 103720\ncpu: 6770.327805630539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5689.372848638219,
            "unit": "ns/iter",
            "extra": "iterations: 123294\ncpu: 5689.204665271619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5688.004684200666,
            "unit": "ns/iter",
            "extra": "iterations: 123607\ncpu: 5687.668983148197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5685.721303074569,
            "unit": "ns/iter",
            "extra": "iterations: 122940\ncpu: 5685.554742150644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9770.981506571878,
            "unit": "ns/iter",
            "extra": "iterations: 71593\ncpu: 9770.69126869944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38214.91908559532,
            "unit": "ns/iter",
            "extra": "iterations: 21566\ncpu: 38212.67736251509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146321.18211353396,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 146316.0567715458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120851.63927968476,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 120848.73382104661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116356.01158512644,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 116354.65449093614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 123760.25400489818,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 123759.04170876044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 287984.5555189364,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 287971.3344316317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2397833.6683937977,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2397758.2901554406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1975786.7606837598,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1975710.6837606814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1988830.6279568418,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1988783.8709677372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1996734.0668103888,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1996665.9482758667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1185436.4705882606,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1185407.544757032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1919722.253112053,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1919644.190871365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7950082.8814818505,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7949923.703703692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4562736.878640805,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4562581.553398049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9871986.49549559,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9871520.72072075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37679.74555757017,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 37678.363553943855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 152652.87183147843,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 152646.10853266713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121226.9336351954,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 121224.01301825407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 124458.54150648293,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 124453.0684892497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 126523.16711111982,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 126518.9185185178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 294381.79973162746,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 294371.9892653456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2405072.148052001,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2405016.3636363503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1999413.98924747,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1999324.086021506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2010190.6637932118,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2010145.4741379297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2015154.6436284527,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2015097.1922246302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1191800.012787824,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1191771.9948849187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1932228.7027027693,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932160.2910602961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7927053.17647012,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7926485.294117631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4419930.061611431,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4419781.990521305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35644.97978314361,
            "unit": "ns/iter",
            "extra": "iterations: 23149\ncpu: 35643.43600155519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144796.19803155772,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 144791.0571864918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 121489.02273048689,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 121483.43514703798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116205.64808031969,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 116201.56016822708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 123112.31248198546,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 123107.9705967141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 287315.9911359163,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 287308.7655942228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2392475.186046647,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2392398.449612404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1989711.2878464374,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1989640.0852878494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1994706.3648069864,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1994546.3519313387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2007593.373649921,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2007550.1079913692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1195077.4125963356,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1195043.9588688877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1929216.3333332988,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929159.0062111763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3442.245617748538,
            "unit": "ns/iter",
            "extra": "iterations: 203149\ncpu: 3442.1350831163227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17498.318411445867,
            "unit": "ns/iter",
            "extra": "iterations: 39986\ncpu: 17498.349422297786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13416.864236317768,
            "unit": "ns/iter",
            "extra": "iterations: 52201\ncpu: 13416.886649681039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14085.439128403672,
            "unit": "ns/iter",
            "extra": "iterations: 51354\ncpu: 14085.044981890373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10954.42453487965,
            "unit": "ns/iter",
            "extra": "iterations: 63102\ncpu: 10953.792272828061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67182.58053950821,
            "unit": "ns/iter",
            "extra": "iterations: 10380\ncpu: 67177.70712909465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 158047.03111613038,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 158043.04396843127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40411.11799953909,
            "unit": "ns/iter",
            "extra": "iterations: 17356\ncpu: 40408.97096105099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40985.17023767664,
            "unit": "ns/iter",
            "extra": "iterations: 17082\ncpu: 40984.188034188264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40476.96036514404,
            "unit": "ns/iter",
            "extra": "iterations: 17308\ncpu: 40475.82620753416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80324.21930828858,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80323.32798900634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73396.52279380755,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 73393.29778335379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22274.61366313295,
            "unit": "ns/iter",
            "extra": "iterations: 31413\ncpu: 22274.32909941738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103318.21796195768,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103313.11016074284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84428.71930459714,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 84428.74562356673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84288.79954166559,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84285.33349415007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85088.0710182206,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85085.61300574517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156299.42643446615,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156297.05291359525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 678315.9495144786,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 678292.3300970905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 572095.3712183383,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 572078.4137367066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 575719.5238095075,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 575714.4499178937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 572618.2801972247,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 572592.1939194739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 373871.190705134,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 373865.91880341916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 557579.1833332496,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 557556.6666666626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22594.61377816541,
            "unit": "ns/iter",
            "extra": "iterations: 30933\ncpu: 22594.416965700017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 106507.94993151206,
            "unit": "ns/iter",
            "extra": "iterations: 6571\ncpu: 106505.46339978633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84450.95791124749,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84449.15581283123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83945.67333973004,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 83942.79549268837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84856.94364319835,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84853.13295358054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155991.28255526064,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 155989.39021666223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 677762.3724539382,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 677747.8176527623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 572843.0596892511,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 572828.2093213471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 570341.3417618462,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 570326.6721044009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 570293.60702615,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 570261.3562091497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 374947.7241563701,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 374942.26031065383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 559117.9728867608,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 559094.0988835732 ns\nthreads: 1"
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
        "date": 1702492177680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8771.323956375576,
            "unit": "ns/iter",
            "extra": "iterations: 79770\ncpu: 8771.005390497683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78049.77186381634,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 78047.00376250345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149338.84008200813,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 149336.2036562447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219831.4898785368,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 219825.63259109305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291396.21111109917,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 291386.16161616176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 362273.6504571598,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 362254.4472152951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 428328.16740523314,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 428316.74052191037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 497549.39713464276,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 497529.0544412605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 567035.4771838713,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567011.6036505869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6589.338360242053,
            "unit": "ns/iter",
            "extra": "iterations: 106162\ncpu: 6589.110981330421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5596.223748961405,
            "unit": "ns/iter",
            "extra": "iterations: 125176\ncpu: 5595.9001725570315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5572.199580306325,
            "unit": "ns/iter",
            "extra": "iterations: 123900\ncpu: 5571.961259079896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5590.756754596626,
            "unit": "ns/iter",
            "extra": "iterations: 125100\ncpu: 5590.725019984018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9726.874087540251,
            "unit": "ns/iter",
            "extra": "iterations: 72058\ncpu: 9726.550834050353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36280.10298007256,
            "unit": "ns/iter",
            "extra": "iterations: 22684\ncpu: 36280.338564627025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143784.70245296063,
            "unit": "ns/iter",
            "extra": "iterations: 5952\ncpu: 143773.9079301074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115944.37982075084,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 115939.27213470968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111215.34857961666,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 111210.63330727139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115025.4390178187,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 115023.13815434439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285466.9588504241,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 285450.52253429184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2317018.399002452,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2316970.324189529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1889174.3898990687,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1889095.757575761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1884997.6490871767,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884971.6024340754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1900970.7657839968,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900900.6109979602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1131853.2743901904,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1131808.9024390255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1837972.9585799836,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1837914.0039447763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7586676.769999485,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7586361.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4352535.118483347,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4352367.29857819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9372919.83478328,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9372559.130434772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35443.06664083426,
            "unit": "ns/iter",
            "extra": "iterations: 23229\ncpu: 35442.033664815535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142565.50273948864,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 142559.9037024737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116983.06091578053,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 116979.01335513791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114272.97511372132,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 114270.73856034322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119728.62145862877,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 119724.88078541392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290010.4662678453,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 290001.79461614945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2327536.060301415,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2327476.1306532677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1922624.2376033433,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1922558.2644628133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1890920.9735235933,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1890933.197556019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1907889.7274589806,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1907817.8278688446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1140882.7302956113,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1140831.0344827569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1848396.0914511792,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1848326.838966208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7660407.769999437,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7660331.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4180743.641255593,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4180581.1659192736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34289.75466744577,
            "unit": "ns/iter",
            "extra": "iterations: 23996\ncpu: 34288.631438573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141219.8533884376,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 141215.80165289226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115510.3227506073,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 115506.40367468254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111235.12486925008,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 111231.56380753123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117203.41340474733,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 117198.58535915327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285436.569230753,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 285426.61211129365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2306561.211442632,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2306471.1442785924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1910963.120901791,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1910899.795081968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1892584.7081632407,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1892485.3061224434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1902773.1680326075,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902706.9672131075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1131892.69305734,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1131860.048721073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1848214.0219561926,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1848157.4850299407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3374.4247392455263,
            "unit": "ns/iter",
            "extra": "iterations: 206708\ncpu: 3374.402055072852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16885.36738936066,
            "unit": "ns/iter",
            "extra": "iterations: 41373\ncpu: 16885.490537307018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13492.603978439016,
            "unit": "ns/iter",
            "extra": "iterations: 52131\ncpu: 13492.119851911491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13047.799272298851,
            "unit": "ns/iter",
            "extra": "iterations: 49196\ncpu: 13047.23961297665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10927.191040679127,
            "unit": "ns/iter",
            "extra": "iterations: 64112\ncpu: 10926.293049663027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66757.00628751448,
            "unit": "ns/iter",
            "extra": "iterations: 10497\ncpu: 66755.31104124976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146129.63981636096,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 146130.6343906507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39394.9405606216,
            "unit": "ns/iter",
            "extra": "iterations: 17766\ncpu: 39394.41067206978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39982.44493291636,
            "unit": "ns/iter",
            "extra": "iterations: 17515\ncpu: 39980.41678561196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39523.380922835786,
            "unit": "ns/iter",
            "extra": "iterations: 17728\ncpu: 39521.83551444007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80380.47739268951,
            "unit": "ns/iter",
            "extra": "iterations: 8714\ncpu: 80378.64356208347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70996.16226644623,
            "unit": "ns/iter",
            "extra": "iterations: 9848\ncpu: 70994.55727051297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21360.110132695772,
            "unit": "ns/iter",
            "extra": "iterations: 32706\ncpu: 21360.047086161485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101635.0353879673,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 101631.4575779541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80799.91837913798,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 80797.13691987997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82602.30930506898,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82599.43462897511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81491.66360250891,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 81490.50500349094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160191.19053065457,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 160190.34766697107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 649262.6437209257,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 649240.5581395339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 547327.4976489622,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 547308.5423197465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 550432.0618637307,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 550419.3422082957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 548800.0635792485,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548788.3830455312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 363125.04665629903,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 363111.6640746501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 536289.3318007496,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536279.6934865873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21825.388828276962,
            "unit": "ns/iter",
            "extra": "iterations: 32081\ncpu: 21825.522895171598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103207.88595596395,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 103203.95216567138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82148.35946484892,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82144.7717404072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81964.35108873816,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 81959.37719503624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82523.96377323827,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 82522.32415902121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 160151.02629173695,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 160152.01188843133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 649387.6905204399,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 649363.7546468378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 550498.782302287,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 550464.9177760311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 553490.3670885526,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 553464.7151898771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 549693.6598586047,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 549685.3888452554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 365276.2131317826,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 365266.7014069813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 538072.9638183243,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 538059.9692070817 ns\nthreads: 1"
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
        "date": 1702503232334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8660.16810350037,
            "unit": "ns/iter",
            "extra": "iterations: 80849\ncpu: 8659.672970599515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77568.62353693946,
            "unit": "ns/iter",
            "extra": "iterations: 10936\ncpu: 77564.82260424287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148339.49286442206,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 148331.85524974516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 218999.79245283373,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 218990.13836477988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290460.87646467483,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 290448.5436893204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358933.1847239755,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 358900.7056870072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424963.4168734354,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 424955.0868486353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 497176.09886366694,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 497145.5113636371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 566369.8586318989,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 566340.9120521179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6624.217110830916,
            "unit": "ns/iter",
            "extra": "iterations: 106342\ncpu: 6623.801508341011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5629.881794199017,
            "unit": "ns/iter",
            "extra": "iterations: 124334\ncpu: 5629.634693647763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5623.912330104747,
            "unit": "ns/iter",
            "extra": "iterations: 125003\ncpu: 5623.877026951346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5580.794137684611,
            "unit": "ns/iter",
            "extra": "iterations: 123296\ncpu: 5580.349727485081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9637.205573757026,
            "unit": "ns/iter",
            "extra": "iterations: 72339\ncpu: 9636.583309141672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36074.41526643917,
            "unit": "ns/iter",
            "extra": "iterations: 22913\ncpu: 36072.83638109373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 147691.26140862604,
            "unit": "ns/iter",
            "extra": "iterations: 5807\ncpu: 147686.61959703817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116897.05091899232,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 116889.28522804592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112894.00528680655,
            "unit": "ns/iter",
            "extra": "iterations: 7566\ncpu: 112884.37747819211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115721.66896272397,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 115714.45164775787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277209.3704646616,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 277196.2444302993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2328463.205513881,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2328320.300751879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1904252.850622432,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1904112.8630705397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1905050.2422997465,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1904968.3778234152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1910207.0596708483,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1910120.3703703696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1156254.6484771566,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1156206.0913705616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1861023.3927855568,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1860879.7595190364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7750514.77697868,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7750125.179856117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4504017.192307248,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4503976.4423076855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9432224.069564654,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9432014.782608705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35981.78381548178,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 35980.570758405105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143862.20309088187,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 143857.550814715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116967.18823529276,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 116966.58002736059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115955.12075061795,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 115950.61191188481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119382.71554745539,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 119383.09266788191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284662.80478218413,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 284658.33606289077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2355791.4531644387,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2355766.8354430413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1949886.2410901212,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1949810.0628930766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1938509.1937500932,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1938514.583333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1928101.5217391383,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1928075.3623188392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1155160.313432891,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1155154.2288557235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1900689.1153845398,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1900676.9230769249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7821831.811594146,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7821635.507246347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4306704.032407116,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4306673.148148147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34868.00394955127,
            "unit": "ns/iter",
            "extra": "iterations: 23547\ncpu: 34866.46706586822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144180.75573937356,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 144181.12761647542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116393.63976592473,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116391.0179640721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114926.028142587,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 114925.28812650811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114206.69558784965,
            "unit": "ns/iter",
            "extra": "iterations: 7434\ncpu: 114195.54748453044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277767.36227258283,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 277751.06926268723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2335436.4987406908,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2335352.3929471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1934929.6078836794,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1934854.564315352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1920255.4120084222,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1920178.2608695598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1918830.098121278,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1918762.4217118996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1148160.6044499998,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1148114.4622991332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1872969.8467741546,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872865.1209677479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3418.2726046871476,
            "unit": "ns/iter",
            "extra": "iterations: 204681\ncpu: 3417.9274089925134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16653.987416446475,
            "unit": "ns/iter",
            "extra": "iterations: 42039\ncpu: 16652.96748257575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13443.997093750808,
            "unit": "ns/iter",
            "extra": "iterations: 51957\ncpu: 13443.716919760502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13479.995550979984,
            "unit": "ns/iter",
            "extra": "iterations: 51472\ncpu: 13479.862838047984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11220.820290831545,
            "unit": "ns/iter",
            "extra": "iterations: 62373\ncpu: 11219.840315521058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66514.66676184717,
            "unit": "ns/iter",
            "extra": "iterations: 10506\ncpu: 66510.78431372534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154494.79630037,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154488.37260515234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40196.002236753644,
            "unit": "ns/iter",
            "extra": "iterations: 17436\ncpu: 40193.90341821499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40415.518272993984,
            "unit": "ns/iter",
            "extra": "iterations: 17348\ncpu: 40412.981323495456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40248.96550523058,
            "unit": "ns/iter",
            "extra": "iterations: 17220\ncpu: 40247.29384436691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82015.28449185616,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 82010.33876450443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72036.56728097191,
            "unit": "ns/iter",
            "extra": "iterations: 9713\ncpu: 72032.69844538298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22126.88336230056,
            "unit": "ns/iter",
            "extra": "iterations: 31645\ncpu: 22125.44793806271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106365.12702254258,
            "unit": "ns/iter",
            "extra": "iterations: 6613\ncpu: 106358.92938151982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85237.85691651372,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85238.12309567399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84127.23899976935,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84122.80596297109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85398.98595302283,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 85397.49333979194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154164.28502202817,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 154158.37004405505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 662594.758003756,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 662597.2693032081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556866.5806195174,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 556868.7847498009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 558908.8379888696,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558899.6009577003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 555403.3746031947,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 555404.920634922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 364688.17864581855,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 364673.8541666676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545465.0845616328,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 545457.564003105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22128.970903812362,
            "unit": "ns/iter",
            "extra": "iterations: 31688\ncpu: 22128.692249431744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105710.68535399511,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 105709.58675174689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84756.89648507471,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84755.76760478217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84712.98719189229,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 84709.36442725957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85695.02412835509,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 85695.28802425567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154282.6476547104,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154279.23364897538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 662538.4157196594,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 662540.7196969781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 556945.9707278721,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 556941.1392405157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 557078.722222232,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 557052.9365079388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 556992.8642857453,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 556994.1269841243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 366913.48090004124,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 366900.7326007264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545175.7998442068,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545128.0373831718 ns\nthreads: 1"
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
        "date": 1705574918872,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8659.134649062516,
            "unit": "ns/iter",
            "extra": "iterations: 80513\ncpu: 8658.975569162745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78735.59888681916,
            "unit": "ns/iter",
            "extra": "iterations: 10780\ncpu: 78734.34137291281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150136.83722929488,
            "unit": "ns/iter",
            "extra": "iterations: 5818\ncpu: 150133.55104847025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220932.86452762567,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 220927.5783040489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294131.7569303419,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 294129.3441514538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 364174.937181639,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 364171.8166383702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 431207.5032419244,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 431199.7506234413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503334.9548872436,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 503334.2972816656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 575623.2569352743,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 575617.8996036991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6565.059836834199,
            "unit": "ns/iter",
            "extra": "iterations: 106640\ncpu: 6564.925918979749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5580.956767112165,
            "unit": "ns/iter",
            "extra": "iterations: 125275\ncpu: 5580.911594492106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5559.415681607928,
            "unit": "ns/iter",
            "extra": "iterations: 125204\ncpu: 5559.170633526083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5556.591247185437,
            "unit": "ns/iter",
            "extra": "iterations: 126108\ncpu: 5556.546769435709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9602.717759886227,
            "unit": "ns/iter",
            "extra": "iterations: 72782\ncpu: 9602.545959165722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36480.58396878969,
            "unit": "ns/iter",
            "extra": "iterations: 22556\ncpu: 36480.315658804786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146566.72030585734,
            "unit": "ns/iter",
            "extra": "iterations: 5885\ncpu: 146562.09005947327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117959.86840905505,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 117957.31651724686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115540.58880779534,
            "unit": "ns/iter",
            "extra": "iterations: 7398\ncpu: 115539.7269532307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116719.45458264934,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 116717.51227495866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281709.51605580404,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 281701.0055141088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2323673.5150753953,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2323608.542713566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1890208.010504055,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1890165.5462184846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1893402.020408182,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1893388.979591835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1910796.8854806507,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1910739.0593046974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1141943.2843015585,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1141929.2954264497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1842034.2099009552,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1841997.0297029754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7760851.402877575,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7760717.985611492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4436915.32857158,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4436763.333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9546031.238938965,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9545759.292035408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36856.33258497315,
            "unit": "ns/iter",
            "extra": "iterations: 22271\ncpu: 36855.17040096979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 146802.28593428168,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 146795.14031485232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118097.77529639535,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 118092.80397022369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117071.38026819308,
            "unit": "ns/iter",
            "extra": "iterations: 7308\ncpu: 117069.0065681437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119467.11083052562,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 119463.42592592518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 292103.3534946487,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 292087.7016129034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2348920.7918782877,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2348793.401015245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1904632.6782787037,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1904602.868852461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1905854.3852458727,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1905826.0245901616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1918319.3621398897,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1918261.5226337558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1147219.7745952755,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1147187.795765881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1859124.9143426183,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1859108.5657370398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7792120.6788320625,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7791667.153284669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4352946.462962795,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4352805.0925926035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34926.66171841507,
            "unit": "ns/iter",
            "extra": "iterations: 23510\ncpu: 34925.20204168445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147133.3877902137,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 147128.04815133332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118033.07238383466,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 118026.74755273698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113236.96520122194,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 113232.11581883417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114947.4197331143,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 114944.41299366513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283629.5828160733,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 283619.9281280614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2327274.456140578,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2327192.4812030047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1912330.5532787538,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1912270.6967213163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1905274.6344970178,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1905217.4537987672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1917136.4132231635,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1917062.1900826336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1162768.6339949786,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1162721.712158813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1854377.2874253448,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854378.8423153597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3403.2116508819217,
            "unit": "ns/iter",
            "extra": "iterations: 205787\ncpu: 3403.080369508269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17636.64444163871,
            "unit": "ns/iter",
            "extra": "iterations: 39580\ncpu: 17636.4855987874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13210.937758850183,
            "unit": "ns/iter",
            "extra": "iterations: 51188\ncpu: 13210.805266859457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13617.765611267294,
            "unit": "ns/iter",
            "extra": "iterations: 51197\ncpu: 13617.356485731634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11067.648554219566,
            "unit": "ns/iter",
            "extra": "iterations: 63253\ncpu: 11067.375460452458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67751.53973477999,
            "unit": "ns/iter",
            "extra": "iterations: 10331\ncpu: 67750.83728583851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153446.20262296472,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153442.33879781514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39363.50336360709,
            "unit": "ns/iter",
            "extra": "iterations: 17838\ncpu: 39363.151698620815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39765.428044071436,
            "unit": "ns/iter",
            "extra": "iterations: 17608\ncpu: 39764.86256247118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39628.21537502189,
            "unit": "ns/iter",
            "extra": "iterations: 17639\ncpu: 39627.76801405983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80998.1574867001,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 80994.9317287662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71331.83084121713,
            "unit": "ns/iter",
            "extra": "iterations: 9831\ncpu: 71331.12602990655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22126.279654854727,
            "unit": "ns/iter",
            "extra": "iterations: 31639\ncpu: 22126.261891968603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103700.88401067538,
            "unit": "ns/iter",
            "extra": "iterations: 6742\ncpu: 103699.91100563618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82827.9419912396,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 82827.16940925867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84105.04983189795,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 84102.44956772405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84478.57336070354,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84477.73215795186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156777.32109269255,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 156777.00403045324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 655637.8647887164,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 655630.9859155016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 554641.1095238794,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 554630.7142857078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 555806.3885805304,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 555789.4528152271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 558310.947958449,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 558268.3746997614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 365844.4445607212,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 365823.95397489803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 541289.3268784325,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541255.2285050394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22536.949460223714,
            "unit": "ns/iter",
            "extra": "iterations: 31124\ncpu: 22536.730497365275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105690.39468518224,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 105689.64215612327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84174.43955517981,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 84168.18127466149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83563.13450779163,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 83562.19497678815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83289.97359617184,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 83285.83034647618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157510.61937949792,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157500.24730215862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 655070.8682972403,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 655050.3292568239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 554016.3560666175,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 553997.065820771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 551090.0669819445,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551071.000788017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 561127.4455999592,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 561105.7599999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 368991.952054811,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 368965.9641728117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 543124.7671339621,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 543124.6105919015 ns\nthreads: 1"
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
        "date": 1705772687471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8967.090744682764,
            "unit": "ns/iter",
            "extra": "iterations: 77966\ncpu: 8966.476412795322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79228.4664861859,
            "unit": "ns/iter",
            "extra": "iterations: 10712\ncpu: 79223.12359970127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151275.79442810905,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 151269.31995154868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 222572.98558188914,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 222556.25643666327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294446.7048846836,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 294429.37584803265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 361358.45927793125,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 361335.85222502094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 432133.0781643619,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 432121.02874432714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502894.3241220292,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 502871.7904432925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572897.851234126,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 572852.3015343564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6662.8170744454565,
            "unit": "ns/iter",
            "extra": "iterations: 105245\ncpu: 6662.466625492894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5650.8352699541465,
            "unit": "ns/iter",
            "extra": "iterations: 123669\ncpu: 5650.586646613136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5647.051103751176,
            "unit": "ns/iter",
            "extra": "iterations: 124394\ncpu: 5647.02156052543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5606.54619463141,
            "unit": "ns/iter",
            "extra": "iterations: 125047\ncpu: 5606.2216606555985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9552.99456514359,
            "unit": "ns/iter",
            "extra": "iterations: 72863\ncpu: 9552.487545118911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37074.97395550226,
            "unit": "ns/iter",
            "extra": "iterations: 22116\ncpu: 37073.00144691626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149238.00052029043,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 149231.78980228925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118572.0015290579,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 118564.27578537649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112552.10313487331,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 112546.19336143276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116226.06733916032,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 116219.3157033806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 274956.80113995256,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 274944.11019632703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2309007.8084577504,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2308888.308457708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1924167.5829873495,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1924077.8008298737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1934616.444444468,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1934512.7882599628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1934208.1221532437,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1934109.1097308483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1158302.640897743,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 1156924.1895261817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1865431.7670680997,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865393.1726907636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7765996.978260292,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7765518.840579706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4319484.541666282,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4319260.185185186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9357842.999999933,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9357412.173913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36362.73656480706,
            "unit": "ns/iter",
            "extra": "iterations: 22776\ncpu: 36360.21250439058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147603.48926668847,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 147597.49270135685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119057.31005703032,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 119052.2325775487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116583.52574082171,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 116577.86426328008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119184.64630542345,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 119179.60591132977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279190.02445299475,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 279174.774774775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2337924.5163726364,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2337831.989924448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1947864.6464434192,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1947796.2343096274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1946071.5594988721,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1945968.2672233775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1942043.710416641,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1941994.1666666644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1165393.4699999979,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1165348.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1880988.5121457297,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1880903.4412955581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7809165.449275233,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7809025.362318809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4453657.738095205,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4453204.761904757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35035.71124528968,
            "unit": "ns/iter",
            "extra": "iterations: 23352\ncpu: 35033.16632408332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146029.17735911638,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 146020.34962661198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118771.42184036408,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 118765.63192904652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114554.40240803779,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 114549.9130434781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116759.25215723382,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 116752.51335433504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277145.9531846952,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 277119.2993630594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2332148.882793011,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2332043.6408977592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1934859.9585062861,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1934787.9668049815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1934043.2972972118,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1933970.686070679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1932516.7110188836,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932404.5738045676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1160666.696517384,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1160610.323383084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1871906.5935612314,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1871835.8148893404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3469.0656425546094,
            "unit": "ns/iter",
            "extra": "iterations: 201866\ncpu: 3468.8243686405954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17261.79111001292,
            "unit": "ns/iter",
            "extra": "iterations: 40495\ncpu: 17260.644524015323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13244.36797651581,
            "unit": "ns/iter",
            "extra": "iterations: 52805\ncpu: 13244.139759492547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13392.287079511614,
            "unit": "ns/iter",
            "extra": "iterations: 52320\ncpu: 13392.261085626895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11257.648611692503,
            "unit": "ns/iter",
            "extra": "iterations: 62162\ncpu: 11257.145844728257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65035.0868271905,
            "unit": "ns/iter",
            "extra": "iterations: 10757\ncpu: 65032.211583154996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154103.45684163054,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 154092.64221392368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39926.31311053518,
            "unit": "ns/iter",
            "extra": "iterations: 17505\ncpu: 39924.24450157153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40210.691226258874,
            "unit": "ns/iter",
            "extra": "iterations: 17427\ncpu: 40208.95162678638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40286.61460375933,
            "unit": "ns/iter",
            "extra": "iterations: 17338\ncpu: 40285.413542508024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82591.18825744103,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82586.66901988555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68725.9916494779,
            "unit": "ns/iter",
            "extra": "iterations: 10179\ncpu: 68721.64259750397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21111.94787761827,
            "unit": "ns/iter",
            "extra": "iterations: 33076\ncpu: 21110.678437538096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102445.45166007908,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 102440.55872458723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82461.40738129425,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82460.09637987806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82002.49636407342,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 81999.80060989999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83651.55419664316,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83647.9256594717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152854.9292421942,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 152843.5903035596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 657896.0732393495,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657857.3708920185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 559922.4852354318,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559912.4501197129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 552719.14645666,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 552684.488188974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 557886.2634538163,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 557844.5783132578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361868.27366787416,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 361839.52405587345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 543066.0317829667,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 543027.2868217125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21748.99803389119,
            "unit": "ns/iter",
            "extra": "iterations: 32043\ncpu: 21747.127297693834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104140.99791789704,
            "unit": "ns/iter",
            "extra": "iterations: 6724\ncpu: 104139.3515764443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83454.71221138223,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 83454.42751725852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82248.06397741885,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 82242.31447724304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83627.83086478553,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83623.7816531287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152670.74721678018,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 152659.4848286409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 661040.6804901079,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 660546.5598492039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 556803.3159184147,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 556724.4897959227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 548382.8742187668,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 548351.0937499992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 557664.5075939287,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 557613.2693844967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364633.3314255754,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 364628.09573361505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545936.8654743467,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 545909.0979782329 ns\nthreads: 1"
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
        "date": 1705774100428,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8644.498853924799,
            "unit": "ns/iter",
            "extra": "iterations: 80274\ncpu: 8644.316964396941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77416.9319752693,
            "unit": "ns/iter",
            "extra": "iterations: 10996\ncpu: 77412.74099672608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146997.93990546727,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 146992.55570560432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 217520.9569544628,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 217509.6541428216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 287937.2346498792,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287930.5343511451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 354894.81545418594,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 354876.3255240444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 421256.23597678903,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 421251.59574468073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488752.3667041214,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 488741.9010123737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 557502.4810289555,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 557488.6816720258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6759.474284739077,
            "unit": "ns/iter",
            "extra": "iterations: 105521\ncpu: 6759.443144018727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5599.751244851237,
            "unit": "ns/iter",
            "extra": "iterations: 125517\ncpu: 5599.645466351179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5580.592118954519,
            "unit": "ns/iter",
            "extra": "iterations: 125897\ncpu: 5580.46736618029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5561.693175588361,
            "unit": "ns/iter",
            "extra": "iterations: 125857\ncpu: 5561.612782761379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9598.688199167234,
            "unit": "ns/iter",
            "extra": "iterations: 72944\ncpu: 9598.363127878905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37056.307626583075,
            "unit": "ns/iter",
            "extra": "iterations: 22238\ncpu: 37055.64798992716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144721.04942450172,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 144718.31415030456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116655.69220227865,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 116654.32369466909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113023.41954327702,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113019.21136484346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115489.25125422965,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 115485.72203389829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 279482.30620777165,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 279466.4522354459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2292417.543210068,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2292303.45679013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1864548.8393574113,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1864459.4377510007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1837550.6126480545,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1837471.5415019726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1861257.3815260814,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1861169.4779116486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1120514.7941888664,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1120468.159806295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1804959.6484375207,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1804876.1718749972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7603156.280000576,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7602653.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4246972.990740813,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4246790.740740735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9255600.89655164,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9254980.172413804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35651.586300897805,
            "unit": "ns/iter",
            "extra": "iterations: 23111\ncpu: 35651.209380814325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145261.1143147792,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 145254.40976933515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117277.73464911974,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117273.75274122812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115139.82662705857,
            "unit": "ns/iter",
            "extra": "iterations: 7406\ncpu: 115132.64920334809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118776.86764909526,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 118773.62713749472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283524.9002607426,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 283519.94784876186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2345806.416458838,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2345779.0523690754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1894284.9673468415,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1894245.918367354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1853275.0677291078,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853255.57768924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1882793.3360325953,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882773.6842105307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1125199.5907430165,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1125186.114494523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1824294.721568683,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1824248.6274509835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7625430.819999793,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7625291.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4233776.472727351,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4233680.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34986.67905104996,
            "unit": "ns/iter",
            "extra": "iterations: 23605\ncpu: 34986.26985808087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142424.27652520058,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 142421.61803713607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116248.67070184356,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 116245.89227421125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113160.56614528822,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 113157.18451749743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114168.00187490316,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 114166.18454533297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281710.343659243,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 281704.0012907385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2305409.503722141,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2305385.1116625266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1886159.8900203698,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1886140.1221995954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1848853.5557769167,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1848799.6015936227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1879287.9331982818,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1879198.5829959463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1122205.1393939513,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1122156.8484848524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1827036.6291912002,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1827016.3708086677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3402.19891985307,
            "unit": "ns/iter",
            "extra": "iterations: 206083\ncpu: 3402.0690692585263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17320.524651024585,
            "unit": "ns/iter",
            "extra": "iterations: 40404\ncpu: 17320.473220473297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13009.047743684365,
            "unit": "ns/iter",
            "extra": "iterations: 53871\ncpu: 13008.76724025919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13438.202645957863,
            "unit": "ns/iter",
            "extra": "iterations: 52155\ncpu: 13437.73176109673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11103.086790115254,
            "unit": "ns/iter",
            "extra": "iterations: 62968\ncpu: 11102.5219158938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66188.658957342,
            "unit": "ns/iter",
            "extra": "iterations: 10550\ncpu: 66185.56398104258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146481.73464681295,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 146476.7344372255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39260.46503163555,
            "unit": "ns/iter",
            "extra": "iterations: 17859\ncpu: 39258.68749650033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39294.67452300765,
            "unit": "ns/iter",
            "extra": "iterations: 17820\ncpu: 39292.856341189756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39654.95548507789,
            "unit": "ns/iter",
            "extra": "iterations: 17657\ncpu: 39653.46887919833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80334.83793696357,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 80330.95702005748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71145.09683974976,
            "unit": "ns/iter",
            "extra": "iterations: 9841\ncpu: 71141.57097855893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21628.45265339024,
            "unit": "ns/iter",
            "extra": "iterations: 32336\ncpu: 21628.182211776664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102485.8122690228,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 102482.46858832231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83381.58062210413,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83378.57227982295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81403.6209696151,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 81400.04639294837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82927.58063751546,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 82923.79428842316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157889.3677332199,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157883.5060838188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 652243.9795349614,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 652223.6279069766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 549988.7651217125,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 549969.3637077711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540580.8280647796,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540553.6622976176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 548656.3351562169,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 548632.2656250042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361624.91649481555,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 361612.42268041463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535868.3346065448,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535849.3506493453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21763.15427896625,
            "unit": "ns/iter",
            "extra": "iterations: 32169\ncpu: 21762.681463521014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102576.21585580007,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 102572.78722157112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82602.74639395456,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82599.72806810099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81601.73139723841,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 81597.92395614684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83610.8621718301,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83607.55369928374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156280.30724636358,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 156279.71014492665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 657932.6632270077,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 657913.6022514106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 552231.6360032168,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 552210.5471847728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542282.6469673116,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 542259.2534992249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 550292.3060582035,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 550279.1502753821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364156.2868216882,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 364154.72868217307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 535183.8485080216,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 535175.1338944155 ns\nthreads: 1"
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
        "date": 1705777730370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8594.697381326516,
            "unit": "ns/iter",
            "extra": "iterations: 81568\ncpu: 8594.657218517066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78496.30965322838,
            "unit": "ns/iter",
            "extra": "iterations: 10670\ncpu: 78494.19868791003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149520.1767425993,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 149516.37266655252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 224444.78201218246,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224437.93191056914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 292356.3236682475,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 292355.12474713405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 359407.9190775243,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 359392.70440251566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 430432.5212871444,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 430424.0099009897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 498164.2971887795,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 498166.1503155479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569780.3895425013,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 569755.8823529407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6777.572835914643,
            "unit": "ns/iter",
            "extra": "iterations: 108614\ncpu: 6777.277330730838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5599.209857374141,
            "unit": "ns/iter",
            "extra": "iterations: 124942\ncpu: 5599.178018600634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5575.784578101895,
            "unit": "ns/iter",
            "extra": "iterations: 125860\ncpu: 5575.5871603368805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5521.248536442423,
            "unit": "ns/iter",
            "extra": "iterations: 126746\ncpu: 5520.963975194489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9657.032370964915,
            "unit": "ns/iter",
            "extra": "iterations: 72287\ncpu: 9656.729425761192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37956.2757505726,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37954.494226327966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149824.67021090916,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 149820.32421126013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120705.07937175484,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 120700.47679147386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115451.33669490372,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 115448.85034288022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116745.06244034927,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 116742.18132242677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282466.7904638552,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 282459.64969185827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2261936.3228154858,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2261800.728155343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1892573.0060974788,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1892514.430894312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1869591.7855712743,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1869523.446893783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1894638.3828920901,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1894594.2973523454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1123498.6389229205,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1123472.7050183592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1820210.2224410009,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1820163.188976375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7595532.980000144,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7595071.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4319029.842592301,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4318910.185185174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9228087.84482817,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9227405.172413815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36177.36276534899,
            "unit": "ns/iter",
            "extra": "iterations: 22753\ncpu: 36175.77462312653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147520.47674018983,
            "unit": "ns/iter",
            "extra": "iterations: 5804\ncpu: 147511.95727084758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117986.64985451078,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 117981.79298877693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119126.64216231297,
            "unit": "ns/iter",
            "extra": "iterations: 7196\ncpu: 119122.02612562563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 120022.42354096458,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 120018.61672278428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285488.8899142996,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 285480.61964403355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2279205.9533168143,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2279111.3022113014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1907374.1472393502,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1907285.0715746381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1870318.996015768,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1870294.4223107637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1899479.0306123833,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1899375.9183673426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1130206.1391941959,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 1130180.4639804612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1828229.0784314042,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1828130.7843137188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7672560.789999352,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7672507.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4172220.161434792,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4172007.6233183937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34650.502565614646,
            "unit": "ns/iter",
            "extra": "iterations: 23776\ncpu: 34650.69397711981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147735.771763483,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 147736.4075159455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117697.39349436096,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 117693.06889925835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114818.66389596228,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 114813.64794208328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115364.78994202995,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 115359.98382095233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283901.50162234314,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 283883.7767683312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2279371.048899956,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2279289.9755501207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1916310.0287474399,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1916220.1232032795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1872638.7641128248,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872545.5645161252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1900488.2240326002,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900426.8839103903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1126247.963280284,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1126203.9167686645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1830929.3622047876,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1830833.2677165363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3373.501227803267,
            "unit": "ns/iter",
            "extra": "iterations: 207688\ncpu: 3373.348965756325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17379.64030650093,
            "unit": "ns/iter",
            "extra": "iterations: 40326\ncpu: 17378.718444675804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13140.887066779034,
            "unit": "ns/iter",
            "extra": "iterations: 53235\ncpu: 13140.355029585684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13595.243805747807,
            "unit": "ns/iter",
            "extra": "iterations: 51459\ncpu: 13595.09706756839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11296.119237475665,
            "unit": "ns/iter",
            "extra": "iterations: 61952\ncpu: 11296.009814049537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67309.41094834468,
            "unit": "ns/iter",
            "extra": "iterations: 10376\ncpu: 67305.01156515027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151603.91933748953,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 151596.14970961542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39674.25789952202,
            "unit": "ns/iter",
            "extra": "iterations: 17596\ncpu: 39672.800636507855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39686.38248456615,
            "unit": "ns/iter",
            "extra": "iterations: 17653\ncpu: 39686.019373477946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39653.89292185957,
            "unit": "ns/iter",
            "extra": "iterations: 17660\ncpu: 39654.1223103059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81215.18875594641,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 81210.1173190843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70987.21802149207,
            "unit": "ns/iter",
            "extra": "iterations: 9866\ncpu: 70984.34015811923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21870.38746839067,
            "unit": "ns/iter",
            "extra": "iterations: 32031\ncpu: 21868.98005057591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101255.61775335806,
            "unit": "ns/iter",
            "extra": "iterations: 6917\ncpu: 101251.58305623813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83329.43156293883,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 83207.55732334919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80241.40180818834,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 80238.25818265094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82002.66884709157,
            "unit": "ns/iter",
            "extra": "iterations: 8561\ncpu: 81999.17065763375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155141.81353681473,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 155137.86772837595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 650307.0139405328,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 650299.4423791921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 558201.1405622726,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 558184.8995983861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 549094.9906029488,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 549091.7776037581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 554171.9722441701,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 554151.0705789074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 367136.42752483283,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 367133.3856619629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 541455.7841171841,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 541446.1835003815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21559.416658971222,
            "unit": "ns/iter",
            "extra": "iterations: 32487\ncpu: 21559.272939945397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102753.0700163605,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 102751.76155790157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82134.15572232894,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82129.43245778605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81361.2034883638,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 81360.39534883722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82744.79089296103,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 82739.52690715568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155458.77883760125,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155450.77639751433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 651927.2156133893,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 651904.3680297444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 557816.5650438349,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 557809.9760574695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 547986.1658878588,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 547978.6604361414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 554203.5602218311,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 554178.2884310685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364626.15007819806,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 364607.45179781097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 539799.8613251399,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 539782.7426810461 ns\nthreads: 1"
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
        "date": 1705954268636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8703.823803719793,
            "unit": "ns/iter",
            "extra": "iterations: 80416\ncpu: 8703.690807799443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 80192.93516256675,
            "unit": "ns/iter",
            "extra": "iterations: 10642\ncpu: 80191.23285096788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 153442.3420452621,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 153436.71285739343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 226421.88749673546,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 226420.36021926385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 299153.5503521307,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 299153.83802816895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 366366.6422907395,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 366348.9867841411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 440640.886467314,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 440641.7638114547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 511874.04970415524,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 511863.6686390532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584409.0134861821,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 584384.0188806474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6633.042756311064,
            "unit": "ns/iter",
            "extra": "iterations: 105692\ncpu: 6632.995874806031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5665.134605124243,
            "unit": "ns/iter",
            "extra": "iterations: 123710\ncpu: 5665.139439010587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5565.225836401687,
            "unit": "ns/iter",
            "extra": "iterations: 126016\ncpu: 5565.0425342813505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5564.380629485853,
            "unit": "ns/iter",
            "extra": "iterations: 125944\ncpu: 5564.3039763704555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9714.725561308149,
            "unit": "ns/iter",
            "extra": "iterations: 72242\ncpu: 9714.515102018215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36835.400071890406,
            "unit": "ns/iter",
            "extra": "iterations: 22256\ncpu: 36835.42415528396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148857.64638587114,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 148855.4168833423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 119244.35456948745,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 119244.40116845208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113480.75226545872,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 113476.05277185517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117542.82792742494,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 117542.88070368291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282898.3038673992,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 282890.510237244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2383230.68717935,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2383216.6666666716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1978846.2150538708,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1978768.8172043078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1918322.1983470586,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1918322.3140495915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1973036.6377118726,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1972999.3644067822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1158128.6246850868,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1158120.9068010063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1898237.9244898674,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1898182.8571428603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7736271.785714571,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7735934.285714308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4351978.587962962,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4351762.037037046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9590166.672567254,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9589585.84070798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35431.76693509961,
            "unit": "ns/iter",
            "extra": "iterations: 23221\ncpu: 35429.85659532323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 149932.55270953683,
            "unit": "ns/iter",
            "extra": "iterations: 5739\ncpu: 149927.025614218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119170.95365617496,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 119164.36797557857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115558.28264104239,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115551.91449059627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121328.14366515895,
            "unit": "ns/iter",
            "extra": "iterations: 7072\ncpu: 121321.4507918556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286423.641042557,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 286412.0092378755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2402864.728682211,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2402766.408268736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2002589.8275859738,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2002480.8189655142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1937211.6424116925,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1937143.4511434578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1977824.4255319883,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1977759.3617021241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1155140.5329192614,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1155078.3850931737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1907348.8049280692,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1907311.4989733086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7767075.683453533,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7766964.02877698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4353073.785046992,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4353051.401869163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34163.80248555762,
            "unit": "ns/iter",
            "extra": "iterations: 24059\ncpu: 34162.83719190321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145728.32262452092,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145727.26500084932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117760.45929991752,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 117757.18599862745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111960.61799527564,
            "unit": "ns/iter",
            "extra": "iterations: 7602\ncpu: 111959.2607208628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113322.23538809043,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113317.72067634108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282977.2949804385,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 282975.5867014351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2393507.118251836,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2393471.2082262174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1991625.6129030816,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1991595.9139784907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1932681.1538461423,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932623.7006236997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1980544.5201698395,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1980547.1337579626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1159697.9262086365,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1159652.9262086556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1903396.3786008125,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1903365.8436213916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3387.380478377409,
            "unit": "ns/iter",
            "extra": "iterations: 206448\ncpu: 3387.325137564901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16990.953525601584,
            "unit": "ns/iter",
            "extra": "iterations: 41227\ncpu: 16990.816697795046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13281.233715964805,
            "unit": "ns/iter",
            "extra": "iterations: 52705\ncpu: 13280.842424817352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13204.517194570522,
            "unit": "ns/iter",
            "extra": "iterations: 53040\ncpu: 13204.52865761689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11056.21049817555,
            "unit": "ns/iter",
            "extra": "iterations: 63592\ncpu: 11055.70354761602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67543.58457257651,
            "unit": "ns/iter",
            "extra": "iterations: 10423\ncpu: 67542.52134702103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 150959.2189247224,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 150957.65591397943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40361.10111776862,
            "unit": "ns/iter",
            "extra": "iterations: 17356\ncpu: 40360.74556349452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40336.20632809206,
            "unit": "ns/iter",
            "extra": "iterations: 17288\ncpu: 40334.46321147592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40443.89238363021,
            "unit": "ns/iter",
            "extra": "iterations: 17423\ncpu: 40443.97635309689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82005.5633720966,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 82002.26744186027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73032.54011476981,
            "unit": "ns/iter",
            "extra": "iterations: 9585\ncpu: 73031.90401669288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22025.34369401883,
            "unit": "ns/iter",
            "extra": "iterations: 31819\ncpu: 22024.84050410131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103687.8233900864,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 103685.29977794303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84141.79473304751,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 84141.90716690855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81881.46482500673,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 81878.0873229541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84261.14884393092,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84260.54913294656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157206.54191954003,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 157202.20274218835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 676893.639344358,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 676875.6991321073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 578764.0214167739,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 578764.6622734816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 565034.4845276349,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 565010.0162866424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 575404.96302386,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 575374.0345110871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 369940.29100526107,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 369916.24338624254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 559129.1536624106,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 559092.9140127372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21882.19296254445,
            "unit": "ns/iter",
            "extra": "iterations: 31716\ncpu: 21881.772606885923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104810.62910235602,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 104807.94245466839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85104.845368347,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85104.95988329609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81905.42744722836,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 81901.7407893155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84355.32968224428,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84354.67019740072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157881.08032491631,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 157874.8871841163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 680306.797872315,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 680287.911025134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 578930.4615384351,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 578925.4755996651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 560308.3374283427,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 560282.882882877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 567702.0226537214,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 567697.5728155335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 372155.594580203,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 372144.95217853395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 555281.07165605,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 555256.2101910784 ns\nthreads: 1"
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
        "date": 1705956109965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8892.410605462497,
            "unit": "ns/iter",
            "extra": "iterations: 78601\ncpu: 8891.825803742955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 80901.95004747687,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 80895.49857549857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 153914.19787985712,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 153907.5265017668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 226752.20088702816,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 226736.00313070702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 302711.4325920594,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 302697.5677553857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 369892.39690056053,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 369877.44296168763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 441627.7598984772,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 441620 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514557.32627866394,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 514544.6208112875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 587125.6682593359,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 587110.2389078499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6684.494548204851,
            "unit": "ns/iter",
            "extra": "iterations: 104461\ncpu: 6684.13091967337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5776.6666419533,
            "unit": "ns/iter",
            "extra": "iterations: 121392\ncpu: 5776.149993409779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5729.3394073161235,
            "unit": "ns/iter",
            "extra": "iterations: 122325\ncpu: 5729.069282648679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5710.441140549663,
            "unit": "ns/iter",
            "extra": "iterations: 122818\ncpu: 5710.363301796166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9692.563975722775,
            "unit": "ns/iter",
            "extra": "iterations: 72168\ncpu: 9692.560414588164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36499.02432275738,
            "unit": "ns/iter",
            "extra": "iterations: 22407\ncpu: 36498.68344713706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146467.90307611995,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 146460.38838288354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120009.42513294095,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 120002.71480548562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114918.08199378054,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 114912.7921113062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117441.99034216866,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 117441.50110375287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282307.9782608636,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 282307.8844905906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2378419.8418366844,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2378276.020408167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1972693.590717394,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1972610.12658228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1976783.3779192255,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1976718.2590233553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1987621.7051281736,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1987565.811965817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1182464.9257363589,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1182426.76056338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1900831.2290390215,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1900694.4785276116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7893874.867646974,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7893522.058823536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4377013.169014368,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4376766.197183097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9651432.153153414,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9651290.990990998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36489.433009016386,
            "unit": "ns/iter",
            "extra": "iterations: 22406\ncpu: 36488.61465678835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150959.56790559134,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 150957.3366214555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119001.42122811663,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 118999.72214504053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116582.70101120583,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 116578.94233397036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121562.8498789365,
            "unit": "ns/iter",
            "extra": "iterations: 7021\ncpu: 121557.01467027518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284095.6215686228,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 284090.75163398805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2405204.4689118788,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2405105.6994818556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2003740.1096773935,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2003699.1397849456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2001423.8008564985,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 2001317.130620974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1996442.4077252962,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1996438.412017177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1176755.539822968,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1176670.0379266741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1923596.5486543013,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1923533.7474120106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7910099.118518061,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7909642.222222252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4501936.427184605,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4501746.116504873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34774.524549225454,
            "unit": "ns/iter",
            "extra": "iterations: 23626\ncpu: 34773.20325065608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144295.2290860145,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 144290.25416596478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118319.28850144925,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 118314.05839214075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115688.04112554842,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 115682.10227272763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 118787.59907575982,
            "unit": "ns/iter",
            "extra": "iterations: 7141\ncpu: 118782.83153619958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282085.2325129777,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 282072.9922279779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2389827.6889460697,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2389770.4370179973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1990226.4413646054,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1990126.4392323995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1985658.957446842,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1985588.2978723478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1989426.3905580998,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1989327.038626615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1181168.9873258213,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1181133.2065906213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1914523.6024590558,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1914434.631147528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3429.303297694296,
            "unit": "ns/iter",
            "extra": "iterations: 203991\ncpu: 3429.2253089597166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17469.064037809687,
            "unit": "ns/iter",
            "extra": "iterations: 39992\ncpu: 17468.358671734342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13398.84412758374,
            "unit": "ns/iter",
            "extra": "iterations: 52389\ncpu: 13398.335528450636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13722.777170935075,
            "unit": "ns/iter",
            "extra": "iterations: 51084\ncpu: 13722.016678411997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11323.539149273278,
            "unit": "ns/iter",
            "extra": "iterations: 61853\ncpu: 11323.086996588667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67260.2875359456,
            "unit": "ns/iter",
            "extra": "iterations: 10430\ncpu: 67258.87823585811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 157345.16865035926,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 157341.5001122835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40727.67501601955,
            "unit": "ns/iter",
            "extra": "iterations: 17167\ncpu: 40726.18395759327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40751.286705135055,
            "unit": "ns/iter",
            "extra": "iterations: 17157\ncpu: 40751.70484350363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40841.08142315407,
            "unit": "ns/iter",
            "extra": "iterations: 17145\ncpu: 40839.29425488455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 83846.82616509886,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 83846.14831675914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73564.93795276257,
            "unit": "ns/iter",
            "extra": "iterations: 9525\ncpu: 73564.58792651001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22321.237410072044,
            "unit": "ns/iter",
            "extra": "iterations: 31414\ncpu: 22321.23575475899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102705.31391584504,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 102703.1038540737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82946.53799645173,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 82941.11440426724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83349.75734065718,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83347.02793029351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83849.740473611,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 83849.05637696838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153628.12283015792,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153624.3243243244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 676790.0465116695,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 676759.9806201463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 575175.9737273864,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 575134.4006568043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 574419.89271089,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 574404.7502047487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 576545.8032921046,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 576532.1810699512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 375466.7296137202,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 375452.78969957016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 559601.4940143368,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559596.9672785365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22409.005784060475,
            "unit": "ns/iter",
            "extra": "iterations: 31120\ncpu: 22408.875321336618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104123.5010419806,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 104119.54450729184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84352.25472948355,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84347.60814555947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82933.748374127,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 82930.23530802877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84349.73285937685,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84347.86118809509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153919.90331794936,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153919.00681169087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 679508.1302235534,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679481.7298347895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 575389.8216926357,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 575356.0394412489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 573620.408381288,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 573597.2062448678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 576336.6652960774,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 576332.9769736814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 377004.9407327453,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 377001.45474137994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 560167.0769847633,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 560163.8331996812 ns\nthreads: 1"
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
        "date": 1705957707941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8603.947988417342,
            "unit": "ns/iter",
            "extra": "iterations: 81155\ncpu: 8603.7804201836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76994.90203747188,
            "unit": "ns/iter",
            "extra": "iterations: 10994\ncpu: 76992.42313989448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145963.65352489194,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 145958.78717006353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215885.14215201684,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 215876.40671273452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 284487.3233944903,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 284481.97903014417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 349074.5660300953,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 349061.4790735474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 417035.3089860274,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 417014.464199904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 484309.89426825196,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 484292.1535893156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 551963.5907652988,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 551937.5079063884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6421.375172222911,
            "unit": "ns/iter",
            "extra": "iterations: 108145\ncpu: 6420.78875583706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5468.092303361036,
            "unit": "ns/iter",
            "extra": "iterations: 127861\ncpu: 5467.899515880518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5411.337103967089,
            "unit": "ns/iter",
            "extra": "iterations: 129156\ncpu: 5410.899222645493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5476.623553699983,
            "unit": "ns/iter",
            "extra": "iterations: 127394\ncpu: 5476.371728652842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9630.933299395478,
            "unit": "ns/iter",
            "extra": "iterations: 72683\ncpu: 9630.297318492638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37426.74846262064,
            "unit": "ns/iter",
            "extra": "iterations: 21953\ncpu: 37424.09693435982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 147165.13209812605,
            "unit": "ns/iter",
            "extra": "iterations: 5829\ncpu: 147156.57917309995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118304.53019488479,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 118298.05105682134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113730.96778059422,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113724.67048329099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116184.35724005644,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116177.87152966781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 310856.1688635617,
            "unit": "ns/iter",
            "extra": "iterations: 2807\ncpu: 310838.9027431424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2288491.0416667247,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2288344.8529411815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1887075.8559838526,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1886962.2718052734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1854167.3879999507,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1854034.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1904709.758691138,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1904598.977505112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1144145.2104608088,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1144093.0261519318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1832449.1397637269,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832330.7086614126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7687920.039999199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7687308.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4365838.8075113725,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4365597.1830985835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9375212.525861602,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9374975.862068947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36007.28872562108,
            "unit": "ns/iter",
            "extra": "iterations: 22866\ncpu: 36005.143007084735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148541.21099965594,
            "unit": "ns/iter",
            "extra": "iterations: 5782\ncpu: 148536.38879280564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118185.82924813918,
            "unit": "ns/iter",
            "extra": "iterations: 7262\ncpu: 118182.85596254448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117433.68683957848,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 117431.49444215742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118188.63828903163,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118184.05315614598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 313124.6464465129,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 313111.8808327357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2307572.5980146714,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2307514.640198515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1914494.849794114,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1914421.6049382638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1877902.5878787097,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1877814.1414141303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1918780.4265011041,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1918686.9565217388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1141003.998768392,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1140982.7586206847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1844536.9503967054,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1844452.3809523904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7738305.990000072,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7737979.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4411460.58293805,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4411209.478672967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34985.95510342838,
            "unit": "ns/iter",
            "extra": "iterations: 23543\ncpu: 34984.93819819077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141795.10768720278,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 141786.08349900655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115927.00542592861,
            "unit": "ns/iter",
            "extra": "iterations: 7372\ncpu: 115923.41291372759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112843.96661827827,
            "unit": "ns/iter",
            "extra": "iterations: 7579\ncpu: 112839.60944715685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114069.39324792763,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 114065.69255404349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 311401.19521772757,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 311384.26124197047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2294292.31034499,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2294123.8916256162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1904249.2049179806,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1904142.4180327808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1865783.488889028,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1865709.6969696947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1901613.3693876513,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1901497.1428571453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1138098.1369192428,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1138029.7066014654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1839238.2066928006,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1839140.944881891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3331.9903048216847,
            "unit": "ns/iter",
            "extra": "iterations: 209795\ncpu: 3331.7810243332756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17205.802489362875,
            "unit": "ns/iter",
            "extra": "iterations: 40894\ncpu: 17174.75668802275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13464.528204145448,
            "unit": "ns/iter",
            "extra": "iterations: 52120\ncpu: 13464.182655410568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13530.816785053341,
            "unit": "ns/iter",
            "extra": "iterations: 51808\ncpu: 13530.454756022196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11106.63833631862,
            "unit": "ns/iter",
            "extra": "iterations: 63089\ncpu: 11106.249900933533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 73062.38107176387,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 73057.7979734674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151590.15676498457,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 151583.82480485653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39078.763932230315,
            "unit": "ns/iter",
            "extra": "iterations: 17944\ncpu: 39076.58827463221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39056.803102162026,
            "unit": "ns/iter",
            "extra": "iterations: 17923\ncpu: 39056.073202030784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39511.102309298614,
            "unit": "ns/iter",
            "extra": "iterations: 17711\ncpu: 39509.11862684154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80790.72880378453,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 80788.00322989965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70257.11996787645,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70254.00060234961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21295.0350781031,
            "unit": "ns/iter",
            "extra": "iterations: 32841\ncpu: 21294.649980207447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102036.82297414604,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 102033.95294801054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81888.71682961166,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 81884.63687150805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81648.73106898196,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 81645.94626032341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81532.48728370988,
            "unit": "ns/iter",
            "extra": "iterations: 8611\ncpu: 81527.8481012662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156057.284982175,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 156054.56773618332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 649423.1313598239,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649399.5374653114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 550479.4300313647,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550456.3679245298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537833.1420890772,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537815.668202757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 550325.7721916746,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 550295.9937156369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 357285.77794793766,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 357279.17304747034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 531982.8561538578,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 531958.4615384524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21592.14519875082,
            "unit": "ns/iter",
            "extra": "iterations: 30138\ncpu: 21591.329882540114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101351.87095376114,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 101349.17630057925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82257.85485957138,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82252.6501351509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81197.62121388776,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 81196.11233607949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82721.32699575307,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82717.28861596473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157082.68851352256,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 157077.3648648647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 649297.8368860274,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 649279.7961075045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 545151.6006339641,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 545123.6133122002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 535077.8922019134,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 535068.0428134608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 547902.017336456,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 547876.9897557183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 358709.0445925018,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 358696.51460789435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 534028.1386138821,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 534014.0137090571 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}