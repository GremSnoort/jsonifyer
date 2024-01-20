window.BENCHMARK_DATA = {
  "lastUpdate": 1705775580392,
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
      }
    ]
  }
}