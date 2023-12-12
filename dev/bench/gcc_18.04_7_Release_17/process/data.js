window.BENCHMARK_DATA = {
  "lastUpdate": 1702388093551,
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382272485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1848.1945884211216,
            "unit": "ns/iter",
            "extra": "iterations: 377376\ncpu: 1848.197818621216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27608.254683153893,
            "unit": "ns/iter",
            "extra": "iterations: 29841\ncpu: 27605.911330049268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56467.17429446059,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 56464.760285617136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70538.56011303919,
            "unit": "ns/iter",
            "extra": "iterations: 12385\ncpu: 70535.46225272506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99094.09051770937,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 99090.4746528899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 123482.5195301442,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 123478.61590716109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 148994.8226926387,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 148988.09483488576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 172230.48340295663,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 172230.02857770925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 197871.2625698374,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 197870.21229050303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1620.4773885277802,
            "unit": "ns/iter",
            "extra": "iterations: 432170\ncpu: 1620.4565333086505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1339.7622464922422,
            "unit": "ns/iter",
            "extra": "iterations: 522272\ncpu: 1339.735616690154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1284.365538397195,
            "unit": "ns/iter",
            "extra": "iterations: 535599\ncpu: 1284.3205457814527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1232.4202653446803,
            "unit": "ns/iter",
            "extra": "iterations: 567639\ncpu: 1232.4216623593509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2286.438921860192,
            "unit": "ns/iter",
            "extra": "iterations: 298069\ncpu: 2286.351146882096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8845.357750492682,
            "unit": "ns/iter",
            "extra": "iterations: 93336\ncpu: 8845.036213251044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48440.99005004759,
            "unit": "ns/iter",
            "extra": "iterations: 16784\ncpu: 48440.336034318396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37330.805119810575,
            "unit": "ns/iter",
            "extra": "iterations: 21993\ncpu: 37330.3733005955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38283.94009853155,
            "unit": "ns/iter",
            "extra": "iterations: 21719\ncpu: 38283.72392835759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38182.00497905976,
            "unit": "ns/iter",
            "extra": "iterations: 21490\ncpu: 38175.63983248018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 104608.13029432455,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 104607.14285714278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 853526.5447080336,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 853515.3284671535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 691491.1541883018,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 691471.6827279483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 693395.5816554693,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 693377.6286353464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 693678.1919342558,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 693661.0903659443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 485713.99440091796,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 485708.2866741335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 702373.2510981085,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 702379.7950219612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3694446.0742187602,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3694316.0156249907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1629644.6637782424,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1629639.6880415948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4807581.382653218,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4807479.081632665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12950.532889518025,
            "unit": "ns/iter",
            "extra": "iterations: 64291\ncpu: 12950.24031357421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 57937.52949999771,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57935.97000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49549.54155193983,
            "unit": "ns/iter",
            "extra": "iterations: 15980\ncpu: 49547.6846057573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 49394.19315272541,
            "unit": "ns/iter",
            "extra": "iterations: 16795\ncpu: 49391.94403096178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50109.80117065949,
            "unit": "ns/iter",
            "extra": "iterations: 16401\ncpu: 50108.65191146885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115133.67174369964,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 115133.88918067189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 886980.2228571189,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 886923.6190476147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 725232.8915384746,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 725201.3846153843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 723561.8555984772,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 723517.4517374507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 728598.2280431379,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 728575.2696456087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 507882.6988998534,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 507856.108859295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 713449.9894019798,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 713426.4950794893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3885486.0995850298,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3885319.0871369354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1712695.9449378336,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1712637.300177621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9185.840087890605,
            "unit": "ns/iter",
            "extra": "iterations: 90112\ncpu: 9185.746626420507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51204.66329363648,
            "unit": "ns/iter",
            "extra": "iterations: 16207\ncpu: 51204.16486703285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38510.72907788299,
            "unit": "ns/iter",
            "extra": "iterations: 21353\ncpu: 38510.15314007425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 35891.48549941703,
            "unit": "ns/iter",
            "extra": "iterations: 23137\ncpu: 35889.51463024582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40702.61196439153,
            "unit": "ns/iter",
            "extra": "iterations: 20444\ncpu: 40701.39894345515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 99491.23338717147,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 99488.97092754998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 872558.8930875568,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 872535.2995391724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 708862.5895131144,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 708842.2471910077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 717204.8127368892,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 717194.389689163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 720163.6987860386,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 720153.186646434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 501663.4501441229,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 501656.25360230583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 697451.357620837,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 697447.2118959093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 666.5296171813031,
            "unit": "ns/iter",
            "extra": "iterations: 1053240\ncpu: 666.4935817097722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4784.891515444619,
            "unit": "ns/iter",
            "extra": "iterations: 146749\ncpu: 4784.686778104117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3782.7188942576686,
            "unit": "ns/iter",
            "extra": "iterations: 185432\ncpu: 3782.663725786241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3689.604677972824,
            "unit": "ns/iter",
            "extra": "iterations: 189099\ncpu: 3689.605973590552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2873.588104433215,
            "unit": "ns/iter",
            "extra": "iterations: 248580\ncpu: 2866.9184970633096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25454.819088890068,
            "unit": "ns/iter",
            "extra": "iterations: 27461\ncpu: 25454.357088234272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50269.26920579861,
            "unit": "ns/iter",
            "extra": "iterations: 13863\ncpu: 50268.75856596702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11681.204006922215,
            "unit": "ns/iter",
            "extra": "iterations: 60096\ncpu: 11681.216719914866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11636.740211094246,
            "unit": "ns/iter",
            "extra": "iterations: 60068\ncpu: 11636.5169474595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11694.433538070614,
            "unit": "ns/iter",
            "extra": "iterations: 59914\ncpu: 11694.333544747413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23616.688539079838,
            "unit": "ns/iter",
            "extra": "iterations: 29413\ncpu: 23616.4281100195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22480.98170203369,
            "unit": "ns/iter",
            "extra": "iterations: 31151\ncpu: 22480.456486148167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7013.050373766604,
            "unit": "ns/iter",
            "extra": "iterations: 100330\ncpu: 7013.130668793004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34742.4564346165,
            "unit": "ns/iter",
            "extra": "iterations: 20211\ncpu: 34741.56647370238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28263.400201005843,
            "unit": "ns/iter",
            "extra": "iterations: 24875\ncpu: 28263.175879396957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27789.94595556271,
            "unit": "ns/iter",
            "extra": "iterations: 25294\ncpu: 27788.483434807004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28393.38695371747,
            "unit": "ns/iter",
            "extra": "iterations: 24804\ncpu: 28393.40428963046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59582.30157513541,
            "unit": "ns/iter",
            "extra": "iterations: 11745\ncpu: 59580.91954022996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 219528.196232352,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 219530.29827315372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 187609.88452221098,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 187609.36742933874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187354.94667020984,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 187352.53382860182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 190894.88759480367,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 190889.95124593604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 113649.0800841289,
            "unit": "ns/iter",
            "extra": "iterations: 6181\ncpu: 113645.72075715939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190445.25006765377,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 190443.97834912245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6689.99658465364,
            "unit": "ns/iter",
            "extra": "iterations: 104821\ncpu: 6689.759685559185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34273.91322435531,
            "unit": "ns/iter",
            "extra": "iterations: 20432\ncpu: 34273.5023492556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26593.445209125126,
            "unit": "ns/iter",
            "extra": "iterations: 26300\ncpu: 26592.63117870747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26904.793700483984,
            "unit": "ns/iter",
            "extra": "iterations: 25875\ncpu: 26904.799999999632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27650.126205187054,
            "unit": "ns/iter",
            "extra": "iterations: 25411\ncpu: 27649.769784738666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57698.47048138046,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57698.50549087651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 217602.13505123093,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 217593.07668425917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186439.5225563831,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 186433.08270677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 186127.00132380577,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 186121.7103521338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 189069.20785906893,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 189060.73170731758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 112365.29360605509,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112360.47672733036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 188944.07342378827,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 188928.54482574985 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387012101,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1877.8693358129785,
            "unit": "ns/iter",
            "extra": "iterations: 376400\ncpu: 1877.7011158342189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27882.171193807644,
            "unit": "ns/iter",
            "extra": "iterations: 29452\ncpu: 27880.64647562135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56965.551163113676,
            "unit": "ns/iter",
            "extra": "iterations: 14444\ncpu: 56960.37108834119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 71315.3014357961,
            "unit": "ns/iter",
            "extra": "iterations: 12258\ncpu: 71312.22059063466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99524.86691352642,
            "unit": "ns/iter",
            "extra": "iterations: 9182\ncpu: 99516.77194511004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 123257.6523543726,
            "unit": "ns/iter",
            "extra": "iterations: 6987\ncpu: 123255.44582796613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149153.15025380772,
            "unit": "ns/iter",
            "extra": "iterations: 5910\ncpu: 149151.70896785104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 172965.28668261724,
            "unit": "ns/iter",
            "extra": "iterations: 5016\ncpu: 172958.97129186586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 196440.33789237513,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 196434.37219730933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1629.3267396836898,
            "unit": "ns/iter",
            "extra": "iterations: 427937\ncpu: 1629.2748698990733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1322.8147884875873,
            "unit": "ns/iter",
            "extra": "iterations: 512074\ncpu: 1322.7926041939243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1323.5542090211773,
            "unit": "ns/iter",
            "extra": "iterations: 529755\ncpu: 1323.515776160676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1308.4066655057345,
            "unit": "ns/iter",
            "extra": "iterations: 534063\ncpu: 1308.3595006581638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2381.6070152354764,
            "unit": "ns/iter",
            "extra": "iterations: 288800\ncpu: 2381.5543628808855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8687.805059445305,
            "unit": "ns/iter",
            "extra": "iterations: 94793\ncpu: 8687.711117909561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48910.67892142216,
            "unit": "ns/iter",
            "extra": "iterations: 16837\ncpu: 48910.06117479361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37713.52247449119,
            "unit": "ns/iter",
            "extra": "iterations: 21758\ncpu: 37712.427612832114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38541.296441764105,
            "unit": "ns/iter",
            "extra": "iterations: 21387\ncpu: 38540.62748398549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38306.72137758497,
            "unit": "ns/iter",
            "extra": "iterations: 21574\ncpu: 38306.02577176224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 103963.59858986907,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 103960.1696940725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 836150.1693404646,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 836130.7486631012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 690408.8536052426,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 690383.9766933721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 696183.2173274541,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 696161.6005873721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 696607.0923872811,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 696585.4397634866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 492056.1039106152,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 492045.9776536317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 679744.5908080001,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 679728.9103039292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3695198.424124528,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3695156.420233458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1599473.485568799,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1599442.444821729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4772206.709183555,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4772031.122448979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12265.840006472183,
            "unit": "ns/iter",
            "extra": "iterations: 67984\ncpu: 12265.637502941854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54564.38829999968,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54563.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49804.33150945646,
            "unit": "ns/iter",
            "extra": "iterations: 16814\ncpu: 49801.85559652686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 51394.69721923936,
            "unit": "ns/iter",
            "extra": "iterations: 16758\ncpu: 51392.517006802474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 52249.566845588444,
            "unit": "ns/iter",
            "extra": "iterations: 16022\ncpu: 52248.33354138035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114343.79830287304,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 114341.33159268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 885226.9203791561,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 885181.4218009473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720455.4256292954,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 720439.9694889367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 719770.1554364472,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 719739.0505359903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 718035.5528517022,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 718013.5361216742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 501432.80069123843,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 501418.95161290164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 700282.6624251455,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 700242.8143712563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3898625.5606694,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3898537.6569037647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1669548.6614034844,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1669465.2631578946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9200.479055327754,
            "unit": "ns/iter",
            "extra": "iterations: 90190\ncpu: 9200.169641867127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51418.791529935515,
            "unit": "ns/iter",
            "extra": "iterations: 16151\ncpu: 51417.5964336572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39333.98459065994,
            "unit": "ns/iter",
            "extra": "iterations: 21156\ncpu: 39332.633768197964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38806.20201832262,
            "unit": "ns/iter",
            "extra": "iterations: 21503\ncpu: 38805.32018788075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41236.049416744085,
            "unit": "ns/iter",
            "extra": "iterations: 20317\ncpu: 41234.158586405545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 102864.31251453827,
            "unit": "ns/iter",
            "extra": "iterations: 8598\ncpu: 102861.90974645261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 875083.6481481548,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 875034.722222227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 708082.4914114958,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 708069.1560866323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 705599.5260804744,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 705566.9150521656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 703778.8794378658,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 703764.2011834302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 496234.96825397003,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 496208.6167800459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 691467.4619999914,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 691447.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 675.8756762391389,
            "unit": "ns/iter",
            "extra": "iterations: 1036061\ncpu: 675.8475610992023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4888.922874848914,
            "unit": "ns/iter",
            "extra": "iterations: 143131\ncpu: 4888.752261913942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3923.1461364527336,
            "unit": "ns/iter",
            "extra": "iterations: 186189\ncpu: 3922.850436921608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3725.9764001408794,
            "unit": "ns/iter",
            "extra": "iterations: 187374\ncpu: 3725.966249319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2902.7680568759292,
            "unit": "ns/iter",
            "extra": "iterations: 241930\ncpu: 2902.740875459859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25256.90049410359,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 25256.83269015775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49421.029821214695,
            "unit": "ns/iter",
            "extra": "iterations: 14151\ncpu: 49419.730054412415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11664.93834187379,
            "unit": "ns/iter",
            "extra": "iterations: 59911\ncpu: 11664.909615930243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11652.920720750475,
            "unit": "ns/iter",
            "extra": "iterations: 60104\ncpu: 11652.630440569612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11566.88740394819,
            "unit": "ns/iter",
            "extra": "iterations: 60384\ncpu: 11566.572270800327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21418.08173961015,
            "unit": "ns/iter",
            "extra": "iterations: 32628\ncpu: 21416.706509746222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22489.626285418646,
            "unit": "ns/iter",
            "extra": "iterations: 31021\ncpu: 22488.9397504915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7220.291304615752,
            "unit": "ns/iter",
            "extra": "iterations: 97362\ncpu: 7219.805468252503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 35229.20431640255,
            "unit": "ns/iter",
            "extra": "iterations: 19646\ncpu: 35227.847907971074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28316.140746752873,
            "unit": "ns/iter",
            "extra": "iterations: 24640\ncpu: 28314.192370129775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 28463.41303915057,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 28462.455693177617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28383.584065398172,
            "unit": "ns/iter",
            "extra": "iterations: 24588\ncpu: 28381.61298194258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 60087.590274804,
            "unit": "ns/iter",
            "extra": "iterations: 11681\ncpu: 60085.009845047505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 223829.14972746247,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 223821.80185957003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 190826.45827633396,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 190825.9097127189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 190211.97963616977,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 190211.5123540579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 190139.50975081514,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 190132.28602383487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 113453.71162262262,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 113447.81974388241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 189604.96803034382,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 189589.596315363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6780.883375191413,
            "unit": "ns/iter",
            "extra": "iterations: 103923\ncpu: 6780.585625896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34302.504606937946,
            "unit": "ns/iter",
            "extra": "iterations: 20404\ncpu: 34299.64712801401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26805.307357973987,
            "unit": "ns/iter",
            "extra": "iterations: 25999\ncpu: 26804.119389206873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27361.073332810065,
            "unit": "ns/iter",
            "extra": "iterations: 25582\ncpu: 27359.029786568346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27943.20377948907,
            "unit": "ns/iter",
            "extra": "iterations: 24924\ncpu: 27941.899374097222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58844.28243186508,
            "unit": "ns/iter",
            "extra": "iterations: 11925\ncpu: 58826.457023060466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 220310.31416901582,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 220300.75400565384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186935.98855470013,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 186928.1075326056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 187727.30721759444,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 187727.01905017614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 190583.69788846682,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 190583.45966431906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 112272.05483612734,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 112268.61710631584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 186319.3797232547,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 186307.50399148592 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388092243,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1874.9445040229198,
            "unit": "ns/iter",
            "extra": "iterations: 374856\ncpu: 1874.7791151802296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27970.510656643746,
            "unit": "ns/iter",
            "extra": "iterations: 28996\ncpu: 27968.87846599531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56107.16626016372,
            "unit": "ns/iter",
            "extra": "iterations: 14760\ncpu: 56103.33333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70180.92730923711,
            "unit": "ns/iter",
            "extra": "iterations: 12450\ncpu: 70179.51004016065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98538.8998924708,
            "unit": "ns/iter",
            "extra": "iterations: 9300\ncpu: 98531.48387096771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 122965.25500423454,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 122961.57316041733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 148456.81187446692,
            "unit": "ns/iter",
            "extra": "iterations: 5895\ncpu: 148434.18150975398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 170484.57170961786,
            "unit": "ns/iter",
            "extra": "iterations: 5083\ncpu: 170478.61499114704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 199950.83933333211,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 199938.17777777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1603.7563819678219,
            "unit": "ns/iter",
            "extra": "iterations: 437796\ncpu: 1603.730276201701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1321.5259554433776,
            "unit": "ns/iter",
            "extra": "iterations: 529754\ncpu: 1321.4522212196605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1337.5861769404423,
            "unit": "ns/iter",
            "extra": "iterations: 514546\ncpu: 1337.5822569799402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1275.6504300886156,
            "unit": "ns/iter",
            "extra": "iterations: 545004\ncpu: 1275.6214633287082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2444.172620549441,
            "unit": "ns/iter",
            "extra": "iterations: 285360\ncpu: 2444.1396832071814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8615.435748054717,
            "unit": "ns/iter",
            "extra": "iterations: 95608\ncpu: 8615.32716927454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48775.515875825804,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 48774.049811142555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37363.68770116481,
            "unit": "ns/iter",
            "extra": "iterations: 22059\ncpu: 37362.287501700004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38568.73242545198,
            "unit": "ns/iter",
            "extra": "iterations: 21295\ncpu: 38567.52289269783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38262.56519324189,
            "unit": "ns/iter",
            "extra": "iterations: 21605\ncpu: 38261.04605415415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106391.4460672862,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 106385.52615826653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 829651.654782597,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 829614.8695652174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 688461.7650513918,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 688443.6123348017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 694524.0014727524,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 694494.1089837996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 684183.3933333419,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 684160.3703703688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486788.00888890494,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 486774.22222222254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 689988.9800148323,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 689967.7276091762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3751873.800796877,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3751756.1752988044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1613067.1758621074,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1613013.4482758592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4795566.520408151,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4795323.97959184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12410.36851170386,
            "unit": "ns/iter",
            "extra": "iterations: 67930\ncpu: 12409.680553511007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54848.51109999908,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54845.98999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49836.314804823305,
            "unit": "ns/iter",
            "extra": "iterations: 16677\ncpu: 49834.53858607682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 49974.98036144511,
            "unit": "ns/iter",
            "extra": "iterations: 16600\ncpu: 49974.74096385505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 49884.06341961704,
            "unit": "ns/iter",
            "extra": "iterations: 16651\ncpu: 49882.40946489717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 112024.87788460977,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 112018.76373626414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878945.323612407,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 878936.5004703647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 721895.4166026062,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 721880.5534204459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 718619.5849923305,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 718610.643185297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 716194.4258554953,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 716167.7566539886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 504109.95568511286,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 504107.4635568505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 702907.583208391,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 702889.8800599704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3877474.6983469133,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3877382.644628084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1641203.0399305758,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1641182.986111119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9147.35694756526,
            "unit": "ns/iter",
            "extra": "iterations: 90341\ncpu: 9147.07275766264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 50877.06269879902,
            "unit": "ns/iter",
            "extra": "iterations: 16348\ncpu: 50876.24785906517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39051.57476876914,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 39050.79111695388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38775.58358549513,
            "unit": "ns/iter",
            "extra": "iterations: 21481\ncpu: 38775.43410455753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40243.64252772184,
            "unit": "ns/iter",
            "extra": "iterations: 20382\ncpu: 40242.51300166801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101398.24948430255,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 101397.79967912003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 856569.9663330297,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 856552.3202911714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 695172.1875458091,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 695169.2307692314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 694452.2779809829,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 694435.0402340898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 688834.3347921023,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 688831.1451495293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 490053.75042064366,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 490047.3359506466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685394.2517985654,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 685384.3165467627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 667.2555133854898,
            "unit": "ns/iter",
            "extra": "iterations: 1049718\ncpu: 667.2417735048847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4735.747387489539,
            "unit": "ns/iter",
            "extra": "iterations: 147942\ncpu: 4735.630855335202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3696.500148032082,
            "unit": "ns/iter",
            "extra": "iterations: 189148\ncpu: 3696.4837058811045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3741.6598927359064,
            "unit": "ns/iter",
            "extra": "iterations: 188320\ncpu: 3741.561172472374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2831.831709717653,
            "unit": "ns/iter",
            "extra": "iterations: 246877\ncpu: 2831.8012613568717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25480.342847696327,
            "unit": "ns/iter",
            "extra": "iterations: 27222\ncpu: 25480.03820439336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50148.69555269354,
            "unit": "ns/iter",
            "extra": "iterations: 13986\ncpu: 50148.484198484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 12941.573626618952,
            "unit": "ns/iter",
            "extra": "iterations: 53554\ncpu: 12941.412406169422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11999.77574687508,
            "unit": "ns/iter",
            "extra": "iterations: 57774\ncpu: 11999.525738221382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11463.630458813052,
            "unit": "ns/iter",
            "extra": "iterations: 60613\ncpu: 11463.57877023081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23287.51409956568,
            "unit": "ns/iter",
            "extra": "iterations: 29930\ncpu: 23287.00968927493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22456.54941664122,
            "unit": "ns/iter",
            "extra": "iterations: 31113\ncpu: 22456.449072735046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7110.05047382581,
            "unit": "ns/iter",
            "extra": "iterations: 98665\ncpu: 7109.902194293818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 35052.481236202046,
            "unit": "ns/iter",
            "extra": "iterations: 19932\ncpu: 35052.34296608432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28065.552014769713,
            "unit": "ns/iter",
            "extra": "iterations: 24916\ncpu: 28065.183014930233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27755.89657219711,
            "unit": "ns/iter",
            "extra": "iterations: 25264\ncpu: 27755.775015832533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28405.30292788253,
            "unit": "ns/iter",
            "extra": "iterations: 24557\ncpu: 28404.687054607497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59519.75906889916,
            "unit": "ns/iter",
            "extra": "iterations: 11771\ncpu: 59519.48007815907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 219628.60075449,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 219625.52656397186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186865.50013373245,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186861.08585182996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 186413.54407456683,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186412.7296937439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 189107.80097217235,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 189096.62435862835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112918.09956360524,
            "unit": "ns/iter",
            "extra": "iterations: 6187\ncpu: 112917.61758525929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 189443.51772665224,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 189438.051420837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6723.276747764362,
            "unit": "ns/iter",
            "extra": "iterations: 103990\ncpu: 6723.190691412605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34058.34162125446,
            "unit": "ns/iter",
            "extra": "iterations: 20552\ncpu: 34057.54671078252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26782.126459145464,
            "unit": "ns/iter",
            "extra": "iterations: 26214\ncpu: 26782.017242694383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27312.164040922544,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 27311.52604349008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27885.708912314618,
            "unit": "ns/iter",
            "extra": "iterations: 25044\ncpu: 27885.5973486662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58388.7122146301,
            "unit": "ns/iter",
            "extra": "iterations: 12002\ncpu: 58387.918680219824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 216017.38846036216,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 216014.96451712714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186433.16746284638,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 186430.78556263025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 186821.6162666613,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 186819.04000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 189699.03975121301,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 189698.26933477615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 112031.58310714274,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 112028.50071850733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 187685.43868553764,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 187684.71814052804 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}