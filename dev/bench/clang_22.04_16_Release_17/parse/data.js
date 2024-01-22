window.BENCHMARK_DATA = {
  "lastUpdate": 1705955751777,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 22.04 Release c++-17": [
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
        "date": 1702491026188,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.5590583055549,
            "unit": "ns/iter",
            "extra": "iterations: 1247496\ncpu: 557.5456754971559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5301.757739999857,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5301.706000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10251.913439915808,
            "unit": "ns/iter",
            "extra": "iterations: 81377\ncpu: 10251.814394730694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15294.40281705667,
            "unit": "ns/iter",
            "extra": "iterations: 54454\ncpu: 15293.513791457002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20213.949846243602,
            "unit": "ns/iter",
            "extra": "iterations: 40974\ncpu: 20212.798359935565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25104.417453822694,
            "unit": "ns/iter",
            "extra": "iterations: 33242\ncpu: 25103.077432164133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29850.917116215915,
            "unit": "ns/iter",
            "extra": "iterations: 27991\ncpu: 29848.951448679934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34812.452773054465,
            "unit": "ns/iter",
            "extra": "iterations: 24107\ncpu: 34810.835027170535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39282.92716129993,
            "unit": "ns/iter",
            "extra": "iterations: 21376\ncpu: 39280.95059880238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.2158691735499,
            "unit": "ns/iter",
            "extra": "iterations: 1293867\ncpu: 541.1731654026271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.84510096382206,
            "unit": "ns/iter",
            "extra": "iterations: 1727054\ncpu: 404.82081046684186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.2568421681705,
            "unit": "ns/iter",
            "extra": "iterations: 1706367\ncpu: 410.2412318100385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.6351746502872,
            "unit": "ns/iter",
            "extra": "iterations: 1725305\ncpu: 405.6275267271585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 891.7282622111494,
            "unit": "ns/iter",
            "extra": "iterations: 785901\ncpu: 891.7222398241001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2095.1963857201818,
            "unit": "ns/iter",
            "extra": "iterations: 385471\ncpu: 2095.1651356392595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10450.750699780938,
            "unit": "ns/iter",
            "extra": "iterations: 78596\ncpu: 10450.409690060558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7831.161839477049,
            "unit": "ns/iter",
            "extra": "iterations: 105617\ncpu: 7826.284594336158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8200.825892722609,
            "unit": "ns/iter",
            "extra": "iterations: 99611\ncpu: 8200.710764875352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7964.81027683268,
            "unit": "ns/iter",
            "extra": "iterations: 103709\ncpu: 7964.652055270041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29754.23941993677,
            "unit": "ns/iter",
            "extra": "iterations: 27859\ncpu: 29754.014860547693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254392.37756007718,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 254385.72276640023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197278.91713352365,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 197273.22595704987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198768.56420234585,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 198764.0650034333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197738.9333487681,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 197737.67646378162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106238.45651909325,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 106235.6215888418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195634.70496262092,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 195626.26331293938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5317.733580000095,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5317.608999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29526.19161099224,
            "unit": "ns/iter",
            "extra": "iterations: 29038\ncpu: 29525.84544390107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22455.883217948616,
            "unit": "ns/iter",
            "extra": "iterations: 37266\ncpu: 22455.310470670367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22389.981008598807,
            "unit": "ns/iter",
            "extra": "iterations: 37438\ncpu: 22389.379774560595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22154.33682686173,
            "unit": "ns/iter",
            "extra": "iterations: 37975\ncpu: 22154.048716260706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47280.972286767836,
            "unit": "ns/iter",
            "extra": "iterations: 17645\ncpu: 47281.0881269481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284267.67255521193,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 284261.38801261847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215589.13754085725,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 215584.30978124196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218757.01007809644,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 218752.55731922356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218032.555722517,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 218028.22439268822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119763.22796775942,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 119759.74423130366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205977.68090154426,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 205972.00474495708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 858515.6603773733,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 858501.5274034153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 474699.73527851386,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 474693.58090185764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1951.3562165332664,
            "unit": "ns/iter",
            "extra": "iterations: 408990\ncpu: 1951.328638842022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10313.912854433924,
            "unit": "ns/iter",
            "extra": "iterations: 81186\ncpu: 10313.632892370608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7665.027758864654,
            "unit": "ns/iter",
            "extra": "iterations: 108686\ncpu: 7664.901643265909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8005.354195323676,
            "unit": "ns/iter",
            "extra": "iterations: 106142\ncpu: 8004.916997983803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7588.084202607401,
            "unit": "ns/iter",
            "extra": "iterations: 108999\ncpu: 7587.9274121780645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29416.046281338764,
            "unit": "ns/iter",
            "extra": "iterations: 28478\ncpu: 29414.052953156846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265882.23979122017,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 265866.5029167951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201786.79115365946,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 201774.92020063792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201457.83447176844,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 201446.3342440807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197272.19995492056,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 197257.93507664648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104222.90570513827,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 104217.88637172268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 195339.6271753729,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 195328.2016956719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.01984038849614,
            "unit": "ns/iter",
            "extra": "iterations: 3313796\ncpu: 209.00447704083143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1472.2868268592067,
            "unit": "ns/iter",
            "extra": "iterations: 473805\ncpu: 1472.1630206519508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1131.622060362599,
            "unit": "ns/iter",
            "extra": "iterations: 618231\ncpu: 1131.600162398851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1170.5519892298562,
            "unit": "ns/iter",
            "extra": "iterations: 594979\ncpu: 1170.5529102707833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 873.3350785470211,
            "unit": "ns/iter",
            "extra": "iterations: 803913\ncpu: 873.3095496651955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9415.599194293634,
            "unit": "ns/iter",
            "extra": "iterations: 74717\ncpu: 9415.530602138744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12481.962023511189,
            "unit": "ns/iter",
            "extra": "iterations: 56061\ncpu: 12481.842992454565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2792.336963572556,
            "unit": "ns/iter",
            "extra": "iterations: 249754\ncpu: 2792.319642528269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2771.091403197198,
            "unit": "ns/iter",
            "extra": "iterations: 253350\ncpu: 2771.0590092757157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2837.71227901922,
            "unit": "ns/iter",
            "extra": "iterations: 248098\ncpu: 2837.6177961934427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5510.354895678689,
            "unit": "ns/iter",
            "extra": "iterations: 127970\ncpu: 5510.21723841526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5460.0700617330585,
            "unit": "ns/iter",
            "extra": "iterations: 126674\ncpu: 5459.908900011053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1995.3659699966524,
            "unit": "ns/iter",
            "extra": "iterations: 348228\ncpu: 1995.3659671249807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10215.090805869662,
            "unit": "ns/iter",
            "extra": "iterations: 68696\ncpu: 10214.692267380957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8093.9867881495375,
            "unit": "ns/iter",
            "extra": "iterations: 86816\ncpu: 8093.739633247348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8185.282078063085,
            "unit": "ns/iter",
            "extra": "iterations: 85214\ncpu: 8184.996596803404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8070.280628031403,
            "unit": "ns/iter",
            "extra": "iterations: 86620\ncpu: 8070.011544677893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18378.254892687637,
            "unit": "ns/iter",
            "extra": "iterations: 38067\ncpu: 18378.2830272939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56406.89965819938,
            "unit": "ns/iter",
            "extra": "iterations: 12288\ncpu: 56403.784179687624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45945.39758879748,
            "unit": "ns/iter",
            "extra": "iterations: 15428\ncpu: 45944.451646356574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45320.274752955454,
            "unit": "ns/iter",
            "extra": "iterations: 15483\ncpu: 45319.6731899502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45262.92738819712,
            "unit": "ns/iter",
            "extra": "iterations: 15273\ncpu: 45261.02271983194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26588.558720636724,
            "unit": "ns/iter",
            "extra": "iterations: 26013\ncpu: 26588.044439318906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44423.4191452732,
            "unit": "ns/iter",
            "extra": "iterations: 15701\ncpu: 44421.762945035334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1921.7418679923585,
            "unit": "ns/iter",
            "extra": "iterations: 366115\ncpu: 1921.7185856902863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9988.5900036217,
            "unit": "ns/iter",
            "extra": "iterations: 69025\ncpu: 9988.149221296788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8229.053400741215,
            "unit": "ns/iter",
            "extra": "iterations: 85055\ncpu: 8223.442478396368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8139.862130341866,
            "unit": "ns/iter",
            "extra": "iterations: 85958\ncpu: 8139.293608506483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8137.327614883165,
            "unit": "ns/iter",
            "extra": "iterations: 85979\ncpu: 8136.653136230839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18412.33326291263,
            "unit": "ns/iter",
            "extra": "iterations: 37868\ncpu: 18411.421252772867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55582.65877681131,
            "unit": "ns/iter",
            "extra": "iterations: 12590\ncpu: 55578.73709293073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44178.08529505479,
            "unit": "ns/iter",
            "extra": "iterations: 15675\ncpu: 44174.47527910654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43654.01246960562,
            "unit": "ns/iter",
            "extra": "iterations: 16039\ncpu: 43651.917201819815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44008.091096916585,
            "unit": "ns/iter",
            "extra": "iterations: 15972\ncpu: 44008.25820185359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26256.08047906563,
            "unit": "ns/iter",
            "extra": "iterations: 26802\ncpu: 26255.30557421087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43641.05947082223,
            "unit": "ns/iter",
            "extra": "iterations: 16176\ncpu: 43639.70697329338 ns\nthreads: 1"
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
        "date": 1702493671689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.3883956550296,
            "unit": "ns/iter",
            "extra": "iterations: 1258925\ncpu: 554.3504974482197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5230.956450000122,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5230.473999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10244.812261953197,
            "unit": "ns/iter",
            "extra": "iterations: 81129\ncpu: 10243.948526420887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15259.771383009398,
            "unit": "ns/iter",
            "extra": "iterations: 55184\ncpu: 15258.788779356335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20220.482643477255,
            "unit": "ns/iter",
            "extra": "iterations: 41627\ncpu: 20219.242318687397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24829.565036327465,
            "unit": "ns/iter",
            "extra": "iterations: 33858\ncpu: 24827.59761356252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29860.961516223662,
            "unit": "ns/iter",
            "extra": "iterations: 27674\ncpu: 29859.15660909157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35114.19827549881,
            "unit": "ns/iter",
            "extra": "iterations: 23891\ncpu: 35112.37704574942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39506.4388159747,
            "unit": "ns/iter",
            "extra": "iterations: 21182\ncpu: 39503.86176942687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 524.1406252955453,
            "unit": "ns/iter",
            "extra": "iterations: 1268904\ncpu: 524.0993014443962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 396.31486857659064,
            "unit": "ns/iter",
            "extra": "iterations: 1764298\ncpu: 396.2912161097506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 401.89156068216965,
            "unit": "ns/iter",
            "extra": "iterations: 1739406\ncpu: 401.86649925319244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.42354754638455,
            "unit": "ns/iter",
            "extra": "iterations: 1761984\ncpu: 396.4252229305147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 860.6442667282518,
            "unit": "ns/iter",
            "extra": "iterations: 805404\ncpu: 860.6376427234032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1948.994605634919,
            "unit": "ns/iter",
            "extra": "iterations: 407833\ncpu: 1948.9845108169286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10212.762524929774,
            "unit": "ns/iter",
            "extra": "iterations: 83234\ncpu: 10212.72076314967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7853.58986271685,
            "unit": "ns/iter",
            "extra": "iterations: 105038\ncpu: 7853.55966412157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7955.133077331001,
            "unit": "ns/iter",
            "extra": "iterations: 105728\ncpu: 7954.996784200971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7699.3479268129395,
            "unit": "ns/iter",
            "extra": "iterations: 109638\ncpu: 7699.334172458472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30236.950439126867,
            "unit": "ns/iter",
            "extra": "iterations: 27441\ncpu: 30236.40902299487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 264833.83719529846,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 264827.5654529041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 191957.46654569582,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 191954.8423678838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194397.83423789265,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 194395.4319312526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194585.6697812322,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 194582.79398359184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102973.1054060454,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 102972.7809254016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194143.63352523654,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 194142.13906111673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5282.903909999277,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5282.725999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28931.941963043548,
            "unit": "ns/iter",
            "extra": "iterations: 28792\ncpu: 28931.595582106216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22285.013505432475,
            "unit": "ns/iter",
            "extra": "iterations: 36800\ncpu: 22284.72826086953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22074.956891541166,
            "unit": "ns/iter",
            "extra": "iterations: 37858\ncpu: 22074.620951978453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21613.225208117306,
            "unit": "ns/iter",
            "extra": "iterations: 38440\ncpu: 21612.393340270602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46695.340065073375,
            "unit": "ns/iter",
            "extra": "iterations: 17826\ncpu: 46694.4799730731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275069.94435613154,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 275056.9157392689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 211561.65451011027,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 211549.28276197377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 211433.49271135515,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 211422.81341107938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214669.45641647064,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 214661.3317191285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117252.40294078161,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 117248.6982328339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206409.3925407808,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 206401.58508158653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844347.537234095,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 844298.6702127625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 470390.63737425295,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 470364.3197458973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1950.6114476280063,
            "unit": "ns/iter",
            "extra": "iterations: 411404\ncpu: 1950.4666945386987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10304.99720795268,
            "unit": "ns/iter",
            "extra": "iterations: 80586\ncpu: 10304.533045442085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7643.743847342324,
            "unit": "ns/iter",
            "extra": "iterations: 102923\ncpu: 7643.454815736075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7548.622289396889,
            "unit": "ns/iter",
            "extra": "iterations: 110492\ncpu: 7548.517539731383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7230.752787275133,
            "unit": "ns/iter",
            "extra": "iterations: 114359\ncpu: 7230.779387717626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29174.04965842524,
            "unit": "ns/iter",
            "extra": "iterations: 28837\ncpu: 29173.644970003894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268138.6219660329,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 268137.46966019424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199474.10171791294,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 199465.2124773955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200095.401223381,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 200082.6461259635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194611.78946183983,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 194601.73384372858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102330.71425340348,
            "unit": "ns/iter",
            "extra": "iterations: 8840\ncpu: 102324.07239819044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190125.90920937472,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 190115.63857515188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.0510875483281,
            "unit": "ns/iter",
            "extra": "iterations: 3394056\ncpu: 206.03225167763975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1461.9553627581527,
            "unit": "ns/iter",
            "extra": "iterations: 480182\ncpu: 1461.9286020717182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.790448185171,
            "unit": "ns/iter",
            "extra": "iterations: 592746\ncpu: 1178.7642599022197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1170.4683365374049,
            "unit": "ns/iter",
            "extra": "iterations: 599208\ncpu: 1170.4072709309633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 859.3790063668055,
            "unit": "ns/iter",
            "extra": "iterations: 811084\ncpu: 859.3309694187063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9290.052151920174,
            "unit": "ns/iter",
            "extra": "iterations: 74724\ncpu: 9289.293935014228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12558.94979923341,
            "unit": "ns/iter",
            "extra": "iterations: 56035\ncpu: 12558.318907825538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2758.6907647722383,
            "unit": "ns/iter",
            "extra": "iterations: 252219\ncpu: 2758.4369139517635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2676.5685444607075,
            "unit": "ns/iter",
            "extra": "iterations: 260838\ncpu: 2676.32668552893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2699.8926609197288,
            "unit": "ns/iter",
            "extra": "iterations: 258452\ncpu: 2699.7868076083773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5316.681269627897,
            "unit": "ns/iter",
            "extra": "iterations: 133740\ncpu: 5316.554508748318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5155.162140437966,
            "unit": "ns/iter",
            "extra": "iterations: 134365\ncpu: 5154.7344918691615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1934.6375001739086,
            "unit": "ns/iter",
            "extra": "iterations: 359785\ncpu: 1934.430562697173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10156.858965486454,
            "unit": "ns/iter",
            "extra": "iterations: 69366\ncpu: 10156.784303549372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8174.451138256326,
            "unit": "ns/iter",
            "extra": "iterations: 86448\ncpu: 8174.256200259226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8020.217755057731,
            "unit": "ns/iter",
            "extra": "iterations: 86657\ncpu: 8019.937223767367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7964.96350988248,
            "unit": "ns/iter",
            "extra": "iterations: 87832\ncpu: 7964.903452044714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18148.70345079142,
            "unit": "ns/iter",
            "extra": "iterations: 38368\ncpu: 18148.313698915757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55631.63123661268,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 55630.97485523959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44287.60488332033,
            "unit": "ns/iter",
            "extra": "iterations: 15727\ncpu: 44287.740827875146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44236.94161827859,
            "unit": "ns/iter",
            "extra": "iterations: 15844\ncpu: 44236.531178995036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44811.01285347617,
            "unit": "ns/iter",
            "extra": "iterations: 15560\ncpu: 44811.30462725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26004.133661900225,
            "unit": "ns/iter",
            "extra": "iterations: 26986\ncpu: 26003.1831319942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43519.07691829268,
            "unit": "ns/iter",
            "extra": "iterations: 16069\ncpu: 43518.333437053465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1871.581816673173,
            "unit": "ns/iter",
            "extra": "iterations: 373573\ncpu: 1871.5731597304944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9882.273061898155,
            "unit": "ns/iter",
            "extra": "iterations: 70907\ncpu: 9882.21050107889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7880.6047283985645,
            "unit": "ns/iter",
            "extra": "iterations: 88825\ncpu: 7880.5505206868065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8141.212897073485,
            "unit": "ns/iter",
            "extra": "iterations: 86004\ncpu: 8141.055067206175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8133.545654501339,
            "unit": "ns/iter",
            "extra": "iterations: 85928\ncpu: 8133.678195698713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18266.603049859685,
            "unit": "ns/iter",
            "extra": "iterations: 38428\ncpu: 18266.71957947335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55061.92865617602,
            "unit": "ns/iter",
            "extra": "iterations: 12643\ncpu: 55060.08858656953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43230.60129136255,
            "unit": "ns/iter",
            "extra": "iterations: 16107\ncpu: 43230.24771838283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44257.66813227518,
            "unit": "ns/iter",
            "extra": "iterations: 16148\ncpu: 44254.97275204351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42597.38702749261,
            "unit": "ns/iter",
            "extra": "iterations: 16296\ncpu: 42594.507854687785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25805.133886604483,
            "unit": "ns/iter",
            "extra": "iterations: 27232\ncpu: 25803.830052879333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42751.168271539726,
            "unit": "ns/iter",
            "extra": "iterations: 16616\ncpu: 42748.17043813211 ns\nthreads: 1"
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
        "date": 1702504694369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 550.4155205487938,
            "unit": "ns/iter",
            "extra": "iterations: 1255252\ncpu: 550.3895632112119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5342.750180000166,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5342.767999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10477.104219725665,
            "unit": "ns/iter",
            "extra": "iterations: 80100\ncpu: 10477.048689138577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15598.405745624243,
            "unit": "ns/iter",
            "extra": "iterations: 54337\ncpu: 15597.872536209214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20564.884470069934,
            "unit": "ns/iter",
            "extra": "iterations: 40760\ncpu: 20564.60745829244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25102.286696897278,
            "unit": "ns/iter",
            "extra": "iterations: 32857\ncpu: 25101.372614663545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29962.72816750283,
            "unit": "ns/iter",
            "extra": "iterations: 27940\ncpu: 29961.728704366513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34735.83986257034,
            "unit": "ns/iter",
            "extra": "iterations: 23867\ncpu: 34735.63916705073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39644.29915639498,
            "unit": "ns/iter",
            "extra": "iterations: 21574\ncpu: 39642.40752757945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.2478647751723,
            "unit": "ns/iter",
            "extra": "iterations: 1287101\ncpu: 542.2429164455627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.8408765849491,
            "unit": "ns/iter",
            "extra": "iterations: 1703885\ncpu: 409.81873776692635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.6049712611503,
            "unit": "ns/iter",
            "extra": "iterations: 1678045\ncpu: 409.5849038613384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.6264937010334,
            "unit": "ns/iter",
            "extra": "iterations: 1724659\ncpu: 405.6085869728444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 860.6728807898494,
            "unit": "ns/iter",
            "extra": "iterations: 817439\ncpu: 860.6518651544641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2042.6446360299308,
            "unit": "ns/iter",
            "extra": "iterations: 389730\ncpu: 2042.5679316449832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10050.848019213721,
            "unit": "ns/iter",
            "extra": "iterations: 81609\ncpu: 10050.387824872272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7546.284380676887,
            "unit": "ns/iter",
            "extra": "iterations: 107335\ncpu: 7545.831275911874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7774.973380263225,
            "unit": "ns/iter",
            "extra": "iterations: 105974\ncpu: 7774.819295298878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7710.6968042557155,
            "unit": "ns/iter",
            "extra": "iterations: 107518\ncpu: 7710.7228557078715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29638.080909650234,
            "unit": "ns/iter",
            "extra": "iterations: 27747\ncpu: 29637.027426388377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249284.5218642008,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 249277.2151898742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197392.18988763567,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 197389.93258426973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195777.63304623996,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 195766.90843155034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197269.55706521272,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 197267.119565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104335.77567662451,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 104331.97021628634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191850.10085884013,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 191846.53160096862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5107.454810000718,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5107.346000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28749.673928126645,
            "unit": "ns/iter",
            "extra": "iterations: 28828\ncpu: 28749.021784376302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22274.665855175914,
            "unit": "ns/iter",
            "extra": "iterations: 36969\ncpu: 22274.332548892275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22282.42847299485,
            "unit": "ns/iter",
            "extra": "iterations: 37734\ncpu: 22281.93141463929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22069.065892689443,
            "unit": "ns/iter",
            "extra": "iterations: 38244\ncpu: 22069.142872084492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48134.82840987631,
            "unit": "ns/iter",
            "extra": "iterations: 17332\ncpu: 48134.60650819288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277119.77195199527,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 277108.87555274717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214511.8837095384,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 214510.72129538746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 213083.03199200353,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 213075.5311172205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213512.31576356324,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 213503.0541871913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118088.25571896014,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 118083.38779956408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206008.43467043652,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 206005.8409570737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 841323.7210338098,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 841296.3458110557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 472325.2236981541,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 472317.48140276456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1938.341661148748,
            "unit": "ns/iter",
            "extra": "iterations: 415315\ncpu: 1938.305382661353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9930.740252286867,
            "unit": "ns/iter",
            "extra": "iterations: 83635\ncpu: 9930.765827703723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7818.0608912286525,
            "unit": "ns/iter",
            "extra": "iterations: 106370\ncpu: 7817.8349158596975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7742.3876471680605,
            "unit": "ns/iter",
            "extra": "iterations: 107020\ncpu: 7742.198654457115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7630.6355465510505,
            "unit": "ns/iter",
            "extra": "iterations: 108590\ncpu: 7630.401510267984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29305.387718482536,
            "unit": "ns/iter",
            "extra": "iterations: 27863\ncpu: 29304.217062053434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267821.0134368312,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 267810.0627052843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200473.39752972996,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 200469.00731930402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198086.74683544075,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 198080.8996383369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195640.9389024546,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 195638.59142412743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101962.12364600162,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 101959.35699469942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188962.22477162507,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 188959.27342256176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.83408652636592,
            "unit": "ns/iter",
            "extra": "iterations: 3407493\ncpu: 204.83006127965703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1362.4563375492733,
            "unit": "ns/iter",
            "extra": "iterations: 511641\ncpu: 1362.4076256593976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1106.38537940992,
            "unit": "ns/iter",
            "extra": "iterations: 631876\ncpu: 1106.340009748741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1085.9350390588072,
            "unit": "ns/iter",
            "extra": "iterations: 638907\ncpu: 1085.874313475978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 856.6227841785235,
            "unit": "ns/iter",
            "extra": "iterations: 817699\ncpu: 856.6119073155251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9431.928515697893,
            "unit": "ns/iter",
            "extra": "iterations: 74338\ncpu: 9431.858538028944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11574.913219432672,
            "unit": "ns/iter",
            "extra": "iterations: 61281\ncpu: 11574.631615019345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2745.2249959215706,
            "unit": "ns/iter",
            "extra": "iterations: 251329\ncpu: 2745.067620529268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2731.8182436604757,
            "unit": "ns/iter",
            "extra": "iterations: 254313\ncpu: 2731.692441990795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2774.6277066261546,
            "unit": "ns/iter",
            "extra": "iterations: 255715\ncpu: 2774.5063840603702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5319.98283887255,
            "unit": "ns/iter",
            "extra": "iterations: 131052\ncpu: 5319.849372768079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5413.77979601445,
            "unit": "ns/iter",
            "extra": "iterations: 131578\ncpu: 5413.598017905727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1955.2664567813392,
            "unit": "ns/iter",
            "extra": "iterations: 359244\ncpu: 1955.1947979646236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10039.241840227876,
            "unit": "ns/iter",
            "extra": "iterations: 70100\ncpu: 10039.078459343844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8011.018821120124,
            "unit": "ns/iter",
            "extra": "iterations: 87880\ncpu: 8010.71005917145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8001.292677635032,
            "unit": "ns/iter",
            "extra": "iterations: 87581\ncpu: 8001.02191114514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7936.207761384573,
            "unit": "ns/iter",
            "extra": "iterations: 87639\ncpu: 7935.775168589332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18257.529468826255,
            "unit": "ns/iter",
            "extra": "iterations: 38142\ncpu: 18256.599024697214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56082.070065233514,
            "unit": "ns/iter",
            "extra": "iterations: 12417\ncpu: 56081.162921801595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43890.8425329759,
            "unit": "ns/iter",
            "extra": "iterations: 15997\ncpu: 43889.660561355246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44159.13269545867,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 44157.29573209076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44506.316479048815,
            "unit": "ns/iter",
            "extra": "iterations: 15723\ncpu: 44503.79062519895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26000.655610628553,
            "unit": "ns/iter",
            "extra": "iterations: 26833\ncpu: 25998.900607460713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43895.58630136555,
            "unit": "ns/iter",
            "extra": "iterations: 16060\ncpu: 43895.697384806546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1918.660033126635,
            "unit": "ns/iter",
            "extra": "iterations: 365265\ncpu: 1918.600194379443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10120.903807527326,
            "unit": "ns/iter",
            "extra": "iterations: 69205\ncpu: 10120.62134238859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8081.073601420295,
            "unit": "ns/iter",
            "extra": "iterations: 85569\ncpu: 8080.851710315652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8069.149512899315,
            "unit": "ns/iter",
            "extra": "iterations: 86327\ncpu: 8069.171869751046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8050.588374933853,
            "unit": "ns/iter",
            "extra": "iterations: 86778\ncpu: 8050.608449146153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18300.136001254123,
            "unit": "ns/iter",
            "extra": "iterations: 38257\ncpu: 18299.29424680424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54755.13116051404,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 54752.298077684085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43271.75286283411,
            "unit": "ns/iter",
            "extra": "iterations: 16068\ncpu: 43270.23898431703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43230.82762662099,
            "unit": "ns/iter",
            "extra": "iterations: 16209\ncpu: 43230.42754025535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43601.934542297786,
            "unit": "ns/iter",
            "extra": "iterations: 16102\ncpu: 43601.59607502202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25587.32806425662,
            "unit": "ns/iter",
            "extra": "iterations: 27266\ncpu: 25587.189173329254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42987.8897103412,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 42987.595442976846 ns\nthreads: 1"
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
        "date": 1705576343400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 551.2660251167808,
            "unit": "ns/iter",
            "extra": "iterations: 1271816\ncpu: 551.2456990633865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5307.258179999508,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5307.107000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10236.178025634343,
            "unit": "ns/iter",
            "extra": "iterations: 81140\ncpu: 10235.931722947993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15277.347164261619,
            "unit": "ns/iter",
            "extra": "iterations: 54395\ncpu: 15276.85816711095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20207.61195348477,
            "unit": "ns/iter",
            "extra": "iterations: 41879\ncpu: 20207.447646791945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24774.98129809619,
            "unit": "ns/iter",
            "extra": "iterations: 33526\ncpu: 24773.384835649933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29271.751807567267,
            "unit": "ns/iter",
            "extra": "iterations: 28353\ncpu: 29271.279935103856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34604.30124413637,
            "unit": "ns/iter",
            "extra": "iterations: 24515\ncpu: 34602.77381195187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38756.75431736477,
            "unit": "ns/iter",
            "extra": "iterations: 21483\ncpu: 38756.29567565055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.6466680297756,
            "unit": "ns/iter",
            "extra": "iterations: 1310756\ncpu: 534.6508427197746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 395.95727875722775,
            "unit": "ns/iter",
            "extra": "iterations: 1724271\ncpu: 395.9602057913172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.6126980204758,
            "unit": "ns/iter",
            "extra": "iterations: 1707967\ncpu: 406.6086756945539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.17712515901445,
            "unit": "ns/iter",
            "extra": "iterations: 1726412\ncpu: 403.16309200816517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 862.8298566987025,
            "unit": "ns/iter",
            "extra": "iterations: 801877\ncpu: 862.8213553949031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2067.6627570520686,
            "unit": "ns/iter",
            "extra": "iterations: 387762\ncpu: 2067.6649594338814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10136.064207481773,
            "unit": "ns/iter",
            "extra": "iterations: 80894\ncpu: 10136.064479442215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7872.16654646944,
            "unit": "ns/iter",
            "extra": "iterations: 103995\ncpu: 7872.045771431307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8076.153844663289,
            "unit": "ns/iter",
            "extra": "iterations: 103221\ncpu: 8076.214142471008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7694.996921798232,
            "unit": "ns/iter",
            "extra": "iterations: 105906\ncpu: 7695.055993050456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29759.106054596938,
            "unit": "ns/iter",
            "extra": "iterations: 27731\ncpu: 29758.580649814347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250589.18278950502,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 250585.33063817507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209710.14369370157,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 209710.20270270345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201245.62604458974,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 201245.82172701924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201745.01920852152,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 201743.67044665612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106269.62876009352,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 106268.41526045509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191761.1496431697,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 191760.01338090966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5125.402109999868,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5125.442000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28071.150713107054,
            "unit": "ns/iter",
            "extra": "iterations: 29659\ncpu: 28071.212785326512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22257.226744955653,
            "unit": "ns/iter",
            "extra": "iterations: 37809\ncpu: 22256.856833029196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22179.130506182537,
            "unit": "ns/iter",
            "extra": "iterations: 37753\ncpu: 22179.291711916954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21958.38929793643,
            "unit": "ns/iter",
            "extra": "iterations: 38572\ncpu: 21958.555428808493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46451.20855524196,
            "unit": "ns/iter",
            "extra": "iterations: 17650\ncpu: 46450.39093484413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277271.2340759072,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 277266.7712582368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214578.2551020383,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 214577.12792434107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 213111.76926927484,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 213110.81081081176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 210869.75054757035,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 210866.24482842552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117018.24134199112,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 117017.70833333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201337.70211284375,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 201337.03273740335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 852748.6618704528,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 852749.0107913642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478216.1273713028,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 478209.05149051506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1935.8453965597382,
            "unit": "ns/iter",
            "extra": "iterations: 411388\ncpu: 1935.8603070580546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9997.230446446058,
            "unit": "ns/iter",
            "extra": "iterations: 81264\ncpu: 9997.238629651521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7835.155206901465,
            "unit": "ns/iter",
            "extra": "iterations: 105485\ncpu: 7834.9746409442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8043.816289840306,
            "unit": "ns/iter",
            "extra": "iterations: 102346\ncpu: 8043.7085963301015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7484.675976580309,
            "unit": "ns/iter",
            "extra": "iterations: 109310\ncpu: 7484.674778153879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29257.062232134278,
            "unit": "ns/iter",
            "extra": "iterations: 28699\ncpu: 29257.28422593115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268461.758148043,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 268463.75266524474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200564.68562257016,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 200562.5773905067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195793.5579485048,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 195793.42806394302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197221.3845462853,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 197222.79874213846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102774.61490755327,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 102773.90592089863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190655.44711539827,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 190651.0708041952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 203.90920215578112,
            "unit": "ns/iter",
            "extra": "iterations: 3370069\ncpu: 203.91086948071438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1431.7874521051285,
            "unit": "ns/iter",
            "extra": "iterations: 488831\ncpu: 1431.798106093925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1175.1684684609088,
            "unit": "ns/iter",
            "extra": "iterations: 592835\ncpu: 1175.1595300547372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1045.4112044443077,
            "unit": "ns/iter",
            "extra": "iterations: 671430\ncpu: 1045.4111374231206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 866.3114091170061,
            "unit": "ns/iter",
            "extra": "iterations: 793795\ncpu: 866.3021309028106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9229.689873835334,
            "unit": "ns/iter",
            "extra": "iterations: 75695\ncpu: 9229.760221943294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12113.028754437211,
            "unit": "ns/iter",
            "extra": "iterations: 57452\ncpu: 12113.125739748035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2690.2446976213723,
            "unit": "ns/iter",
            "extra": "iterations: 256913\ncpu: 2690.265965521418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2701.598046194996,
            "unit": "ns/iter",
            "extra": "iterations: 258470\ncpu: 2701.559175146063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2715.1777958929833,
            "unit": "ns/iter",
            "extra": "iterations: 257610\ncpu: 2715.1985559566806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5390.0551504351915,
            "unit": "ns/iter",
            "extra": "iterations: 129591\ncpu: 5390.044061701836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5223.4256606931385,
            "unit": "ns/iter",
            "extra": "iterations: 133496\ncpu: 5223.466620722685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1950.4033809481646,
            "unit": "ns/iter",
            "extra": "iterations: 358361\ncpu: 1950.4019689642412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10370.91442955482,
            "unit": "ns/iter",
            "extra": "iterations: 67535\ncpu: 10370.5012215889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8197.813376457167,
            "unit": "ns/iter",
            "extra": "iterations: 85643\ncpu: 8197.877234566837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8102.978167053964,
            "unit": "ns/iter",
            "extra": "iterations: 86200\ncpu: 8102.981438515045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8017.0375547649255,
            "unit": "ns/iter",
            "extra": "iterations: 87419\ncpu: 8017.095825850184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18328.999242544814,
            "unit": "ns/iter",
            "extra": "iterations: 38286\ncpu: 18329.135976597267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55004.31226617458,
            "unit": "ns/iter",
            "extra": "iterations: 12563\ncpu: 55003.573987104784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43791.8388996762,
            "unit": "ns/iter",
            "extra": "iterations: 15959\ncpu: 43792.16116298008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43782.68520717054,
            "unit": "ns/iter",
            "extra": "iterations: 16001\ncpu: 43783.01356165291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44433.221640053554,
            "unit": "ns/iter",
            "extra": "iterations: 15841\ncpu: 44432.35275550793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26093.956879772788,
            "unit": "ns/iter",
            "extra": "iterations: 26716\ncpu: 26092.60368318621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43737.846538991624,
            "unit": "ns/iter",
            "extra": "iterations: 15978\ncpu: 43735.29227688156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1863.061932061481,
            "unit": "ns/iter",
            "extra": "iterations: 376251\ncpu: 1863.0238856508183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9775.92717212144,
            "unit": "ns/iter",
            "extra": "iterations: 71566\ncpu: 9775.805550121635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8079.0389250585495,
            "unit": "ns/iter",
            "extra": "iterations: 86628\ncpu: 8078.877499191883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7999.5964368350815,
            "unit": "ns/iter",
            "extra": "iterations: 87731\ncpu: 7999.237441725332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8010.568712612894,
            "unit": "ns/iter",
            "extra": "iterations: 87262\ncpu: 8010.151039398576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18194.713432139248,
            "unit": "ns/iter",
            "extra": "iterations: 38661\ncpu: 18194.29657794663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54878.67536049063,
            "unit": "ns/iter",
            "extra": "iterations: 12691\ncpu: 54875.35261208763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43207.00767802018,
            "unit": "ns/iter",
            "extra": "iterations: 16150\ncpu: 43205.808049535175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43158.7684989471,
            "unit": "ns/iter",
            "extra": "iterations: 16082\ncpu: 43157.244123865414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43116.27619516037,
            "unit": "ns/iter",
            "extra": "iterations: 16253\ncpu: 43114.10201193616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25867.621103821773,
            "unit": "ns/iter",
            "extra": "iterations: 27142\ncpu: 25866.07840247604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43053.26439917645,
            "unit": "ns/iter",
            "extra": "iterations: 16494\ncpu: 43052.59488298785 ns\nthreads: 1"
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
        "date": 1705774157169,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 573.1867387265902,
            "unit": "ns/iter",
            "extra": "iterations: 1220652\ncpu: 573.1651609140033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5273.359830000572,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5273.212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10243.859830006819,
            "unit": "ns/iter",
            "extra": "iterations: 81180\ncpu: 10243.541512687852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15323.200821692584,
            "unit": "ns/iter",
            "extra": "iterations: 54765\ncpu: 15322.894184241764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20066.200310786204,
            "unit": "ns/iter",
            "extra": "iterations: 41186\ncpu: 20065.830622056037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25773.80604708909,
            "unit": "ns/iter",
            "extra": "iterations: 33173\ncpu: 25773.08654628763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30213.51477315374,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 30212.30221222347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35117.364581573274,
            "unit": "ns/iter",
            "extra": "iterations: 23660\ncpu: 35116.5215553677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40028.966882681576,
            "unit": "ns/iter",
            "extra": "iterations: 20986\ncpu: 40026.71304679309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 560.6539688772729,
            "unit": "ns/iter",
            "extra": "iterations: 1273345\ncpu: 560.6375334257418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 416.76922598096064,
            "unit": "ns/iter",
            "extra": "iterations: 1654675\ncpu: 416.754589269796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 421.51898556765866,
            "unit": "ns/iter",
            "extra": "iterations: 1669584\ncpu: 421.5136225550801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.8186100609054,
            "unit": "ns/iter",
            "extra": "iterations: 1680865\ncpu: 412.800135644445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.5529221035123,
            "unit": "ns/iter",
            "extra": "iterations: 787686\ncpu: 883.5421728963063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1948.849906709123,
            "unit": "ns/iter",
            "extra": "iterations: 405721\ncpu: 1948.7916573211637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10091.645739136917,
            "unit": "ns/iter",
            "extra": "iterations: 81169\ncpu: 10091.213394276137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7733.327886086852,
            "unit": "ns/iter",
            "extra": "iterations: 108434\ncpu: 7732.866075216272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7752.096849145336,
            "unit": "ns/iter",
            "extra": "iterations: 105876\ncpu: 7751.762439079673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7661.139324476256,
            "unit": "ns/iter",
            "extra": "iterations: 110196\ncpu: 7660.649206867765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29237.619756091568,
            "unit": "ns/iter",
            "extra": "iterations: 27961\ncpu: 29235.65323128655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251809.82132133615,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 251793.81381381428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195650.8270985516,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 195639.75821167885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194436.44928207502,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 194425.1273737845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200086.4807736066,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 200076.45051194506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103970.99075171586,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 103964.47711643371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191005.34323792034,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 190994.42866506497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5198.224860000664,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5197.880999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29114.88532284217,
            "unit": "ns/iter",
            "extra": "iterations: 28977\ncpu: 29113.593539703845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22267.047234900965,
            "unit": "ns/iter",
            "extra": "iterations: 37684\ncpu: 22265.595478187042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22240.91808358471,
            "unit": "ns/iter",
            "extra": "iterations: 37758\ncpu: 22239.535992372406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21894.58860412483,
            "unit": "ns/iter",
            "extra": "iterations: 38277\ncpu: 21893.05588212242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47011.84711423542,
            "unit": "ns/iter",
            "extra": "iterations: 17621\ncpu: 47009.69297996704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 280774.40418118035,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 280762.9711751658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 212552.6051803339,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 212551.51295086063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214679.27908689776,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 214670.42218949497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217318.25386920196,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 217307.78831752465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118164.27012740744,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 118157.26484141979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210794.55623965457,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 210786.24200804994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850147.7070524185,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 850083.8155515409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477508.5167748389,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 477473.7012987034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1945.0559110582128,
            "unit": "ns/iter",
            "extra": "iterations: 409436\ncpu: 1944.9750388339028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10238.03654476946,
            "unit": "ns/iter",
            "extra": "iterations: 82009\ncpu: 10237.372727383614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8024.981979338199,
            "unit": "ns/iter",
            "extra": "iterations: 102216\ncpu: 8024.725091962115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7633.552653592567,
            "unit": "ns/iter",
            "extra": "iterations: 107590\ncpu: 7633.2354308021195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7352.574853811713,
            "unit": "ns/iter",
            "extra": "iterations: 112526\ncpu: 7352.08307413404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28978.684736237723,
            "unit": "ns/iter",
            "extra": "iterations: 28833\ncpu: 28977.35233933341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 266536.16740740865,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 266524.592592593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194714.9732944492,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 194706.0143626569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195454.42054824773,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 195446.93559170884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198054.5747833937,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 198040.92567259533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102532.4357025937,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 102526.45545943413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190682.15675205787,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 190670.77724706847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.78418785655225,
            "unit": "ns/iter",
            "extra": "iterations: 3416096\ncpu: 206.77489742676872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1477.5354708974291,
            "unit": "ns/iter",
            "extra": "iterations: 476898\ncpu: 1477.5029461226484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1189.4664232734156,
            "unit": "ns/iter",
            "extra": "iterations: 588622\ncpu: 1189.43345644573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1169.1424410180532,
            "unit": "ns/iter",
            "extra": "iterations: 600438\ncpu: 1169.127703443155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 874.1846695779842,
            "unit": "ns/iter",
            "extra": "iterations: 799417\ncpu: 874.1657983255352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9438.526103496826,
            "unit": "ns/iter",
            "extra": "iterations: 74128\ncpu: 9438.318853874418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12231.620586194244,
            "unit": "ns/iter",
            "extra": "iterations: 57660\ncpu: 12231.562608394028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2804.7640678532002,
            "unit": "ns/iter",
            "extra": "iterations: 251602\ncpu: 2804.695908617576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2766.244907739322,
            "unit": "ns/iter",
            "extra": "iterations: 252491\ncpu: 2766.2118649773834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2799.20864208776,
            "unit": "ns/iter",
            "extra": "iterations: 252763\ncpu: 2799.1371363688663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5445.892536631709,
            "unit": "ns/iter",
            "extra": "iterations: 131375\ncpu: 5445.759086584181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5424.915519964354,
            "unit": "ns/iter",
            "extra": "iterations: 127249\ncpu: 5424.763259436224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1970.2723897989265,
            "unit": "ns/iter",
            "extra": "iterations: 351812\ncpu: 1970.2480301979415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10434.256592459087,
            "unit": "ns/iter",
            "extra": "iterations: 66705\ncpu: 10434.031931639325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8148.724701666737,
            "unit": "ns/iter",
            "extra": "iterations: 85391\ncpu: 8148.485203358649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8114.582113990604,
            "unit": "ns/iter",
            "extra": "iterations: 86112\ncpu: 8114.474173169866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7932.929102377002,
            "unit": "ns/iter",
            "extra": "iterations: 87041\ncpu: 7932.540986431612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18268.201420626607,
            "unit": "ns/iter",
            "extra": "iterations: 38293\ncpu: 18267.9680359333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55482.151796430306,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 55480.435304472645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44289.95535433614,
            "unit": "ns/iter",
            "extra": "iterations: 15903\ncpu: 44289.379362384636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44222.28356796155,
            "unit": "ns/iter",
            "extra": "iterations: 15841\ncpu: 44220.16286850619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44738.936442296246,
            "unit": "ns/iter",
            "extra": "iterations: 15718\ncpu: 44738.69449039316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26196.23691079734,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 26195.36470763694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44240.415786830934,
            "unit": "ns/iter",
            "extra": "iterations: 15912\ncpu: 44239.86299648026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1915.0494661649725,
            "unit": "ns/iter",
            "extra": "iterations: 367342\ncpu: 1914.9980127510535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10110.07819245038,
            "unit": "ns/iter",
            "extra": "iterations: 69265\ncpu: 10110.028152746829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8062.266665898561,
            "unit": "ns/iter",
            "extra": "iterations: 86899\ncpu: 8061.921310947161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8071.848004564218,
            "unit": "ns/iter",
            "extra": "iterations: 85871\ncpu: 8071.747155617136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8000.904154922073,
            "unit": "ns/iter",
            "extra": "iterations: 87631\ncpu: 8000.738323196083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18146.89038571525,
            "unit": "ns/iter",
            "extra": "iterations: 38526\ncpu: 18146.38425998003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54832.6195010666,
            "unit": "ns/iter",
            "extra": "iterations: 12707\ncpu: 54831.71480286436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43607.71106236111,
            "unit": "ns/iter",
            "extra": "iterations: 15955\ncpu: 43606.52460043898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43528.35485870123,
            "unit": "ns/iter",
            "extra": "iterations: 16136\ncpu: 43526.53073872029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43137.09507953702,
            "unit": "ns/iter",
            "extra": "iterations: 16218\ncpu: 43136.521149340224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25738.33015423676,
            "unit": "ns/iter",
            "extra": "iterations: 26842\ncpu: 25737.027792266166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42718.3474901159,
            "unit": "ns/iter",
            "extra": "iterations: 16435\ncpu: 42717.827806510395 ns\nthreads: 1"
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
        "date": 1705775579955,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 551.3096199783023,
            "unit": "ns/iter",
            "extra": "iterations: 1266375\ncpu: 551.3036817688284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5351.986839999654,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5351.920000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10354.543678360254,
            "unit": "ns/iter",
            "extra": "iterations: 80612\ncpu: 10354.230139433335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15350.84846039516,
            "unit": "ns/iter",
            "extra": "iterations: 54527\ncpu: 15350.499752416234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20526.02263750407,
            "unit": "ns/iter",
            "extra": "iterations: 40508\ncpu: 20525.826997136355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24942.663302090576,
            "unit": "ns/iter",
            "extra": "iterations: 33288\ncpu: 24942.039173275665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30086.706890292215,
            "unit": "ns/iter",
            "extra": "iterations: 27546\ncpu: 30086.633267988098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34759.863301481884,
            "unit": "ns/iter",
            "extra": "iterations: 23753\ncpu: 34758.00951458762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38914.10278263909,
            "unit": "ns/iter",
            "extra": "iterations: 21706\ncpu: 38911.25495254764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.6402428911734,
            "unit": "ns/iter",
            "extra": "iterations: 1296383\ncpu: 537.6124185522336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.5907729101508,
            "unit": "ns/iter",
            "extra": "iterations: 1702617\ncpu: 410.5599791379982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.9208984780301,
            "unit": "ns/iter",
            "extra": "iterations: 1686630\ncpu: 418.8977428363065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.672278057036,
            "unit": "ns/iter",
            "extra": "iterations: 1676174\ncpu: 415.6591141492468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 877.8088954422215,
            "unit": "ns/iter",
            "extra": "iterations: 801624\ncpu: 877.7626418370709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2073.58984132939,
            "unit": "ns/iter",
            "extra": "iterations: 385641\ncpu: 2073.462365256809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10128.924531579922,
            "unit": "ns/iter",
            "extra": "iterations: 80590\ncpu: 10128.457625015508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7918.745270890506,
            "unit": "ns/iter",
            "extra": "iterations: 103455\ncpu: 7918.446667633275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7893.580784590147,
            "unit": "ns/iter",
            "extra": "iterations: 103417\ncpu: 7893.132657106637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7945.451243458136,
            "unit": "ns/iter",
            "extra": "iterations: 103381\ncpu: 7944.956036408989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29722.224386412454,
            "unit": "ns/iter",
            "extra": "iterations: 28032\ncpu: 29720.301797945158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251818.12193005907,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 251806.81883848648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192572.42866909973,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 192559.4804010943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201479.1412403856,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 201466.27433227684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196853.68333331557,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 196844.35185185232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103746.83654977834,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 103740.75076488551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192965.96486546125,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 192954.34734267322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5167.550849999998,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5167.278999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29084.280096223396,
            "unit": "ns/iter",
            "extra": "iterations: 28683\ncpu: 29082.526235052068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22084.63305984866,
            "unit": "ns/iter",
            "extra": "iterations: 38028\ncpu: 22082.58388555801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22022.238980878883,
            "unit": "ns/iter",
            "extra": "iterations: 38229\ncpu: 22020.57077088075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21403.208823683286,
            "unit": "ns/iter",
            "extra": "iterations: 38238\ncpu: 21401.906480464426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46329.96903853853,
            "unit": "ns/iter",
            "extra": "iterations: 18087\ncpu: 46327.50041466251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279820.3010546307,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 279803.16395014286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215499.48469891612,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 215485.2912142142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215141.38232374506,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 215126.24131082452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213916.78430889794,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 213903.04968027413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117677.3520471072,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 117668.25961933465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205013.64073550384,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 205002.239509665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 837281.3744414792,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 837209.2940125107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 470715.4248400983,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 470692.85714285687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1936.5522644022958,
            "unit": "ns/iter",
            "extra": "iterations: 411676\ncpu: 1936.4393357883355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10155.076748883439,
            "unit": "ns/iter",
            "extra": "iterations: 81695\ncpu: 10154.978884876675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7704.460602255699,
            "unit": "ns/iter",
            "extra": "iterations: 106732\ncpu: 7704.0269085185455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7778.510497951286,
            "unit": "ns/iter",
            "extra": "iterations: 105211\ncpu: 7778.123960422376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7648.473540078581,
            "unit": "ns/iter",
            "extra": "iterations: 108088\ncpu: 7647.9026348901125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29396.958786153275,
            "unit": "ns/iter",
            "extra": "iterations: 28801\ncpu: 29395.56265407447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263055.63085234066,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 263045.468187274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194021.98040512274,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 194019.44077499004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194530.14898317834,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 194522.7011494259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197737.89984316437,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 197726.77571140547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100854.82769265704,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 100847.99908529613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189950.13622557712,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 189939.34924078145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 208.09798815792112,
            "unit": "ns/iter",
            "extra": "iterations: 3349915\ncpu: 208.09068289792424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1428.6744676585872,
            "unit": "ns/iter",
            "extra": "iterations: 488784\ncpu: 1428.6054780843854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1200.8608821609287,
            "unit": "ns/iter",
            "extra": "iterations: 579214\ncpu: 1200.759822794342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1030.8633574055389,
            "unit": "ns/iter",
            "extra": "iterations: 680454\ncpu: 1030.8129572314865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 867.3064393550995,
            "unit": "ns/iter",
            "extra": "iterations: 809227\ncpu: 867.2674045725157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9335.064408898148,
            "unit": "ns/iter",
            "extra": "iterations: 75207\ncpu: 9334.390415785732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12743.331537015481,
            "unit": "ns/iter",
            "extra": "iterations: 55855\ncpu: 12743.179661623806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2822.295972192354,
            "unit": "ns/iter",
            "extra": "iterations: 246263\ncpu: 2822.180757970135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2807.300483247422,
            "unit": "ns/iter",
            "extra": "iterations: 248320\ncpu: 2807.2587789948566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2787.3738849216697,
            "unit": "ns/iter",
            "extra": "iterations: 248301\ncpu: 2787.280357308267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5464.0351521023285,
            "unit": "ns/iter",
            "extra": "iterations: 128072\ncpu: 5463.972609157332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5492.075996594373,
            "unit": "ns/iter",
            "extra": "iterations: 129190\ncpu: 5491.702918182497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2007.812195191352,
            "unit": "ns/iter",
            "extra": "iterations: 351040\ncpu: 2007.6931403828607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10570.587260799022,
            "unit": "ns/iter",
            "extra": "iterations: 66158\ncpu: 10570.055019800951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8255.780462531155,
            "unit": "ns/iter",
            "extra": "iterations: 84924\ncpu: 8255.190523291414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8236.72386552781,
            "unit": "ns/iter",
            "extra": "iterations: 84687\ncpu: 8236.61246708473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8118.548191915669,
            "unit": "ns/iter",
            "extra": "iterations: 84454\ncpu: 8117.963625168653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18196.29236682923,
            "unit": "ns/iter",
            "extra": "iterations: 38503\ncpu: 18195.532815624865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55602.924770195175,
            "unit": "ns/iter",
            "extra": "iterations: 12402\ncpu: 55600.55636187706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44505.75578180232,
            "unit": "ns/iter",
            "extra": "iterations: 15912\ncpu: 44503.89643036697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44273.22921645058,
            "unit": "ns/iter",
            "extra": "iterations: 15902\ncpu: 44270.186140108424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44209.033225950174,
            "unit": "ns/iter",
            "extra": "iterations: 15831\ncpu: 44208.39492135694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25426.136948261974,
            "unit": "ns/iter",
            "extra": "iterations: 27368\ncpu: 25425.24481145875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43237.204619644566,
            "unit": "ns/iter",
            "extra": "iterations: 16235\ncpu: 43234.918386203244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1902.9826366246416,
            "unit": "ns/iter",
            "extra": "iterations: 371126\ncpu: 1902.8790761089485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9891.4593092148,
            "unit": "ns/iter",
            "extra": "iterations: 70876\ncpu: 9891.303120943738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8135.7359519209895,
            "unit": "ns/iter",
            "extra": "iterations: 86026\ncpu: 8135.268407225625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8100.30664225497,
            "unit": "ns/iter",
            "extra": "iterations: 86296\ncpu: 8099.836608881027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8140.375490355957,
            "unit": "ns/iter",
            "extra": "iterations: 86162\ncpu: 8140.014159374201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18256.656717578262,
            "unit": "ns/iter",
            "extra": "iterations: 38563\ncpu: 18256.144490833427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54306.22163050942,
            "unit": "ns/iter",
            "extra": "iterations: 12769\ncpu: 54304.4404416945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42786.05054441994,
            "unit": "ns/iter",
            "extra": "iterations: 16164\ncpu: 42785.50482553794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42933.198208770336,
            "unit": "ns/iter",
            "extra": "iterations: 16190\ncpu: 42933.19950586852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43007.768060836024,
            "unit": "ns/iter",
            "extra": "iterations: 16306\ncpu: 43006.24923341168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25723.433351659503,
            "unit": "ns/iter",
            "extra": "iterations: 27285\ncpu: 25723.397471137796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42745.82981690019,
            "unit": "ns/iter",
            "extra": "iterations: 16494\ncpu: 42744.69504062115 ns\nthreads: 1"
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
        "date": 1705779150172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 546.7034758729013,
            "unit": "ns/iter",
            "extra": "iterations: 1274500\ncpu: 546.7014515496273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5287.693579999768,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5287.431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10156.893412604566,
            "unit": "ns/iter",
            "extra": "iterations: 81914\ncpu: 10156.608150010985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15310.117043007569,
            "unit": "ns/iter",
            "extra": "iterations: 54826\ncpu: 15309.497318790352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20097.642266966395,
            "unit": "ns/iter",
            "extra": "iterations: 41271\ncpu: 20096.966392866667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25808.306664633863,
            "unit": "ns/iter",
            "extra": "iterations: 32785\ncpu: 25807.927405825823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30067.56378835942,
            "unit": "ns/iter",
            "extra": "iterations: 27991\ncpu: 30066.624986602823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35087.20610140862,
            "unit": "ns/iter",
            "extra": "iterations: 23765\ncpu: 35086.589522406925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39659.857569355096,
            "unit": "ns/iter",
            "extra": "iterations: 21772\ncpu: 39658.993202278114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 544.0165328462093,
            "unit": "ns/iter",
            "extra": "iterations: 1298506\ncpu: 543.9947909366609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.771856223164,
            "unit": "ns/iter",
            "extra": "iterations: 1714546\ncpu: 406.7706553221666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.7578962808343,
            "unit": "ns/iter",
            "extra": "iterations: 1670280\ncpu: 417.75193380750545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.2962836514963,
            "unit": "ns/iter",
            "extra": "iterations: 1713483\ncpu: 407.28807930980315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 884.2580222494008,
            "unit": "ns/iter",
            "extra": "iterations: 790676\ncpu: 884.2355149264679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2071.1857358968523,
            "unit": "ns/iter",
            "extra": "iterations: 386705\ncpu: 2071.181908690085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10185.653246025056,
            "unit": "ns/iter",
            "extra": "iterations: 80175\ncpu: 10185.403180542547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7700.010148284346,
            "unit": "ns/iter",
            "extra": "iterations: 105338\ncpu: 7699.864246520739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7781.283416428108,
            "unit": "ns/iter",
            "extra": "iterations: 105502\ncpu: 7781.107467157027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7531.890772976191,
            "unit": "ns/iter",
            "extra": "iterations: 108865\ncpu: 7531.725531621733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30321.422487407708,
            "unit": "ns/iter",
            "extra": "iterations: 27402\ncpu: 30320.5787898694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 265534.27091398754,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 265528.4906222095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197187.09293164941,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 197181.20509849384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198475.01279366543,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 198470.41172365687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201103.93214036303,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 201097.95491517542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104678.88519855353,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 104676.76293622125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195799.9883460282,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 195792.91797400272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5179.688189999752,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5179.513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28959.043329012453,
            "unit": "ns/iter",
            "extra": "iterations: 28549\ncpu: 28958.537952292594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22488.516599014423,
            "unit": "ns/iter",
            "extra": "iterations: 37201\ncpu: 22488.037955968943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22021.598269039856,
            "unit": "ns/iter",
            "extra": "iterations: 37667\ncpu: 22021.058220723706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21969.569786060176,
            "unit": "ns/iter",
            "extra": "iterations: 38095\ncpu: 21969.09568184799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46784.91387532679,
            "unit": "ns/iter",
            "extra": "iterations: 17823\ncpu: 46783.79060764171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 282084.2630907017,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 282078.7356321847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218871.06281404948,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 218862.6130653279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216794.1876092909,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216789.25805645683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213876.8227383682,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 213870.51344743205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 119736.42470250587,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 119733.8941321296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205463.9539899461,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 205456.2664749594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 852621.0489130864,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 852601.9927536212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466420.6082420295,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 466406.8335941588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1977.083120952354,
            "unit": "ns/iter",
            "extra": "iterations: 410426\ncpu: 1977.0409282063124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10255.45334786199,
            "unit": "ns/iter",
            "extra": "iterations: 81679\ncpu: 10255.22104824984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7980.491143766203,
            "unit": "ns/iter",
            "extra": "iterations: 104051\ncpu: 7980.344254259892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8175.863940314003,
            "unit": "ns/iter",
            "extra": "iterations: 100794\ncpu: 8175.461833045575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7599.883457679096,
            "unit": "ns/iter",
            "extra": "iterations: 108836\ncpu: 7599.813480833546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31148.671545319314,
            "unit": "ns/iter",
            "extra": "iterations: 26920\ncpu: 31148.228083209622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 271998.4776894719,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 271996.1491442544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201606.78981035846,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 201602.0333561792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201713.3481345829,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 201711.0093842984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 200199.776001802,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 200194.41692931103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100566.79166666316,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 100566.26381215415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193954.714568227,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 193950.40650406477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 212.27592180071431,
            "unit": "ns/iter",
            "extra": "iterations: 3296347\ncpu: 212.26915734296188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1470.3102612647372,
            "unit": "ns/iter",
            "extra": "iterations: 488585\ncpu: 1470.2733403604268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1080.3520117900937,
            "unit": "ns/iter",
            "extra": "iterations: 645967\ncpu: 1080.333670295858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1118.7353205802183,
            "unit": "ns/iter",
            "extra": "iterations: 627971\ncpu: 1118.7121698294984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 877.8417914491705,
            "unit": "ns/iter",
            "extra": "iterations: 796986\ncpu: 877.8450311548778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9501.47198290531,
            "unit": "ns/iter",
            "extra": "iterations: 73473\ncpu: 9501.358322104767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12149.339135278846,
            "unit": "ns/iter",
            "extra": "iterations: 57452\ncpu: 12149.009608020635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2860.6205303062443,
            "unit": "ns/iter",
            "extra": "iterations: 249290\ncpu: 2860.5752336635946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2808.8163608983855,
            "unit": "ns/iter",
            "extra": "iterations: 247028\ncpu: 2808.774308985214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2838.443008306711,
            "unit": "ns/iter",
            "extra": "iterations: 246185\ncpu: 2838.3488027296603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5360.845215156908,
            "unit": "ns/iter",
            "extra": "iterations: 129231\ncpu: 5360.718403479045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5125.178940511297,
            "unit": "ns/iter",
            "extra": "iterations: 135084\ncpu: 5125.114743418908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1948.826727680249,
            "unit": "ns/iter",
            "extra": "iterations: 359919\ncpu: 1948.7918114909146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10419.081994826134,
            "unit": "ns/iter",
            "extra": "iterations: 66492\ncpu: 10418.99175840705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8110.526013506158,
            "unit": "ns/iter",
            "extra": "iterations: 86186\ncpu: 8110.29517555061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8105.3575804254,
            "unit": "ns/iter",
            "extra": "iterations: 87007\ncpu: 8105.1616536600695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7995.709424626559,
            "unit": "ns/iter",
            "extra": "iterations: 86900\ncpu: 7995.609896432806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18150.83125405241,
            "unit": "ns/iter",
            "extra": "iterations: 38555\ncpu: 18150.41369472177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55862.97934181558,
            "unit": "ns/iter",
            "extra": "iterations: 12489\ncpu: 55863.29570021638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44328.06752636371,
            "unit": "ns/iter",
            "extra": "iterations: 15742\ncpu: 44326.927963410024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44142.15866691644,
            "unit": "ns/iter",
            "extra": "iterations: 15813\ncpu: 44141.01056093089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44367.601787296866,
            "unit": "ns/iter",
            "extra": "iterations: 15778\ncpu: 44366.07935099486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26179.505256019213,
            "unit": "ns/iter",
            "extra": "iterations: 26541\ncpu: 26178.53886439839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43919.15660766982,
            "unit": "ns/iter",
            "extra": "iterations: 15989\ncpu: 43915.90468447041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1867.8643572453332,
            "unit": "ns/iter",
            "extra": "iterations: 372965\ncpu: 1867.8406821015565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9969.257846022623,
            "unit": "ns/iter",
            "extra": "iterations: 69685\ncpu: 9968.674750663755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8157.258289989555,
            "unit": "ns/iter",
            "extra": "iterations: 85555\ncpu: 8157.201800011619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8196.604075979732,
            "unit": "ns/iter",
            "extra": "iterations: 85918\ncpu: 8196.431481179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8193.05199677518,
            "unit": "ns/iter",
            "extra": "iterations: 85563\ncpu: 8193.088133889525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18791.665502533986,
            "unit": "ns/iter",
            "extra": "iterations: 37510\ncpu: 18791.40495867744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55870.111958880654,
            "unit": "ns/iter",
            "extra": "iterations: 12451\ncpu: 55867.82587743944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44105.97354396665,
            "unit": "ns/iter",
            "extra": "iterations: 15762\ncpu: 44105.303895444704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44225.20840961897,
            "unit": "ns/iter",
            "extra": "iterations: 15839\ncpu: 44224.559631289856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43915.58730059098,
            "unit": "ns/iter",
            "extra": "iterations: 15985\ncpu: 43915.389427588445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25856.4529381371,
            "unit": "ns/iter",
            "extra": "iterations: 27092\ncpu: 25856.12727004313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43544.82764337377,
            "unit": "ns/iter",
            "extra": "iterations: 16286\ncpu: 43543.97028122306 ns\nthreads: 1"
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
        "date": 1705954331803,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 566.7969451454428,
            "unit": "ns/iter",
            "extra": "iterations: 1241172\ncpu: 566.780832954659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5316.293930000029,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5316.241000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10314.743777959702,
            "unit": "ns/iter",
            "extra": "iterations: 80922\ncpu: 10314.698104347397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15327.148588220754,
            "unit": "ns/iter",
            "extra": "iterations: 54789\ncpu: 15326.576502582633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20186.08899823298,
            "unit": "ns/iter",
            "extra": "iterations: 41866\ncpu: 20185.790378827693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24658.113256722252,
            "unit": "ns/iter",
            "extra": "iterations: 33764\ncpu: 24657.958180310376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30030.546207684332,
            "unit": "ns/iter",
            "extra": "iterations: 28004\ncpu: 30030.17068990142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34403.14021635473,
            "unit": "ns/iter",
            "extra": "iterations: 24127\ncpu: 34402.959340158326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37947.47886732321,
            "unit": "ns/iter",
            "extra": "iterations: 21436\ncpu: 37946.53386825904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.367464051528,
            "unit": "ns/iter",
            "extra": "iterations: 1314798\ncpu: 535.3498408120481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.4077392096304,
            "unit": "ns/iter",
            "extra": "iterations: 1714542\ncpu: 410.4010283795911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.7449967300006,
            "unit": "ns/iter",
            "extra": "iterations: 1669708\ncpu: 417.74765408083334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.0890778320204,
            "unit": "ns/iter",
            "extra": "iterations: 1696101\ncpu: 417.0862466327183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.4629832743989,
            "unit": "ns/iter",
            "extra": "iterations: 783173\ncpu: 882.371583290026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2060.5106092370397,
            "unit": "ns/iter",
            "extra": "iterations: 388765\ncpu: 2060.378377683175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10246.564414374787,
            "unit": "ns/iter",
            "extra": "iterations: 78779\ncpu: 10246.160778887786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7580.342136561945,
            "unit": "ns/iter",
            "extra": "iterations: 106779\ncpu: 7579.948304441882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7892.981540463359,
            "unit": "ns/iter",
            "extra": "iterations: 104553\ncpu: 7892.647748032087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7537.45263302591,
            "unit": "ns/iter",
            "extra": "iterations: 109095\ncpu: 7537.274852193026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29487.087137223425,
            "unit": "ns/iter",
            "extra": "iterations: 27910\ncpu: 29485.61089215334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251568.31973380974,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 251553.73263888888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192239.72992700202,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 192226.0264598543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197647.60736605982,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 197634.86607142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200772.50642201627,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200753.07339449474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104074.99737469995,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 104071.9331742243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193277.33915543402,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 193275.6135308425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5328.460700000051,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5328.403999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28632.765519360084,
            "unit": "ns/iter",
            "extra": "iterations: 29286\ncpu: 28632.042614218295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22521.925420815696,
            "unit": "ns/iter",
            "extra": "iterations: 37249\ncpu: 22520.717334693534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22042.012537772473,
            "unit": "ns/iter",
            "extra": "iterations: 37726\ncpu: 22041.308381487524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21775.089214938558,
            "unit": "ns/iter",
            "extra": "iterations: 38099\ncpu: 21773.854956823023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46789.82825500071,
            "unit": "ns/iter",
            "extra": "iterations: 18149\ncpu: 46788.31891564279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273910.6441582929,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 273892.1482412069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214535.14125396844,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 214515.83313003127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212127.72987655067,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 212113.35802469216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 210571.08113344244,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210564.4950351158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117259.55186277193,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 117251.72875904565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205835.90301161841,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 205821.57932179177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 846823.8811880536,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 846744.5544554427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475353.3123331723,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 475342.7656166594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1937.4182156539928,
            "unit": "ns/iter",
            "extra": "iterations: 412689\ncpu: 1937.405164663941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10950.063664800193,
            "unit": "ns/iter",
            "extra": "iterations: 76086\ncpu: 10949.738453854858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8057.612793694819,
            "unit": "ns/iter",
            "extra": "iterations: 102785\ncpu: 8057.221384443258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8106.760030764841,
            "unit": "ns/iter",
            "extra": "iterations: 101413\ncpu: 8106.264482857224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7660.40099938632,
            "unit": "ns/iter",
            "extra": "iterations: 107666\ncpu: 7659.820184645081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29165.141237767722,
            "unit": "ns/iter",
            "extra": "iterations: 28406\ncpu: 29163.78934028023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261808.820428826,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 261796.54556283544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198385.5184681673,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 198379.1751642868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199095.693321217,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 199093.27578373576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196814.54054666898,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 196806.73142082596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101988.7002325562,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 101989.09302325582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188729.41909988382,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 188727.7716794739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.6597267004917,
            "unit": "ns/iter",
            "extra": "iterations: 3309190\ncpu: 209.6550515382926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1464.5332026022857,
            "unit": "ns/iter",
            "extra": "iterations: 478336\ncpu: 1464.4720447551465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1156.3562032991251,
            "unit": "ns/iter",
            "extra": "iterations: 602639\ncpu: 1156.3133152683379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1173.2568449901692,
            "unit": "ns/iter",
            "extra": "iterations: 623960\ncpu: 1173.2418744791332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 867.0167550267017,
            "unit": "ns/iter",
            "extra": "iterations: 809190\ncpu: 867.0114559003453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9483.612517723464,
            "unit": "ns/iter",
            "extra": "iterations: 74055\ncpu: 9483.437985281169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12633.596769867465,
            "unit": "ns/iter",
            "extra": "iterations: 55911\ncpu: 12633.490726332908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2875.6563557017316,
            "unit": "ns/iter",
            "extra": "iterations: 244497\ncpu: 2875.6422369190536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2804.020135710225,
            "unit": "ns/iter",
            "extra": "iterations: 249060\ncpu: 2804.0355737573186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.1232046257487,
            "unit": "ns/iter",
            "extra": "iterations: 249739\ncpu: 2846.0544808780605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5443.921819381893,
            "unit": "ns/iter",
            "extra": "iterations: 130352\ncpu: 5443.792960598968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5322.9132304189125,
            "unit": "ns/iter",
            "extra": "iterations: 130011\ncpu: 5322.718077701095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1978.0664629897915,
            "unit": "ns/iter",
            "extra": "iterations: 354483\ncpu: 1978.0762406095598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10425.441105410064,
            "unit": "ns/iter",
            "extra": "iterations: 67052\ncpu: 10425.22967249301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8226.48917718321,
            "unit": "ns/iter",
            "extra": "iterations: 84636\ncpu: 8226.289049577075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8136.7161092519145,
            "unit": "ns/iter",
            "extra": "iterations: 85783\ncpu: 8136.38599722549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8078.5099692626745,
            "unit": "ns/iter",
            "extra": "iterations: 86215\ncpu: 8078.147654120442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18357.589172891763,
            "unit": "ns/iter",
            "extra": "iterations: 38145\ncpu: 18357.695635076616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55822.518307828635,
            "unit": "ns/iter",
            "extra": "iterations: 12481\ncpu: 55820.95985898525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44308.88702376252,
            "unit": "ns/iter",
            "extra": "iterations: 15906\ncpu: 44307.7392179053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44668.12680721467,
            "unit": "ns/iter",
            "extra": "iterations: 15701\ncpu: 44666.263295331824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44672.02578961197,
            "unit": "ns/iter",
            "extra": "iterations: 15704\ncpu: 44672.30641874598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26031.15229713322,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 26029.948538186014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44290.60770017714,
            "unit": "ns/iter",
            "extra": "iterations: 15636\ncpu: 44289.22358659536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1891.7007827022826,
            "unit": "ns/iter",
            "extra": "iterations: 365273\ncpu: 1891.661305379843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10011.833814532367,
            "unit": "ns/iter",
            "extra": "iterations: 69964\ncpu: 10011.883254245009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8124.0764660923705,
            "unit": "ns/iter",
            "extra": "iterations: 86352\ncpu: 8123.691402630966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.272087105113,
            "unit": "ns/iter",
            "extra": "iterations: 86057\ncpu: 8182.195521572865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8149.266394875577,
            "unit": "ns/iter",
            "extra": "iterations: 85850\ncpu: 8149.061153174011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18493.19432354576,
            "unit": "ns/iter",
            "extra": "iterations: 37911\ncpu: 18493.284271055654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55490.56616052035,
            "unit": "ns/iter",
            "extra": "iterations: 12447\ncpu: 55490.87330280364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44041.61224748269,
            "unit": "ns/iter",
            "extra": "iterations: 15791\ncpu: 44040.44075739389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44069.327719558394,
            "unit": "ns/iter",
            "extra": "iterations: 16032\ncpu: 44067.82060878245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43564.5353453701,
            "unit": "ns/iter",
            "extra": "iterations: 16070\ncpu: 43564.70441817045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26093.150718856374,
            "unit": "ns/iter",
            "extra": "iterations: 27057\ncpu: 26091.73596481512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42960.442340477784,
            "unit": "ns/iter",
            "extra": "iterations: 16424\ncpu: 42958.71285923028 ns\nthreads: 1"
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
        "date": 1705955751286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 553.4995322014645,
            "unit": "ns/iter",
            "extra": "iterations: 1265502\ncpu: 553.4591806255543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5279.383539999571,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10085.88641996444,
            "unit": "ns/iter",
            "extra": "iterations: 81502\ncpu: 10085.30956295551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14910.19082777308,
            "unit": "ns/iter",
            "extra": "iterations: 56344\ncpu: 14910.088030668743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19945.186401335646,
            "unit": "ns/iter",
            "extra": "iterations: 41357\ncpu: 19944.70101796551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24659.071405379345,
            "unit": "ns/iter",
            "extra": "iterations: 33877\ncpu: 24658.41426336452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30490.09636163743,
            "unit": "ns/iter",
            "extra": "iterations: 28227\ncpu: 30488.868813547317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34515.61543579176,
            "unit": "ns/iter",
            "extra": "iterations: 24048\ncpu: 34515.68113772457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38705.63787900051,
            "unit": "ns/iter",
            "extra": "iterations: 21537\ncpu: 38704.82425593165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.3525770550685,
            "unit": "ns/iter",
            "extra": "iterations: 1309518\ncpu: 536.3431430495801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.00849844051606,
            "unit": "ns/iter",
            "extra": "iterations: 1722669\ncpu: 407.0007645113481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.17127755067355,
            "unit": "ns/iter",
            "extra": "iterations: 1681131\ncpu: 417.1632668721236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.34591199079165,
            "unit": "ns/iter",
            "extra": "iterations: 1680757\ncpu: 417.3370094546691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 872.8623144493349,
            "unit": "ns/iter",
            "extra": "iterations: 805306\ncpu: 872.8551631305361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2077.8688592579706,
            "unit": "ns/iter",
            "extra": "iterations: 385784\ncpu: 2077.797161105695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9950.593460443597,
            "unit": "ns/iter",
            "extra": "iterations: 82238\ncpu: 9950.387898538376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8207.414907310984,
            "unit": "ns/iter",
            "extra": "iterations: 98663\ncpu: 8207.176955900384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7867.580411008553,
            "unit": "ns/iter",
            "extra": "iterations: 104426\ncpu: 7867.509049470458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7668.435223959018,
            "unit": "ns/iter",
            "extra": "iterations: 106984\ncpu: 7668.223285724963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29812.813487350675,
            "unit": "ns/iter",
            "extra": "iterations: 27789\ncpu: 29812.51574363956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 253395.9195136023,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 253383.26577880734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197538.8371548671,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 197535.54047730486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198125.60484620926,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 198116.86859273075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198300.55871388165,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 198299.39422180798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104510.08782981685,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 104506.9170430235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193412.96795014222,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 193409.88203872615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5133.36288000005,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5133.079999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28123.716023716846,
            "unit": "ns/iter",
            "extra": "iterations: 29344\ncpu: 28123.531215921463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22015.560853888877,
            "unit": "ns/iter",
            "extra": "iterations: 38272\ncpu: 22014.707880434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22008.22330148145,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 22007.56271552297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22230.319580622883,
            "unit": "ns/iter",
            "extra": "iterations: 38247\ncpu: 22229.78011347295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46807.13088496285,
            "unit": "ns/iter",
            "extra": "iterations: 17481\ncpu: 46805.37154625016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 282365.0511912447,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 282353.41274951684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217629.6909090792,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 217619.2029887912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217458.76347304642,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 217448.90219560798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215997.17310549362,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 215986.45368994572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118176.00407055374,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 118168.8738127548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202970.974468093,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 202959.85815602858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 847820.0645161965,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 847783.7813620077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468333.2967673682,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 468303.5506094338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1959.411830749493,
            "unit": "ns/iter",
            "extra": "iterations: 409712\ncpu: 1959.2835943296632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9978.408461566298,
            "unit": "ns/iter",
            "extra": "iterations: 82987\ncpu: 9977.771217178597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7793.3573159437165,
            "unit": "ns/iter",
            "extra": "iterations: 106883\ncpu: 7793.189749539227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7917.275641695889,
            "unit": "ns/iter",
            "extra": "iterations: 105151\ncpu: 7917.095415164914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7550.520255551133,
            "unit": "ns/iter",
            "extra": "iterations: 109254\ncpu: 7550.344152159231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29261.75700675532,
            "unit": "ns/iter",
            "extra": "iterations: 28865\ncpu: 29261.16057509081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 271379.22012012394,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 271379.7297297298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201216.226138712,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 201209.77340352532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196833.89393250027,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 196825.9352189775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196268.31699127876,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 196262.03268412812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102889.99510375748,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 102888.64537188127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191181.27765536567,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 191173.38034376322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.11612429549692,
            "unit": "ns/iter",
            "extra": "iterations: 3388731\ncpu: 206.1089829791736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1447.6371874974395,
            "unit": "ns/iter",
            "extra": "iterations: 481436\ncpu: 1447.5961498516917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1078.2462495943005,
            "unit": "ns/iter",
            "extra": "iterations: 665528\ncpu: 1078.2399838924864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1047.3592614638512,
            "unit": "ns/iter",
            "extra": "iterations: 665262\ncpu: 1047.3617912942582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 854.155717516637,
            "unit": "ns/iter",
            "extra": "iterations: 814873\ncpu: 854.1183718199069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9476.303553355068,
            "unit": "ns/iter",
            "extra": "iterations: 74099\ncpu: 9475.91600426458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12210.32467096505,
            "unit": "ns/iter",
            "extra": "iterations: 56605\ncpu: 12209.624591467216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2788.3590091379124,
            "unit": "ns/iter",
            "extra": "iterations: 255091\ncpu: 2788.3378872637645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2676.772253555656,
            "unit": "ns/iter",
            "extra": "iterations: 255139\ncpu: 2676.659389587629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2753.614693396274,
            "unit": "ns/iter",
            "extra": "iterations: 254400\ncpu: 2753.4827044025355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5313.1276600004185,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.675999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5120.432456281852,
            "unit": "ns/iter",
            "extra": "iterations: 135986\ncpu: 5120.235171267615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.0999549589894,
            "unit": "ns/iter",
            "extra": "iterations: 361893\ncpu: 1936.1048707767309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10317.704732662452,
            "unit": "ns/iter",
            "extra": "iterations: 67742\ncpu: 10317.00274571157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8131.109354352567,
            "unit": "ns/iter",
            "extra": "iterations: 86270\ncpu: 8130.906456473828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8074.91123721217,
            "unit": "ns/iter",
            "extra": "iterations: 86703\ncpu: 8074.8670749570265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7875.914548021801,
            "unit": "ns/iter",
            "extra": "iterations: 89208\ncpu: 7875.859788359678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18348.434093936674,
            "unit": "ns/iter",
            "extra": "iterations: 38259\ncpu: 18348.48270995039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55829.24951969364,
            "unit": "ns/iter",
            "extra": "iterations: 12492\ncpu: 55826.865193723126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44335.71219326377,
            "unit": "ns/iter",
            "extra": "iterations: 15771\ncpu: 44334.893158328516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44488.32014638394,
            "unit": "ns/iter",
            "extra": "iterations: 15849\ncpu: 44487.999242854115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44680.710363720835,
            "unit": "ns/iter",
            "extra": "iterations: 15699\ncpu: 44677.966749474464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26150.893203519332,
            "unit": "ns/iter",
            "extra": "iterations: 26808\ncpu: 26150.443897343986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43861.45421337574,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 43860.27837259136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1905.1895756756994,
            "unit": "ns/iter",
            "extra": "iterations: 367832\ncpu: 1905.1789947584919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10033.119653053685,
            "unit": "ns/iter",
            "extra": "iterations: 69175\ncpu: 10033.13335742676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8008.480679371788,
            "unit": "ns/iter",
            "extra": "iterations: 87316\ncpu: 8008.194374455935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8008.490890375926,
            "unit": "ns/iter",
            "extra": "iterations: 87435\ncpu: 8008.335334820137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7918.002076054453,
            "unit": "ns/iter",
            "extra": "iterations: 88148\ncpu: 7917.796206380172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18430.104061783255,
            "unit": "ns/iter",
            "extra": "iterations: 37939\ncpu: 18430.135217058596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54936.876338545495,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 54937.03498056599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43633.82242642474,
            "unit": "ns/iter",
            "extra": "iterations: 16106\ncpu: 43632.1805538316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43469.186711043585,
            "unit": "ns/iter",
            "extra": "iterations: 15923\ncpu: 43467.895497079306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43420.70015465391,
            "unit": "ns/iter",
            "extra": "iterations: 16165\ncpu: 43420.8289514385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25814.40790103708,
            "unit": "ns/iter",
            "extra": "iterations: 27161\ncpu: 25813.154891204507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42773.51159010349,
            "unit": "ns/iter",
            "extra": "iterations: 16609\ncpu: 42773.02667228666 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}