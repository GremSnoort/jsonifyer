window.BENCHMARK_DATA = {
  "lastUpdate": 1705575655532,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 20.04 Release c++-17": [
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
        "date": 1702490371302,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1342.5782005398971,
            "unit": "ns/iter",
            "extra": "iterations: 509664\ncpu: 1342.4850489734413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16130.771276596504,
            "unit": "ns/iter",
            "extra": "iterations: 48128\ncpu: 16130.387716090423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34096.58276634659,
            "unit": "ns/iter",
            "extra": "iterations: 24104\ncpu: 34095.581646199804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50854.19691750178,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 50854.43336355394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56738.57049999924,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56737.919999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71688.58513932364,
            "unit": "ns/iter",
            "extra": "iterations: 12274\ncpu: 71687.03764054092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84843.03971367292,
            "unit": "ns/iter",
            "extra": "iterations: 10198\ncpu: 84840.97862325945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98360.91084611154,
            "unit": "ns/iter",
            "extra": "iterations: 8805\ncpu: 98356.8427030096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114680.95560839938,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 114674.35592548556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1202.750192277661,
            "unit": "ns/iter",
            "extra": "iterations: 581191\ncpu: 1202.737138049283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.8059751780231,
            "unit": "ns/iter",
            "extra": "iterations: 721217\ncpu: 971.7835270105946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 961.6851741823325,
            "unit": "ns/iter",
            "extra": "iterations: 732135\ncpu: 961.6669056936217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 960.7842947644046,
            "unit": "ns/iter",
            "extra": "iterations: 728012\ncpu: 960.7760586363962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1900.5408179385786,
            "unit": "ns/iter",
            "extra": "iterations: 367118\ncpu: 1900.4826785938026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5664.036370000076,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5664.0750000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30247.105307560996,
            "unit": "ns/iter",
            "extra": "iterations: 27263\ncpu: 30246.942742911604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23976.08892879895,
            "unit": "ns/iter",
            "extra": "iterations: 34522\ncpu: 23974.57563292973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24149.985379344973,
            "unit": "ns/iter",
            "extra": "iterations: 33993\ncpu: 24148.657076456933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23961.969781014785,
            "unit": "ns/iter",
            "extra": "iterations: 34614\ncpu: 23960.888657768468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65076.17941219532,
            "unit": "ns/iter",
            "extra": "iterations: 13678\ncpu: 65071.830676999525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 576779.6269999507,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576785.1000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 569719.7885235163,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 569679.7549967775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 576660.49272485,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 576622.9497354483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 578243.2769640094,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 578227.363515313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333047.2630158087,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 333034.74739683757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 576433.8736010223,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 576421.9223173138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2420563.3289818084,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2420488.772845954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089831.516666723,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1089824.4047619055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3409082.45220566,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3408944.485294117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8799.398612990615,
            "unit": "ns/iter",
            "extra": "iterations: 95313\ncpu: 8799.349511609149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48362.758861961,
            "unit": "ns/iter",
            "extra": "iterations: 17293\ncpu: 48361.60874342226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37563.658559695046,
            "unit": "ns/iter",
            "extra": "iterations: 22162\ncpu: 37562.219113798434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37859.29372298189,
            "unit": "ns/iter",
            "extra": "iterations: 22208\ncpu: 37857.81249999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37000.61511888723,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 36999.56482727693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78565.87744435073,
            "unit": "ns/iter",
            "extra": "iterations: 11097\ncpu: 78565.5041903218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 609803.769999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609791.7000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601821.926624726,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 601818.238993709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 599386.4605809597,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 599370.2627939131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 594325.1346547955,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 594305.8783321948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346518.84694688994,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 346509.67486122006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589206.0241773532,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 589186.2995298863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2583567.941503924,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2583496.100278558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1115293.7479191213,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1115236.1474435132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5786.242369999854,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5786.175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30703.083258827002,
            "unit": "ns/iter",
            "extra": "iterations: 26844\ncpu: 30702.916852927956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24534.060828339087,
            "unit": "ns/iter",
            "extra": "iterations: 33537\ncpu: 24534.177177445927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24076.89229657396,
            "unit": "ns/iter",
            "extra": "iterations: 34595\ncpu: 24076.626680156118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23864.131367992944,
            "unit": "ns/iter",
            "extra": "iterations: 34430\ncpu: 23863.13970374663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64657.72584893921,
            "unit": "ns/iter",
            "extra": "iterations: 13664\ncpu: 64656.213407494164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 593825.9280000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593750.1999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 591210.3109017398,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 591191.1170928658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 586047.9440323233,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 586005.7990559657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 586471.1512325143,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 586452.4983344415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340980.4425466102,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 340971.77795030957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 578214.6446934686,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 578179.3671720487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 547.796261381272,
            "unit": "ns/iter",
            "extra": "iterations: 1279296\ncpu: 547.75790747411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3197.6508401792685,
            "unit": "ns/iter",
            "extra": "iterations: 219358\ncpu: 3197.340876557986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2594.0222809135335,
            "unit": "ns/iter",
            "extra": "iterations: 269962\ncpu: 2593.867655447817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2669.8953927302655,
            "unit": "ns/iter",
            "extra": "iterations: 261999\ncpu: 2669.6945408188535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2085.233161850918,
            "unit": "ns/iter",
            "extra": "iterations: 337255\ncpu: 2085.1168996753163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17705.196153650642,
            "unit": "ns/iter",
            "extra": "iterations: 39622\ncpu: 17704.956842158386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31061.258822484553,
            "unit": "ns/iter",
            "extra": "iterations: 22471\ncpu: 31060.96746918293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7427.200901130747,
            "unit": "ns/iter",
            "extra": "iterations: 93882\ncpu: 7427.171342749418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7421.210639095488,
            "unit": "ns/iter",
            "extra": "iterations: 93335\ncpu: 7420.583918144178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7457.193990500711,
            "unit": "ns/iter",
            "extra": "iterations: 93685\ncpu: 7456.6568821048395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13882.83640548601,
            "unit": "ns/iter",
            "extra": "iterations: 50399\ncpu: 13881.757574554973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13956.480222631117,
            "unit": "ns/iter",
            "extra": "iterations: 50487\ncpu: 13956.299641491889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5221.886931081731,
            "unit": "ns/iter",
            "extra": "iterations: 134334\ncpu: 5221.8455491536215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25718.058978874815,
            "unit": "ns/iter",
            "extra": "iterations: 27264\ncpu: 25717.403902582177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20756.28280213079,
            "unit": "ns/iter",
            "extra": "iterations: 33603\ncpu: 20755.405767342083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20445.103514133956,
            "unit": "ns/iter",
            "extra": "iterations: 34034\ncpu: 20443.5917024155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20997.412433618923,
            "unit": "ns/iter",
            "extra": "iterations: 33329\ncpu: 20996.7145728944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50206.1726117925,
            "unit": "ns/iter",
            "extra": "iterations: 13933\ncpu: 50201.36366898681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160216.7241223149,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 160205.97961494897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132121.61643316128,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132114.29382809362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132292.21034742906,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132287.8587613299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133116.85403961904,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133116.21570122062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83430.95272728147,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 83426.27878787804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134271.1160105984,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 134269.64420893425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5229.554862326729,
            "unit": "ns/iter",
            "extra": "iterations: 133033\ncpu: 5229.291980185386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25232.137346964086,
            "unit": "ns/iter",
            "extra": "iterations: 27689\ncpu: 25231.08454620956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21812.513328777135,
            "unit": "ns/iter",
            "extra": "iterations: 32186\ncpu: 21811.25644690257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21734.15439945506,
            "unit": "ns/iter",
            "extra": "iterations: 32254\ncpu: 21733.9523779995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22206.94651678324,
            "unit": "ns/iter",
            "extra": "iterations: 31580\ncpu: 22206.557948068774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50088.94656652364,
            "unit": "ns/iter",
            "extra": "iterations: 13980\ncpu: 50086.895565092826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155267.4794763641,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155265.96405591248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128637.57001285312,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128623.8942925306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128564.24048537794,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128553.18992461848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130008.14034438661,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129998.16700611034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83974.72844567648,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 83974.14687085462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130517.45143916474,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 130516.8616527381 ns\nthreads: 1"
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
        "date": 1702493001862,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1357.2352445177369,
            "unit": "ns/iter",
            "extra": "iterations: 520637\ncpu: 1357.1536406363743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16068.604649394048,
            "unit": "ns/iter",
            "extra": "iterations: 52609\ncpu: 16067.494154992492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34077.62892128784,
            "unit": "ns/iter",
            "extra": "iterations: 24418\ncpu: 34077.02924072406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50599.67621829354,
            "unit": "ns/iter",
            "extra": "iterations: 16437\ncpu: 50597.8828253331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56711.03979999544,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56708.86 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71321.8326546569,
            "unit": "ns/iter",
            "extra": "iterations: 12770\ncpu: 71316.60140955367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85418.35668607423,
            "unit": "ns/iter",
            "extra": "iterations: 10477\ncpu: 85413.66803474282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98432.71362664766,
            "unit": "ns/iter",
            "extra": "iterations: 8887\ncpu: 98425.0028130977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114849.91193971699,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 114845.76226365198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1183.9482600288227,
            "unit": "ns/iter",
            "extra": "iterations: 586935\ncpu: 1183.8559636075556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.7350203591144,
            "unit": "ns/iter",
            "extra": "iterations: 731860\ncpu: 953.7023474435008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 925.367300021237,
            "unit": "ns/iter",
            "extra": "iterations: 745554\ncpu: 925.3483986404727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.1233640198581,
            "unit": "ns/iter",
            "extra": "iterations: 725941\ncpu: 972.0712840299695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1907.1134521969943,
            "unit": "ns/iter",
            "extra": "iterations: 365405\ncpu: 1907.123876246906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5597.5316399997155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5597.248999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29974.962144762674,
            "unit": "ns/iter",
            "extra": "iterations: 27341\ncpu: 29974.08287919246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23861.05800734772,
            "unit": "ns/iter",
            "extra": "iterations: 34306\ncpu: 23859.23162129071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23857.795753667717,
            "unit": "ns/iter",
            "extra": "iterations: 34571\ncpu: 23857.279222469726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23694.419656696577,
            "unit": "ns/iter",
            "extra": "iterations: 35479\ncpu: 23692.759096930622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65699.97989206621,
            "unit": "ns/iter",
            "extra": "iterations: 13527\ncpu: 65696.17801434184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570270.7460000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570242.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565866.6353554981,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 565855.4468362676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 566718.1017173148,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 566654.0951122859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560953.8785291871,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 560930.6631648064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329069.9039118779,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 329058.488416255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565806.989763275,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 565736.5962891858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2421966.022900627,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2421888.8040712485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1118230.4726426231,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1118114.202561116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3384006.4022557186,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3383914.6616541436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8643.526313119986,
            "unit": "ns/iter",
            "extra": "iterations: 98544\ncpu: 8642.836702386761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47354.59609996215,
            "unit": "ns/iter",
            "extra": "iterations: 17487\ncpu: 47352.370332246865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37493.57534308167,
            "unit": "ns/iter",
            "extra": "iterations: 22298\ncpu: 37493.22809220567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37208.19687556363,
            "unit": "ns/iter",
            "extra": "iterations: 22212\ncpu: 37204.68215379047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37520.100297867924,
            "unit": "ns/iter",
            "extra": "iterations: 22493\ncpu: 37519.07704619215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76999.01831567552,
            "unit": "ns/iter",
            "extra": "iterations: 11138\ncpu: 76991.57838031912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608200.1109999737,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608178.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604375.2246726227,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 604321.2267401777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 599898.7376133922,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 599867.2714584746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 595573.1579661006,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 595568.9491525398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 352379.6575672284,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 352351.4251304691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586373.6327759805,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 586369.0969899681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2613928.4338028054,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2613841.1267605736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1156765.991172787,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1156700.252206812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5465.097049999485,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5464.551000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29725.120773471524,
            "unit": "ns/iter",
            "extra": "iterations: 27564\ncpu: 29724.118415324443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23818.89354792228,
            "unit": "ns/iter",
            "extra": "iterations: 34485\ncpu: 23817.488763230376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23831.179696378455,
            "unit": "ns/iter",
            "extra": "iterations: 34319\ncpu: 23831.29753197933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23216.38325663876,
            "unit": "ns/iter",
            "extra": "iterations: 34987\ncpu: 23214.82264841218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63683.69803515443,
            "unit": "ns/iter",
            "extra": "iterations: 13538\ncpu: 63681.99881814151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 591668.0300000508,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591593.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585976.0374332223,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 585978.3422459906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 589559.6646706542,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 589528.2102461769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 586787.3690013104,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 586750.3891050603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335403.5715957954,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 335405.1892313711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 577854.2931034763,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 577814.8541114078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.0800115475646,
            "unit": "ns/iter",
            "extra": "iterations: 1260868\ncpu: 550.0684449125512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3284.7996181322337,
            "unit": "ns/iter",
            "extra": "iterations: 212639\ncpu: 3284.6486298374225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2538.4561126360472,
            "unit": "ns/iter",
            "extra": "iterations: 274726\ncpu: 2538.467782445066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2594.7783278288684,
            "unit": "ns/iter",
            "extra": "iterations: 271288\ncpu: 2594.7671846893245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2023.086003138887,
            "unit": "ns/iter",
            "extra": "iterations: 345999\ncpu: 2023.0659626184001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17858.840444466456,
            "unit": "ns/iter",
            "extra": "iterations: 39328\ncpu: 17858.39351098464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30305.49469490592,
            "unit": "ns/iter",
            "extra": "iterations: 23091\ncpu: 30305.629899094758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7382.198827604706,
            "unit": "ns/iter",
            "extra": "iterations: 93825\ncpu: 7381.495337063722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7353.92330231145,
            "unit": "ns/iter",
            "extra": "iterations: 94879\ncpu: 7353.186690416274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7296.7056721285735,
            "unit": "ns/iter",
            "extra": "iterations: 95696\ncpu: 7296.256896840079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14872.026586783828,
            "unit": "ns/iter",
            "extra": "iterations: 46903\ncpu: 14871.543398077127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14151.1350561293,
            "unit": "ns/iter",
            "extra": "iterations: 49261\ncpu: 14150.908426544318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5148.139300713076,
            "unit": "ns/iter",
            "extra": "iterations: 134766\ncpu: 5147.72420343409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26090.48477507585,
            "unit": "ns/iter",
            "extra": "iterations: 26831\ncpu: 26088.818903507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21021.06757445693,
            "unit": "ns/iter",
            "extra": "iterations: 33341\ncpu: 21019.213580876563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20877.55173238152,
            "unit": "ns/iter",
            "extra": "iterations: 33451\ncpu: 20876.6643747571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21330.64617981036,
            "unit": "ns/iter",
            "extra": "iterations: 32590\ncpu: 21328.30316047869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51626.639018012895,
            "unit": "ns/iter",
            "extra": "iterations: 13768\ncpu: 51623.29314352162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160909.06780838865,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 160898.21800509098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133488.50522649963,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 133486.6821525344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133337.97946769034,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 133335.43726235675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133988.86628350776,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 133974.40613027016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85178.5808013462,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 85167.48577654001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133654.28204143842,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 133635.91711435033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5347.969075808211,
            "unit": "ns/iter",
            "extra": "iterations: 130157\ncpu: 5347.996650199373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26635.46590301574,
            "unit": "ns/iter",
            "extra": "iterations: 26190\ncpu: 26635.58610156553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22134.077699166257,
            "unit": "ns/iter",
            "extra": "iterations: 31519\ncpu: 22134.19524731084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20901.44788234651,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20901.252021805387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21370.02856966962,
            "unit": "ns/iter",
            "extra": "iterations: 32517\ncpu: 21369.828089922004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50799.240154323954,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50796.57130377749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155627.926231313,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 155614.95431245796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130463.78412463354,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 130451.02002967354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128857.46461480744,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 128848.41503870125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129632.31591819145,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 129627.72343263438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82815.5430400825,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 82812.37846810534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128679.21032793561,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 128666.69807764742 ns\nthreads: 1"
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
        "date": 1702503995843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1356.1625364826857,
            "unit": "ns/iter",
            "extra": "iterations: 516684\ncpu: 1356.1538580641168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16563.66670664831,
            "unit": "ns/iter",
            "extra": "iterations: 50022\ncpu: 16563.104234136976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34709.51944993385,
            "unit": "ns/iter",
            "extra": "iterations: 23779\ncpu: 34708.0028596661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50892.14146638182,
            "unit": "ns/iter",
            "extra": "iterations: 16435\ncpu: 50891.554609066014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56822.847000000824,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56822.21999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71328.0556955834,
            "unit": "ns/iter",
            "extra": "iterations: 12299\ncpu: 71326.87210342301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84747.71521824185,
            "unit": "ns/iter",
            "extra": "iterations: 10264\ncpu: 84745.07989088073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98979.57275822997,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 98976.3337116912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115989.96613119321,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 115986.0642570282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1188.3035703679807,
            "unit": "ns/iter",
            "extra": "iterations: 589323\ncpu: 1188.2780750114962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 963.03563246356,
            "unit": "ns/iter",
            "extra": "iterations: 727623\ncpu: 963.0166995820634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 966.354312257036,
            "unit": "ns/iter",
            "extra": "iterations: 671261\ncpu: 966.3268087971725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 954.8778894233596,
            "unit": "ns/iter",
            "extra": "iterations: 736955\ncpu: 954.8421545413217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1901.5239912390587,
            "unit": "ns/iter",
            "extra": "iterations: 368447\ncpu: 1901.5114792629586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5611.972550000246,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5611.800000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30292.698221374263,
            "unit": "ns/iter",
            "extra": "iterations: 27212\ncpu: 30292.029251800715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24061.87332767421,
            "unit": "ns/iter",
            "extra": "iterations: 34159\ncpu: 24060.988319330194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23808.29408701845,
            "unit": "ns/iter",
            "extra": "iterations: 34568\ncpu: 23807.570585512578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23487.340412859478,
            "unit": "ns/iter",
            "extra": "iterations: 35266\ncpu: 23486.984631089468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66135.9056631893,
            "unit": "ns/iter",
            "extra": "iterations: 13420\ncpu: 66133.62891207168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 579549.8689999477,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579520.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 576936.1842980523,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 576921.3572854298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 583049.2186046392,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 583034.0199335552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 576492.359731515,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 576472.6174496644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 338368.39111965225,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 338353.62934362964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 584231.5423616068,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584232.4216144105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2423106.8746736585,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2422986.1618798994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1106001.4498230002,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1105950.0590318777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3365763.8945454564,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3365639.6363636274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9350.310867322169,
            "unit": "ns/iter",
            "extra": "iterations: 92065\ncpu: 9350.025525444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49915.56970136524,
            "unit": "ns/iter",
            "extra": "iterations: 16542\ncpu: 49914.41784548416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39533.90752186742,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 39532.29364777477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39075.04221362056,
            "unit": "ns/iter",
            "extra": "iterations: 21178\ncpu: 39075.1298517331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39106.96706699241,
            "unit": "ns/iter",
            "extra": "iterations: 21316\ncpu: 39105.65303058711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80258.35260853972,
            "unit": "ns/iter",
            "extra": "iterations: 10964\ncpu: 80254.6515870118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606612.9789999195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606614.2000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 606587.9289694192,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 606568.3844011106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 606054.4944134074,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 606004.3296089355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 600412.7144818266,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 600398.4214138641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350811.45168984245,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 350798.0119284277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587772.2134228226,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 587749.4630872487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2574556.022160736,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2574411.35734073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1126125.9758745711,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1126093.486127866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5778.887049999639,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5778.601000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29860.824279079476,
            "unit": "ns/iter",
            "extra": "iterations: 27777\ncpu: 29860.154084314334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23666.031162363568,
            "unit": "ns/iter",
            "extra": "iterations: 34946\ncpu: 23664.74274595093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23717.26115655025,
            "unit": "ns/iter",
            "extra": "iterations: 34845\ncpu: 23716.702539819184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23555.08615111306,
            "unit": "ns/iter",
            "extra": "iterations: 34927\ncpu: 23553.671944340927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64297.2929912746,
            "unit": "ns/iter",
            "extra": "iterations: 13526\ncpu: 64295.431021736156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582930.9490000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582879.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581128.4494983279,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 581100.6020066901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 587715.4949765286,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 587692.4313462826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 585441.7458194467,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 585420.2675585254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338700.35480138677,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 338689.008870037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573932.9349540471,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 573914.5860709578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.3599364867815,
            "unit": "ns/iter",
            "extra": "iterations: 1292328\ncpu: 541.351189481308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3202.0691157616434,
            "unit": "ns/iter",
            "extra": "iterations: 219183\ncpu: 3201.968674577862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2571.6195409365037,
            "unit": "ns/iter",
            "extra": "iterations: 271727\ncpu: 2571.555642243865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2677.416138929637,
            "unit": "ns/iter",
            "extra": "iterations: 259757\ncpu: 2677.366153751395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2076.0256975949924,
            "unit": "ns/iter",
            "extra": "iterations: 337230\ncpu: 2075.988494499286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17717.073703459988,
            "unit": "ns/iter",
            "extra": "iterations: 39374\ncpu: 17716.76740996584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31524.416644279863,
            "unit": "ns/iter",
            "extra": "iterations: 22338\ncpu: 31523.31453129167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7460.067079264792,
            "unit": "ns/iter",
            "extra": "iterations: 94038\ncpu: 7459.986388481246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7429.898134087231,
            "unit": "ns/iter",
            "extra": "iterations: 94163\ncpu: 7429.601860603421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7457.556539248754,
            "unit": "ns/iter",
            "extra": "iterations: 93864\ncpu: 7457.237066393905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14988.523818597834,
            "unit": "ns/iter",
            "extra": "iterations: 47232\ncpu: 14988.207147696348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14216.844361774598,
            "unit": "ns/iter",
            "extra": "iterations: 49191\ncpu: 14216.61482791577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5193.229534105438,
            "unit": "ns/iter",
            "extra": "iterations: 134773\ncpu: 5193.178900818383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25854.146573063827,
            "unit": "ns/iter",
            "extra": "iterations: 27065\ncpu: 25853.135045261628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21064.8354384831,
            "unit": "ns/iter",
            "extra": "iterations: 33331\ncpu: 21064.30650145489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20967.98526328424,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20967.546276882185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21445.854944988663,
            "unit": "ns/iter",
            "extra": "iterations: 32629\ncpu: 21445.217444604536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50595.38090081866,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 50593.78518839368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160092.4630519366,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 160087.14253031224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133111.30189753303,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133108.80455407983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133546.9567701394,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133541.11597790915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133368.40526013996,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 133367.2489921291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83946.69680978204,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 83945.65843127925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134137.69342507477,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 134134.91972477036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5306.263260849758,
            "unit": "ns/iter",
            "extra": "iterations: 131892\ncpu: 5306.108785976472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25578.5999486323,
            "unit": "ns/iter",
            "extra": "iterations: 27254\ncpu: 25577.82343876117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21788.63006463063,
            "unit": "ns/iter",
            "extra": "iterations: 32184\ncpu: 21788.18046234168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21428.87527901245,
            "unit": "ns/iter",
            "extra": "iterations: 32705\ncpu: 21428.307598226394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21952.070019534673,
            "unit": "ns/iter",
            "extra": "iterations: 31734\ncpu: 21951.62916745444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49221.47215189799,
            "unit": "ns/iter",
            "extra": "iterations: 14220\ncpu: 49220.6188466949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153739.75243148668,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 153736.62687886792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127690.3571428514,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 127685.33065400292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128337.21397140005,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128330.85808580866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127998.04434670093,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 127996.55488363556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82545.4249058368,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82544.4326741991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130153.19469359034,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130151.30792227051 ns\nthreads: 1"
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
        "date": 1705575652367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1378.4546877871953,
            "unit": "ns/iter",
            "extra": "iterations: 505857\ncpu: 1378.446675641535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16458.327497282615,
            "unit": "ns/iter",
            "extra": "iterations: 50605\ncpu: 16457.622764548963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34733.94882567958,
            "unit": "ns/iter",
            "extra": "iterations: 23801\ncpu: 34733.59102558716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51711.09366206018,
            "unit": "ns/iter",
            "extra": "iterations: 16346\ncpu: 51708.64431665241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57358.771500003066,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57358.94000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72226.5437716024,
            "unit": "ns/iter",
            "extra": "iterations: 12154\ncpu: 72220.94783610333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86014.7951306481,
            "unit": "ns/iter",
            "extra": "iterations: 10104\ncpu: 86010.57007125892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99006.8237784684,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 99001.79654422704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115896.65494825976,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 115891.53621650321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1169.3124631048888,
            "unit": "ns/iter",
            "extra": "iterations: 603060\ncpu: 1169.291115311908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.7255539434774,
            "unit": "ns/iter",
            "extra": "iterations: 729903\ncpu: 948.7178433298677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 923.7259422965535,
            "unit": "ns/iter",
            "extra": "iterations: 758811\ncpu: 923.7037944890112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.4646800366919,
            "unit": "ns/iter",
            "extra": "iterations: 750383\ncpu: 933.4578475258633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1888.4292026565208,
            "unit": "ns/iter",
            "extra": "iterations: 370706\ncpu: 1888.3986231676822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5250.55228000042,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5250.3520000000135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28542.884307503915,
            "unit": "ns/iter",
            "extra": "iterations: 28982\ncpu: 28542.5850527914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22514.799396516464,
            "unit": "ns/iter",
            "extra": "iterations: 36455\ncpu: 22514.110547250017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23699.511622763428,
            "unit": "ns/iter",
            "extra": "iterations: 36179\ncpu: 23698.090052240288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23695.664928217524,
            "unit": "ns/iter",
            "extra": "iterations: 34130\ncpu: 23694.345150893645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65473.67146067223,
            "unit": "ns/iter",
            "extra": "iterations: 13350\ncpu: 65348.8913857678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565309.4479999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565278.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 570314.6629361828,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 570307.8341013821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563445.8212655126,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 563420.2870189173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 568858.6083824679,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 568822.9862475446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335500.7680826595,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 335486.29927286576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569178.8324607165,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 569137.7617801032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408787.2963915737,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2408706.9587628916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1100474.6327014656,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1100469.0758293848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3349893.3574007065,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3349764.2599277976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8805.156196209045,
            "unit": "ns/iter",
            "extra": "iterations: 94695\ncpu: 8805.028776598567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47245.06586724453,
            "unit": "ns/iter",
            "extra": "iterations: 17596\ncpu: 47244.19754489655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37428.52934013028,
            "unit": "ns/iter",
            "extra": "iterations: 22171\ncpu: 37427.666771909346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37162.90839076027,
            "unit": "ns/iter",
            "extra": "iterations: 22203\ncpu: 37161.563752646005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37231.15091165502,
            "unit": "ns/iter",
            "extra": "iterations: 21993\ncpu: 37230.85527213216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78008.64571325717,
            "unit": "ns/iter",
            "extra": "iterations: 11104\ncpu: 78007.53782420802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604964.8859999479,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604960.1000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604522.7067773592,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 604505.6016597492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593295.6593707404,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 593278.3173734606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592754.6354378687,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 592747.3862864898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345997.3005940603,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 345986.81188118795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587026.6312247722,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 587004.1722745625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2584053.822714815,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2584011.634349039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1135289.7197062678,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1135252.3867809079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5715.942379999888,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5715.901000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29615.49964083193,
            "unit": "ns/iter",
            "extra": "iterations: 27842\ncpu: 29614.596652539265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23821.97500505445,
            "unit": "ns/iter",
            "extra": "iterations: 34607\ncpu: 23820.914843817707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23830.174408160423,
            "unit": "ns/iter",
            "extra": "iterations: 34511\ncpu: 23828.967575555605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23402.036254290262,
            "unit": "ns/iter",
            "extra": "iterations: 35251\ncpu: 23400.822671697235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64724.54384410907,
            "unit": "ns/iter",
            "extra": "iterations: 13548\ncpu: 64721.818718630384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583780.5390000312,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583764.9000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580896.1488371498,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580861.528239201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581877.3009383464,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581849.1286863263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581090.0094722194,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 581061.4343707702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337768.6487935591,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 337761.1643048641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 572568.0532894953,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 572538.3552631554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.3606643998015,
            "unit": "ns/iter",
            "extra": "iterations: 1296388\ncpu: 540.3214161192491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3282.472280915427,
            "unit": "ns/iter",
            "extra": "iterations: 213445\ncpu: 3282.344397854255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2671.229338812459,
            "unit": "ns/iter",
            "extra": "iterations: 270604\ncpu: 2671.0340571462248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2664.480545171135,
            "unit": "ns/iter",
            "extra": "iterations: 280059\ncpu: 2664.3228748228044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2038.2498737001501,
            "unit": "ns/iter",
            "extra": "iterations: 340460\ncpu: 2038.0711390471672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17718.956755664967,
            "unit": "ns/iter",
            "extra": "iterations: 39589\ncpu: 17718.212129631807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31266.690688946437,
            "unit": "ns/iter",
            "extra": "iterations: 22382\ncpu: 31265.19524617953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7393.373272181738,
            "unit": "ns/iter",
            "extra": "iterations: 94628\ncpu: 7393.311704780755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7410.063375069488,
            "unit": "ns/iter",
            "extra": "iterations: 94564\ncpu: 7409.862103971903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7403.978591584601,
            "unit": "ns/iter",
            "extra": "iterations: 94262\ncpu: 7403.508306634806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14922.451614276291,
            "unit": "ns/iter",
            "extra": "iterations: 46925\ncpu: 14921.68779968029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14191.15047136492,
            "unit": "ns/iter",
            "extra": "iterations: 49325\ncpu: 14190.38621388763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5205.6326703281875,
            "unit": "ns/iter",
            "extra": "iterations: 134740\ncpu: 5205.541042006832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25899.538552657756,
            "unit": "ns/iter",
            "extra": "iterations: 27015\ncpu: 25899.392929853817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20808.884020695823,
            "unit": "ns/iter",
            "extra": "iterations: 33437\ncpu: 20808.487603553167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20966.09892113174,
            "unit": "ns/iter",
            "extra": "iterations: 33461\ncpu: 20965.906577806898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21359.292724610485,
            "unit": "ns/iter",
            "extra": "iterations: 32768\ncpu: 21358.566284179673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50085.74654443846,
            "unit": "ns/iter",
            "extra": "iterations: 13963\ncpu: 50084.91011960266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157263.59330036628,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157261.4208633095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131154.751964075,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131154.11522633824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131598.34423149575,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131598.77865464083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135501.78847250473,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 135498.72550884736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83890.35152025646,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 83889.8569883429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132239.84922141233,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 132240.4101785028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5419.69750295091,
            "unit": "ns/iter",
            "extra": "iterations: 130474\ncpu: 5419.651424804963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25205.213859884163,
            "unit": "ns/iter",
            "extra": "iterations: 27677\ncpu: 25205.296816851718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21327.502983619226,
            "unit": "ns/iter",
            "extra": "iterations: 32846\ncpu: 21327.053522499053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21364.21368565725,
            "unit": "ns/iter",
            "extra": "iterations: 32735\ncpu: 21363.87658469498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22216.826297624753,
            "unit": "ns/iter",
            "extra": "iterations: 31577\ncpu: 22216.705196820265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50272.654800431876,
            "unit": "ns/iter",
            "extra": "iterations: 13905\ncpu: 50272.22581805044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152992.3557692177,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 152991.49912587402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128932.26270091307,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 128931.46129687848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128429.7093343128,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 128428.69979827422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128591.16541216311,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128589.99449238129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83379.15560043229,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83379.48687492621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130723.7709111456,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130722.77819267988 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}