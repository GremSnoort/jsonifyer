window.BENCHMARK_DATA = {
  "lastUpdate": 1702388095956,
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
        "date": 1702387044254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 615.3650066725799,
            "unit": "ns/iter",
            "extra": "iterations: 1130004\ncpu: 615.3552553796271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5696.892100000356,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5696.792999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11089.84356979375,
            "unit": "ns/iter",
            "extra": "iterations: 76475\ncpu: 11089.860738803529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16361.146409521296,
            "unit": "ns/iter",
            "extra": "iterations: 52681\ncpu: 16360.881532241223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21518.144504069696,
            "unit": "ns/iter",
            "extra": "iterations: 38947\ncpu: 21518.060441112277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26753.31973591819,
            "unit": "ns/iter",
            "extra": "iterations: 31354\ncpu: 26752.755629265794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31935.785910233117,
            "unit": "ns/iter",
            "extra": "iterations: 26246\ncpu: 31935.571134649108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37070.00453474519,
            "unit": "ns/iter",
            "extra": "iterations: 22493\ncpu: 37068.74138620903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41820.55183078939,
            "unit": "ns/iter",
            "extra": "iterations: 20046\ncpu: 41819.92417439881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.5628043008279,
            "unit": "ns/iter",
            "extra": "iterations: 1239111\ncpu: 564.5637880706403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.15046047565744,
            "unit": "ns/iter",
            "extra": "iterations: 1622127\ncpu: 431.12857377998097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.43888128469666,
            "unit": "ns/iter",
            "extra": "iterations: 1631407\ncpu: 430.4104371257455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 431.76571158965675,
            "unit": "ns/iter",
            "extra": "iterations: 1617182\ncpu: 431.74985870483357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 858.918643074036,
            "unit": "ns/iter",
            "extra": "iterations: 815284\ncpu: 858.8877004822868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1458.3505437473934,
            "unit": "ns/iter",
            "extra": "iterations: 545290\ncpu: 1458.3267619065055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9072.741206865847,
            "unit": "ns/iter",
            "extra": "iterations: 90184\ncpu: 9072.57828439634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8560.357132329682,
            "unit": "ns/iter",
            "extra": "iterations: 94990\ncpu: 8560.009474681543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9267.516486526622,
            "unit": "ns/iter",
            "extra": "iterations: 87617\ncpu: 9267.410434048204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8287.993921343748,
            "unit": "ns/iter",
            "extra": "iterations: 98377\ncpu: 8287.531638492716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27266.455894145336,
            "unit": "ns/iter",
            "extra": "iterations: 29928\ncpu: 27265.533948142234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262830.88724584755,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 262823.62908194726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220674.4867898059,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 220669.5347205983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205598.52736668332,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205593.84543105442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 204541.7687793334,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 204535.633802817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108205.3285802843,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 108203.78177309381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195634.3902438998,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 195630.92414410374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5251.043421453257,
            "unit": "ns/iter",
            "extra": "iterations: 157664\ncpu: 5250.860691089908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25411.149559667003,
            "unit": "ns/iter",
            "extra": "iterations: 32589\ncpu: 25410.14452729447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21694.19017416204,
            "unit": "ns/iter",
            "extra": "iterations: 38470\ncpu: 21693.76657135433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22036.096290974678,
            "unit": "ns/iter",
            "extra": "iterations: 37584\ncpu: 22034.847275436314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21062.991723651834,
            "unit": "ns/iter",
            "extra": "iterations: 39631\ncpu: 21062.46877444427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44078.0736352099,
            "unit": "ns/iter",
            "extra": "iterations: 18904\ncpu: 44076.21667371997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283916.04850260454,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 283904.5898437517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 222143.04663609224,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 222139.62793068288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218120.85186111118,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 218115.36347739212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217098.2648527193,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 217087.69345981107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122516.6684477381,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 122514.49513631951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209298.7158351386,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209285.51458182832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 852591.0791366877,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 852531.8345323701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 472059.65066665766,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 472035.4133333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1454.6422390406815,
            "unit": "ns/iter",
            "extra": "iterations: 547413\ncpu: 1454.6304161574576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8946.462659539839,
            "unit": "ns/iter",
            "extra": "iterations: 91670\ncpu: 8946.34776917209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8217.993651582019,
            "unit": "ns/iter",
            "extra": "iterations: 100655\ncpu: 8218.08653320747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8982.566993105072,
            "unit": "ns/iter",
            "extra": "iterations: 91084\ncpu: 8982.46783189147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7953.712256717438,
            "unit": "ns/iter",
            "extra": "iterations: 103429\ncpu: 7953.737346392256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26903.173013936612,
            "unit": "ns/iter",
            "extra": "iterations: 31142\ncpu: 26902.719799627423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268036.40611751704,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 268033.2828588739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201980.76613828648,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 201978.84217780922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201767.29883215786,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 201769.22372337923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 200352.78093720428,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 200351.63785259318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102642.99800469214,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 102642.66431924896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192449.30925359039,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 192445.94063727613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.8588797865222,
            "unit": "ns/iter",
            "extra": "iterations: 3308548\ncpu: 210.86116931052544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1465.9644857387023,
            "unit": "ns/iter",
            "extra": "iterations: 477977\ncpu: 1465.9297413892436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1273.4222698368305,
            "unit": "ns/iter",
            "extra": "iterations: 549317\ncpu: 1273.3964177332978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1228.9351434054345,
            "unit": "ns/iter",
            "extra": "iterations: 565355\ncpu: 1228.9333250789218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 918.9305813153194,
            "unit": "ns/iter",
            "extra": "iterations: 755373\ncpu: 918.922704412259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8822.109710089439,
            "unit": "ns/iter",
            "extra": "iterations: 78990\ncpu: 8822.0015191796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12725.681161528748,
            "unit": "ns/iter",
            "extra": "iterations: 54962\ncpu: 12725.470324951792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2905.0975399260064,
            "unit": "ns/iter",
            "extra": "iterations: 241009\ncpu: 2905.075744059354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2903.102801649101,
            "unit": "ns/iter",
            "extra": "iterations: 241572\ncpu: 2903.0525060851196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.9112694615933,
            "unit": "ns/iter",
            "extra": "iterations: 245868\ncpu: 2846.9121642507416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5520.220110753203,
            "unit": "ns/iter",
            "extra": "iterations: 126768\ncpu: 5520.162817114761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5442.875481914813,
            "unit": "ns/iter",
            "extra": "iterations: 128913\ncpu: 5442.845174652665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1856.3188263410377,
            "unit": "ns/iter",
            "extra": "iterations: 376600\ncpu: 1856.3053637812168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10073.739521999714,
            "unit": "ns/iter",
            "extra": "iterations: 68954\ncpu: 10073.592539954174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7997.161851962478,
            "unit": "ns/iter",
            "extra": "iterations: 87302\ncpu: 7997.129504478795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7972.068489877645,
            "unit": "ns/iter",
            "extra": "iterations: 87867\ncpu: 7971.966722432768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7806.934485145053,
            "unit": "ns/iter",
            "extra": "iterations: 89598\ncpu: 7806.7802852742925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18147.9513908679,
            "unit": "ns/iter",
            "extra": "iterations: 38573\ncpu: 18147.90397428231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56574.869716318906,
            "unit": "ns/iter",
            "extra": "iterations: 12373\ncpu: 56573.029984644774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46496.93129720076,
            "unit": "ns/iter",
            "extra": "iterations: 15094\ncpu: 46495.88578243032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45894.50987231706,
            "unit": "ns/iter",
            "extra": "iterations: 15194\ncpu: 45893.29998683616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46382.84760206048,
            "unit": "ns/iter",
            "extra": "iterations: 15138\ncpu: 46381.899854670475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26593.6718162858,
            "unit": "ns/iter",
            "extra": "iterations: 26345\ncpu: 26593.911558170566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44885.931965793214,
            "unit": "ns/iter",
            "extra": "iterations: 15551\ncpu: 44884.31612114998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.734005338808,
            "unit": "ns/iter",
            "extra": "iterations: 371624\ncpu: 1883.7330204722832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11357.292821088397,
            "unit": "ns/iter",
            "extra": "iterations: 61611\ncpu: 11356.958984597062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9669.664380930968,
            "unit": "ns/iter",
            "extra": "iterations: 72916\ncpu: 9669.537550057506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 10258.863158358914,
            "unit": "ns/iter",
            "extra": "iterations: 67896\ncpu: 10258.732473194432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9517.42066185235,
            "unit": "ns/iter",
            "extra": "iterations: 73672\ncpu: 9517.330871973025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18122.058247901437,
            "unit": "ns/iter",
            "extra": "iterations: 38628\ncpu: 18122.066894480686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56415.90653226558,
            "unit": "ns/iter",
            "extra": "iterations: 12400\ncpu: 56414.90322580631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46345.53789779498,
            "unit": "ns/iter",
            "extra": "iterations: 15146\ncpu: 46345.49716096692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46669.66826283444,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 46668.73503591362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47042.43558528538,
            "unit": "ns/iter",
            "extra": "iterations: 14950\ncpu: 47042.30100334395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28441.28048434863,
            "unit": "ns/iter",
            "extra": "iterations: 24693\ncpu: 28441.2384076457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46524.29904926638,
            "unit": "ns/iter",
            "extra": "iterations: 15041\ncpu: 46523.203244464785 ns\nthreads: 1"
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
        "date": 1702388093551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 615.7660113891449,
            "unit": "ns/iter",
            "extra": "iterations: 1142671\ncpu: 615.7597418679569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5702.302739999823,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5702.000999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11023.889492872971,
            "unit": "ns/iter",
            "extra": "iterations: 75977\ncpu: 11023.214920304828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16486.08698938071,
            "unit": "ns/iter",
            "extra": "iterations: 51604\ncpu: 16485.237578482287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21720.3801201523,
            "unit": "ns/iter",
            "extra": "iterations: 38451\ncpu: 21719.073626173562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27064.32771099788,
            "unit": "ns/iter",
            "extra": "iterations: 30948\ncpu: 27063.176941967144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32051.99485762578,
            "unit": "ns/iter",
            "extra": "iterations: 26058\ncpu: 32050.115127791854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37479.81951811539,
            "unit": "ns/iter",
            "extra": "iterations: 22246\ncpu: 37477.910635619904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42282.60121427005,
            "unit": "ns/iter",
            "extra": "iterations: 19765\ncpu: 42280.293448014185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.9654107986091,
            "unit": "ns/iter",
            "extra": "iterations: 1241399\ncpu: 564.9440671371575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.4363429395925,
            "unit": "ns/iter",
            "extra": "iterations: 1624321\ncpu: 430.41110716416335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.3229827679917,
            "unit": "ns/iter",
            "extra": "iterations: 1661906\ncpu: 420.30818830908515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.1154243482438,
            "unit": "ns/iter",
            "extra": "iterations: 1645606\ncpu: 426.11159657901067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 869.8271475181244,
            "unit": "ns/iter",
            "extra": "iterations: 803020\ncpu: 869.8102164329658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1456.8814004962114,
            "unit": "ns/iter",
            "extra": "iterations: 545778\ncpu: 1456.8245696968372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8911.60525567577,
            "unit": "ns/iter",
            "extra": "iterations: 91444\ncpu: 8910.968461572114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8511.81290357006,
            "unit": "ns/iter",
            "extra": "iterations: 93695\ncpu: 8511.416831207636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9370.983360792512,
            "unit": "ns/iter",
            "extra": "iterations: 85581\ncpu: 9370.403477407355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8141.184884089279,
            "unit": "ns/iter",
            "extra": "iterations: 101112\ncpu: 8140.807223672745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27168.330739555033,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 27168.02400342899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261447.23265807325,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 261443.64640883938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203604.99510260546,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 203605.08395522393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202715.11038810597,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202709.99302812057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202709.60288305522,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 202697.81446175306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106462.741609925,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 106456.83365758753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194747.3113144291,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 194737.20151751826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5219.65999961953,
            "unit": "ns/iter",
            "extra": "iterations: 157741\ncpu: 5219.5187047121435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25737.379399195604,
            "unit": "ns/iter",
            "extra": "iterations: 31824\ncpu: 25736.68300653596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21389.688108714232,
            "unit": "ns/iter",
            "extra": "iterations: 39222\ncpu: 21389.3682117179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21789.211524929095,
            "unit": "ns/iter",
            "extra": "iterations: 38369\ncpu: 21787.96684823686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20723.630161624056,
            "unit": "ns/iter",
            "extra": "iterations: 40588\ncpu: 20722.425347393262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43284.54133765536,
            "unit": "ns/iter",
            "extra": "iterations: 19123\ncpu: 43282.61256079055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 282545.51441529003,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 282529.4136702295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218630.88394876447,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 218618.5129364471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216631.83345723816,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 216614.74597273843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215086.8711352969,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215077.26935443928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118805.67242786745,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 118804.64071856288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206662.71687321266,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 206658.77025738833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844979.6740478431,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 844922.0549158521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 455336.997429314,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 455311.3624678686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1422.4121907987674,
            "unit": "ns/iter",
            "extra": "iterations: 559668\ncpu: 1422.3852355324987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8976.39059565272,
            "unit": "ns/iter",
            "extra": "iterations: 91043\ncpu: 8975.746625221069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8032.741743783855,
            "unit": "ns/iter",
            "extra": "iterations: 101469\ncpu: 8032.611930737478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8900.57118364519,
            "unit": "ns/iter",
            "extra": "iterations: 92156\ncpu: 8900.516515473777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7596.344878346784,
            "unit": "ns/iter",
            "extra": "iterations: 108012\ncpu: 7596.265229789304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26568.213249471064,
            "unit": "ns/iter",
            "extra": "iterations: 31639\ncpu: 26567.815038401954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265212.8024654321,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 265210.3126879132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200264.93775463966,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 200263.71661385303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198065.6986394558,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 198066.03174603116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197548.8067849923,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 197544.25971691744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101328.87595464314,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 101327.00763712075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191475.8265060243,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 191475.92552026192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.5213375047081,
            "unit": "ns/iter",
            "extra": "iterations: 3711329\ncpu: 188.52168589742396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1411.1830052201724,
            "unit": "ns/iter",
            "extra": "iterations: 496729\ncpu: 1411.1563850711364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1157.7623918721208,
            "unit": "ns/iter",
            "extra": "iterations: 604146\ncpu: 1156.7536655046947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1152.7088436988026,
            "unit": "ns/iter",
            "extra": "iterations: 606918\ncpu: 1152.6403896407726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 891.4904191885041,
            "unit": "ns/iter",
            "extra": "iterations: 782345\ncpu: 891.4261610926113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8897.571133654425,
            "unit": "ns/iter",
            "extra": "iterations: 78957\ncpu: 8897.501171523738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12682.07761480837,
            "unit": "ns/iter",
            "extra": "iterations: 55157\ncpu: 12682.094747720072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2880.5275695422533,
            "unit": "ns/iter",
            "extra": "iterations: 242514\ncpu: 2880.4992701452106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2903.925077622081,
            "unit": "ns/iter",
            "extra": "iterations: 241877\ncpu: 2903.9309235685882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2876.807052493181,
            "unit": "ns/iter",
            "extra": "iterations: 243460\ncpu: 2876.8122073441127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5454.739455541261,
            "unit": "ns/iter",
            "extra": "iterations: 126915\ncpu: 5454.643659141896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5415.070996113452,
            "unit": "ns/iter",
            "extra": "iterations: 129162\ncpu: 5414.866601632079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.0686403568143,
            "unit": "ns/iter",
            "extra": "iterations: 367670\ncpu: 1916.956509913762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10104.66335657652,
            "unit": "ns/iter",
            "extra": "iterations: 68981\ncpu: 10104.456299560838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7965.797233700475,
            "unit": "ns/iter",
            "extra": "iterations: 87120\ncpu: 7965.717401285539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7922.338510197421,
            "unit": "ns/iter",
            "extra": "iterations: 88213\ncpu: 7921.903801027084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7944.166773746782,
            "unit": "ns/iter",
            "extra": "iterations: 88719\ncpu: 7943.532952355103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18293.750518931785,
            "unit": "ns/iter",
            "extra": "iterations: 38059\ncpu: 18292.900496597253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56741.105352938845,
            "unit": "ns/iter",
            "extra": "iterations: 12311\ncpu: 56740.167330029915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46551.77639793283,
            "unit": "ns/iter",
            "extra": "iterations: 14897\ncpu: 46548.801772169005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45844.47934318404,
            "unit": "ns/iter",
            "extra": "iterations: 15225\ncpu: 45839.087027914495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45734.00150444781,
            "unit": "ns/iter",
            "extra": "iterations: 15288\ncpu: 45732.1101517528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26759.940138697388,
            "unit": "ns/iter",
            "extra": "iterations: 26244\ncpu: 26758.641975308954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44685.37320665887,
            "unit": "ns/iter",
            "extra": "iterations: 15683\ncpu: 44683.84875342727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2153.7606217080656,
            "unit": "ns/iter",
            "extra": "iterations: 328643\ncpu: 2153.7111698712433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9970.753517505269,
            "unit": "ns/iter",
            "extra": "iterations: 64179\ncpu: 9970.241044578432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9238.660104764442,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9238.10431988292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9163.106983498928,
            "unit": "ns/iter",
            "extra": "iterations: 75750\ncpu: 9162.554455445526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8616.262287828304,
            "unit": "ns/iter",
            "extra": "iterations: 81361\ncpu: 8615.796266024288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19854.776306087013,
            "unit": "ns/iter",
            "extra": "iterations: 35258\ncpu: 19854.072834533985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56710.915173530346,
            "unit": "ns/iter",
            "extra": "iterations: 12390\ncpu: 56708.80548829696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47211.3371120123,
            "unit": "ns/iter",
            "extra": "iterations: 14820\ncpu: 47210.81646423814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46734.45983249618,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 46731.04187604702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45637.432145417115,
            "unit": "ns/iter",
            "extra": "iterations: 15349\ncpu: 45634.7123591113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26283.23219026969,
            "unit": "ns/iter",
            "extra": "iterations: 26741\ncpu: 26281.661119628774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45913.40498401691,
            "unit": "ns/iter",
            "extra": "iterations: 15329\ncpu: 45910.66605779891 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}