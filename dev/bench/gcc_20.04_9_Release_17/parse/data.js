window.BENCHMARK_DATA = {
  "lastUpdate": 1702382303083,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702381107392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.7896947777106,
            "unit": "ns/iter",
            "extra": "iterations: 1133600\ncpu: 616.7808750882145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5639.7098899998355,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5639.583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10874.959312336,
            "unit": "ns/iter",
            "extra": "iterations: 77247\ncpu: 10874.78348673735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16268.312775075567,
            "unit": "ns/iter",
            "extra": "iterations: 51804\ncpu: 16268.095127789364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21882.34448488596,
            "unit": "ns/iter",
            "extra": "iterations: 38739\ncpu: 21881.97423784816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26955.57229423174,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 26954.967595593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32335.88974349215,
            "unit": "ns/iter",
            "extra": "iterations: 26003\ncpu: 32335.34207591432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37078.78391577159,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 37076.59498207887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42103.42644611619,
            "unit": "ns/iter",
            "extra": "iterations: 19829\ncpu: 42100.736295325005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.2293833470748,
            "unit": "ns/iter",
            "extra": "iterations: 1248190\ncpu: 562.1963002427519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.7128645733928,
            "unit": "ns/iter",
            "extra": "iterations: 1625153\ncpu: 431.673879320901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.26404802865875,
            "unit": "ns/iter",
            "extra": "iterations: 1642686\ncpu: 426.25748317085527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.22318023556454,
            "unit": "ns/iter",
            "extra": "iterations: 1633357\ncpu: 427.22068721045076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.1986539054888,
            "unit": "ns/iter",
            "extra": "iterations: 809750\ncpu: 866.1458474837916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1452.5565138746629,
            "unit": "ns/iter",
            "extra": "iterations: 546211\ncpu: 1452.4826486467687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9009.24657963293,
            "unit": "ns/iter",
            "extra": "iterations: 89391\ncpu: 9008.911411663368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8588.323693354661,
            "unit": "ns/iter",
            "extra": "iterations: 95263\ncpu: 8587.85677545321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9323.861672162697,
            "unit": "ns/iter",
            "extra": "iterations: 87336\ncpu: 9323.509205825754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7920.459214978371,
            "unit": "ns/iter",
            "extra": "iterations: 101373\ncpu: 7919.949098872493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27330.91259445084,
            "unit": "ns/iter",
            "extra": "iterations: 30307\ncpu: 27329.65981456439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262383.4142375101,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 262372.9057993252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203609.5298368306,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 203598.08857808926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202972.4773203079,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 202958.29262619204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202642.15778498282,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 202632.4606116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106013.69432314263,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 106008.7214944201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197563.06922733184,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 197548.86109870477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5284.567047066441,
            "unit": "ns/iter",
            "extra": "iterations: 153698\ncpu: 5284.487111087998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24832.865441612146,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 24831.63307646709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21774.817203754024,
            "unit": "ns/iter",
            "extra": "iterations: 39410\ncpu: 21774.285714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22079.466677228702,
            "unit": "ns/iter",
            "extra": "iterations: 37872\ncpu: 22079.388466413136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20666.350810342345,
            "unit": "ns/iter",
            "extra": "iterations: 40415\ncpu: 20665.886428306316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44833.198049393126,
            "unit": "ns/iter",
            "extra": "iterations: 19071\ncpu: 44833.45917885801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 286712.9581425848,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 286705.6572923466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220414.1563837947,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 220410.24930747866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217496.1004772639,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217485.95830193258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 216956.07919061268,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216954.55908068916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118963.95915875277,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 118958.69742198105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209299.10026511157,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209295.03494817988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844301.7448889299,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 844282.6666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479378.8910569119,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 479376.7479674809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1460.0030402305017,
            "unit": "ns/iter",
            "extra": "iterations: 542722\ncpu: 1459.9988576103356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8479.543125259348,
            "unit": "ns/iter",
            "extra": "iterations: 96440\ncpu: 8479.408958938233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7959.397051053508,
            "unit": "ns/iter",
            "extra": "iterations: 102206\ncpu: 7959.382032366012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8832.960571489903,
            "unit": "ns/iter",
            "extra": "iterations: 93790\ncpu: 8833.019511675073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7765.301356931101,
            "unit": "ns/iter",
            "extra": "iterations: 104869\ncpu: 7765.057357274321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26434.656235122617,
            "unit": "ns/iter",
            "extra": "iterations: 31507\ncpu: 26434.63992128737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269733.72164948337,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 269724.6209824134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202224.56559632684,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 202222.61467889883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200818.31361352094,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 200813.45363179693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199217.09024778995,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 199214.61695840003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102581.9331076339,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 102581.44991828172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 194113.30127641352,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 194112.01584506998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.98528124638986,
            "unit": "ns/iter",
            "extra": "iterations: 3621842\ncpu: 193.9807700059812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1467.1521231986117,
            "unit": "ns/iter",
            "extra": "iterations: 476239\ncpu: 1467.1446479603617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1268.3721473994337,
            "unit": "ns/iter",
            "extra": "iterations: 550857\ncpu: 1268.344416064417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.708563352693,
            "unit": "ns/iter",
            "extra": "iterations: 602848\ncpu: 1155.7152051595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 915.8860302257852,
            "unit": "ns/iter",
            "extra": "iterations: 763255\ncpu: 915.8813240660032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8890.95766275867,
            "unit": "ns/iter",
            "extra": "iterations: 78229\ncpu: 8890.741285201146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12941.632441632359,
            "unit": "ns/iter",
            "extra": "iterations: 54054\ncpu: 12941.53809153809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2936.0031108043104,
            "unit": "ns/iter",
            "extra": "iterations: 238845\ncpu: 2935.9944734032324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2984.256349876635,
            "unit": "ns/iter",
            "extra": "iterations: 234414\ncpu: 2984.273550214558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2897.912269091007,
            "unit": "ns/iter",
            "extra": "iterations: 241762\ncpu: 2897.760607539624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5257.010432691638,
            "unit": "ns/iter",
            "extra": "iterations: 133906\ncpu: 5256.9847504966365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5602.398533942274,
            "unit": "ns/iter",
            "extra": "iterations: 141195\ncpu: 5602.384645348669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1884.2136383440554,
            "unit": "ns/iter",
            "extra": "iterations: 371834\ncpu: 1884.1883743821343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10151.672036240729,
            "unit": "ns/iter",
            "extra": "iterations: 69093\ncpu: 10151.212134369542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7923.717330672792,
            "unit": "ns/iter",
            "extra": "iterations: 88202\ncpu: 7923.24890592059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7929.032182862111,
            "unit": "ns/iter",
            "extra": "iterations: 87935\ncpu: 7928.74395860591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7844.370165127275,
            "unit": "ns/iter",
            "extra": "iterations: 89325\ncpu: 7843.911558914206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18057.990565551587,
            "unit": "ns/iter",
            "extra": "iterations: 38794\ncpu: 18057.887817703722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56600.23531797794,
            "unit": "ns/iter",
            "extra": "iterations: 12328\ncpu: 56596.30921479466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45881.51453393607,
            "unit": "ns/iter",
            "extra": "iterations: 15309\ncpu: 45880.67803252976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45509.38857513725,
            "unit": "ns/iter",
            "extra": "iterations: 15405\ncpu: 45507.30931515742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45126.44573944582,
            "unit": "ns/iter",
            "extra": "iterations: 15444\ncpu: 45125.310800310835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26625.319756608053,
            "unit": "ns/iter",
            "extra": "iterations: 26295\ncpu: 26623.80680737795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44336.404202796875,
            "unit": "ns/iter",
            "extra": "iterations: 15799\ncpu: 44333.894550287805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.094839854417,
            "unit": "ns/iter",
            "extra": "iterations: 375939\ncpu: 1846.028478024354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11821.230345340125,
            "unit": "ns/iter",
            "extra": "iterations: 59159\ncpu: 11820.815091532942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9454.709508444621,
            "unit": "ns/iter",
            "extra": "iterations: 74071\ncpu: 9454.158847592103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9069.763703493552,
            "unit": "ns/iter",
            "extra": "iterations: 77462\ncpu: 9069.591541659243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9316.776573245132,
            "unit": "ns/iter",
            "extra": "iterations: 75179\ncpu: 9316.335678846337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19520.620929259374,
            "unit": "ns/iter",
            "extra": "iterations: 35835\ncpu: 19519.65117901477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57958.1934654607,
            "unit": "ns/iter",
            "extra": "iterations: 12059\ncpu: 57956.256737706986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45663.512418300816,
            "unit": "ns/iter",
            "extra": "iterations: 15300\ncpu: 45660.96732026186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46097.73078189905,
            "unit": "ns/iter",
            "extra": "iterations: 15181\ncpu: 46097.06211711992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47184.593241974704,
            "unit": "ns/iter",
            "extra": "iterations: 14886\ncpu: 47183.722961171865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27208.312495127462,
            "unit": "ns/iter",
            "extra": "iterations: 25658\ncpu: 27206.952997115925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46177.74056069975,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46175.84071385798 ns\nthreads: 1"
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
        "date": 1702381107392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.7896947777106,
            "unit": "ns/iter",
            "extra": "iterations: 1133600\ncpu: 616.7808750882145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5639.7098899998355,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5639.583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10874.959312336,
            "unit": "ns/iter",
            "extra": "iterations: 77247\ncpu: 10874.78348673735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16268.312775075567,
            "unit": "ns/iter",
            "extra": "iterations: 51804\ncpu: 16268.095127789364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21882.34448488596,
            "unit": "ns/iter",
            "extra": "iterations: 38739\ncpu: 21881.97423784816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26955.57229423174,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 26954.967595593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32335.88974349215,
            "unit": "ns/iter",
            "extra": "iterations: 26003\ncpu: 32335.34207591432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37078.78391577159,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 37076.59498207887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42103.42644611619,
            "unit": "ns/iter",
            "extra": "iterations: 19829\ncpu: 42100.736295325005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.2293833470748,
            "unit": "ns/iter",
            "extra": "iterations: 1248190\ncpu: 562.1963002427519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.7128645733928,
            "unit": "ns/iter",
            "extra": "iterations: 1625153\ncpu: 431.673879320901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.26404802865875,
            "unit": "ns/iter",
            "extra": "iterations: 1642686\ncpu: 426.25748317085527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.22318023556454,
            "unit": "ns/iter",
            "extra": "iterations: 1633357\ncpu: 427.22068721045076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.1986539054888,
            "unit": "ns/iter",
            "extra": "iterations: 809750\ncpu: 866.1458474837916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1452.5565138746629,
            "unit": "ns/iter",
            "extra": "iterations: 546211\ncpu: 1452.4826486467687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9009.24657963293,
            "unit": "ns/iter",
            "extra": "iterations: 89391\ncpu: 9008.911411663368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8588.323693354661,
            "unit": "ns/iter",
            "extra": "iterations: 95263\ncpu: 8587.85677545321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9323.861672162697,
            "unit": "ns/iter",
            "extra": "iterations: 87336\ncpu: 9323.509205825754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7920.459214978371,
            "unit": "ns/iter",
            "extra": "iterations: 101373\ncpu: 7919.949098872493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27330.91259445084,
            "unit": "ns/iter",
            "extra": "iterations: 30307\ncpu: 27329.65981456439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262383.4142375101,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 262372.9057993252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203609.5298368306,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 203598.08857808926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202972.4773203079,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 202958.29262619204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202642.15778498282,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 202632.4606116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106013.69432314263,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 106008.7214944201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197563.06922733184,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 197548.86109870477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5284.567047066441,
            "unit": "ns/iter",
            "extra": "iterations: 153698\ncpu: 5284.487111087998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24832.865441612146,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 24831.63307646709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21774.817203754024,
            "unit": "ns/iter",
            "extra": "iterations: 39410\ncpu: 21774.285714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22079.466677228702,
            "unit": "ns/iter",
            "extra": "iterations: 37872\ncpu: 22079.388466413136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20666.350810342345,
            "unit": "ns/iter",
            "extra": "iterations: 40415\ncpu: 20665.886428306316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44833.198049393126,
            "unit": "ns/iter",
            "extra": "iterations: 19071\ncpu: 44833.45917885801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 286712.9581425848,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 286705.6572923466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220414.1563837947,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 220410.24930747866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217496.1004772639,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217485.95830193258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 216956.07919061268,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216954.55908068916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118963.95915875277,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 118958.69742198105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209299.10026511157,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209295.03494817988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844301.7448889299,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 844282.6666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479378.8910569119,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 479376.7479674809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1460.0030402305017,
            "unit": "ns/iter",
            "extra": "iterations: 542722\ncpu: 1459.9988576103356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8479.543125259348,
            "unit": "ns/iter",
            "extra": "iterations: 96440\ncpu: 8479.408958938233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7959.397051053508,
            "unit": "ns/iter",
            "extra": "iterations: 102206\ncpu: 7959.382032366012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8832.960571489903,
            "unit": "ns/iter",
            "extra": "iterations: 93790\ncpu: 8833.019511675073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7765.301356931101,
            "unit": "ns/iter",
            "extra": "iterations: 104869\ncpu: 7765.057357274321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26434.656235122617,
            "unit": "ns/iter",
            "extra": "iterations: 31507\ncpu: 26434.63992128737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269733.72164948337,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 269724.6209824134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202224.56559632684,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 202222.61467889883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200818.31361352094,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 200813.45363179693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199217.09024778995,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 199214.61695840003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102581.9331076339,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 102581.44991828172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 194113.30127641352,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 194112.01584506998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.98528124638986,
            "unit": "ns/iter",
            "extra": "iterations: 3621842\ncpu: 193.9807700059812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1467.1521231986117,
            "unit": "ns/iter",
            "extra": "iterations: 476239\ncpu: 1467.1446479603617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1268.3721473994337,
            "unit": "ns/iter",
            "extra": "iterations: 550857\ncpu: 1268.344416064417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.708563352693,
            "unit": "ns/iter",
            "extra": "iterations: 602848\ncpu: 1155.7152051595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 915.8860302257852,
            "unit": "ns/iter",
            "extra": "iterations: 763255\ncpu: 915.8813240660032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8890.95766275867,
            "unit": "ns/iter",
            "extra": "iterations: 78229\ncpu: 8890.741285201146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12941.632441632359,
            "unit": "ns/iter",
            "extra": "iterations: 54054\ncpu: 12941.53809153809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2936.0031108043104,
            "unit": "ns/iter",
            "extra": "iterations: 238845\ncpu: 2935.9944734032324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2984.256349876635,
            "unit": "ns/iter",
            "extra": "iterations: 234414\ncpu: 2984.273550214558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2897.912269091007,
            "unit": "ns/iter",
            "extra": "iterations: 241762\ncpu: 2897.760607539624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5257.010432691638,
            "unit": "ns/iter",
            "extra": "iterations: 133906\ncpu: 5256.9847504966365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5602.398533942274,
            "unit": "ns/iter",
            "extra": "iterations: 141195\ncpu: 5602.384645348669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1884.2136383440554,
            "unit": "ns/iter",
            "extra": "iterations: 371834\ncpu: 1884.1883743821343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10151.672036240729,
            "unit": "ns/iter",
            "extra": "iterations: 69093\ncpu: 10151.212134369542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7923.717330672792,
            "unit": "ns/iter",
            "extra": "iterations: 88202\ncpu: 7923.24890592059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7929.032182862111,
            "unit": "ns/iter",
            "extra": "iterations: 87935\ncpu: 7928.74395860591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7844.370165127275,
            "unit": "ns/iter",
            "extra": "iterations: 89325\ncpu: 7843.911558914206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18057.990565551587,
            "unit": "ns/iter",
            "extra": "iterations: 38794\ncpu: 18057.887817703722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56600.23531797794,
            "unit": "ns/iter",
            "extra": "iterations: 12328\ncpu: 56596.30921479466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45881.51453393607,
            "unit": "ns/iter",
            "extra": "iterations: 15309\ncpu: 45880.67803252976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45509.38857513725,
            "unit": "ns/iter",
            "extra": "iterations: 15405\ncpu: 45507.30931515742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45126.44573944582,
            "unit": "ns/iter",
            "extra": "iterations: 15444\ncpu: 45125.310800310835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26625.319756608053,
            "unit": "ns/iter",
            "extra": "iterations: 26295\ncpu: 26623.80680737795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44336.404202796875,
            "unit": "ns/iter",
            "extra": "iterations: 15799\ncpu: 44333.894550287805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.094839854417,
            "unit": "ns/iter",
            "extra": "iterations: 375939\ncpu: 1846.028478024354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11821.230345340125,
            "unit": "ns/iter",
            "extra": "iterations: 59159\ncpu: 11820.815091532942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9454.709508444621,
            "unit": "ns/iter",
            "extra": "iterations: 74071\ncpu: 9454.158847592103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9069.763703493552,
            "unit": "ns/iter",
            "extra": "iterations: 77462\ncpu: 9069.591541659243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9316.776573245132,
            "unit": "ns/iter",
            "extra": "iterations: 75179\ncpu: 9316.335678846337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19520.620929259374,
            "unit": "ns/iter",
            "extra": "iterations: 35835\ncpu: 19519.65117901477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57958.1934654607,
            "unit": "ns/iter",
            "extra": "iterations: 12059\ncpu: 57956.256737706986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45663.512418300816,
            "unit": "ns/iter",
            "extra": "iterations: 15300\ncpu: 45660.96732026186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46097.73078189905,
            "unit": "ns/iter",
            "extra": "iterations: 15181\ncpu: 46097.06211711992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47184.593241974704,
            "unit": "ns/iter",
            "extra": "iterations: 14886\ncpu: 47183.722961171865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27208.312495127462,
            "unit": "ns/iter",
            "extra": "iterations: 25658\ncpu: 27206.952997115925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46177.74056069975,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46175.84071385798 ns\nthreads: 1"
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
        "date": 1702382301105,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 625.6386424365528,
            "unit": "ns/iter",
            "extra": "iterations: 1116736\ncpu: 625.5853666399222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5766.657190000046,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5766.156999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11069.82244973261,
            "unit": "ns/iter",
            "extra": "iterations: 75894\ncpu: 11068.930350225313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16637.156460088117,
            "unit": "ns/iter",
            "extra": "iterations: 51764\ncpu: 16636.388223475773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21738.117450278234,
            "unit": "ns/iter",
            "extra": "iterations: 38263\ncpu: 21736.089695005627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27094.853968980886,
            "unit": "ns/iter",
            "extra": "iterations: 30562\ncpu: 27092.86695896865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32516.729293088672,
            "unit": "ns/iter",
            "extra": "iterations: 25378\ncpu: 32514.484986996613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37653.11968049144,
            "unit": "ns/iter",
            "extra": "iterations: 22159\ncpu: 37649.48327993139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42010.973423445816,
            "unit": "ns/iter",
            "extra": "iterations: 19679\ncpu: 42008.328675237586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 570.2679707294868,
            "unit": "ns/iter",
            "extra": "iterations: 1227037\ncpu: 570.2124711805764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 435.05265216869896,
            "unit": "ns/iter",
            "extra": "iterations: 1612963\ncpu: 435.0216340982403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.412937275502,
            "unit": "ns/iter",
            "extra": "iterations: 1628550\ncpu: 429.40388689324857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 430.1898106156321,
            "unit": "ns/iter",
            "extra": "iterations: 1630599\ncpu: 430.16787082538343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 875.3814971733959,
            "unit": "ns/iter",
            "extra": "iterations: 790690\ncpu: 875.3557019818138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1491.320637519848,
            "unit": "ns/iter",
            "extra": "iterations: 528862\ncpu: 1491.3168274521536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9585.472913201856,
            "unit": "ns/iter",
            "extra": "iterations: 84783\ncpu: 9585.331965134528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8775.079338984584,
            "unit": "ns/iter",
            "extra": "iterations: 93674\ncpu: 8774.888442897724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9012.505218634235,
            "unit": "ns/iter",
            "extra": "iterations: 87475\ncpu: 9012.204629894255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8104.862009474252,
            "unit": "ns/iter",
            "extra": "iterations: 102594\ncpu: 8104.70592822194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27585.16505343922,
            "unit": "ns/iter",
            "extra": "iterations: 29754\ncpu: 27584.18363917463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263998.65541151987,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 263983.5996382264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203468.27427638054,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 203462.04481792677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202908.5013966521,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202889.43202979516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202808.3067100031,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202793.12746691494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106470.996217667,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 106462.33528550487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194740.76331097254,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 194723.3780760622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5192.119748913469,
            "unit": "ns/iter",
            "extra": "iterations: 157396\ncpu: 5192.082390912109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25502.25923886429,
            "unit": "ns/iter",
            "extra": "iterations: 32688\ncpu: 25499.993881546667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21592.777187233525,
            "unit": "ns/iter",
            "extra": "iterations: 38759\ncpu: 21591.509068861415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21926.78432555967,
            "unit": "ns/iter",
            "extra": "iterations: 38113\ncpu: 21924.902264319273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20591.303623509193,
            "unit": "ns/iter",
            "extra": "iterations: 40458\ncpu: 20589.91793959168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43454.492890225905,
            "unit": "ns/iter",
            "extra": "iterations: 18566\ncpu: 43453.65183669069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283468.05382619856,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 283458.04150453943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218679.8415741706,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 218678.25428859823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217339.8268656734,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 217335.12437810923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217395.32577833836,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 217390.08717310012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118401.15994021247,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 118397.79861394239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210452.965034952,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 210447.91415481153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 847580.766964232,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 847561.8750000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467877.95034338534,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 467865.6629688331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1460.5093168620203,
            "unit": "ns/iter",
            "extra": "iterations: 541384\ncpu: 1460.482393273539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8866.429510760681,
            "unit": "ns/iter",
            "extra": "iterations: 94596\ncpu: 8866.25967271338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8419.924500735673,
            "unit": "ns/iter",
            "extra": "iterations: 99246\ncpu: 8419.857727263503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8877.795881626118,
            "unit": "ns/iter",
            "extra": "iterations: 93872\ncpu: 8877.723921936315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7937.315719732114,
            "unit": "ns/iter",
            "extra": "iterations: 104900\ncpu: 7937.158245948515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26892.576426003645,
            "unit": "ns/iter",
            "extra": "iterations: 30873\ncpu: 26892.38493181736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268620.86880734976,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 268618.8685015292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211225.7340669588,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 211224.09445208646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201566.1753902846,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 201562.35078053296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199698.00458294022,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 199696.42529789163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102689.07793427477,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 102688.32159624407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191419.72376780678,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 191418.1599123779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.2552091411964,
            "unit": "ns/iter",
            "extra": "iterations: 3623342\ncpu: 193.25382478385967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1467.0503590785083,
            "unit": "ns/iter",
            "extra": "iterations: 476776\ncpu: 1467.0398677785772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1267.9826716108757,
            "unit": "ns/iter",
            "extra": "iterations: 552850\ncpu: 1267.9744957945138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1086.6901671630894,
            "unit": "ns/iter",
            "extra": "iterations: 644341\ncpu: 1086.6817415002283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 904.5176426907057,
            "unit": "ns/iter",
            "extra": "iterations: 772983\ncpu: 904.4815992072328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8958.625867484052,
            "unit": "ns/iter",
            "extra": "iterations: 78964\ncpu: 8958.431690390507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12712.14975696501,
            "unit": "ns/iter",
            "extra": "iterations: 55136\ncpu: 12712.052016831101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2873.4506920236545,
            "unit": "ns/iter",
            "extra": "iterations: 243561\ncpu: 2873.4317070467064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2895.529930741332,
            "unit": "ns/iter",
            "extra": "iterations: 241992\ncpu: 2895.5077027339667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2848.257805259179,
            "unit": "ns/iter",
            "extra": "iterations: 245988\ncpu: 2848.2344667219545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5169.82302666516,
            "unit": "ns/iter",
            "extra": "iterations: 135608\ncpu: 5169.779069081435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5479.45234603476,
            "unit": "ns/iter",
            "extra": "iterations: 127513\ncpu: 5479.438959164939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1867.3784687246928,
            "unit": "ns/iter",
            "extra": "iterations: 377228\ncpu: 1867.3627090247678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9914.750708455802,
            "unit": "ns/iter",
            "extra": "iterations: 70929\ncpu: 9914.671009037242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7819.134633187576,
            "unit": "ns/iter",
            "extra": "iterations: 89651\ncpu: 7819.067271976889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7933.932727539097,
            "unit": "ns/iter",
            "extra": "iterations: 88699\ncpu: 7933.724168254412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7843.280361008608,
            "unit": "ns/iter",
            "extra": "iterations: 89638\ncpu: 7843.0732501840685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18544.318062587707,
            "unit": "ns/iter",
            "extra": "iterations: 38505\ncpu: 18544.18387222436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56826.53808553683,
            "unit": "ns/iter",
            "extra": "iterations: 12275\ncpu: 56825.3604887979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45750.32520005334,
            "unit": "ns/iter",
            "extra": "iterations: 15246\ncpu: 45749.99344090251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46017.31516587424,
            "unit": "ns/iter",
            "extra": "iterations: 15192\ncpu: 46016.99578725649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45656.464211351085,
            "unit": "ns/iter",
            "extra": "iterations: 15368\ncpu: 45656.20119729311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26563.204279107034,
            "unit": "ns/iter",
            "extra": "iterations: 25940\ncpu: 26562.594448727676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45429.91886658363,
            "unit": "ns/iter",
            "extra": "iterations: 15493\ncpu: 45429.58755566981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2152.061331574119,
            "unit": "ns/iter",
            "extra": "iterations: 324368\ncpu: 2152.0461327874154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10075.087533652544,
            "unit": "ns/iter",
            "extra": "iterations: 69459\ncpu: 10074.858549648032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8908.829479915426,
            "unit": "ns/iter",
            "extra": "iterations: 78372\ncpu: 8908.510692594427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9316.251166822463,
            "unit": "ns/iter",
            "extra": "iterations: 74990\ncpu: 9316.183491132126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9098.669854208116,
            "unit": "ns/iter",
            "extra": "iterations: 76548\ncpu: 9098.60740972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18236.38518051898,
            "unit": "ns/iter",
            "extra": "iterations: 38112\ncpu: 18236.25104953819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56619.720449220215,
            "unit": "ns/iter",
            "extra": "iterations: 12377\ncpu: 56619.310010503716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47422.18378011655,
            "unit": "ns/iter",
            "extra": "iterations: 14735\ncpu: 47421.812012215654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45774.74509804077,
            "unit": "ns/iter",
            "extra": "iterations: 15249\ncpu: 45774.37864777937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46417.2186382298,
            "unit": "ns/iter",
            "extra": "iterations: 15098\ncpu: 46416.87640747092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28574.360389080826,
            "unit": "ns/iter",
            "extra": "iterations: 24468\ncpu: 28573.712604217348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46213.8416050712,
            "unit": "ns/iter",
            "extra": "iterations: 15152\ncpu: 46212.85638859539 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}