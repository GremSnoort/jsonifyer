window.BENCHMARK_DATA = {
  "lastUpdate": 1702396458550,
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
        "date": 1702387055644,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1816.6706550767383,
            "unit": "ns/iter",
            "extra": "iterations: 408517\ncpu: 1816.3763074731285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25319.373429967098,
            "unit": "ns/iter",
            "extra": "iterations: 32563\ncpu: 25317.096090655043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52511.268520269725,
            "unit": "ns/iter",
            "extra": "iterations: 15861\ncpu: 52508.46100498078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65397.77815979992,
            "unit": "ns/iter",
            "extra": "iterations: 13379\ncpu: 65393.258091038224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92453.39019549746,
            "unit": "ns/iter",
            "extra": "iterations: 10077\ncpu: 92448.70497171779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115457.86344371337,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 115446.84768211917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142550.04513779518,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 142545.31200506806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 177078.29374152745,
            "unit": "ns/iter",
            "extra": "iterations: 5161\ncpu: 177063.47607052894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 187169.4438603882,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 187159.12531539134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1579.673620445309,
            "unit": "ns/iter",
            "extra": "iterations: 438946\ncpu: 1579.5596724881866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1359.6714357058122,
            "unit": "ns/iter",
            "extra": "iterations: 540640\ncpu: 1359.6121263687482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1313.400752295799,
            "unit": "ns/iter",
            "extra": "iterations: 533035\ncpu: 1313.3064432917147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1314.3923166319883,
            "unit": "ns/iter",
            "extra": "iterations: 534349\ncpu: 1314.367389103376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2270.1844264165607,
            "unit": "ns/iter",
            "extra": "iterations: 306686\ncpu: 2269.531703436087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7086.135733785252,
            "unit": "ns/iter",
            "extra": "iterations: 115756\ncpu: 7085.889284356748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 35674.250217164736,
            "unit": "ns/iter",
            "extra": "iterations: 23024\ncpu: 35672.47654621268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30503.0502754572,
            "unit": "ns/iter",
            "extra": "iterations: 27409\ncpu: 30502.626874384398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30619.143218806297,
            "unit": "ns/iter",
            "extra": "iterations: 27650\ncpu: 30616.622061482798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31258.97777121144,
            "unit": "ns/iter",
            "extra": "iterations: 27082\ncpu: 31257.51790857392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73084.71840501108,
            "unit": "ns/iter",
            "extra": "iterations: 12138\ncpu: 73079.58477508642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 819681.2147239355,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 819616.5644171777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 682265.7189306566,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 682216.0404624273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 678648.2058394367,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 678626.204379562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 676000.9674620472,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 675947.7946493119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 489357.4280111986,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 489331.0364145657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 667898.8700361223,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 667831.4801444057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3682866.6225681175,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3682622.568093385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1649855.6834782271,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1649790.6086956526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4687179.985148534,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4686881.188118801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10938.04381395838,
            "unit": "ns/iter",
            "extra": "iterations: 76026\ncpu: 10937.554257753935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52642.49660120765,
            "unit": "ns/iter",
            "extra": "iterations: 15888\ncpu: 52638.79028197381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44491.549004962195,
            "unit": "ns/iter",
            "extra": "iterations: 18743\ncpu: 44489.47340340408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44326.929710922625,
            "unit": "ns/iter",
            "extra": "iterations: 18680\ncpu: 44325.30513918629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44485.674091567744,
            "unit": "ns/iter",
            "extra": "iterations: 18631\ncpu: 44482.82969244796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85357.67887296512,
            "unit": "ns/iter",
            "extra": "iterations: 10186\ncpu: 85354.40801099529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 863602.2559632856,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 863542.5688073412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 703758.883617504,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 703759.4514455138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 705643.1616989721,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 705610.6557377073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 702636.4306893841,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 702637.2868791699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 510156.6622630725,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 510151.92418150377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 696954.122717323,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 696954.4192841484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3906530.49586784,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3906407.4380165483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1673771.8904593384,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1673733.2155477041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7492.936202281903,
            "unit": "ns/iter",
            "extra": "iterations: 115443\ncpu: 7492.938506449088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34650.6559323461,
            "unit": "ns/iter",
            "extra": "iterations: 24004\ncpu: 34649.44592567885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29836.497385597977,
            "unit": "ns/iter",
            "extra": "iterations: 27731\ncpu: 29835.858786195895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29402.658020794308,
            "unit": "ns/iter",
            "extra": "iterations: 28183\ncpu: 29402.011851115894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29504.619190084075,
            "unit": "ns/iter",
            "extra": "iterations: 28077\ncpu: 29504.61943939886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71203.82452138614,
            "unit": "ns/iter",
            "extra": "iterations: 12275\ncpu: 71202.71283095735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 852693.9981965619,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 852668.530207396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 682139.9345323417,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 682069.424460431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 683008.8088342019,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 682976.7559739354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 678318.5154564837,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 678273.400431346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 491986.18319328985,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 491957.9831932753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 672962.2419999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672866.3999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 610.3076414528367,
            "unit": "ns/iter",
            "extra": "iterations: 1143526\ncpu: 610.2999844341073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4156.280371998056,
            "unit": "ns/iter",
            "extra": "iterations: 168173\ncpu: 4156.117212632233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3309.8051849440476,
            "unit": "ns/iter",
            "extra": "iterations: 212037\ncpu: 3309.6308663110995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3428.4406794636325,
            "unit": "ns/iter",
            "extra": "iterations: 203749\ncpu: 3428.185659806918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2611.658653648893,
            "unit": "ns/iter",
            "extra": "iterations: 267939\ncpu: 2611.551136639306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19930.537094192994,
            "unit": "ns/iter",
            "extra": "iterations: 34992\ncpu: 19929.078074988705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46035.934459634984,
            "unit": "ns/iter",
            "extra": "iterations: 15212\ncpu: 46033.73652379727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10885.927937084078,
            "unit": "ns/iter",
            "extra": "iterations: 63958\ncpu: 10885.030801463643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10900.75716705254,
            "unit": "ns/iter",
            "extra": "iterations: 64357\ncpu: 10900.752054943485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10985.81569119713,
            "unit": "ns/iter",
            "extra": "iterations: 63730\ncpu: 10985.339714420299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22823.843859020057,
            "unit": "ns/iter",
            "extra": "iterations: 30671\ncpu: 22822.26533207248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21060.833945119168,
            "unit": "ns/iter",
            "extra": "iterations: 33236\ncpu: 21059.649175592785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5447.796875972496,
            "unit": "ns/iter",
            "extra": "iterations: 128488\ncpu: 5447.479142021025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27158.024087617745,
            "unit": "ns/iter",
            "extra": "iterations: 26113\ncpu: 27156.856738023267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21846.991769804783,
            "unit": "ns/iter",
            "extra": "iterations: 31834\ncpu: 21844.383363698787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21498.887877010024,
            "unit": "ns/iter",
            "extra": "iterations: 32393\ncpu: 21498.69107523236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22561.380192412977,
            "unit": "ns/iter",
            "extra": "iterations: 31079\ncpu: 22561.11200489073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51761.18642573722,
            "unit": "ns/iter",
            "extra": "iterations: 13614\ncpu: 51760.59203760828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 206762.67713269868,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 206753.79146919088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 173784.5816960995,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 173779.95523501642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 175860.91639710183,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 175847.62378701114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 176345.91394061677,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 176346.0493205817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 103829.76075348526,
            "unit": "ns/iter",
            "extra": "iterations: 6742\ncpu: 103829.93177098951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 174678.2015484573,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 174675.87412587274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5381.099082203377,
            "unit": "ns/iter",
            "extra": "iterations: 130639\ncpu: 5381.027105228934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26805.411108555265,
            "unit": "ns/iter",
            "extra": "iterations: 26088\ncpu: 26804.741643667232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21637.287908758008,
            "unit": "ns/iter",
            "extra": "iterations: 32354\ncpu: 21637.3122334175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21558.16949465123,
            "unit": "ns/iter",
            "extra": "iterations: 32532\ncpu: 21557.62326324832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22366.258782986046,
            "unit": "ns/iter",
            "extra": "iterations: 31339\ncpu: 22365.681738409323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51277.901458790315,
            "unit": "ns/iter",
            "extra": "iterations: 13710\ncpu: 51276.77607585703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 200553.75975889168,
            "unit": "ns/iter",
            "extra": "iterations: 3484\ncpu: 200554.04707233302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 170796.98504902827,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 170797.23039215535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 171856.46697766514,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 171850.52786643675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 176235.61183550494,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 176234.22768305062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 102661.94181444668,
            "unit": "ns/iter",
            "extra": "iterations: 6823\ncpu: 102659.8563681681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 171530.8897909043,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 171531.14391143943 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702391116653,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1634.819816252339,
            "unit": "ns/iter",
            "extra": "iterations: 426781\ncpu: 1634.7091365360689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25273.080593816914,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25270.244872972147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52435.77112144843,
            "unit": "ns/iter",
            "extra": "iterations: 15908\ncpu: 52432.60623585616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65455.42693754849,
            "unit": "ns/iter",
            "extra": "iterations: 13290\ncpu: 65449.315274642606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92353.43969648558,
            "unit": "ns/iter",
            "extra": "iterations: 10016\ncpu: 92347.4540734824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115857.04511775599,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 115845.3162212225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141525.12010194035,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 141510.38547308056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162557.62499999654,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 162550.4901960784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185355.28811798547,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 185346.3439966765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1451.0359165536568,
            "unit": "ns/iter",
            "extra": "iterations: 482034\ncpu: 1450.984577851357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1188.9894358629138,
            "unit": "ns/iter",
            "extra": "iterations: 590867\ncpu: 1188.953351600278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1148.1906867944833,
            "unit": "ns/iter",
            "extra": "iterations: 606193\ncpu: 1148.1439079633049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1146.1566195775815,
            "unit": "ns/iter",
            "extra": "iterations: 608634\ncpu: 1146.126900567501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2259.1376237687723,
            "unit": "ns/iter",
            "extra": "iterations: 309852\ncpu: 2259.0827233647065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6980.394110511161,
            "unit": "ns/iter",
            "extra": "iterations: 117056\ncpu: 6979.955747676337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34895.20670744506,
            "unit": "ns/iter",
            "extra": "iterations: 23705\ncpu: 34893.91267665056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30185.573771695024,
            "unit": "ns/iter",
            "extra": "iterations: 27253\ncpu: 30184.24393644739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30116.439379492607,
            "unit": "ns/iter",
            "extra": "iterations: 27268\ncpu: 30113.635030071924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30535.764940984074,
            "unit": "ns/iter",
            "extra": "iterations: 26772\ncpu: 30490.564769161785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73875.01078414934,
            "unit": "ns/iter",
            "extra": "iterations: 11962\ncpu: 73869.99665607775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 815637.3420365467,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 815610.5308964327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 672313.8310567901,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 672268.0805176118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 670982.0797413758,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 670959.7701149409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 667756.1686919146,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 667697.5696926388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 475065.0950819684,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 475049.2349726769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 669976.1108726807,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 669899.2131616607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3577352.867924601,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3577108.3018867928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1569351.4875622038,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1569277.2802653422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4608855.707317062,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4608464.390243904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10614.03810718672,
            "unit": "ns/iter",
            "extra": "iterations: 78909\ncpu: 10613.737343015391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52654.477881146224,
            "unit": "ns/iter",
            "extra": "iterations: 15801\ncpu: 52651.82583380791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44313.18083806876,
            "unit": "ns/iter",
            "extra": "iterations: 18829\ncpu: 44310.90870465784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44428.89017833523,
            "unit": "ns/iter",
            "extra": "iterations: 18785\ncpu: 44426.350811818076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44634.267322498716,
            "unit": "ns/iter",
            "extra": "iterations: 18704\ncpu: 44632.72027373797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85665.58174610768,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 85661.61655225775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 861981.9880404803,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 861963.9374424979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 704373.5898960009,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 704358.9153046032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 701375.4742729192,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 701351.304996271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 695769.576470586,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 695748.1617647081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 495620.11011235893,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 495581.5168539322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 685303.255458512,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 685247.3071324584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3818951.500000004,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3818713.4146341356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1620904.6182432114,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1620835.1351351396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7232.833349267717,
            "unit": "ns/iter",
            "extra": "iterations: 115055\ncpu: 7232.51749163443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34961.60987321581,
            "unit": "ns/iter",
            "extra": "iterations: 23741\ncpu: 34959.365654353205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30095.951413779145,
            "unit": "ns/iter",
            "extra": "iterations: 27621\ncpu: 30093.769233554245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29811.823765930298,
            "unit": "ns/iter",
            "extra": "iterations: 27855\ncpu: 29811.26907198014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 30021.57398344754,
            "unit": "ns/iter",
            "extra": "iterations: 27790\ncpu: 30020.949982008064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71282.16307266575,
            "unit": "ns/iter",
            "extra": "iterations: 12289\ncpu: 71279.67287818382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 843374.6310160498,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 843295.9001782497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 671752.6269999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671705.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 673369.9470000261,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 673266.8999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 675016.0109999683,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 674954.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 480249.5652883776,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 480199.1838955369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 665503.4869999668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665450.2000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 602.7580517171659,
            "unit": "ns/iter",
            "extra": "iterations: 1164410\ncpu: 602.7274757173151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4198.58836161673,
            "unit": "ns/iter",
            "extra": "iterations: 166707\ncpu: 4198.337202397024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3320.9025917353288,
            "unit": "ns/iter",
            "extra": "iterations: 210824\ncpu: 3320.6556179562076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3128.339187789359,
            "unit": "ns/iter",
            "extra": "iterations: 223021\ncpu: 3128.106321826168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2553.598103383573,
            "unit": "ns/iter",
            "extra": "iterations: 271958\ncpu: 2553.440972503093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20353.08294890878,
            "unit": "ns/iter",
            "extra": "iterations: 34467\ncpu: 20352.63005193388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45911.609509425696,
            "unit": "ns/iter",
            "extra": "iterations: 15227\ncpu: 45908.997176068515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10738.299842437722,
            "unit": "ns/iter",
            "extra": "iterations: 65371\ncpu: 10738.253965825723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10809.614184374997,
            "unit": "ns/iter",
            "extra": "iterations: 64987\ncpu: 10808.835613276633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10743.540024187978,
            "unit": "ns/iter",
            "extra": "iterations: 65323\ncpu: 10743.142537850325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22025.414716661857,
            "unit": "ns/iter",
            "extra": "iterations: 31923\ncpu: 22024.252106631655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21079.80290387674,
            "unit": "ns/iter",
            "extra": "iterations: 33197\ncpu: 21078.841461577707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5407.601123378759,
            "unit": "ns/iter",
            "extra": "iterations: 129431\ncpu: 5407.396991447232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26973.728189341,
            "unit": "ns/iter",
            "extra": "iterations: 25985\ncpu: 26972.830479122164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22240.077477535364,
            "unit": "ns/iter",
            "extra": "iterations: 31493\ncpu: 22239.256342679746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21927.251736003363,
            "unit": "ns/iter",
            "extra": "iterations: 31970\ncpu: 21925.977478886565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22658.72278542477,
            "unit": "ns/iter",
            "extra": "iterations: 30875\ncpu: 22658.604048582736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51856.10208082004,
            "unit": "ns/iter",
            "extra": "iterations: 13264\ncpu: 51852.178829915894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 209777.03638002687,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 209766.65664461424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 175765.9810606057,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 175765.20202020448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 174891.46098049413,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 174884.91745873124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 175468.34983746248,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 175453.63840960094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 103266.13452521017,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 103043.21512309487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 175138.69036294526,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175134.86858573122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5190.959073514566,
            "unit": "ns/iter",
            "extra": "iterations: 134314\ncpu: 5190.716529922374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26700.11831622501,
            "unit": "ns/iter",
            "extra": "iterations: 26108\ncpu: 26699.195648843088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21703.252372975607,
            "unit": "ns/iter",
            "extra": "iterations: 32238\ncpu: 21702.13412742758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21571.45583082176,
            "unit": "ns/iter",
            "extra": "iterations: 32534\ncpu: 21571.011864510863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22385.738180892087,
            "unit": "ns/iter",
            "extra": "iterations: 31411\ncpu: 22384.18706822447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50968.921473194256,
            "unit": "ns/iter",
            "extra": "iterations: 13766\ncpu: 50965.480168530514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 203122.02732559477,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 203114.12790697892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 172248.70803637282,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172241.68100270105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 172158.6894685069,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172155.90551180916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 173462.77766773757,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 173450.7056202023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 100330.15722359186,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 100329.69134907995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170743.16735787966,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170729.08026348043 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391736130,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1644.6374021850813,
            "unit": "ns/iter",
            "extra": "iterations: 427082\ncpu: 1644.5190853278764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24785.21061994888,
            "unit": "ns/iter",
            "extra": "iterations: 33164\ncpu: 24783.97660113377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51220.17809897188,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 51218.86942675158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63966.62339556604,
            "unit": "ns/iter",
            "extra": "iterations: 13712\ncpu: 63963.433488914816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90985.08227724578,
            "unit": "ns/iter",
            "extra": "iterations: 10258\ncpu: 90977.0715539091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114537.60998826304,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 114529.97783283352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 139192.1007160631,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 139183.4371108343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 160860.6378923786,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 160854.6898355755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 183408.4291006401,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 183400.41160732665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1435.3248681816954,
            "unit": "ns/iter",
            "extra": "iterations: 486465\ncpu: 1435.2148664343758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1142.052529314005,
            "unit": "ns/iter",
            "extra": "iterations: 608327\ncpu: 1141.9741356211355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1154.4788349046664,
            "unit": "ns/iter",
            "extra": "iterations: 605856\ncpu: 1151.9058984313094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1138.8622398187415,
            "unit": "ns/iter",
            "extra": "iterations: 611737\ncpu: 1138.805565136654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2235.883125280103,
            "unit": "ns/iter",
            "extra": "iterations: 312420\ncpu: 2235.854618782412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7287.407728081448,
            "unit": "ns/iter",
            "extra": "iterations: 113534\ncpu: 7287.313051596875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 35015.1593469191,
            "unit": "ns/iter",
            "extra": "iterations: 23703\ncpu: 35014.75762561706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29855.860062836447,
            "unit": "ns/iter",
            "extra": "iterations: 27691\ncpu: 29854.891480986666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29643.304375966425,
            "unit": "ns/iter",
            "extra": "iterations: 27811\ncpu: 29642.33936212285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30041.06811949275,
            "unit": "ns/iter",
            "extra": "iterations: 27349\ncpu: 30040.392701744095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73682.09674480096,
            "unit": "ns/iter",
            "extra": "iterations: 12073\ncpu: 73677.76857450508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 802197.1942758156,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 802152.1248915874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 667939.1030000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667894.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 670433.6370000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670424.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 665804.3740000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665765.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 471803.3941841667,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 471785.24501884833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 655100.2809999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655083.5999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3568647.95864667,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3568503.0075187976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1542864.600654624,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1542806.3829787266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4523027.775119551,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4522717.224880374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10693.349583259987,
            "unit": "ns/iter",
            "extra": "iterations: 79426\ncpu: 10692.617027169948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52611.920177106076,
            "unit": "ns/iter",
            "extra": "iterations: 15810\ncpu: 52608.191018342855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43969.00340226405,
            "unit": "ns/iter",
            "extra": "iterations: 18811\ncpu: 43966.51958960197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43963.2771318841,
            "unit": "ns/iter",
            "extra": "iterations: 19009\ncpu: 43961.26571623972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44251.04947239948,
            "unit": "ns/iter",
            "extra": "iterations: 18859\ncpu: 44247.457447372835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85552.21154595347,
            "unit": "ns/iter",
            "extra": "iterations: 10272\ncpu: 85547.11838006235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 855497.9881494943,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 855442.9352780347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 689560.0997815119,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 689525.2731245444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 691529.1932895416,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 691474.8358862133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 683463.7691187506,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 683427.8222869631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 490867.52309406095,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 490833.55592654657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 673235.0702005669,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 673196.7048710609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3805703.209677393,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3805487.9032258145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1633540.391681174,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1633505.3726169842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7227.7098948290595,
            "unit": "ns/iter",
            "extra": "iterations: 114100\ncpu: 7227.563540753689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34422.231862439905,
            "unit": "ns/iter",
            "extra": "iterations: 24135\ncpu: 34422.1462606174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29566.546102594613,
            "unit": "ns/iter",
            "extra": "iterations: 27916\ncpu: 29565.78306347636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29537.76665591578,
            "unit": "ns/iter",
            "extra": "iterations: 27903\ncpu: 29537.712790739482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29484.977624170748,
            "unit": "ns/iter",
            "extra": "iterations: 28066\ncpu: 29484.60058433677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70450.45931023333,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 70448.7476994484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 834965.0385626553,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 834932.7782646829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 671224.9230000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671222.7000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 670034.9540000161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670017.6999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 664959.4069999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664943.3999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 477965.64149918716,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 477956.3280825671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 660202.7739999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660192.0000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 579.5746327226846,
            "unit": "ns/iter",
            "extra": "iterations: 1204063\ncpu: 579.5729127130373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4119.1856652798815,
            "unit": "ns/iter",
            "extra": "iterations: 169951\ncpu: 4119.133750316272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3383.1742328141036,
            "unit": "ns/iter",
            "extra": "iterations: 214420\ncpu: 3383.0603488480606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3263.8145738542808,
            "unit": "ns/iter",
            "extra": "iterations: 214727\ncpu: 3263.6715457301434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2567.161777939765,
            "unit": "ns/iter",
            "extra": "iterations: 268918\ncpu: 2567.10744539228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19773.33131170709,
            "unit": "ns/iter",
            "extra": "iterations: 35450\ncpu: 19773.060648801144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45270.043023931496,
            "unit": "ns/iter",
            "extra": "iterations: 15503\ncpu: 45269.26401341642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10604.540066525753,
            "unit": "ns/iter",
            "extra": "iterations: 66140\ncpu: 10604.295433928082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10544.629720038061,
            "unit": "ns/iter",
            "extra": "iterations: 66366\ncpu: 10544.60868517014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10484.690023681864,
            "unit": "ns/iter",
            "extra": "iterations: 66718\ncpu: 10484.256122785595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21524.56640024629,
            "unit": "ns/iter",
            "extra": "iterations: 32530\ncpu: 21523.940977559232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20276.952994714058,
            "unit": "ns/iter",
            "extra": "iterations: 34060\ncpu: 20276.664709336183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5336.664444885003,
            "unit": "ns/iter",
            "extra": "iterations: 131126\ncpu: 5336.601436785966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26744.44605721784,
            "unit": "ns/iter",
            "extra": "iterations: 26111\ncpu: 26743.437631649496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21779.273754669983,
            "unit": "ns/iter",
            "extra": "iterations: 32120\ncpu: 21778.969489415067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21574.1351384686,
            "unit": "ns/iter",
            "extra": "iterations: 32426\ncpu: 21573.848146548677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22692.7563920468,
            "unit": "ns/iter",
            "extra": "iterations: 30976\ncpu: 22692.44899276859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51915.937094926674,
            "unit": "ns/iter",
            "extra": "iterations: 13115\ncpu: 51915.83682805948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 202450.6487579331,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 202446.07163489203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 170174.41348259323,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 170169.11657337658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 169975.46751034472,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 169973.30250669143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 170146.3195479755,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 170145.99663380807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99415.01815322618,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 99409.9914236715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 172622.87856440424,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172620.67354965594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5196.206723599443,
            "unit": "ns/iter",
            "extra": "iterations: 134779\ncpu: 5196.085443578003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26953.003697285494,
            "unit": "ns/iter",
            "extra": "iterations: 25965\ncpu: 26952.64779510891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21590.40035224303,
            "unit": "ns/iter",
            "extra": "iterations: 32364\ncpu: 21590.35038932141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21056.114472410405,
            "unit": "ns/iter",
            "extra": "iterations: 33056\ncpu: 21054.846321393914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22029.213900708935,
            "unit": "ns/iter",
            "extra": "iterations: 31725\ncpu: 22028.18597320713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50891.21062191305,
            "unit": "ns/iter",
            "extra": "iterations: 13764\ncpu: 50887.910491135844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 203365.719770783,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 203352.52148996975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 169971.31009263455,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 169745.14870794775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 170066.99492017445,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 170051.83841315922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 171750.47074796163,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 171737.29943224095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99029.94315610635,
            "unit": "ns/iter",
            "extra": "iterations: 7072\ncpu: 99019.95192307691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 168884.85144927626,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 168884.44444444514 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396455887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1681.080057489755,
            "unit": "ns/iter",
            "extra": "iterations: 418162\ncpu: 1681.0800598810988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24704.425966817435,
            "unit": "ns/iter",
            "extra": "iterations: 33512\ncpu: 24703.249582239205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50943.7367490118,
            "unit": "ns/iter",
            "extra": "iterations: 16395\ncpu: 50941.70173833487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63621.743750002424,
            "unit": "ns/iter",
            "extra": "iterations: 13760\ncpu: 63618.98982558139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 89826.30948259367,
            "unit": "ns/iter",
            "extra": "iterations: 10398\ncpu: 89824.24504712441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 112096.52012861466,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 112090.9581993569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 137607.22349128136,
            "unit": "ns/iter",
            "extra": "iterations: 6479\ncpu: 137603.17950300965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 158462.59128516796,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 158455.24912667752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 181060.39816887394,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 181055.19837232935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1452.1135633745807,
            "unit": "ns/iter",
            "extra": "iterations: 482638\ncpu: 1452.0344440346616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1156.5467229655806,
            "unit": "ns/iter",
            "extra": "iterations: 606051\ncpu: 1156.5340210642332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1179.047393668422,
            "unit": "ns/iter",
            "extra": "iterations: 593497\ncpu: 1179.0174171057306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1167.1049991507107,
            "unit": "ns/iter",
            "extra": "iterations: 600462\ncpu: 1167.0728539024954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2291.7048532565736,
            "unit": "ns/iter",
            "extra": "iterations: 305465\ncpu: 2291.5191593144923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7230.45648836224,
            "unit": "ns/iter",
            "extra": "iterations: 113981\ncpu: 7230.223458295682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34892.1359022061,
            "unit": "ns/iter",
            "extra": "iterations: 23642\ncpu: 34890.78335166231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30088.995626502612,
            "unit": "ns/iter",
            "extra": "iterations: 27438\ncpu: 30087.91457103283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30130.167882944796,
            "unit": "ns/iter",
            "extra": "iterations: 27406\ncpu: 30128.435379114064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30567.76825020271,
            "unit": "ns/iter",
            "extra": "iterations: 26986\ncpu: 30567.490550655908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74656.72826454832,
            "unit": "ns/iter",
            "extra": "iterations: 11824\ncpu: 74653.42523680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 806510.20173916,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 806487.913043477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 669207.7339999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669164.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 667208.4059999861,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667192.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 667869.0759999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667834.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 470282.1381896131,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 470263.6314943769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 666622.7460000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666595.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3570644.4566038577,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3570470.9433962316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1618573.4452054796,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1618526.7123287637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4598964.563106982,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4598781.067961172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10727.48549873791,
            "unit": "ns/iter",
            "extra": "iterations: 68132\ncpu: 10726.831738390174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52960.6000381676,
            "unit": "ns/iter",
            "extra": "iterations: 15719\ncpu: 52959.32311215733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44395.05944786919,
            "unit": "ns/iter",
            "extra": "iterations: 18655\ncpu: 44392.902707048845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44088.3665155982,
            "unit": "ns/iter",
            "extra": "iterations: 18976\ncpu: 44086.63048060734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44539.489890876604,
            "unit": "ns/iter",
            "extra": "iterations: 18053\ncpu: 44537.77765468339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 87134.66428715205,
            "unit": "ns/iter",
            "extra": "iterations: 9946\ncpu: 87131.42972049056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 862099.1617915807,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 862064.7166361987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 692688.3467742035,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 692658.5043988291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 692265.464233581,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 692240.9489051081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 688668.2273714796,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 688642.9398986254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 487565.6147042618,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 487562.5760088441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 682425.5890804395,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 682403.8793103455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3806504.165991993,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3806385.425101218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1584115.5434782612,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1584064.7157190589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7236.332097876413,
            "unit": "ns/iter",
            "extra": "iterations: 113858\ncpu: 7236.272374361084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34532.078792679684,
            "unit": "ns/iter",
            "extra": "iterations: 23987\ncpu: 34531.15437528657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29846.322636476463,
            "unit": "ns/iter",
            "extra": "iterations: 27734\ncpu: 29845.80659118764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30063.051544512306,
            "unit": "ns/iter",
            "extra": "iterations: 27452\ncpu: 30062.811452717466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29220.29932020887,
            "unit": "ns/iter",
            "extra": "iterations: 28244\ncpu: 29219.664353491065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 72151.99908864596,
            "unit": "ns/iter",
            "extra": "iterations: 12070\ncpu: 72151.23446561719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 844598.9617437345,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 844586.1209964379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 677151.9380000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 677133.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 676229.9913978374,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 676223.3691756276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 672036.2149999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671976.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 479522.2678571231,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 479513.31168831413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 664260.8239999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664231.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 601.0647864951573,
            "unit": "ns/iter",
            "extra": "iterations: 1165922\ncpu: 601.064222134924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4204.128441135921,
            "unit": "ns/iter",
            "extra": "iterations: 166987\ncpu: 4203.936833406208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3471.026137703627,
            "unit": "ns/iter",
            "extra": "iterations: 201854\ncpu: 3470.97109792228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3347.438805494984,
            "unit": "ns/iter",
            "extra": "iterations: 232431\ncpu: 3347.3499662265576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2585.650707378951,
            "unit": "ns/iter",
            "extra": "iterations: 270647\ncpu: 2585.6266649916543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20612.10108228925,
            "unit": "ns/iter",
            "extra": "iterations: 34002\ncpu: 20611.155226163137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45576.85242491148,
            "unit": "ns/iter",
            "extra": "iterations: 15382\ncpu: 45575.67286438699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10733.385075175695,
            "unit": "ns/iter",
            "extra": "iterations: 65247\ncpu: 10732.931782304166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10712.465642436215,
            "unit": "ns/iter",
            "extra": "iterations: 65415\ncpu: 10712.463502254774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10645.269750846084,
            "unit": "ns/iter",
            "extra": "iterations: 65301\ncpu: 10644.803295508416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 19720.475276275683,
            "unit": "ns/iter",
            "extra": "iterations: 35472\ncpu: 19720.24977446971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20698.348662406155,
            "unit": "ns/iter",
            "extra": "iterations: 33792\ncpu: 20698.336884469365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5411.264226325633,
            "unit": "ns/iter",
            "extra": "iterations: 129654\ncpu: 5411.136563468847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26879.239630098382,
            "unit": "ns/iter",
            "extra": "iterations: 26061\ncpu: 26879.225662868135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21904.376465438647,
            "unit": "ns/iter",
            "extra": "iterations: 31987\ncpu: 21903.91409009884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21551.904852873344,
            "unit": "ns/iter",
            "extra": "iterations: 32455\ncpu: 21551.51748574955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22705.485801150593,
            "unit": "ns/iter",
            "extra": "iterations: 30918\ncpu: 22704.683355973968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51994.94669842753,
            "unit": "ns/iter",
            "extra": "iterations: 13433\ncpu: 51994.900617881365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 206199.93865571223,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 206188.6997358385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 174096.9383886286,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 174093.6891992998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 172724.0449213922,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 172722.16121787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 174568.09357888604,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174567.96913887706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 101020.0600951204,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 101019.98847096061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173388.52271035247,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 173381.80689997404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5270.2857465026755,
            "unit": "ns/iter",
            "extra": "iterations: 133027\ncpu: 5270.2007863064855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26583.778266975354,
            "unit": "ns/iter",
            "extra": "iterations: 26347\ncpu: 26582.779823129935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21463.10655967195,
            "unit": "ns/iter",
            "extra": "iterations: 32151\ncpu: 21463.117787938278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21314.32351956144,
            "unit": "ns/iter",
            "extra": "iterations: 32845\ncpu: 21313.862079464343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22378.96358579275,
            "unit": "ns/iter",
            "extra": "iterations: 31279\ncpu: 22377.98522970689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51083.519371955495,
            "unit": "ns/iter",
            "extra": "iterations: 13757\ncpu: 51082.11092534772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 201212.59689922276,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 201204.9956933662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 170864.75207014187,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 170852.11885046333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 177691.49109538613,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 177681.4588924135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 171170.78296095828,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 171168.18070218634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 98919.94753913453,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 98915.34339303368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 170457.9124446754,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 170455.48450565687 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}