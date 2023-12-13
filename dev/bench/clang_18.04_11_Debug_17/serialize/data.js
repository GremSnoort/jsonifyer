window.BENCHMARK_DATA = {
  "lastUpdate": 1702492178093,
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
      }
    ]
  }
}