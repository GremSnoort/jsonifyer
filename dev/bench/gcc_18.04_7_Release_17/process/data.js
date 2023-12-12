window.BENCHMARK_DATA = {
  "lastUpdate": 1702381124404,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Release c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381117473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1860.8482520604484,
            "unit": "ns/iter",
            "extra": "iterations: 378417\ncpu: 1860.814656846812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27924.013333786024,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 27922.776284907646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56910.729178085065,
            "unit": "ns/iter",
            "extra": "iterations: 14600\ncpu: 56907.061643835616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70652.32168684306,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 70649.55716259038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99844.9487068953,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 99840.2801724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124476.09313021049,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 124468.88473699335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149045.8146639512,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 149040.08825526142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173027.20339316924,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 173024.32432432452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198065.17034560305,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 198055.3177257523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.1657044206647,
            "unit": "ns/iter",
            "extra": "iterations: 440809\ncpu: 1588.1402149230128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1295.7728981133075,
            "unit": "ns/iter",
            "extra": "iterations: 540110\ncpu: 1295.7473477624933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1293.8585272001255,
            "unit": "ns/iter",
            "extra": "iterations: 538987\ncpu: 1293.8044887910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1327.8750813285915,
            "unit": "ns/iter",
            "extra": "iterations: 527183\ncpu: 1327.8394788906296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.1449891268503,
            "unit": "ns/iter",
            "extra": "iterations: 291546\ncpu: 2379.0746571724517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8634.456050740111,
            "unit": "ns/iter",
            "extra": "iterations: 94757\ncpu: 8634.415399390014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49129.089639186765,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 49127.39701599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37723.92992874105,
            "unit": "ns/iter",
            "extra": "iterations: 21892\ncpu: 37721.34569705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38655.48358585645,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38655.279648335134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38436.881771562,
            "unit": "ns/iter",
            "extra": "iterations: 21450\ncpu: 38435.16550116551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105759.22716990259,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 105757.63781402566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828371.4406475041,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 828326.8884892059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678759.7635431682,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678728.5505124449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686853.2555066149,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 686816.960352424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679611.4840148437,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 679577.6208178448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487476.6550169358,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 487462.57046223123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692282.7783543499,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692278.6508524844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3725199.0039369664,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3724935.0393700725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1642477.2968750803,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1642456.0763888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843483.3846152825,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843255.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12980.006959988395,
            "unit": "ns/iter",
            "extra": "iterations: 65230\ncpu: 12979.224283305179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57063.18690000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57062.9499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52264.78678265315,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 52261.580824832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52443.47046227502,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52441.30872905893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49684.916763571746,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 49684.16059734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114133.80154774389,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 114127.15110178382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 887045.2821735126,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 886947.7597712061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728050.127033265,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 728015.3369481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728991.6458658488,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728956.0062402469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 720238.5312977278,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 720191.1450381704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 508094.25014544884,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 508074.05468295305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703011.3086142599,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 702982.3970037467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3926542.217573067,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3926334.309623436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1688014.5666074369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1687931.4387211327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9212.819858773932,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 9212.34050635738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51365.11159330436,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 51361.22752634858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38919.02017737258,
            "unit": "ns/iter",
            "extra": "iterations: 21311\ncpu: 38917.48862090021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38841.5696042076,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38840.551199586975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40676.87789165231,
            "unit": "ns/iter",
            "extra": "iterations: 20490\ncpu: 40676.67642752553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101863.01503155201,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 101860.06884681633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 878661.0036934401,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 878635.9187442259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 706071.1247199367,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 706007.3935772947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 707152.3660714449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 707108.8541666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 706125.4678143468,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 705975.4491017964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496915.62393160025,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496879.0883190903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691885.9419117746,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 691853.5294117653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.7966669957542,
            "unit": "ns/iter",
            "extra": "iterations: 1043323\ncpu: 670.7563237846762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5004.499252048877,
            "unit": "ns/iter",
            "extra": "iterations: 139715\ncpu: 5004.275847260508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3957.6745825956896,
            "unit": "ns/iter",
            "extra": "iterations: 177406\ncpu: 3957.4461968591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.0241960719113,
            "unit": "ns/iter",
            "extra": "iterations: 182137\ncpu: 3843.8378802769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2947.898637682297,
            "unit": "ns/iter",
            "extra": "iterations: 237830\ncpu: 2947.7185384518357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25700.38192164479,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25699.215729189338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50346.61895438781,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50343.83293452266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11691.487719708453,
            "unit": "ns/iter",
            "extra": "iterations: 59852\ncpu: 11691.433870213146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11603.178672538214,
            "unit": "ns/iter",
            "extra": "iterations: 60401\ncpu: 11602.95193788186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11573.779923231323,
            "unit": "ns/iter",
            "extra": "iterations: 59920\ncpu: 11572.376502002811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23577.624700846252,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 23575.983415916628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22589.427996523016,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22588.313318953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7073.435651584301,
            "unit": "ns/iter",
            "extra": "iterations: 98767\ncpu: 7073.316998592632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34805.13793959853,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 34804.18239618488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28443.573308499173,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28443.430376158605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28072.085758103207,
            "unit": "ns/iter",
            "extra": "iterations: 24779\ncpu: 28071.939949150194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28640.55704561296,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 28640.423103574758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59772.88876529875,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59772.59347993428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221644.76377454682,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221640.21532615443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 189060.19908528207,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 189050.17487220722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187882.64237698642,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187873.21860715275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 188778.31467025416,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 188777.14670255556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112945.43990307463,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112940.95315024302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190406.5001347442,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 190397.60172460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6652.8369853849645,
            "unit": "ns/iter",
            "extra": "iterations: 104690\ncpu: 6652.481612379407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34040.8689568029,
            "unit": "ns/iter",
            "extra": "iterations: 20581\ncpu: 34039.08945143577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26842.34152042172,
            "unit": "ns/iter",
            "extra": "iterations: 26098\ncpu: 26840.70426852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27377.493926333944,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27375.666144200703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27822.172139620412,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27820.78794625087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57490.511923298924,
            "unit": "ns/iter",
            "extra": "iterations: 12203\ncpu: 57487.59321478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214002.20145631937,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 213989.01699029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184137.08243350554,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184124.99341585342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183440.47552631082,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 183434.26315789277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 185833.27863611822,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185832.4187533311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110160.6018020839,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110160.18020866379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184888.33307044944,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184877.60252365877 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}