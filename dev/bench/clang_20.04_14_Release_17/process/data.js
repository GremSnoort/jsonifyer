window.BENCHMARK_DATA = {
  "lastUpdate": 1705958954391,
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
        "date": 1705773685114,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1373.293709503869,
            "unit": "ns/iter",
            "extra": "iterations: 529370\ncpu: 1373.2742694145873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16274.690237884815,
            "unit": "ns/iter",
            "extra": "iterations: 50655\ncpu: 16274.19800611983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34568.423239965836,
            "unit": "ns/iter",
            "extra": "iterations: 24062\ncpu: 34567.82478596959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50938.416772935176,
            "unit": "ns/iter",
            "extra": "iterations: 16467\ncpu: 50936.89803850126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56782.06540000019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56781.42999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71454.707503462,
            "unit": "ns/iter",
            "extra": "iterations: 12301\ncpu: 71452.6542557515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85208.61689779667,
            "unit": "ns/iter",
            "extra": "iterations: 10167\ncpu: 85205.35064424122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98509.04698672713,
            "unit": "ns/iter",
            "extra": "iterations: 8811\ncpu: 98506.52593349224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116473.56366084171,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 116468.37146702544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1215.3237590528524,
            "unit": "ns/iter",
            "extra": "iterations: 576475\ncpu: 1215.2795871460169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 983.7332435459859,
            "unit": "ns/iter",
            "extra": "iterations: 715023\ncpu: 983.7012235970012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 961.2980951845799,
            "unit": "ns/iter",
            "extra": "iterations: 728207\ncpu: 961.2821629014832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 967.940187964176,
            "unit": "ns/iter",
            "extra": "iterations: 723968\ncpu: 967.9034156205805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1936.7385866425973,
            "unit": "ns/iter",
            "extra": "iterations: 361791\ncpu: 1936.659010312582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5707.130230000531,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5706.901999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30122.14575490661,
            "unit": "ns/iter",
            "extra": "iterations: 27361\ncpu: 30121.27846204455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24343.02058456484,
            "unit": "ns/iter",
            "extra": "iterations: 33666\ncpu: 24342.04538703738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24048.662911864474,
            "unit": "ns/iter",
            "extra": "iterations: 34356\ncpu: 24047.53172662707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23851.615643591507,
            "unit": "ns/iter",
            "extra": "iterations: 34455\ncpu: 23850.639965171937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65417.35829629639,
            "unit": "ns/iter",
            "extra": "iterations: 13500\ncpu: 65414.12592592595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 585763.2260000401,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585754.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 575615.8599735651,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 575599.6036988099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 573230.0928523708,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 573193.5203740832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 573144.4701942374,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 573121.1654387132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332916.16335877526,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 332905.5725190843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 573235.2175925375,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 573203.5052910049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2426903.5509138363,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2426794.5169712817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1123969.8218181124,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1123944.8484848486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3374700.0945450882,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3374658.9090909073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8729.74449738558,
            "unit": "ns/iter",
            "extra": "iterations: 94864\ncpu: 8729.477989542933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47140.085939309596,
            "unit": "ns/iter",
            "extra": "iterations: 17268\ncpu: 47139.547139217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37422.19722484286,
            "unit": "ns/iter",
            "extra": "iterations: 22269\ncpu: 37421.50523148761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37228.51733833411,
            "unit": "ns/iter",
            "extra": "iterations: 22407\ncpu: 37227.31735618342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36967.16387602217,
            "unit": "ns/iter",
            "extra": "iterations: 22456\ncpu: 36966.663697898024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78641.91797762991,
            "unit": "ns/iter",
            "extra": "iterations: 10997\ncpu: 78639.75629717238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604895.3290001008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604882.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 608122.817799565,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 608108.4793272617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 599399.5612456664,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 599398.8235294112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 608690.663906135,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 608681.7805383055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349430.09010104026,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 349422.1010101003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 598147.4184156688,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 598147.1902505055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2596737.758721165,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2596592.4418604807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1163328.1987653312,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1163264.8148148162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5790.662109999403,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5790.413000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30039.408740078376,
            "unit": "ns/iter",
            "extra": "iterations: 27208\ncpu: 30038.87092031742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23776.52337836242,
            "unit": "ns/iter",
            "extra": "iterations: 34348\ncpu: 23776.31303132628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23434.52907659445,
            "unit": "ns/iter",
            "extra": "iterations: 34925\ncpu: 23434.027201145414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23984.124656652322,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 23983.87586932375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65395.07101341188,
            "unit": "ns/iter",
            "extra": "iterations: 13420\ncpu: 65393.19672131139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584233.213999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584198.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 588355.972611892,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 588342.1509686034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 590451.6785473544,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 590424.2098184242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 589338.8877687679,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 589323.7903225834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 341195.24032511073,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 341182.6625387001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 575983.140223872,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 575966.4911125749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 542.2063556028385,
            "unit": "ns/iter",
            "extra": "iterations: 1292875\ncpu: 542.1964227013453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3348.3130934799424,
            "unit": "ns/iter",
            "extra": "iterations: 208516\ncpu: 3348.2308312071877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2716.241676459271,
            "unit": "ns/iter",
            "extra": "iterations: 268065\ncpu: 2716.0949769645486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2691.000572682791,
            "unit": "ns/iter",
            "extra": "iterations: 260179\ncpu: 2690.9154851083367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2092.3203407336377,
            "unit": "ns/iter",
            "extra": "iterations: 333985\ncpu: 2092.227195832139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17990.422940461067,
            "unit": "ns/iter",
            "extra": "iterations: 38613\ncpu: 17990.38147774068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31850.942326957836,
            "unit": "ns/iter",
            "extra": "iterations: 22957\ncpu: 31850.363723482955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7496.933724509913,
            "unit": "ns/iter",
            "extra": "iterations: 93564\ncpu: 7496.781881920509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7567.508247478644,
            "unit": "ns/iter",
            "extra": "iterations: 92695\ncpu: 7567.16759264257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7489.838715535714,
            "unit": "ns/iter",
            "extra": "iterations: 93611\ncpu: 7489.564260610303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15180.79576212418,
            "unit": "ns/iter",
            "extra": "iterations: 46108\ncpu: 15180.070703565276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14333.107476534276,
            "unit": "ns/iter",
            "extra": "iterations: 46131\ncpu: 14332.862933818988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5218.106727187161,
            "unit": "ns/iter",
            "extra": "iterations: 133949\ncpu: 5217.973258478964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25884.131419496152,
            "unit": "ns/iter",
            "extra": "iterations: 27066\ncpu: 25884.079657134633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20956.135292356208,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 20955.53523238384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20825.67797318646,
            "unit": "ns/iter",
            "extra": "iterations: 33491\ncpu: 20825.490430264977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21458.40499340532,
            "unit": "ns/iter",
            "extra": "iterations: 32603\ncpu: 21457.715547648626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51052.90510523721,
            "unit": "ns/iter",
            "extra": "iterations: 13731\ncpu: 51051.34367489625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158122.57874461688,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158119.89576251875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134583.30259365536,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134580.23054754967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134276.54671280578,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134276.35524798237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135785.77468059852,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 135781.804103757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84704.2565159467,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84703.5761910525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133979.86521573257,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133977.41504390794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5370.410919651032,
            "unit": "ns/iter",
            "extra": "iterations: 130169\ncpu: 5370.329341087389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27652.185458707903,
            "unit": "ns/iter",
            "extra": "iterations: 25321\ncpu: 27652.15828758736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22085.817286135065,
            "unit": "ns/iter",
            "extra": "iterations: 31667\ncpu: 22085.154893106668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20663.89570986336,
            "unit": "ns/iter",
            "extra": "iterations: 33915\ncpu: 20663.6945304436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22240.56171815189,
            "unit": "ns/iter",
            "extra": "iterations: 31336\ncpu: 22240.206152667935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50682.65685847557,
            "unit": "ns/iter",
            "extra": "iterations: 13764\ncpu: 50682.19994187758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156245.32908562367,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156238.27408897717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130138.91968767132,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130135.9174567753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130201.14630522652,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130199.62866691526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131019.48831994174,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 131016.27733134002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84071.90362170382,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 84070.96618938843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131438.6041237021,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131436.9072164964 ns\nthreads: 1"
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
        "date": 1705775440743,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1374.774903660347,
            "unit": "ns/iter",
            "extra": "iterations: 509915\ncpu: 1374.6632281850896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16669.365070278604,
            "unit": "ns/iter",
            "extra": "iterations: 50656\ncpu: 16668.374921036007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34134.98177516061,
            "unit": "ns/iter",
            "extra": "iterations: 24088\ncpu: 34133.62670209233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50315.90847518345,
            "unit": "ns/iter",
            "extra": "iterations: 16684\ncpu: 50315.24814193237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56130.93189999745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56128.860000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70894.61328062612,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 70892.4721639503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83855.24334081983,
            "unit": "ns/iter",
            "extra": "iterations: 10249\ncpu: 83851.57576348916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97715.9052868394,
            "unit": "ns/iter",
            "extra": "iterations: 8890\ncpu: 97711.47356580432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113744.06159323937,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 113739.56739646533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1148.1327648248725,
            "unit": "ns/iter",
            "extra": "iterations: 609431\ncpu: 1148.048589586024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.6373170517313,
            "unit": "ns/iter",
            "extra": "iterations: 736205\ncpu: 952.6337093608428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 956.2352175691431,
            "unit": "ns/iter",
            "extra": "iterations: 738478\ncpu: 956.1613209872187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 961.4044498430325,
            "unit": "ns/iter",
            "extra": "iterations: 740925\ncpu: 959.1794041232243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1896.9657013904919,
            "unit": "ns/iter",
            "extra": "iterations: 370015\ncpu: 1896.8382362877169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5314.573379999956,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5314.561999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29331.832680643965,
            "unit": "ns/iter",
            "extra": "iterations: 28855\ncpu: 29331.07260440132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23811.29676810422,
            "unit": "ns/iter",
            "extra": "iterations: 33912\ncpu: 23810.317881575833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24081.14505074529,
            "unit": "ns/iter",
            "extra": "iterations: 33995\ncpu: 24080.64715399324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23798.505216051602,
            "unit": "ns/iter",
            "extra": "iterations: 34413\ncpu: 23797.61717955421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65581.38076581847,
            "unit": "ns/iter",
            "extra": "iterations: 13528\ncpu: 65579.62743938508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 574999.6460000376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574980.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 575772.5141727407,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 575747.857613712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 571579.3883048763,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571568.331143233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 569268.5509532976,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 569241.0913872444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332858.0737451389,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 332852.0463320464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 589386.4967490096,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 589283.875162548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2415741.5051813517,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2415573.0569948205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1103635.056019069,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1103553.039332539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3379785.886861339,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3379532.1167883156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8663.416825241202,
            "unit": "ns/iter",
            "extra": "iterations: 97746\ncpu: 8662.751416937805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47927.10106753177,
            "unit": "ns/iter",
            "extra": "iterations: 17236\ncpu: 47925.33650498942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38005.531739109574,
            "unit": "ns/iter",
            "extra": "iterations: 21787\ncpu: 38004.0345159959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38004.69879353019,
            "unit": "ns/iter",
            "extra": "iterations: 21882\ncpu: 38001.73201718288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38012.28749828497,
            "unit": "ns/iter",
            "extra": "iterations: 21861\ncpu: 38010.27857829016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78837.27550926758,
            "unit": "ns/iter",
            "extra": "iterations: 10849\ncpu: 78831.18259747472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606761.8990000483,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606738.1000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597098.383873191,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 597069.1936595467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592782.6772413341,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 592758.8275862073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592917.3552989251,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 592898.1657608699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345578.1052631816,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 345566.228070174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584947.6082337444,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 584924.9667994671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2564231.082873164,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2564069.613259676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1132992.4465174053,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1132930.8457711434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5743.975090000505,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5743.748999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30098.561865609554,
            "unit": "ns/iter",
            "extra": "iterations: 27487\ncpu: 30097.278713573603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23784.333025662596,
            "unit": "ns/iter",
            "extra": "iterations: 33586\ncpu: 23783.91889477759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23576.77926888275,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 23575.48508419523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23736.17459769044,
            "unit": "ns/iter",
            "extra": "iterations: 34737\ncpu: 23735.233324696994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64352.115557189565,
            "unit": "ns/iter",
            "extra": "iterations: 13595\ncpu: 64349.40051489548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583300.783000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583260.8999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579826.3166226965,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 579789.8416886553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580229.8365448416,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580219.8671096318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 577363.8245847204,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 577314.6843853793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336783.53781188553,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 336751.2859884845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567452.7644013291,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 567430.744336569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.2214332449628,
            "unit": "ns/iter",
            "extra": "iterations: 1274646\ncpu: 550.191661057265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3255.1353539632946,
            "unit": "ns/iter",
            "extra": "iterations: 217127\ncpu: 3254.9848706056787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2585.147156349824,
            "unit": "ns/iter",
            "extra": "iterations: 270515\ncpu: 2584.9317043417172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2568.1185581183545,
            "unit": "ns/iter",
            "extra": "iterations: 272727\ncpu: 2568.0537680537795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2054.652526243516,
            "unit": "ns/iter",
            "extra": "iterations: 340466\ncpu: 2054.6075085324346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17738.562888471715,
            "unit": "ns/iter",
            "extra": "iterations: 39578\ncpu: 17738.091869220196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31434.758069583742,
            "unit": "ns/iter",
            "extra": "iterations: 22275\ncpu: 31432.974186307572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7416.4697250051895,
            "unit": "ns/iter",
            "extra": "iterations: 94038\ncpu: 7416.277462302535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7492.6667876631855,
            "unit": "ns/iter",
            "extra": "iterations: 93667\ncpu: 7492.471201170054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7501.586568921457,
            "unit": "ns/iter",
            "extra": "iterations: 93440\ncpu: 7501.488655821911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14881.400662602517,
            "unit": "ns/iter",
            "extra": "iterations: 47087\ncpu: 14881.001125576282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14122.465481013023,
            "unit": "ns/iter",
            "extra": "iterations: 46163\ncpu: 14121.803175703419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5177.28633514645,
            "unit": "ns/iter",
            "extra": "iterations: 135296\ncpu: 5177.180404446519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25877.405021509003,
            "unit": "ns/iter",
            "extra": "iterations: 26964\ncpu: 25877.1102210356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21137.15932634931,
            "unit": "ns/iter",
            "extra": "iterations: 33786\ncpu: 21136.677913928725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20660.982720097913,
            "unit": "ns/iter",
            "extra": "iterations: 33565\ncpu: 20659.87486965603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21307.23748555548,
            "unit": "ns/iter",
            "extra": "iterations: 32882\ncpu: 21306.46250228104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50463.78928057447,
            "unit": "ns/iter",
            "extra": "iterations: 13900\ncpu: 50462.22302158319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158852.83621475234,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 158848.79435850822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131448.59567670463,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131443.70300751887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132336.9733106231,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 132331.95154268292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133442.05632997493,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133436.3757876649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83954.56364726942,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 83952.60947810354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132665.70138231374,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132662.86688127118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5330.657218058803,
            "unit": "ns/iter",
            "extra": "iterations: 131836\ncpu: 5330.539458114668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25721.774076118374,
            "unit": "ns/iter",
            "extra": "iterations: 27195\ncpu: 25720.507446221578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21804.177339900718,
            "unit": "ns/iter",
            "extra": "iterations: 32074\ncpu: 21803.71952360158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21329.1342212464,
            "unit": "ns/iter",
            "extra": "iterations: 32886\ncpu: 21328.541020495053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21652.71551697488,
            "unit": "ns/iter",
            "extra": "iterations: 32371\ncpu: 21652.11145778638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49565.39371809365,
            "unit": "ns/iter",
            "extra": "iterations: 14104\ncpu: 49563.36500283573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155031.78536584304,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 155028.0487804894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129364.44417744232,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129362.14417744968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129338.86453521122,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 129335.94529661798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130160.88926300421,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130156.26636737761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82748.61690073607,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 82746.47704473071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130343.21636228602,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130341.1852404017 ns\nthreads: 1"
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
        "date": 1705778462254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1365.5051513395783,
            "unit": "ns/iter",
            "extra": "iterations: 509285\ncpu: 1365.417398902383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16393.61067283502,
            "unit": "ns/iter",
            "extra": "iterations: 50577\ncpu: 16392.795144037806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34403.916892540976,
            "unit": "ns/iter",
            "extra": "iterations: 23981\ncpu: 34402.043284266714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50291.181664156,
            "unit": "ns/iter",
            "extra": "iterations: 15936\ncpu: 50288.077309236956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60791.89109999561,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60786.220000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70529.3070104748,
            "unit": "ns/iter",
            "extra": "iterations: 12410\ncpu: 70527.34891216765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84087.91985726754,
            "unit": "ns/iter",
            "extra": "iterations: 10369\ncpu: 84085.23483460318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98751.99654249403,
            "unit": "ns/iter",
            "extra": "iterations: 8966\ncpu: 98749.531563685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114136.37873931456,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 114133.03952991449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1177.2636919424383,
            "unit": "ns/iter",
            "extra": "iterations: 595551\ncpu: 1177.2634081715933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 973.42007046512,
            "unit": "ns/iter",
            "extra": "iterations: 720641\ncpu: 973.4121428006447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 940.376690379465,
            "unit": "ns/iter",
            "extra": "iterations: 740810\ncpu: 940.3689205059311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 942.4810047862845,
            "unit": "ns/iter",
            "extra": "iterations: 741292\ncpu: 942.4537159445944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1864.4060610916235,
            "unit": "ns/iter",
            "extra": "iterations: 374520\ncpu: 1864.3509024885159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5605.260190000081,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5605.262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30355.312891297155,
            "unit": "ns/iter",
            "extra": "iterations: 27313\ncpu: 30354.981144509904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23847.46326191434,
            "unit": "ns/iter",
            "extra": "iterations: 33698\ncpu: 23847.433082082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23533.9144733086,
            "unit": "ns/iter",
            "extra": "iterations: 34878\ncpu: 23533.362004702092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23316.936430670397,
            "unit": "ns/iter",
            "extra": "iterations: 34718\ncpu: 23315.68638746476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65962.26314634123,
            "unit": "ns/iter",
            "extra": "iterations: 13673\ncpu: 65961.52270898844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568825.9309999922,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568804.1000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 566887.2642622847,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 566876.4590163929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 581574.9143045879,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 581543.1114040875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 572254.9814814862,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 572222.3544973547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 337808.639007392,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 337791.8185343152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 572672.3013071785,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 572635.5555555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2409853.1194804073,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2409729.8701298675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1096068.5699051584,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1095997.1563981052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3381547.3941604234,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3381323.357664233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8763.575272832051,
            "unit": "ns/iter",
            "extra": "iterations: 96396\ncpu: 8763.107390348134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47893.857249537534,
            "unit": "ns/iter",
            "extra": "iterations: 17408\ncpu: 47891.538373161886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37070.618085006696,
            "unit": "ns/iter",
            "extra": "iterations: 22162\ncpu: 37069.217579640856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37318.23802911588,
            "unit": "ns/iter",
            "extra": "iterations: 22325\ncpu: 37315.91489361694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37064.63532979201,
            "unit": "ns/iter",
            "extra": "iterations: 22423\ncpu: 37062.55184408853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77855.09259093215,
            "unit": "ns/iter",
            "extra": "iterations: 11189\ncpu: 77850.92501564037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 607661.3640000232,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607651.5999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604404.2512077263,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 604378.4679088992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592552.7458904439,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 592521.6438356189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588910.5166327663,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 588874.473862862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347926.74030088144,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 347907.9572446563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584395.5250166503,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584359.9733155468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2625716.576704336,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2625544.3181818193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123481.8918268548,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1123435.336538461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5738.077769999563,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5737.7810000000545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30334.129876778316,
            "unit": "ns/iter",
            "extra": "iterations: 27349\ncpu: 30332.26809024109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23759.33795518389,
            "unit": "ns/iter",
            "extra": "iterations: 35123\ncpu: 23757.87091079935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23706.38448717073,
            "unit": "ns/iter",
            "extra": "iterations: 34797\ncpu: 23706.098226858787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23196.91079267216,
            "unit": "ns/iter",
            "extra": "iterations: 35311\ncpu: 23195.970094304947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64354.90001466196,
            "unit": "ns/iter",
            "extra": "iterations: 13642\ncpu: 64352.03049406285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583549.9339999615,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583508.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585492.5651302354,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 585456.7802271204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580491.1597315123,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 580474.9664429553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 582545.8262032294,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 582515.6417112278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337198.39999998605,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 337180.6500956033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 572897.4617876015,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 572870.6606217598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 564.6466937283955,
            "unit": "ns/iter",
            "extra": "iterations: 1235939\ncpu: 564.6175094401912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3178.000009136661,
            "unit": "ns/iter",
            "extra": "iterations: 218894\ncpu: 3177.8797043317695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2666.5024662061987,
            "unit": "ns/iter",
            "extra": "iterations: 262549\ncpu: 2666.4268384187267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2555.798795904852,
            "unit": "ns/iter",
            "extra": "iterations: 272902\ncpu: 2555.726231394434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2042.039509699689,
            "unit": "ns/iter",
            "extra": "iterations: 343055\ncpu: 2041.961201556601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17829.852716577352,
            "unit": "ns/iter",
            "extra": "iterations: 38762\ncpu: 17828.373148960436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31481.237687270972,
            "unit": "ns/iter",
            "extra": "iterations: 22294\ncpu: 31480.012559433075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7360.589728672381,
            "unit": "ns/iter",
            "extra": "iterations: 94535\ncpu: 7360.100491881355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7376.487983303641,
            "unit": "ns/iter",
            "extra": "iterations: 94868\ncpu: 7376.108909221177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7360.712034775012,
            "unit": "ns/iter",
            "extra": "iterations: 95008\ncpu: 7360.715939710219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14228.008731758373,
            "unit": "ns/iter",
            "extra": "iterations: 49131\ncpu: 14227.858175082978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14332.831006988195,
            "unit": "ns/iter",
            "extra": "iterations: 48789\ncpu: 14332.263420033216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5215.503488207445,
            "unit": "ns/iter",
            "extra": "iterations: 134023\ncpu: 5215.231713959522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26137.02929135056,
            "unit": "ns/iter",
            "extra": "iterations: 26868\ncpu: 26134.99330058021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21088.761801608154,
            "unit": "ns/iter",
            "extra": "iterations: 33237\ncpu: 21087.495863044434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21014.031643087503,
            "unit": "ns/iter",
            "extra": "iterations: 33151\ncpu: 21012.651202075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21485.21656460641,
            "unit": "ns/iter",
            "extra": "iterations: 32660\ncpu: 21483.790569503883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51014.98558952385,
            "unit": "ns/iter",
            "extra": "iterations: 13740\ncpu: 51014.52692867526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159206.45533073953,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 159206.54694248593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132823.5737021555,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132817.03296703257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133392.6051928152,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133384.15425735113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134209.38542869408,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134202.47981545498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84790.28609399276,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 84784.84958318225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134584.0139953992,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 134582.26610429402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5396.506909946025,
            "unit": "ns/iter",
            "extra": "iterations: 129234\ncpu: 5396.456814770141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26602.61673055382,
            "unit": "ns/iter",
            "extra": "iterations: 26347\ncpu: 26602.59232550226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21515.052993761386,
            "unit": "ns/iter",
            "extra": "iterations: 32551\ncpu: 21514.220761266773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21613.283714894496,
            "unit": "ns/iter",
            "extra": "iterations: 32367\ncpu: 21612.26866870557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21945.983962590675,
            "unit": "ns/iter",
            "extra": "iterations: 31863\ncpu: 21944.371214261024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50703.692636612584,
            "unit": "ns/iter",
            "extra": "iterations: 13798\ncpu: 50700.49282504692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155708.92053273867,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 155696.3596004437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128616.17310522504,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128609.32671081755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129466.27289512398,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129466.15583456481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130823.36823441192,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130822.06047032468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83393.55143983482,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83389.1504361333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131114.49504023598,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131104.2672655804 ns\nthreads: 1"
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
        "date": 1705953649976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1445.9359279886862,
            "unit": "ns/iter",
            "extra": "iterations: 474591\ncpu: 1445.8497948760091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16494.0420264023,
            "unit": "ns/iter",
            "extra": "iterations: 49921\ncpu: 16493.279381422646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34684.12789281399,
            "unit": "ns/iter",
            "extra": "iterations: 22988\ncpu: 34682.734470158335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51201.51021276999,
            "unit": "ns/iter",
            "extra": "iterations: 16450\ncpu: 51199.6960486322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57484.238199992884,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57481.610000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72131.07794020987,
            "unit": "ns/iter",
            "extra": "iterations: 12176\ncpu: 72128.65473061762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85880.71796394348,
            "unit": "ns/iter",
            "extra": "iterations: 10098\ncpu: 85875.22281639933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99876.97925025824,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 99873.56414077725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115750.34679366728,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 115744.51301314711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1239.6162102119574,
            "unit": "ns/iter",
            "extra": "iterations: 568074\ncpu: 1239.5828712456487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1041.3001526267078,
            "unit": "ns/iter",
            "extra": "iterations: 672228\ncpu: 1041.2813807220145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1004.2367672193468,
            "unit": "ns/iter",
            "extra": "iterations: 698606\ncpu: 1004.2122455289534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1031.2430896231215,
            "unit": "ns/iter",
            "extra": "iterations: 681041\ncpu: 1031.2176506260255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1948.461620350392,
            "unit": "ns/iter",
            "extra": "iterations: 358836\ncpu: 1948.4028915716392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5660.3747300005125,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5660.2260000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29881.621611043287,
            "unit": "ns/iter",
            "extra": "iterations: 28106\ncpu: 29881.11435280724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24207.315167896566,
            "unit": "ns/iter",
            "extra": "iterations: 34039\ncpu: 24206.64531860516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23785.070152618966,
            "unit": "ns/iter",
            "extra": "iterations: 34596\ncpu: 23783.943230431225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23718.024936207876,
            "unit": "ns/iter",
            "extra": "iterations: 34488\ncpu: 23717.165390860584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65463.36505011423,
            "unit": "ns/iter",
            "extra": "iterations: 13568\ncpu: 65461.06279481143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568357.5610000844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568326.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 573841.1052631346,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573816.447368419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 571529.2809430108,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 571517.0268500348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566609.5450979971,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 566588.2352941189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331769.7115749441,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 331752.5616698296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 571785.7485226511,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 571765.9225213397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2425221.541450897,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2425148.186528503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1079645.5502336347,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1079609.8130841125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3425497.3935019285,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3425363.8989169607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8722.426682356654,
            "unit": "ns/iter",
            "extra": "iterations: 96873\ncpu: 8722.24562055473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47543.87430694026,
            "unit": "ns/iter",
            "extra": "iterations: 17495\ncpu: 47542.44069734216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37878.46470800423,
            "unit": "ns/iter",
            "extra": "iterations: 22158\ncpu: 37876.942864879464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37417.39378121067,
            "unit": "ns/iter",
            "extra": "iterations: 22030\ncpu: 37416.95415342706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37132.22147349727,
            "unit": "ns/iter",
            "extra": "iterations: 22260\ncpu: 37130.66936208465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77599.17044642707,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 77595.5803571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 607051.9360000617,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607002.9000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 607251.3278008628,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 607231.1203319475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 600906.2040111228,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 600865.6984785628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 597700.8802477638,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 597660.9084652408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348494.7061175373,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 348482.4470211928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589343.8114478131,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 589322.2895622904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2576129.3435754864,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2575986.871508379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1155176.199999972,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 1155121.1392405005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5753.642089999857,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5753.667999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29994.90639063702,
            "unit": "ns/iter",
            "extra": "iterations: 27775\ncpu: 29994.49864986515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23768.587546083032,
            "unit": "ns/iter",
            "extra": "iterations: 34993\ncpu: 23768.067899294147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23669.729005889454,
            "unit": "ns/iter",
            "extra": "iterations: 34986\ncpu: 23667.44697879164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23982.42818163416,
            "unit": "ns/iter",
            "extra": "iterations: 34817\ncpu: 23981.557859666264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63921.69176313933,
            "unit": "ns/iter",
            "extra": "iterations: 13561\ncpu: 63919.46021679822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584488.2500000495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584490.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 586828.013531763,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 586802.1650879591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 584819.9107261593,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 584808.327781482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 584788.8376753284,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 584759.5858383451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338993.8695820385,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 338985.79721362185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 574953.1244147425,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 574943.8795986631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 577.5156378167014,
            "unit": "ns/iter",
            "extra": "iterations: 1214236\ncpu: 577.4929255927178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3345.2508957660402,
            "unit": "ns/iter",
            "extra": "iterations: 209039\ncpu: 3345.075320873134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2735.1104884944402,
            "unit": "ns/iter",
            "extra": "iterations: 278038\ncpu: 2735.0096030039003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2701.075656007972,
            "unit": "ns/iter",
            "extra": "iterations: 268518\ncpu: 2700.9943467477046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2080.883411594614,
            "unit": "ns/iter",
            "extra": "iterations: 336054\ncpu: 2080.791182369508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17720.470301182566,
            "unit": "ns/iter",
            "extra": "iterations: 39345\ncpu: 17719.85004447829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31558.964806867378,
            "unit": "ns/iter",
            "extra": "iterations: 23300\ncpu: 31534.081545064393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7515.41084828923,
            "unit": "ns/iter",
            "extra": "iterations: 92881\ncpu: 7515.02890795739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7480.518465484598,
            "unit": "ns/iter",
            "extra": "iterations: 93580\ncpu: 7480.3237871341325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7446.1364747649395,
            "unit": "ns/iter",
            "extra": "iterations: 94076\ncpu: 7445.788511416256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14287.035820835563,
            "unit": "ns/iter",
            "extra": "iterations: 48938\ncpu: 14285.974089664562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14180.792119482216,
            "unit": "ns/iter",
            "extra": "iterations: 49413\ncpu: 14180.209661424957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5239.033366332048,
            "unit": "ns/iter",
            "extra": "iterations: 133338\ncpu: 5238.798392056236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25781.877708408978,
            "unit": "ns/iter",
            "extra": "iterations: 27230\ncpu: 25781.402864487995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20749.80722034672,
            "unit": "ns/iter",
            "extra": "iterations: 33738\ncpu: 20749.90515146096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20597.17296503052,
            "unit": "ns/iter",
            "extra": "iterations: 34030\ncpu: 20597.034969144817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21287.97700167806,
            "unit": "ns/iter",
            "extra": "iterations: 32785\ncpu: 21288.070764069136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50548.07784905564,
            "unit": "ns/iter",
            "extra": "iterations: 13873\ncpu: 50545.9021120158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160242.39203112703,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160233.73024959755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134051.40286805533,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134041.10898661654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133789.6713246521,
            "unit": "ns/iter",
            "extra": "iterations: 5224\ncpu: 133781.77641654148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134190.87408548553,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134189.27608779498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84403.6529234418,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84402.21820373705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133777.05119388667,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133766.07449856584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5125.497451190899,
            "unit": "ns/iter",
            "extra": "iterations: 136142\ncpu: 5125.163432298623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25779.75835664869,
            "unit": "ns/iter",
            "extra": "iterations: 27164\ncpu: 25778.372110145832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20665.000559927023,
            "unit": "ns/iter",
            "extra": "iterations: 33933\ncpu: 20664.158783485087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21659.189274055163,
            "unit": "ns/iter",
            "extra": "iterations: 32165\ncpu: 21657.882791854707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22287.959356315594,
            "unit": "ns/iter",
            "extra": "iterations: 31444\ncpu: 22286.582495865463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49893.241236819944,
            "unit": "ns/iter",
            "extra": "iterations: 14036\ncpu: 49890.72385294967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158070.92770815172,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 158063.4064458359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130108.70057547002,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 130101.76350473345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129314.55816100577,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129311.4475627761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130588.80044592335,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130389.70642883783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84461.37433797953,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84458.97929706307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130668.3673202713,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130662.72642390049 ns\nthreads: 1"
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
        "date": 1705955610310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1383.9559272820825,
            "unit": "ns/iter",
            "extra": "iterations: 514536\ncpu: 1383.8707106985714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16257.12671430431,
            "unit": "ns/iter",
            "extra": "iterations: 50239\ncpu: 16256.663150142318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34415.025738048265,
            "unit": "ns/iter",
            "extra": "iterations: 24050\ncpu: 34413.34303534305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51089.28933640597,
            "unit": "ns/iter",
            "extra": "iterations: 16486\ncpu: 51087.94128351326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56446.05730000194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56443.28000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71603.95454914967,
            "unit": "ns/iter",
            "extra": "iterations: 12299\ncpu: 71601.7968940564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84805.64392826124,
            "unit": "ns/iter",
            "extra": "iterations: 10203\ncpu: 84805.57679113984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98775.45167497173,
            "unit": "ns/iter",
            "extra": "iterations: 8836\ncpu: 98774.4001810774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113193.83481327107,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 113191.09428049093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1177.5420398441895,
            "unit": "ns/iter",
            "extra": "iterations: 593663\ncpu: 1177.4912702998165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 970.0027237429296,
            "unit": "ns/iter",
            "extra": "iterations: 719598\ncpu: 969.9687881289267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 990.7233008490115,
            "unit": "ns/iter",
            "extra": "iterations: 717064\ncpu: 990.6672207780604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 971.1049213106908,
            "unit": "ns/iter",
            "extra": "iterations: 715155\ncpu: 971.0301962511624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1896.2518881051176,
            "unit": "ns/iter",
            "extra": "iterations: 369418\ncpu: 1896.146641473887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5625.85514000034,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625.803999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30680.835985902762,
            "unit": "ns/iter",
            "extra": "iterations: 26955\ncpu: 30679.57707289931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24396.356332031217,
            "unit": "ns/iter",
            "extra": "iterations: 33828\ncpu: 24395.252453588775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23908.67309750506,
            "unit": "ns/iter",
            "extra": "iterations: 34573\ncpu: 23908.471928961902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23681.843443660735,
            "unit": "ns/iter",
            "extra": "iterations: 34684\ncpu: 23681.089263060756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65197.97069597103,
            "unit": "ns/iter",
            "extra": "iterations: 13650\ncpu: 65196.49084249079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570493.7790000031,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570469.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 568225.375081565,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 568218.2648401831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 571077.6396867308,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 571047.9112271551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566286.6065789199,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 566267.1710526298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335029.5896551908,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 335016.5900383133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567917.2425032648,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567874.9674054759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2403039.742268234,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2402939.948453611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1092904.4681603808,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1092844.575471698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3341628.9711189927,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3341455.595667864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8811.849579020609,
            "unit": "ns/iter",
            "extra": "iterations: 96323\ncpu: 8811.498811291167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47788.77802524478,
            "unit": "ns/iter",
            "extra": "iterations: 17511\ncpu: 47786.5056250356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37788.377500451104,
            "unit": "ns/iter",
            "extra": "iterations: 22196\ncpu: 37787.93926833648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37206.96039470677,
            "unit": "ns/iter",
            "extra": "iterations: 22295\ncpu: 37205.211930926314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37113.652419356185,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 37112.04301075266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78798.53254011595,
            "unit": "ns/iter",
            "extra": "iterations: 11094\ncpu: 78795.1325040558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605478.6160000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605478.5999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604003.0282758443,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 603976.8275862044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595680.2280220134,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 595662.7747252764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 595563.6689607861,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 595552.6496902969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347199.04827030894,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 347185.8004827026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584409.6722408223,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 584388.5618729127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2556248.7060439014,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2556191.2087912085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1176450.6446700771,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1176392.385786805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5958.270040000571,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5958.017000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29898.616668475388,
            "unit": "ns/iter",
            "extra": "iterations: 27681\ncpu: 29897.633756006086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23861.108029872823,
            "unit": "ns/iter",
            "extra": "iterations: 34546\ncpu: 23859.94326405384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23584.275583124276,
            "unit": "ns/iter",
            "extra": "iterations: 34984\ncpu: 23583.266636176588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23380.147010342676,
            "unit": "ns/iter",
            "extra": "iterations: 35188\ncpu: 23379.745936114676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64423.795307746885,
            "unit": "ns/iter",
            "extra": "iterations: 13469\ncpu: 64420.66968594566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587004.5330000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586984.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 593960.909698985,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 593908.628762539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575239.3688415901,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 575209.9201065224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 580105.5528239511,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580074.8172757493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340183.71318129083,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 340165.558562041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573606.8576093984,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 573581.319399084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.1173162505675,
            "unit": "ns/iter",
            "extra": "iterations: 1293623\ncpu: 540.0908147118619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3295.7273971379127,
            "unit": "ns/iter",
            "extra": "iterations: 212639\ncpu: 3295.5953517463954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2551.8609466374974,
            "unit": "ns/iter",
            "extra": "iterations: 273938\ncpu: 2551.678116946179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2551.4748615924755,
            "unit": "ns/iter",
            "extra": "iterations: 275455\ncpu: 2551.3782650523904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2052.9975575315807,
            "unit": "ns/iter",
            "extra": "iterations: 340639\ncpu: 2052.8894225264785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17663.844870661396,
            "unit": "ns/iter",
            "extra": "iterations: 39625\ncpu: 17663.01072555199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31280.493109983792,
            "unit": "ns/iter",
            "extra": "iterations: 23222\ncpu: 31278.91654465541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7640.092663123172,
            "unit": "ns/iter",
            "extra": "iterations: 91633\ncpu: 7639.838267872945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7639.93465113443,
            "unit": "ns/iter",
            "extra": "iterations: 91769\ncpu: 7639.6266713161085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7552.251366827667,
            "unit": "ns/iter",
            "extra": "iterations: 92550\ncpu: 7552.158833063231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14963.157155941566,
            "unit": "ns/iter",
            "extra": "iterations: 46947\ncpu: 14963.137154663767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14172.141009029012,
            "unit": "ns/iter",
            "extra": "iterations: 49394\ncpu: 14170.94586386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5133.968054745755,
            "unit": "ns/iter",
            "extra": "iterations: 135607\ncpu: 5133.687788978521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25716.481507377175,
            "unit": "ns/iter",
            "extra": "iterations: 27173\ncpu: 25714.9229014098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20611.274882497946,
            "unit": "ns/iter",
            "extra": "iterations: 33829\ncpu: 20610.263383487494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20790.026122931085,
            "unit": "ns/iter",
            "extra": "iterations: 33840\ncpu: 20788.463356974098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21522.760700329905,
            "unit": "ns/iter",
            "extra": "iterations: 33013\ncpu: 21521.464271650322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50262.63207005111,
            "unit": "ns/iter",
            "extra": "iterations: 13932\ncpu: 50262.611254664946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158527.05116595083,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 158522.41340276148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133523.10414291814,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133520.90459901065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132905.22268908125,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 132897.40259740304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134472.99270072393,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 134464.98271225512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85174.25411422881,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 85169.32478218761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134093.5531262177,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 134091.503644036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5340.570869373507,
            "unit": "ns/iter",
            "extra": "iterations: 131566\ncpu: 5340.363011720425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25506.21996357232,
            "unit": "ns/iter",
            "extra": "iterations: 27450\ncpu: 25504.797814207363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20601.081764898834,
            "unit": "ns/iter",
            "extra": "iterations: 33951\ncpu: 20600.285705870454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21722.618299562448,
            "unit": "ns/iter",
            "extra": "iterations: 32274\ncpu: 21721.277189068496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22480.7096629361,
            "unit": "ns/iter",
            "extra": "iterations: 31181\ncpu: 22479.602963343434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50833.067939316454,
            "unit": "ns/iter",
            "extra": "iterations: 13777\ncpu: 50830.05008347252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157767.33213401635,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157758.5113559705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129501.96600776154,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 129502.03214483523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129263.32051045474,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129261.51285370714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130228.03345103402,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130222.67236573134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84699.36733953714,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84693.43648011635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130582.61548531947,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130575.20104731666 ns\nthreads: 1"
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
        "date": 1705957162278,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1459.6549813566546,
            "unit": "ns/iter",
            "extra": "iterations: 506619\ncpu: 1459.6006071623844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16317.328406975741,
            "unit": "ns/iter",
            "extra": "iterations: 46214\ncpu: 16317.204743151426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34571.34381796603,
            "unit": "ns/iter",
            "extra": "iterations: 23908\ncpu: 34570.30701020579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51198.421135837794,
            "unit": "ns/iter",
            "extra": "iterations: 16446\ncpu: 51198.309619360334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56745.99650000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56745.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71463.19285830396,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 71463.42118106394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85848.16469427623,
            "unit": "ns/iter",
            "extra": "iterations: 10140\ncpu: 85846.9625246548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99157.91828617007,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 99155.27900897832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115160.59098879548,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 115159.9622285175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1220.396960044183,
            "unit": "ns/iter",
            "extra": "iterations: 574811\ncpu: 1220.366694443911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 989.5713544935608,
            "unit": "ns/iter",
            "extra": "iterations: 705821\ncpu: 989.5636429066298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 980.618836217481,
            "unit": "ns/iter",
            "extra": "iterations: 715632\ncpu: 980.6051154783465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 966.0845591417922,
            "unit": "ns/iter",
            "extra": "iterations: 716398\ncpu: 966.0373144536981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1926.4105660002474,
            "unit": "ns/iter",
            "extra": "iterations: 363922\ncpu: 1926.3232231082527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5290.133680000508,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5290.081000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28844.506173277638,
            "unit": "ns/iter",
            "extra": "iterations: 28024\ncpu: 28844.42977447904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22592.450479672785,
            "unit": "ns/iter",
            "extra": "iterations: 36379\ncpu: 22591.956898210494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22131.437034055747,
            "unit": "ns/iter",
            "extra": "iterations: 37290\ncpu: 22131.22552963257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22546.364854823747,
            "unit": "ns/iter",
            "extra": "iterations: 36335\ncpu: 22545.804320902665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65603.77906185956,
            "unit": "ns/iter",
            "extra": "iterations: 13239\ncpu: 65602.29624594007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 563848.7469999519,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563823.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560770.9735654361,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 560753.6428110908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 573122.7034121233,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 573107.3490813657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 573717.6214765804,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 573679.3959731545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334903.72241314,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 334898.0908743787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568701.1679738818,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568683.3986928101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2401518.062015384,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2401444.961240311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074757.206736308,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1074703.135888501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3345733.601476093,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3345610.7011070144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8656.738996247594,
            "unit": "ns/iter",
            "extra": "iterations: 99148\ncpu: 8656.704119094693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46870.27646311978,
            "unit": "ns/iter",
            "extra": "iterations: 18129\ncpu: 46869.766672182726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37648.17428597217,
            "unit": "ns/iter",
            "extra": "iterations: 22268\ncpu: 37647.161846596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37416.491489935084,
            "unit": "ns/iter",
            "extra": "iterations: 22444\ncpu: 37415.86170023181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37653.73922933375,
            "unit": "ns/iter",
            "extra": "iterations: 21981\ncpu: 37652.47258996396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78792.12097063252,
            "unit": "ns/iter",
            "extra": "iterations: 11168\ncpu: 78789.32664756477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604400.4310000446,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604406.6000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600176.1042817773,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 600150.2762430935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 602461.147404875,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 602447.0588235303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 600208.2638888832,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 600200.7638888893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350519.2698920361,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 350519.39224310295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589369.2784129274,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 589363.2817753863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2565084.0499998317,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2565019.166666676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1109385.6043165883,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1109338.2494004793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5778.162929999553,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5777.954000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30605.52179747797,
            "unit": "ns/iter",
            "extra": "iterations: 24590\ncpu: 30605.298901992774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24094.1841203471,
            "unit": "ns/iter",
            "extra": "iterations: 34434\ncpu: 24093.692280885232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23839.086884019187,
            "unit": "ns/iter",
            "extra": "iterations: 34782\ncpu: 23839.324938186444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24122.642213715415,
            "unit": "ns/iter",
            "extra": "iterations: 34747\ncpu: 24122.589000489388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64454.264204959836,
            "unit": "ns/iter",
            "extra": "iterations: 13622\ncpu: 64454.88180883878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584929.8339999223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584928.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580838.3715991433,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 580843.9283344379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 585661.8338915319,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 585667.2471533832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581417.6936877647,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 581399.0033222594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337374.8790322376,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 337375.8064516132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 572494.4724047132,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 572499.8028909294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 575.6701641079381,
            "unit": "ns/iter",
            "extra": "iterations: 1212982\ncpu: 575.6757313793588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3325.0944605065883,
            "unit": "ns/iter",
            "extra": "iterations: 211337\ncpu: 3325.068965680394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2603.7148971075085,
            "unit": "ns/iter",
            "extra": "iterations: 263333\ncpu: 2603.719245214247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2694.915309307944,
            "unit": "ns/iter",
            "extra": "iterations: 259143\ncpu: 2694.941403009153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2101.217868847642,
            "unit": "ns/iter",
            "extra": "iterations: 332590\ncpu: 2101.2387624402345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17886.210981330976,
            "unit": "ns/iter",
            "extra": "iterations: 39212\ncpu: 17886.08079159442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31624.486849848337,
            "unit": "ns/iter",
            "extra": "iterations: 22091\ncpu: 31624.344755782866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7463.286639902668,
            "unit": "ns/iter",
            "extra": "iterations: 92911\ncpu: 7463.305744206799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7493.424491590717,
            "unit": "ns/iter",
            "extra": "iterations: 93281\ncpu: 7493.500284087992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7524.27646630392,
            "unit": "ns/iter",
            "extra": "iterations: 93364\ncpu: 7524.274881110504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14796.33372686256,
            "unit": "ns/iter",
            "extra": "iterations: 47434\ncpu: 14796.222119154912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14119.150568009743,
            "unit": "ns/iter",
            "extra": "iterations: 49559\ncpu: 14119.29013902626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5261.702507935688,
            "unit": "ns/iter",
            "extra": "iterations: 132938\ncpu: 5261.663331778667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25768.719970248207,
            "unit": "ns/iter",
            "extra": "iterations: 26890\ncpu: 25768.757902566078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20913.00464695235,
            "unit": "ns/iter",
            "extra": "iterations: 33140\ncpu: 20912.341581171062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20632.589157334245,
            "unit": "ns/iter",
            "extra": "iterations: 33940\ncpu: 20632.648791986052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21322.71666717547,
            "unit": "ns/iter",
            "extra": "iterations: 32753\ncpu: 21322.92919732572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50883.133512544286,
            "unit": "ns/iter",
            "extra": "iterations: 13392\ncpu: 50883.66188769384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159885.35452265674,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 159886.96741854562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132134.22775263854,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132132.95625942782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132248.68568190894,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132248.69663770215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133464.41939788006,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133465.110518293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83891.73249970455,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 83892.75468922463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132611.25042492832,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132610.50047214568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5117.614131429644,
            "unit": "ns/iter",
            "extra": "iterations: 136575\ncpu: 5117.5830129965225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27078.764287368387,
            "unit": "ns/iter",
            "extra": "iterations: 25862\ncpu: 27078.81834351564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22142.60547893475,
            "unit": "ns/iter",
            "extra": "iterations: 31831\ncpu: 22142.867016430417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22212.338392082667,
            "unit": "ns/iter",
            "extra": "iterations: 31233\ncpu: 22212.59245029304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22415.063364686226,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 22414.56360543127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50065.22699999323,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50065.20000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154788.76374476653,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 154790.32899094684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129178.9220014615,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 129180.38999264313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130131.8184347002,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 130133.21587537046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130345.91424851019,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130344.49404761681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82631.98482154217,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 82632.96572987031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131295.41105903313,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131295.29522024316 ns\nthreads: 1"
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
        "date": 1705958949946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1355.656644846211,
            "unit": "ns/iter",
            "extra": "iterations: 524888\ncpu: 1355.399437594306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16221.791827534984,
            "unit": "ns/iter",
            "extra": "iterations: 51025\ncpu: 16220.307692307691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34381.23482838602,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 34380.55048913946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50559.12397001671,
            "unit": "ns/iter",
            "extra": "iterations: 16141\ncpu: 50557.964190570594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56743.06939999951,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56742.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71527.40060069853,
            "unit": "ns/iter",
            "extra": "iterations: 12319\ncpu: 71525.06696972153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85070.0680813409,
            "unit": "ns/iter",
            "extra": "iterations: 10179\ncpu: 85069.84969053934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98044.57060616967,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 98041.20103849187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114104.12456976705,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 114101.28408790045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1191.33028711515,
            "unit": "ns/iter",
            "extra": "iterations: 587395\ncpu: 1191.2937631406455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 983.5094133689406,
            "unit": "ns/iter",
            "extra": "iterations: 712816\ncpu: 983.498967475478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 948.8871530027147,
            "unit": "ns/iter",
            "extra": "iterations: 732895\ncpu: 948.8506539135883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 948.0332371841737,
            "unit": "ns/iter",
            "extra": "iterations: 738089\ncpu: 947.9751086928546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1898.2809897689772,
            "unit": "ns/iter",
            "extra": "iterations: 369864\ncpu: 1898.1358012674964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5274.990970000317,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.897999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30142.477291187144,
            "unit": "ns/iter",
            "extra": "iterations: 29548\ncpu: 30141.67456342222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24046.36236985272,
            "unit": "ns/iter",
            "extra": "iterations: 33808\ncpu: 24045.96249408421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23968.743515341524,
            "unit": "ns/iter",
            "extra": "iterations: 34119\ncpu: 23968.697793018506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23909.874795609107,
            "unit": "ns/iter",
            "extra": "iterations: 34248\ncpu: 23908.969866853542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65047.643491012524,
            "unit": "ns/iter",
            "extra": "iterations: 13635\ncpu: 65045.94059405936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562204.7079999675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562177.9000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 569330.6162338293,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 569302.1428571431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 568398.232375981,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 568341.8407310701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567161.6608072434,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 567128.5156249987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 336077.0410057831,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336051.9922630557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568098.0726915874,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 568054.4204322195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2407428.319587459,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2407347.422680416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075522.4803695006,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1075492.8406466541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3353586.8913044184,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3353425.362318843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8647.976452424473,
            "unit": "ns/iter",
            "extra": "iterations: 97802\ncpu: 8647.325208073446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47053.2869857909,
            "unit": "ns/iter",
            "extra": "iterations: 17527\ncpu: 47050.48781879373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37228.22090197155,
            "unit": "ns/iter",
            "extra": "iterations: 22218\ncpu: 37225.515347916284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37163.8157114615,
            "unit": "ns/iter",
            "extra": "iterations: 22264\ncpu: 37161.076176787734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36693.75507394258,
            "unit": "ns/iter",
            "extra": "iterations: 22517\ncpu: 36691.35319980453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78046.63557405457,
            "unit": "ns/iter",
            "extra": "iterations: 11053\ncpu: 78037.19352212055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602395.7300001256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602385.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 602718.7020688495,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 602646.8965517236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 600523.363823976,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 599082.4621733135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 600352.4501385398,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 600324.030470916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 351366.2773985644,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 351341.1079887585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589167.3737306097,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 589158.6323629011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2564669.6712703127,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2564579.281767972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113084.5739856758,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1113045.4653937893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5789.654610000525,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5789.57899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29766.50825391734,
            "unit": "ns/iter",
            "extra": "iterations: 27805\ncpu: 29766.44128753808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23936.24901346781,
            "unit": "ns/iter",
            "extra": "iterations: 34464\ncpu: 23935.584958217114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23974.88512853406,
            "unit": "ns/iter",
            "extra": "iterations: 34778\ncpu: 23974.15032491807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23873.808047841663,
            "unit": "ns/iter",
            "extra": "iterations: 34618\ncpu: 23872.184990467376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63877.278454997184,
            "unit": "ns/iter",
            "extra": "iterations: 13618\ncpu: 63874.1959171682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584290.9630000577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584217.9000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577796.6688919296,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 577795.2603471293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581241.8778877634,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 581236.8316831687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578450.7879789354,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 578430.713342139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335429.15652512416,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 335428.54955989163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565379.848874499,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 565367.2668810288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.317880519548,
            "unit": "ns/iter",
            "extra": "iterations: 1276143\ncpu: 550.3171666498182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3218.717341262372,
            "unit": "ns/iter",
            "extra": "iterations: 215907\ncpu: 3218.6631281060836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2622.9119811815576,
            "unit": "ns/iter",
            "extra": "iterations: 277168\ncpu: 2622.78148992669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2586.9234444333442,
            "unit": "ns/iter",
            "extra": "iterations: 282148\ncpu: 2586.8965932772835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2014.0768246347548,
            "unit": "ns/iter",
            "extra": "iterations: 348508\ncpu: 2014.0739954319486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17758.528921008925,
            "unit": "ns/iter",
            "extra": "iterations: 39435\ncpu: 17758.39229111203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31120.64965713023,
            "unit": "ns/iter",
            "extra": "iterations: 22458\ncpu: 31120.041855908883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7411.6047848512135,
            "unit": "ns/iter",
            "extra": "iterations: 94632\ncpu: 7410.864189703237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7383.6982669429335,
            "unit": "ns/iter",
            "extra": "iterations: 93765\ncpu: 7383.613288540479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7401.660321224941,
            "unit": "ns/iter",
            "extra": "iterations: 94451\ncpu: 7401.1275687923535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14774.955150903386,
            "unit": "ns/iter",
            "extra": "iterations: 47448\ncpu: 14774.711262856215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13955.812862927494,
            "unit": "ns/iter",
            "extra": "iterations: 50113\ncpu: 13955.59036577322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5139.0135956768245,
            "unit": "ns/iter",
            "extra": "iterations: 135852\ncpu: 5138.957100373903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25770.71861263923,
            "unit": "ns/iter",
            "extra": "iterations: 27073\ncpu: 25770.23972223248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20710.155910312333,
            "unit": "ns/iter",
            "extra": "iterations: 33763\ncpu: 20708.799573497654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20815.06863354837,
            "unit": "ns/iter",
            "extra": "iterations: 33759\ncpu: 20814.345804082113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21087.493453629802,
            "unit": "ns/iter",
            "extra": "iterations: 32919\ncpu: 21085.877456787788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50177.38653117937,
            "unit": "ns/iter",
            "extra": "iterations: 13973\ncpu: 50177.24898017527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157624.57409071331,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157617.22047597554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130949.32166915567,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 130946.53817365372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131358.33945641547,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131355.67010309326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132607.64257258744,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132600.0569151959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83430.4783799746,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 83430.31566408505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131961.52981131576,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 131956.35849056483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5296.539588576582,
            "unit": "ns/iter",
            "extra": "iterations: 131932\ncpu: 5296.448928235773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26026.383992569157,
            "unit": "ns/iter",
            "extra": "iterations: 26925\ncpu: 26025.036211699244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21247.634030655492,
            "unit": "ns/iter",
            "extra": "iterations: 32888\ncpu: 21247.397226951896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21995.625833722992,
            "unit": "ns/iter",
            "extra": "iterations: 31935\ncpu: 21995.581650227057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20774.31224617082,
            "unit": "ns/iter",
            "extra": "iterations: 33733\ncpu: 20773.91871461164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49556.779615499356,
            "unit": "ns/iter",
            "extra": "iterations: 14148\ncpu: 49555.81707661878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154532.472871596,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154527.21658579406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128388.67155693039,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 128388.33669539637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129880.64781159892,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129873.75741839861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129089.37946922566,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129087.41245853275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83076.04841381684,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 83074.08854166674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130213.89254508182,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130212.43725599574 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}