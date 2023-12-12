window.BENCHMARK_DATA = {
  "lastUpdate": 1702381110019,
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
      }
    ]
  }
}