window.BENCHMARK_DATA = {
  "lastUpdate": 1702491026566,
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
      }
    ]
  }
}