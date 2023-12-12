window.BENCHMARK_DATA = {
  "lastUpdate": 1702382252776,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Release c++-17": [
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702381102328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1737.2955609242726,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1737.1764851638484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25547.253278485994,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25546.251391809976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53445.984232523566,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 53445.29508611958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66338.91768640153,
            "unit": "ns/iter",
            "extra": "iterations: 13157\ncpu: 66336.04925134912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93874.94418557361,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 93870.32009724472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115888.2895613917,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 115841.36781762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141207.40126582692,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 141200.20569620252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162997.40611435517,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 162989.43196829583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186370.15735722324,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 186356.25260525232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1517.8353706061425,
            "unit": "ns/iter",
            "extra": "iterations: 461892\ncpu: 1517.840967152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1241.5012993071157,
            "unit": "ns/iter",
            "extra": "iterations: 570304\ncpu: 1241.4294832229823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1244.9659550086992,
            "unit": "ns/iter",
            "extra": "iterations: 563754\ncpu: 1244.9155127945876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1231.7099043892651,
            "unit": "ns/iter",
            "extra": "iterations: 571484\ncpu: 1231.649704978619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2290.4365469240233,
            "unit": "ns/iter",
            "extra": "iterations: 304737\ncpu: 2290.347742479584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7336.481827529091,
            "unit": "ns/iter",
            "extra": "iterations: 111845\ncpu: 7336.222450713052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34739.93375301029,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34738.615911107314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30779.53293720592,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 30778.03330399065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30323.329100528474,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30322.17113665391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30019.34938479581,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30018.03134612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74090.04808019192,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 74086.59531090748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 826568.5284191826,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826523.5346358822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687595.2750362766,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687570.2467343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688108.2626558676,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 688077.9163609683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 683769.1045751432,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 683724.5461147401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 486856.41176470346,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 486821.1986681464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 678279.8936324163,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 678247.1056439929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643017.1807692293,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3642841.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1584771.0083891796,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1584708.2214765083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4668849.349753642,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4668715.270935963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10957.498830679328,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 10957.438065666911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54714.968921267806,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 54714.14249431907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44505.450669785954,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 44503.481820115034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44035.843432159505,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 44034.13763254705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44659.57663336597,
            "unit": "ns/iter",
            "extra": "iterations: 18719\ncpu: 44657.983866659604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88483.22177901944,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 88477.75229357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878200.8163265344,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 878178.7569573262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720637.07438015,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 720595.416979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 716913.017280271,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 716891.3598797901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 705161.9428783547,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 705124.4807121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 498412.2450142316,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 498385.4131054145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 699106.3786982289,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699073.4467455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3817749.5465586465,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3817676.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1551160.2685337996,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1551085.831960469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7692.057598392823,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 7692.075306862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35035.266736886275,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 35033.97092900787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29597.035471105086,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29595.526006202872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29884.392779190064,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29883.400722796752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29698.264344989504,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29696.83310873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70268.23010352957,
            "unit": "ns/iter",
            "extra": "iterations: 12364\ncpu: 70265.89291491403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 833943.2321271137,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 833898.2347749283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 665381.61699998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665349.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668943.4239999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668937.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 663187.1820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663145.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 472209.1423965686,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472193.6055883945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 653405.1360000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653352.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9981454274402,
            "unit": "ns/iter",
            "extra": "iterations: 1172777\ncpu: 596.9753840670484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4194.366593765803,
            "unit": "ns/iter",
            "extra": "iterations: 171465\ncpu: 4194.089755926856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3419.53160295173,
            "unit": "ns/iter",
            "extra": "iterations: 204348\ncpu: 3419.3498345959088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3343.276328298822,
            "unit": "ns/iter",
            "extra": "iterations: 213525\ncpu: 3342.946727549478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2534.0393840655665,
            "unit": "ns/iter",
            "extra": "iterations: 275289\ncpu: 2533.938152269073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19794.066797085583,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 19792.466899152212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44830.74080000006,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 44830.867200000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10664.260607989572,
            "unit": "ns/iter",
            "extra": "iterations: 65988\ncpu: 10663.416075650202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.35561671157,
            "unit": "ns/iter",
            "extra": "iterations: 66133\ncpu: 10599.83669272542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10387.966312029232,
            "unit": "ns/iter",
            "extra": "iterations: 64385\ncpu: 10387.407004737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20519.081385484475,
            "unit": "ns/iter",
            "extra": "iterations: 34183\ncpu: 20518.242986279936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20562.182616097576,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20560.955204602786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5342.1096670181,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5341.820626843334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27377.246007868594,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 27376.726066496733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.31892074497,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21542.92123782293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21518.113349348376,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21517.516786792476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22070.36804110828,
            "unit": "ns/iter",
            "extra": "iterations: 31722\ncpu: 22068.542336548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52450.34133893395,
            "unit": "ns/iter",
            "extra": "iterations: 13324\ncpu: 52446.690183127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204348.51604433532,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 204335.0350058359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172145.07915437894,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172134.80825958416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174383.6216082949,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 174033.89245189764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 172530.4864665391,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172529.30610236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100069.8546569717,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 100070.10412209273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173562.4334657356,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173557.3485600796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5313.963232218933,
            "unit": "ns/iter",
            "extra": "iterations: 131501\ncpu: 5313.974038220248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26741.639090562014,
            "unit": "ns/iter",
            "extra": "iterations: 26170\ncpu: 26740.936186473442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21400.38660140689,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 21400.43438360354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21311.66375559185,
            "unit": "ns/iter",
            "extra": "iterations: 32863\ncpu: 21311.298420716153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22548.744253522156,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22548.557335826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51621.00080680708,
            "unit": "ns/iter",
            "extra": "iterations: 13634\ncpu: 51620.06014375786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201910.11393135137,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201898.81742140336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171287.72509180292,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 171286.29130966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172416.15245098656,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 172410.71078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172680.54534284747,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172672.794298353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99512.18726699577,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 99505.7355893329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170121.79546009665,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170111.44740053793 ns\nthreads: 1"
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
        "date": 1702382252086,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1653.770872185122,
            "unit": "ns/iter",
            "extra": "iterations: 426836\ncpu: 1653.5985718168101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25971.940588679332,
            "unit": "ns/iter",
            "extra": "iterations: 33125\ncpu: 25971.239245283025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51020.58878619069,
            "unit": "ns/iter",
            "extra": "iterations: 16337\ncpu: 51019.96082512088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63995.04631317886,
            "unit": "ns/iter",
            "extra": "iterations: 13711\ncpu: 63993.632849536894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90507.8561011183,
            "unit": "ns/iter",
            "extra": "iterations: 10285\ncpu: 90504.31696645601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113057.64319066085,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 113051.50453955907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141362.45847536248,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 141359.21908893716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 159067.62879910952,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 159061.89770200156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182173.62529026577,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 182171.26873548655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1444.9914293967063,
            "unit": "ns/iter",
            "extra": "iterations: 484680\ncpu: 1444.9696707105695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1177.4804580204604,
            "unit": "ns/iter",
            "extra": "iterations: 584690\ncpu: 1177.4637842275404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1206.7706177064986,
            "unit": "ns/iter",
            "extra": "iterations: 582024\ncpu: 1206.7399282503816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1205.4257789750118,
            "unit": "ns/iter",
            "extra": "iterations: 582079\ncpu: 1205.4087159990313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2371.785670968229,
            "unit": "ns/iter",
            "extra": "iterations: 295163\ncpu: 2371.748830307322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7368.461561732588,
            "unit": "ns/iter",
            "extra": "iterations: 112388\ncpu: 7368.360501121103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34882.20172227275,
            "unit": "ns/iter",
            "extra": "iterations: 24038\ncpu: 34881.33372160744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30591.70908422268,
            "unit": "ns/iter",
            "extra": "iterations: 27190\ncpu: 30589.047443913165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30167.381746491348,
            "unit": "ns/iter",
            "extra": "iterations: 27644\ncpu: 30164.654174504398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29871.26819623131,
            "unit": "ns/iter",
            "extra": "iterations: 26805\ncpu: 29868.42007088236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73903.27660813749,
            "unit": "ns/iter",
            "extra": "iterations: 12017\ncpu: 73898.87659149546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 810754.9033942571,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 810678.416013927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 670470.7339999913,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670427.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 670270.4690000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670226.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 664327.5170000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664292.1999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 475011.73108330194,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 474996.8971148604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 666656.0136103274,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 666605.9455587392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3584289.9007634027,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3583930.5343511514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1558467.9108910032,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1558338.2838283821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4588829.888888725,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4588371.014492758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10685.233502727351,
            "unit": "ns/iter",
            "extra": "iterations: 80286\ncpu: 10684.507884313589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52951.40351880084,
            "unit": "ns/iter",
            "extra": "iterations: 15744\ncpu: 52949.129827235876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44616.63101690438,
            "unit": "ns/iter",
            "extra": "iterations: 18635\ncpu: 44613.184867185606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44198.743025665135,
            "unit": "ns/iter",
            "extra": "iterations: 18819\ncpu: 44194.904086295806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44856.82947697137,
            "unit": "ns/iter",
            "extra": "iterations: 18584\ncpu: 44852.74967714188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 86539.4778664019,
            "unit": "ns/iter",
            "extra": "iterations: 10030\ncpu: 86533.60917248229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 863217.0147059107,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 863099.816176474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 694556.9114391403,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 694489.0036900367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 698059.958579894,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 698010.8727810681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 692167.2626558972,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 692117.3881144545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 488197.8561835549,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 488149.5803021813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 684797.1530094041,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 684746.3379260361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3819022.0203253236,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3818696.341463407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1606942.8943782311,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1606819.2504258992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7402.513098161068,
            "unit": "ns/iter",
            "extra": "iterations: 113222\ncpu: 7401.966049001058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34977.485686903194,
            "unit": "ns/iter",
            "extra": "iterations: 23999\ncpu: 34976.01150047921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30259.713230769365,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 30259.26515837114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30120.247116430204,
            "unit": "ns/iter",
            "extra": "iterations: 27570\ncpu: 30119.54660863254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29562.457291444665,
            "unit": "ns/iter",
            "extra": "iterations: 28074\ncpu: 29562.046733632353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71895.05998057252,
            "unit": "ns/iter",
            "extra": "iterations: 12354\ncpu: 71893.94528088077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 846252.2041181602,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 846229.9015219323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 673320.1121305053,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 673300.8154943949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 676133.3454935584,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 676129.6137339056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 665951.2809999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665925.0999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 477353.63577586523,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 477350.915948276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 664428.2739999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664410.9999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 606.6934947297229,
            "unit": "ns/iter",
            "extra": "iterations: 1163595\ncpu: 606.6854876481968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4294.940590909228,
            "unit": "ns/iter",
            "extra": "iterations: 163443\ncpu: 4294.814706044295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3469.0199007945635,
            "unit": "ns/iter",
            "extra": "iterations: 200997\ncpu: 3469.0030199455955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3339.8512020698263,
            "unit": "ns/iter",
            "extra": "iterations: 209472\ncpu: 3339.797204399656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2600.8194789103263,
            "unit": "ns/iter",
            "extra": "iterations: 268783\ncpu: 2600.8073427263034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20498.299594546264,
            "unit": "ns/iter",
            "extra": "iterations: 34036\ncpu: 20497.960982489134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45993.27043198328,
            "unit": "ns/iter",
            "extra": "iterations: 15209\ncpu: 45993.05016766375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10786.609305828797,
            "unit": "ns/iter",
            "extra": "iterations: 65056\ncpu: 10786.425541072418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10747.546069315795,
            "unit": "ns/iter",
            "extra": "iterations: 65065\ncpu: 10747.395681241844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10753.76118165523,
            "unit": "ns/iter",
            "extra": "iterations: 65129\ncpu: 10753.602849729134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21900.217789876144,
            "unit": "ns/iter",
            "extra": "iterations: 31962\ncpu: 21900.109505037275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20871.846364394005,
            "unit": "ns/iter",
            "extra": "iterations: 33612\ncpu: 20871.510174937524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5353.6798612850325,
            "unit": "ns/iter",
            "extra": "iterations: 131493\ncpu: 5353.523001224409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26755.907455604567,
            "unit": "ns/iter",
            "extra": "iterations: 26128\ncpu: 26755.473055725637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21964.242695924593,
            "unit": "ns/iter",
            "extra": "iterations: 31900\ncpu: 21963.887147335456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21644.86197435043,
            "unit": "ns/iter",
            "extra": "iterations: 32436\ncpu: 21644.749660870722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22751.263675861228,
            "unit": "ns/iter",
            "extra": "iterations: 30382\ncpu: 22750.822855638155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52206.66691500027,
            "unit": "ns/iter",
            "extra": "iterations: 13423\ncpu: 52205.937569842725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 208402.83064997836,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 208397.5253428777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 174109.52536051473,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174108.82645450093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 173963.39083894284,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 173960.86631814807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 173923.31431406506,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173918.4817663122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 101940.97729918701,
            "unit": "ns/iter",
            "extra": "iterations: 6872\ncpu: 101936.93247962765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 176525.5145801885,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 176522.04625439816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5427.488931374793,
            "unit": "ns/iter",
            "extra": "iterations: 129194\ncpu: 5427.4130377571855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27277.674163016545,
            "unit": "ns/iter",
            "extra": "iterations: 25568\ncpu: 27276.760012515733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21745.192991208372,
            "unit": "ns/iter",
            "extra": "iterations: 32074\ncpu: 21744.958533391284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21171.500387061715,
            "unit": "ns/iter",
            "extra": "iterations: 29711\ncpu: 21171.0040052508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22643.837643631083,
            "unit": "ns/iter",
            "extra": "iterations: 30895\ncpu: 22643.738469007894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51132.693129434134,
            "unit": "ns/iter",
            "extra": "iterations: 13667\ncpu: 51131.96019609253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 203056.35380621802,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 203050.92272203023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 171336.72170504622,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 171330.8917197447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 171607.30238791736,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 171604.48343080026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 172868.47354237584,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 172863.71876531182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 100790.20863309556,
            "unit": "ns/iter",
            "extra": "iterations: 6950\ncpu: 100786.0431654675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 171666.57037764078,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171664.02648356845 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}